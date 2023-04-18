import './index.scss';
import React from "react";
import clouds from "src/helpers/clouds";
import wind from "src/helpers/wind";
import { Nowtime } from "src/types/weather/nowtime";
import { City, ListFiveDays } from "src/types/weather/fiveDays";
import { sunriseSunset } from "src/helpers/sunriseSunset";
import ImgWeatherHoc from '../img';



// example
type CityExample = {
  sunrise: number;
  sunset: number;
  timezone: number;
}
type WeatherNowExample = {
  dt: number;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  rain?: {
    "3h": number;
  }
}



type PictureWeatherHocTypeStyles = {
  [styleName: string]: string;
};

type PictureWeatherHocTypeClassName = {
  sun: string,
  soon: string,
  cloud: string,
  cloud2: string,
  rain: string,
  wind: string,
};

type PictureWeatherBaseType = {
  weatherNow: Nowtime | ListFiveDays | WeatherNowExample;
  city?: City | CityExample;
};



const PictureWeatherHok = (
  {styles, classNames}: 
  {styles?: PictureWeatherHocTypeStyles, classNames?: PictureWeatherHocTypeClassName}
)=> {

  const ImgWeatherSun = ImgWeatherHoc({isClassName: classNames?.sun, name: 'sun'});
  const ImgWeatherSoon = ImgWeatherHoc({isClassName: classNames?.soon, name: 'soon'});
  const ImgWeatherCloud = ImgWeatherHoc({isClassName: classNames?.cloud, name: 'cloud'});
  const ImgWeatherCloud2 = ImgWeatherHoc({isClassName: classNames?.cloud2, name: 'cloud2'});
  const ImgWeatherRain = ImgWeatherHoc({isClassName: classNames?.rain, name: 'rain'});
  const ImgWeatherWind = ImgWeatherHoc({isClassName: classNames?.wind, name: 'wind'});

  const PictureWeatherBase: React.FC <PictureWeatherBaseType> = ({weatherNow, city})=> {
    
    // !!city && console.log('city ', city.sunrise, city.sunset, city.timezone )
    // if (!!city) {
    // console.log('city.sunrise ', city.sunrise)
    // console.log('city.sunset ', city.sunset)
    // console.log('city.timezone ', city.timezone)
    // console.log('weatherNow.dt ', weatherNow.dt)}
    
    const addNight = city && sunriseSunset(city.sunrise, city.sunset, city.timezone, weatherNow.dt);

    return <>


      <div
        className={'picture_weather__body'}
        style={
          {
            ...styles
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
        <div
          className={addNight ? 'picture_weather__day' : 'picture_weather__night'}
          // style={{background: `${addNight ? 'linear-gradient(rgb(171 192 255) 30%, rgb(187 0 8) 221%)' : 'linear-gradient(rgb(50, 46, 54) 30%, rgb(12 21 67) 221%)'}`, width: '100%', height: '100%'}}
        ></div>
        {/* <div style={{background: `radial-gradient(40% 50%, #FAECD5, #CAE4D8)`, width: '100%', height: '100%'}}></div> */}

      </div>
      
    </>

  };


  return PictureWeatherBase;
};

export default PictureWeatherHok;