import axios, { AxiosInstance } from "axios";
import { base_url, protocol } from "../../constants";

const BASE_URL = `${protocol}://${base_url}/main/api`;
const REQUEST_TIMEOUT = 4000;


export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: REQUEST_TIMEOUT,
        responseType: 'json'
    })

    return api;
};