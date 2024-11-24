import axios from "axios";
const basePath = process.env.EXPO_PUBLIC_API_KEY;

async function fetchUsers() {
  try {
    const resp = await axios.get(`${basePath}/user`);
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function login(phone, password) {
  try {
    const params = {
      phone,
      password,
    };
    const resp = await axios.get(`${basePath}/user/login`, {
      params,
    });
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function getPhone(phone) {
  try {
    const resp = await axios.get(`${basePath}/user/getUserByPhone`, {
      params: { phone },
    });
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function updatePassword(userId, newPassword) {
  try {
    const resp = await axios.put(
      `${basePath}/user/forgot/${userId}`,
      newPassword,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function addFavorite(userId, productId) {
  const params = {
    userId: userId,
    productId: productId,
  };

  try {
    const resp = await axios.get(`${basePath}/user/addFavorite`, { params });
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function deleteFavorite(userId, productId) {
  const params = {
    userId: userId,
    productId: productId,
  };

  try {
    const resp = await axios.delete(`${basePath}/user/deleteFavorite`, {
      params,
    });
    const json = resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function addCart(userId, productId, quantity) {
  const params = {
    userId: userId,
    productId: productId,
    quantity: quantity
  };

  try {
    const resp = await axios.get(`${basePath}/user/addCart`, {
      params,
    });
    const json = resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchUsers,
  login,
  getPhone,
  updatePassword,
  addFavorite,
  deleteFavorite,
  addCart
};
