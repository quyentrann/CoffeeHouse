import axios from 'axios';
const basePath = process.env.EXPO_PUBLIC_API_KEY;
console.log(basePath);

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
    const resp = await axios.get(
     `${basePath}/user/getUserByPhone`,
      { params: { phone } }
    );
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function updatePassword(userId, newPassword) {
  try {
    const params = {
      newPassword: newPassword,
    };
    const resp = await axios.put(`/user/forgot/${userId}`, { params });
    const json = await resp.data;
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { fetchUsers, login, getPhone, updatePassword };
