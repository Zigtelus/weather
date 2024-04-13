import { Coord, Clouds, WeatherMain, WeatherSys, Weather, WeatherWind } from ".";


export type Nowtime = {
    "coord": Coord,
    "weather": Weather[],
    "base": string,
    "main": Omit<WeatherMain, "temp_kf">,
    "visibility": number,
    "wind": WeatherWind,
    "clouds": Clouds,
    "dt": number,
    "sys": WeatherSys,
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number,
    "rain"?: {
        "1h": number,
        "3h": number,
    }
};