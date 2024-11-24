import axios from "axios";
const basePath = process.env.EXPO_PUBLIC_API_KEY;

async function getProducts() {
  const response = await axios.get(`${basePath}/product`);
  return response.data;
}

async function order(order, userID) {
  try {
    const resp = await axios.post(`${basePath}/product/order/${userID}`, order);
    const data = await resp.data;
    if (resp.status === 200) {
      return data;
    }
  } catch (error) {
    return undefined;
  }
}

async function deleteCart(productIds, userID) {
  try {
    const resp = await axios.delete(
      `${basePath}/product/deleteCart/${userID}`,
      { data: productIds }
    );
    const data = await resp.data;
    if (resp.status === 200) {
      return data;
    }
  } catch (error) {
    return undefined;
  }
}
export { getProducts, order, deleteCart };
