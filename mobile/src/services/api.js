import Axios from "axios";

const api = Axios.create({
  baseURL: "http://192.168.15.27:3333"
});

export default api;
