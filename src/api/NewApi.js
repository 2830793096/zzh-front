import axios from "axios"
//引入axios

export const getFunction = () => {
    return axios.get(`http://localhost:8080/hi/`).then(res => {
      return res.data;
    });
};