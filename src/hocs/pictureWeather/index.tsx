import './index.scss';
import React from "react";
import clouds from "src/helpers/clouds";
import wind from "src/helpers/wind";
import { Nowtime } from "src/types/weather/nowtime";
import Logo from "src/hoks/img/cloud.svg";
import { cloud, cloud2, rain, soon, sun, wind1} from "../img/imgs";
import { City, ListFiveDays } from "src/types/weather/fiveDays";
import { relative } from "path";
import { sunriseSunset } from "src/helpers/sunriseSunset";
import ImgWeatherHoc from '../img';

type PictureWeatherHokType = {
  [className: string]: string
}

type PictureWeatherBaseType = {
  weatherNow: Nowtime | ListFiveDays;
  city?: City;
}



const PictureWeatherHok = (style: PictureWeatherHokType)=> {
    
  const ImgWeatherSun = ImgWeatherHoc({name: 'sun'})
  const ImgWeatherSoon = ImgWeatherHoc({name: 'soon'})
  const ImgWeatherCloud = ImgWeatherHoc({name: 'cloud'})
  const ImgWeatherCloud2 = ImgWeatherHoc({name: 'cloud2'})
  const ImgWeatherRain = ImgWeatherHoc({name: 'rain'})

  const PictureWeatherBase: React.FC <PictureWeatherBaseType> = ({weatherNow, city})=> {

    const addNight = city && sunriseSunset(city.sunrise, city.sunset, weatherNow.dt);


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

        {clouds(weatherNow.clouds.all) >= 1 && <ImgWeatherCloud />}
        {clouds(weatherNow.clouds.all) >= 2 && <ImgWeatherCloud2 />}
        {wind(weatherNow.wind.speed) != 'слабый ветер' && wind1}
        {clouds(weatherNow.clouds.all) < 3 && (addNight ? <ImgWeatherSun /> : <ImgWeatherSoon />)}
        {weatherNow.rain && <ImgWeatherRain />}
        <div style={{backgroundColor: `${addNight ? 'white' : '#00000099'}`, width: '100%', height: '100%'}}></div>

      </div>
      
    </>

  };


  return PictureWeatherBase
};

export default PictureWeatherHok;