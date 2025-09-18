//import axios from "axios";
//
//export interface Caterer {
//  id?: number;           // optional, assigned by DB
//  caterer_name: string;
//  address: string;
//  rating: number;
//  phone_no: string;
//  email: string;
//  owner_name: string;
//}
//
//const API_URL = "http://localhost:5000/api/caterers";
//
//export const getCaterers = async (): Promise<Caterer[]> => {
//  const response = await axios.get<Caterer[]>(API_URL);
//  return response.data;
//};
//
//export const createCaterer = async (catererData: Caterer): Promise<Caterer> => {
//  const response = await axios.post<Caterer>(API_URL, catererData);
//  return response.data;
//};


import axios from "axios";

export interface Caterer {
  id?: number;           // optional, assigned by DB
  caterer_name: string;
  address: string;
  rating: number;
  phone_no: string;
  email: string;
  owner_name: string;
}

const API_URL = "/api/caterers"; // ✅ relative path (Vite proxy will handle it)

export const getCaterers = async (): Promise<Caterer[]> => {
  const response = await axios.get<Caterer[]>(API_URL);
  return response.data;
};

export const createCaterer = async (catererData: Caterer): Promise<Caterer> => {
  const response = await axios.post<Caterer>(API_URL, catererData);
  return response.data;
};

export const getCaterers = async (): Promise<Caterer[]> => {
  const response = await axios.get("/api/caterers"); // use Vite proxy
  return response.data;
};

