import './index.scss';
import PictureWeatherHok from "src/hocs/pictureWeather";



const classNames = {
  sun: 'sun',
  soon: 'soon',
  cloud: 'cloud-first',
  cloud2: 'cloud-second',
  rain: 'rain',
  wind: 'wind'
}

function PictureWeatherNow ({weatherNow, city}: any): JSX.Element {

  const PictureWeather = PictureWeatherHok({classNames})

  return <>
    <div className='weather_main__picture_weather'>
      <div className="weather_main__picture_weather__contain">
        <PictureWeather
          weatherNow={weatherNow}
          city={city}
        />
      </div>
      {/* <span style={{fontSize: '1.2em'}}>{nowtimeWeather.main.weather[0].description}</span> */}
    </div>
  </>
}


export default PictureWeatherNow;