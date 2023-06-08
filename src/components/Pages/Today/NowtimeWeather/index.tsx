import './index.scss';
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import Temperature from './Temperature';
import ExtraOptions from '../ExtraOptions';
import PictureWeatherNow from './PictureWeatherNow';
import Pop from '../Pop';
import Wind from '../Wind';
import { useEffect, useState } from 'react';
import { dataUser } from 'src/store/weather/createApi';
import { fiveDaysAction } from 'src/store/weather/actions/fiveDays.action';
import { nowtimeAction } from 'src/store/weather/actions/nowtime.action';
import ItemsDay from '../ItemsDay';
import LoadingAnimation from 'src/helpers/LoadingAnimation';
import { useParams } from 'react-router-dom';
import { getLoading } from 'src/store/weather/slices/fiveDays.slice';
import { sunriseSunset } from 'src/helpers/sunriseSunset';
import { addText } from 'src/store/pushMessage/pushMessage.slice';




type Coords = {
  coords: {
    latitude: number,
    longitude: number
  }
}

function NowtimeWeather(): JSX.Element {


  const {id} = useParams();
  useEffect(()=> {
    !!id && (dataUser.main = id)
  }, [id])


  const nowtimeWeather = useAppSelector(state=> state.nowtimeWeatherReducer);
  const fiveDaysWeather = useAppSelector(state=> state.fiveDaysWeatherReducer);
  const listFiveDays = fiveDaysWeather.main.list;
  // const [statusPushMessage, setStatusPushMessage] = useState(false);
  const loading = fiveDaysWeather.loading


  const city = fiveDaysWeather.main.city;
  const weatherNow = fiveDaysWeather.main.list[0];
  const times = sunriseSunset(city.sunrise, city.sunset, city.timezone, weatherNow.dt);
  const addNight = times.timesOfDay === 'light';


  const [instruction, setInstruction] = useState<boolean>(false);
  const [country, setCountry] = useState<number>(0);
  const dispatch = useAppDispatch();


  type Error = { code: number, message: string };  
  const thisError = (error?: Error)=> {
    thisPosition({coords: {latitude: 38.895, longitude: -77.0366}})
    !!id || dispatch(addText.addText1('You don`t have GPS enabled, so we`ve displayed weather data for Washington DC.')) 
  };


  const thisPosition = (position: Coords )=> {
    dataUser.lat = position.coords.latitude;
    dataUser.lon = position.coords.longitude;
    setCountry(country+1);
    dispatch(nowtimeAction());
    dispatch(fiveDaysAction());
    // dispatch(getUsersActions());
    // setStatusPushMessage(false);
  };

  useEffect(()=> {

    dispatch(getLoading(true));
    !!id ? thisError() :
    navigator.geolocation.getCurrentPosition(thisPosition, thisError);

  }, [0]);


  return (
    <main className="main weather_main">

    {  



        (
          loading ? <LoadingAnimation userLoading={loading} /> :
          (!fiveDaysWeather.main.cnt && '404' ) ||
          <>
            <div className={`weather_main__top 
              ${
                addNight ? 
                'weather_main__top--day' :  
                'weather_main__top--night'
              }
            `}>
              <Temperature
                nowtimeWeather={nowtimeWeather.main}
                fiveDaysWeather={fiveDaysWeather.main}
              />

              <PictureWeatherNow
                weatherNow={weatherNow}
                city={city}
              />

              <div className="weather_main__top__bg">
                <div className="weather_main__top__bg__body"></div>
              </div>

            </div>


            <span style={{display:"none"}}>видимость: 
              {nowtimeWeather.main.visibility > 1000 && nowtimeWeather.main.visibility / 1000} 
              {nowtimeWeather.main.visibility > 1000 ? 'км' : 'метров'}
            </span>
            
            <div>
              sunrise {times.sunrise} - sunset {times.sunset}
            </div>
            
            <div style={{width:"100%"}}>
              <ItemsDay fiveDaysWeather={fiveDaysWeather.main}/>
            </div>

            {/* <PictureWeatherSmall
              weatherNow={item}
              city={fiveDaysWeather.city}
            /> */}

            <span className="weather_main__name_station">
              The nearest weather station is in "{nowtimeWeather.main.name}"
            </span>

            <ExtraOptions 
              humidity={nowtimeWeather.main.main.humidity}
              pressure={nowtimeWeather.main.main.pressure}
              visibility={nowtimeWeather.main.visibility}
            />

            <Pop list={listFiveDays}/>

            <Wind list={fiveDaysWeather.main.list}/>
            
            {/* {
              statusPushMessage &&
              (
                !!id || 
                <PushMeassage 
                  isClassName={'push_message__no_gps'} 
                  text={'У вас не включен GPS, поэтому мы вывели данные по погоде в Москве'}
                />
              )
            } */}
          </>
        )
      }
    </main>
  );
};

export default NowtimeWeather;
