import axios from "axios";
const basePath = process.env.EXPO_PUBLIC_API_KEY

async function getProducts() {
    const response = await axios.get(`${basePath}/product`);
    return response.data
  }

export {getProducts}