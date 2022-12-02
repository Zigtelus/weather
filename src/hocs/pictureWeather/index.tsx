import './index.scss';
import React from "react";
import clouds from "src/helpers/clouds";
import wind from "src/helpers/wind";
import { Nowtime } from "src/types/weather/nowtime";
import { City, ListFiveDays } from "src/types/weather/fiveDays";
import { sunriseSunset } from "src/helpers/sunriseSunset";
import ImgWeatherHoc from '../img';

type PictureWeatherHokType = {
  [className: string]: string;
};

type PictureWeatherBaseType = {
  weatherNow: Nowtime | ListFiveDays;
  city?: City;
};



const PictureWeatherHok = (style : PictureWeatherHokType)=> {
    
  const ImgWeatherSun = ImgWeatherHoc({name: 'sun'});
  const ImgWeatherSoon = ImgWeatherHoc({name: 'soon'});
  const ImgWeatherCloud = ImgWeatherHoc({name: 'cloud'});
  const ImgWeatherCloud2 = ImgWeatherHoc({name: 'cloud2'});
  const ImgWeatherRain = ImgWeatherHoc({name: 'rain'});
  const ImgWeatherWind = ImgWeatherHoc({name: 'wind'});

  const PictureWeatherBase: React.FC <PictureWeatherBaseType> = ({weatherNow, city})=> {

    const addNight = city && sunriseSunset(city.sunrise, city.sunset, weatherNow.dt);

    return <>


      <div
        style={
          {
            ...style,
            display: 'flex',
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: '#322e36',
          }
        }
      >

        { 
          addNight ? 
          (clouds(weatherNow.clouds.all) >= 1 && <ImgWeatherCloud />) :
          (clouds(weatherNow.clouds.all) >= 1 && <ImgWeatherCloud amPm={'am'} />)
        }
        { 
          addNight ? 
          (clouds(weatherNow.clouds.all) >= 2 && <ImgWeatherCloud2 />) :
          clouds(weatherNow.clouds.all) >= 2 && <ImgWeatherCloud2 amPm={'am'} />
        }

        {wind(weatherNow.wind.speed) !== 'слабый ветер' && <ImgWeatherWind />}
        {clouds(weatherNow.clouds.all) < 3 && (addNight ? <ImgWeatherSun /> : <ImgWeatherSoon />)}
        {weatherNow.rain && <ImgWeatherRain />}
        <div style={{background: `${addNight ? 'linear-gradient(rgb(171 192 255) 30%, rgb(187 0 8) 221%)' : 'linear-gradient(rgb(50, 46, 54) 30%, rgb(12 21 67) 221%)'}`, width: '100%', height: '100%'}}></div>

      </div>
      
    </>

  };


  return PictureWeatherBase;
};

export default PictureWeatherHok;