import axios from "axios";

const API_URL = "/api/caterers"; // relative path → Vite proxy will forward to backend

interface CatererPayload {
caterer_name: string;
address: string;
}

export const getCaterers = async () => {
const res = await axios.get(API_URL);
return res.data;
};

export const createCaterer = async (payload: CatererPayload) => {
const res = await axios.post(API_URL, payload);
return res.data;
};
