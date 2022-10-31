import axios, { AxiosInstance } from "axios";


const BASE_URL = 'http://localhost:3000/';
const REQUEST_TIMEOUT = 1000;


export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BASE_URL,
        timeout: REQUEST_TIMEOUT,
    })

    return api;
};