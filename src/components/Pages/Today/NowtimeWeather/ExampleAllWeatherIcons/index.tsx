import './index.scss';
import ImgWeatherHoc from "src/hocs/img";
import { PictureWeatherSmall } from "../../PictureWeatherSmall"



function ExampleAllWeatherIcons(): JSX.Element {







  const city1 = {
    sunrise: 1675296082, 
    sunset:  1675257853, 
    timezone: -21600
  }
  const city2 = {
    sunrise: 1675257853, 
    sunset: 1675296082, 
    timezone: 21600
  }
    
  const weatherNow1 = {
    dt: 1675350000,
    clouds: {
      all: 30,
    },
    wind: {
      speed:1.77
    },
    rain: {
      "3h": 0
    }
  }
    
  const weatherNow2 = {
    dt: 1675350000,
    clouds: {
      all: 30,
    },
    wind: {
      speed:1.77
    }
  }
    
  const weatherNow3 = {
    dt: 1675350000,
    clouds: {
      all: 20,
    },
    wind: {
      speed:1.77
    }
  }
    
  const weatherNow4 = {
    dt: 1675350000,
    clouds: {
      all: 40,
    },
    wind: {
      speed:1.77
    }
  }
    
  const weatherNow5 = {
    dt: 1675350000,
    clouds: {
      all: 70,
    },
    wind: {
      speed:1.77
    }
  }
    
  const weatherNow6 = {
    dt: 1675350000,
    clouds: {
      all: 10,
    },
    wind: {
      speed:1.77
    },
    rain: {
      "3h": 1
    }
  }
    
  const weatherNow7 = {
    dt: 1675350000,
    clouds: {
      all: 10,
    },
    wind: {
      speed:10
    }
  }



  return <div
    className={"example_weather"}
  >

    <div className='example_weather__contain'>
      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow2}
          city={city1}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow3}
          city={city1}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow4}
          city={city1}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow5}
          city={city1}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow6}
          city={city1}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow7}
          city={city1}
        />
      </div>
    </div>

    <div className='example_weather__contain'>
      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow2}
          city={city2}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow3}
          city={city2}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow4}
          city={city2}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow5}
          city={city2}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow6}
          city={city2}
        />
      </div>

      <div className='example_weather__item'>
        <PictureWeatherSmall
          weatherNow={weatherNow7}
          city={city2}
        />
      </div>
    </div>

    <div className='example_weather__contain'>
      <div className='descriptiom'> clear weather </div>
          
      <div className='descriptiom'> partly cloudy </div>

      <div className='descriptiom'> average cloudiness </div>

      <div className='descriptiom'> dense cloud cover </div>

      <div className='descriptiom'> rain </div>

      <div className='descriptiom'> wind </div>

    </div>
    
  </div>
}

export { ExampleAllWeatherIcons }