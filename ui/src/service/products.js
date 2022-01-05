import axios from "axios";

export const NOTCH_API_BASE_URL = "http://localhost:3002";

export const getProducts = async (searchText) => (
    await axios.get(`${NOTCH_API_BASE_URL}/products`, { params: { search: searchText } })
)