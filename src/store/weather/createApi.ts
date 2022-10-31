import axios, { AxiosInstance } from "axios";

const BASE_URL = 'https://api.openweathermap.org';
export const KEY = '94d073c2667e3ab1d500b71c487bdf7c';
const REQUEST_TIMEOUT = 1000;
// 55.758181, 37.719438
// https://api.openweathermap.org/data/2.5/weather?lat=55.9205309&lon=37.662618&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru

type DataUser = {
    main: string,
    lat: number,
    lon: number,
    country: string,
  };

export const dataUser: DataUser = {
    main: '',
    lat: 0,
    lon: 0,
    country: ''
};


export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BASE_URL,
    })

    return api;
};