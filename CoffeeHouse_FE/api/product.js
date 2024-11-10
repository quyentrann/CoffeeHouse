import axios from "axios";


async function getProducts() {
    const response = await axios.get('http://localhost:8080/api/product');
    return response.data
  }

export {getProducts}