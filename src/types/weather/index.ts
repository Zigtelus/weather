

type WeatherMain = {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number,
    "sea_level": number,
    "grnd_level": number,
    "temp_kf": number,
};


type Weather = {
    "id": number,
    "main": string,
    "description": string,
    "icon": string
};


type Clouds = {
    "all": number
}


type WeatherWind = {
    "speed": number,
    "deg": number,
    "gust": number
};


type WeatherSys = {
    "pod"?: string,
    "type"?: number,
    "id"?: number,
    "country"?: string,
    "sunrise"?: number,
    "sunset"?: number
};


type Coord = {
    "lon": number,
    "lat": number
};


export type { Coord, WeatherSys, WeatherWind, Clouds, Weather, WeatherMain };