import { Caterer } from "../models/caterer.model.js";

export class CatererService {
  static async getAllCaterers() {
    return await Caterer.getAll();
  }

  static async createCaterer(data) {
    return await Caterer.create(data);
  }
}
