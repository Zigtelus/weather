import axios, { AxiosInstance } from "axios";



const BASE_URL = 'https://pokeapi.co/api';
const KEY = '94d073c2667e3ab1d500b71c487bdf7c';
const REQUEST_TIMEOUT = 500;


const dataUser = {
  main: '',
  lat: 0,
  lon: 0,
};


const testCreateAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })

  return api;
};


export { KEY, dataUser, testCreateAPI }