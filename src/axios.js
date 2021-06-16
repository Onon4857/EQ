import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.192.168.204:8000/api/v1",
  withCredentials: true,
});
instance.defaults.withCredentials = true;

export default instance;
