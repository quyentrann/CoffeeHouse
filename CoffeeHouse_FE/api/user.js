import axios from "axios";

async function fetchUsers() {
    try {
      const resp = await axios.get('http://localhost:8080/api/user');
      const json = await resp.data;
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  async function login(phone, password) {
    try {
      const params = {
        phone,
        password
      }
      const resp = await axios.get('http://localhost:8080/api/user/login', {params});
      const json = await resp.data;
      return json;
    } catch (error) {
      console.log(error);
    }
  };

export {fetchUsers, login}