//import { poolPromise, sql } from "../config/db.js";
import pool from "../config/db.js";

/**
 * payload example:
 * {
 *   customer_id: 1,
 *   caterer_id: 2,
 *   items: [
 *     { menu_id: 10, quantity: 2, price: 250.00 },
 *     { menu_id: 12, quantity: 1, price: 180.00 }
 *   ]
 * }
 */
export class OrderModel {
  static async createWithItems({ customer_id, caterer_id, items = [] }) {
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Order items required");
    }

    const pool = await poolPromise;
    const tx = new sql.Transaction(await poolPromise);
    await tx.begin();

    try {
      const req = new sql.Request(tx);
      req.input("customer_id", sql.Int, customer_id);
      req.input("caterer_id", sql.Int, caterer_id);

      const orderResult = await req.query(`
        INSERT INTO orders (customer_id, caterer_id, order_status)
        OUTPUT INSERTED.order_id, INSERTED.created_at
        VALUES (@customer_id, @caterer_id, 1);
      `);

      const order_id = orderResult.recordset[0].order_id;

      for (const it of items) {
        const rItem = new sql.Request(tx);
        rItem
          .input("order_id", sql.Int, order_id)
          .input("menu_id", sql.Int, it.menu_id)
          .input("quantity", sql.Int, it.quantity)
          .input("price", sql.Decimal(10, 2), it.price);

        await rItem.query(`
          INSERT INTO order_items (order_id, menu_id, quantity, price)
          VALUES (@order_id, @menu_id, @quantity, @price);
        `);
      }

      await tx.commit();
      return { order_id };
    } catch (e) {
      await tx.rollback();
      throw e;
    }
  }

  static async listByCustomer(customer_id) {
    const pool = await poolPromise;
    const r = await pool.request()
      .input("customer_id", sql.Int, customer_id)
      .query(`
        SELECT
          o.order_id,
          o.created_at,
          o.order_status,
          c.caterer_name,
          SUM(oi.quantity * oi.price) AS order_total
        FROM orders o
        JOIN caterer c ON o.caterer_id = c.caterer_id
        JOIN order_items oi ON oi.order_id = o.order_id
        WHERE o.customer_id = @customer_id
        GROUP BY o.order_id, o.created_at, o.order_status, c.caterer_name
        ORDER BY o.order_id DESC;
      `);
    return r.recordset;
  }

  static async detail(order_id) {
    const pool = await poolPromise;
    const r = await pool.request()
      .input("order_id", sql.Int, order_id)
      .query(`
        SELECT
          o.order_id,
          o.created_at,
          o.order_status,
          cust.first_name, cust.last_name,
          cat.caterer_name,
          m.dish_name,
          cu.cuisine_name,
          oi.quantity,
          oi.price,
          (oi.quantity * oi.price) AS line_total
        FROM orders o
        JOIN customer cust ON o.customer_id = cust.customer_id
        JOIN caterer cat ON o.caterer_id = cat.caterer_id
        JOIN order_items oi ON oi.order_id = o.order_id
        JOIN menu m ON oi.menu_id = m.menu_id
        JOIN cuisine cu ON m.cuisine_id = cu.cuisine_id
        WHERE o.order_id = @order_id
        ORDER BY m.dish_name;
      `);
    return r.recordset;
  }
}
