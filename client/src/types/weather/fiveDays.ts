import { Coord, Clouds, WeatherMain, WeatherSys, Weather, WeatherWind } from ".";


type FiveDays = {
  "cod"     : string,
  "message" : number,
  "cnt"     : number,
  "list"    : ListFiveDays[],
  "city"    : City
};


type ListFiveDays = {
  "dt"         : number,
  "main"       : WeatherMain,
  "weather"    : Weather[],
  "clouds"     : Clouds,
  "wind"       : WeatherWind,
  "visibility" : number,
  "pop"        : number,
  "sys"        : WeatherSys,
  "dt_txt"     : string,
  "rain"?: {
    "1h"       : number,
    "3h"       : number,
  },
};


type City = {
  "id"         : number,
  "name"       : string,
  "coord"      : Coord,
  "country"    : string,
  "population" : number,
  "timezone"   : number,
  "sunrise"    : number,
  "sunset"     : number,
};


export type { FiveDays, ListFiveDays, City };