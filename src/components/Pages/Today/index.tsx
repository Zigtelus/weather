import './nowtimeWeather.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Temperature from './Temperature';
import PictureWeather from './PictureWeather';
import Now from './Now';
import Pop from './Pop';
import Wind from './Wind';
import { useEffect, useState } from 'react';
import { dataUser } from 'src/store/weather/createApi';
import { fiveDaysAction } from 'src/store/weather/actions/fiveDays.action';
import { nowtimeAction } from 'src/store/weather/actions/nowtime.action';
import ItemsDay from './ItemsDay';
import LoadingAnimation from 'src/helpers/LoadingAnimation';
import { useParams } from 'react-router-dom';
import transliteral from 'src/helpers/transliteration';
import { getLoading } from 'src/store/weather/slices/fiveDays.slice';
import PusPopuphHoc from 'src/hocs/PopupPush';




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


  const PushMeassage = PusPopuphHoc()
  const selector = useAppSelector(state => state);
  const nowtimeWeather = selector.nowtimeWeatherReducer;
  const fiveDaysWeather = selector.fiveDaysWeatherReducer;
  const listFiveDays = fiveDaysWeather.main.list;
  const [statusPushMessage, setStatusPushMessage] = useState(false);
  const loading = fiveDaysWeather.loading



  const [country, setCountry] = useState<number>(0);
  const dispatch = useAppDispatch();


  type Error = { code: number, message: string };  
  const thisError = (error?: Error)=> {
    thisPosition({coords: {latitude: 55.751667, longitude: 37.617778}})
    setStatusPushMessage(true);
  };


  const thisPosition = (position: Coords )=> {
    dataUser.lat = position.coords.latitude;
    dataUser.lon = position.coords.longitude;
    setCountry(country+1);
    dispatch(fiveDaysAction());
    dispatch(nowtimeAction());
    // dispatch(getUsersActions());
    setStatusPushMessage(false);
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
            <div className="weather_main__top">
              <Temperature
                nowtimeWeather={nowtimeWeather.main}
                fiveDaysWeather={fiveDaysWeather.main}
              />


              <div className='weather_main__picture_weather'>
                <div className="weather_main__picture_weather__contain">
                  <PictureWeather
                    weatherNow={fiveDaysWeather.main.list[0]}
                    city={fiveDaysWeather.main.city}
                  />
                </div>
                {/* <span style={{fontSize: '1.2em'}}>{nowtimeWeather.main.weather[0].description}</span> */}
              </div>
            </div>


            <span style={{display:"none"}}>видимость: 
              {nowtimeWeather.main.visibility > 1000 && nowtimeWeather.main.visibility / 1000} 
              {nowtimeWeather.main.visibility > 1000 ? 'км' : 'метров'}
            </span>

            <ItemsDay fiveDaysWeather={fiveDaysWeather.main}/>

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
            
            {
              statusPushMessage &&
              (
                !!id || 
                <PushMeassage 
                  isClassName={'push_message__no_gps'} 
                  text={'У вас не включен GPS, поэтому мы вывели данные по погоде в Москве'}
                />
              )
            }
          </>
        )
      }
    </main>
  );
};

export default NowtimeWeather;
