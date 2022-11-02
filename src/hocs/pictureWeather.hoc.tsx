import React from "react";
import clouds from "src/helpers/clouds";
import wind from "src/helpers/wind";
import { Nowtime } from "src/types/weather/nowtime";
import Logo from "src/hoks/img/cloud.svg";
import { cloud, cloud2, rain, soon, sun, wind1} from "./img/imgs";
import { City, ListFiveDays } from "src/types/weather/fiveDays";
import { relative } from "path";
import { sunriseSunset } from "src/helpers/sunriseSunset";

type PictureWeatherHokType = {
  [className: string]: string
}

type PictureWeatherBaseType = {
  weatherNow: Nowtime | ListFiveDays;
  city?: City;
}



const PictureWeatherHok = (style: PictureWeatherHokType)=> {
    

  const PictureWeatherBase: React.FC <PictureWeatherBaseType> = ({weatherNow, city})=> {

    const addNight = city && sunriseSunset(city.sunrise, city.sunset, weatherNow.dt);

    

    // const styleWind = ()=> {
    //   if (wind(weatherNow.wind.speed) === 'слабый ветер') {
    //     return 'wind-zero'
    //   } else if (wind(weatherNow.wind.speed) === 'умеренный ветер') {
    //     return 'wind-one'
    //   } else if (wind(weatherNow.wind.speed) === 'сильный ветер') {
    //     return 'wind-two'
    //   } else if (wind(weatherNow.wind.speed) === 'очень сильный') {
    //     return 'wind-three'
    //   } else if (wind(weatherNow.wind.speed) === 'ураган') {
    //     return 'wind-four'
    //   }
    // };


    // const styleClouds = ()=> {
    //   if (clouds(weatherNow.clouds.all) === 0) {
    //     return 'clouds-zero'
    //   } else if (clouds(weatherNow.clouds.all) === 1) {
    //     return 'clouds-one'
    //   } else if (clouds(weatherNow.clouds.all) === 2) {
    //     return 'clouds-two'
    //   } else if (clouds(weatherNow.clouds.all) === 3) {
    //     return 'clouds-three'
    //   }
    // };


    // const styleRain = ()=> weatherNow.rain ? 'rain-active': 'rain-notActive';

    return <>


      <div
        style={
          {
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          }
        }
      >

        {clouds(weatherNow.clouds.all) >= 1 && cloud}
        {clouds(weatherNow.clouds.all) >= 2 && cloud2}
        {wind(weatherNow.wind.speed) != 'слабый ветер' && wind1}
        {clouds(weatherNow.clouds.all) < 3 && (addNight ? sun : soon)}
        {/* {city && new Date(city.sunset).toLocaleTimeString("en-US")} */}
        {weatherNow.rain && rain}
        <div style={{backgroundColor: `${addNight ? 'white' : '#00000099'}`, width: '100%', height: '100%'}}></div>

      </div>

      {/* <span className={styleWind()}>{wind(weatherNow.wind.speed)}</span> */}
      {/* <span className={styleClouds()}>облака: {clouds(weatherNow.clouds.all)}</span> */}
      {/* <span className={styleRain()}>дождь: {weatherNow.rain ? 'true' : 'false'}</span> */}
    </>

  };


  return PictureWeatherBase
};

export default PictureWeatherHok;