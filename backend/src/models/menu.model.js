//import { poolPromise, sql } from "../config/db.js";
import pool from "../config/db.js";

export class MenuModel {
  static async create({ caterer_id, cuisine_id, dish_name, food_type, dish_description, image_url }) {
    const pool = await poolPromise;
    const r = await pool.request()
      .input("caterer_id", sql.Int, caterer_id)
      .input("cuisine_id", sql.Int, cuisine_id)
      .input("dish_name", sql.NVarChar(100), dish_name)
      .input("food_type", sql.Int, food_type)
      .input("dish_description", sql.NVarChar(600), dish_description || "No Information Available")
      .input("image_url", sql.NVarChar(200), image_url || "image1.jpg")
      .query(`
        INSERT INTO menu (caterer_id, cuisine_id, dish_name, food_type, dish_description, image_url)
        OUTPUT INSERTED.*
        VALUES (@caterer_id, @cuisine_id, @dish_name, @food_type, @dish_description, @image_url);
      `);
    return r.recordset[0];
  }

  static async all() {
    const pool = await poolPromise;
    const r = await pool.request().query(`
      SELECT m.*, c.caterer_name, cu.cuisine_name
      FROM menu m
      JOIN caterer c ON m.caterer_id = c.caterer_id
      JOIN cuisine cu ON m.cuisine_id = cu.cuisine_id
      ORDER BY m.menu_id DESC;
    `);
    return r.recordset;
  }
}
