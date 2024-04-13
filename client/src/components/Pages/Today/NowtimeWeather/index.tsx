// styles
import './index.scss';

// modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// hooks
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { dataUser } from '../../../../store/weather/createApi';

// slices
import { addText } from '../../../../store/pushMessage/pushMessage.slice';
import { getLoading } from '../../../../store/weather/slices/fiveDays.slice';

// actions
import { fiveDaysAction } from '../../../../store/weather/actions/fiveDays.action';
import { nowtimeAction } from '../../../../store/weather/actions/nowtime.action';

// helpers
import { sunriseSunset } from '../../../../helpers/sunriseSunset';
import LoadingAnimation from '../../../../helpers/LoadingAnimation';

// components
import Temperature from './Temperature';
import ExtraOptions from '../ExtraOptions';
import PictureWeatherNow from './PictureWeatherNow';
import Pop from '../Pop';
import Wind from '../Wind';
import ItemsDay from '../ItemsDay';

type Coords = {
  coords: {
    latitude: number,
    longitude: number
  };
};

function NowtimeWeather(): JSX.Element {

  const {id} = useParams();
  useEffect(()=> {
    !!id && (dataUser.main = id)
  }, [id]);

  const nowtimeWeather  = useAppSelector(state=> state.nowtimeWeatherReducer);
  const fiveDaysWeather = useAppSelector(state=> state.fiveDaysWeatherReducer);

  const listFiveDays = fiveDaysWeather.main.list;
  // const [statusPushMessage, setStatusPushMessage] = useState(false);
  const isLoading    = fiveDaysWeather.loading;
  const errorConnect = fiveDaysWeather.errorConnect;
  const city         = fiveDaysWeather.main.city;
  const weatherNow   = fiveDaysWeather.main.list[0];

  const times = sunriseSunset(city.sunrise, city.sunset, city.timezone, weatherNow.dt);
  const addNight = times.timesOfDay === 'light';

  const [country, setCountry] = useState<number>(0);
  const dispatch = useAppDispatch();

  type Error = { code: number, message: string };  
  const thisError = (error?: Error)=> {

    console.log('error thisError')
    // при первом подключении по default ссылке
    if (!id && typeof errorConnect === "undefined") {
      thisPosition({coords: {latitude: 38.895, longitude: -77.0366}});
      dispatch(addText.addText('You don`t have GPS enabled, so we`ve displayed weather data for Washington DC.'))
    } else {
      thisPosition();

      // в случае переподключения
      let numberRequest = 1;
      if (!!errorConnect) {
        numberRequest = Number(errorConnect.split(" ")[1]);
      };


      dispatch(addText.addText('Пытаемся переподключиться к серверу погоды'))
    }

  };



  useEffect(()=> {
    if (errorConnect !== "") {
      console.log('useEffect true', errorConnect)
      navigator.geolocation.getCurrentPosition(thisPosition, thisError);
    } else {
      console.log('useEffect false', errorConnect)
    }
  }, [id, errorConnect]);


  console.log('gtssss', fiveDaysWeather)
  return (
    <main className="main weather_main">
    {  
        (
          checkLoading() ||
          checkErrorConnect() ||
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

  function thisPosition (position?: Coords ) {
    console.log('position', position)

    if (!!position) {
      dataUser.lat = position.coords.latitude;
      dataUser.lon = position.coords.longitude;
    }
    setCountry(country+1);
    dispatch(nowtimeAction());
    dispatch(fiveDaysAction());
    // await dispatch(nowtimeAction());
    // await dispatch(fiveDaysAction());
    // dispatch(getUsersActions());
    // setStatusPushMessage(false);
  };

  function checkLoading() {
    return isLoading && <LoadingAnimation userLoading={isLoading} />
  };

  function checkErrorConnect() {
    if (errorConnect === 'Network Error') {
      return 'нет связи с сервером погоды';
    } else if (errorConnect === '') {
      return false;
    } else {
      return true;
    };
  };
};

export default NowtimeWeather;
