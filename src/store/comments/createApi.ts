import axios, { AxiosInstance } from "axios";

const BASE_URL = 'http://localhost:3000/main/api/comments';
const REQUEST_TIMEOUT = 1000;
// 55.758181, 37.719438
// https://kladr-api.ru/api.php?query=%D0%BF%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0&contentType=city&withParent=1&limit=20


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })

  return api;
};