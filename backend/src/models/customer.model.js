// backend/src/models/customer.model.js
import pool from "../config/db.js";

export class CustomerModel {
  static async getAll() {
    const [rows] = await pool.query("SELECT * FROM Customer");
    return rows;
  }

  static async create({ first_name, last_name, email, phone_no }) {
    await pool.query(
      `INSERT INTO Customer (first_name, last_name, email, phone_no)
       VALUES (?, ?, ?, ?)`,
      [first_name, last_name, email, phone_no]
    );
  }
}
