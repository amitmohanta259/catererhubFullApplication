import pool from "../config/db.js";

export class Caterer {
  static async getAll() {
    const [rows] = await pool.query("SELECT * FROM caterer limit 10");
    return rows;
  }

  static async create({ caterer_name, address, rating, phone_no, email, owner_name, image_url}) {
    const [result] = await pool.query(
      `INSERT INTO caterer (caterer_name, address, rating, phone_no, email, owner_name, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [caterer_name, address, rating || 0, phone_no, email, owner_name]
    );

    return { id: result.insertId, caterer_name, address, rating, phone_no, email, owner_name };
  }
}
