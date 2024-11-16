import axios from "axios";
import AuthService from "./config/AuthService";

const _axios = axios.create({ baseURL: 'http://localhost:8080/api' });
_axios.interceptors.request.use((config) => {
  if (AuthService.isLoggedIn()) {
    const cb = () => {
      config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
      return Promise.resolve(config);
    };
    return AuthService.updateToken(cb);
  }
});

export default _axios;
