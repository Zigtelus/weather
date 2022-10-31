import './nowtimeWeather.scss';
import { useAppSelector } from "../../../hooks/redux";
import Temperature from './Temperature';
import PictureWeather from './PictureWeather';
import converTemp from 'src/helpers/temperature';
import hours from 'src/helpers/hours';
import Now from './Now';
import Pop from './Pop';
import Wind from './Wind';
import { ScrollBarHOK } from 'src/hoks/scrollBar/index.hok';


function NowtimeWeather(): JSX.Element {


  const selector = useAppSelector(state => state);
  const nowtimeWeather = selector.nowtimeWeatherReducer;
  const fiveDaysWeather = selector.fiveDaysWeatherReducer;

  const listFiveDays = fiveDaysWeather.main.list;

  const ScrollBar = ScrollBarHOK();
  const itemsDay = <div className="day">
    {
      listFiveDays
      .filter((item, index) => (1 < index && index < 11))
      .map((item) => {
        const chour = hours(item.dt_txt);
        return <div key={item.dt} className="day__item">
          <div>

            <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
              <div style={{position: 'absolute', bottom: `${40 + (9* converTemp(item.main.temp, 'kelvin'))}px`}}>{converTemp(item.main.temp, 'kelvin')}°</div>
            </div>

            <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '10%', overflow: 'hidden', boxShadow: '0px 0px 10px -3px black',}}>
              <PictureWeather
                weatherNow={item}
                city={fiveDaysWeather.main.city}
              />
            </div>
            <div style={{marginTop: '20px'}}>{chour} : 00</div>
          </div>
        </div>
      })
    }
  </div>


  return (
    <main className="main weather_main">

      <div className="weather_main__top">
        <Temperature
          nowtimeWeather={nowtimeWeather.main}
          fiveDaysWeather={fiveDaysWeather.main}
        />


        <div className='weather_main__picture_weather'>
          <div style={{width: '170px', height: '170px', boxShadow:'black 0px 0px 10px -3px', borderRadius: '0% 0% 10% 10%', overflow: 'hidden'}}>
            <PictureWeather
              weatherNow={nowtimeWeather.main}
            />
          </div>
          {/* <span style={{fontSize: '1.2em'}}>{nowtimeWeather.main.weather[0].description}</span> */}
        </div>
      </div>


      <span style={{display:"none"}}>видимость: 
        {nowtimeWeather.main.visibility > 1000 && nowtimeWeather.main.visibility / 1000} 
        {nowtimeWeather.main.visibility > 1000 ? 'км' : 'метров'}
      </span>

      <ScrollBar componentt={itemsDay} />

      <span className="weather_main__name_station">
        Ближайшая метеостанци распологается в населенном пункте "{nowtimeWeather.main.name}"
      </span>

      <Now 
        humidity={nowtimeWeather.main.main.humidity}
        pressure={nowtimeWeather.main.main.pressure}
        visibility={nowtimeWeather.main.visibility}
      />

      <Pop list={listFiveDays}/>

      <Wind list={fiveDaysWeather.main.list}/>
    </main>
  );
};

export default NowtimeWeather;
