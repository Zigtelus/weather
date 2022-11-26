import './styles/global.css';
import  './App.scss';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fiveDaysAction } from './store/weather/actions/fiveDays.action';
import  Navigation  from './components/Navigation';
import { dataUser } from './store/weather/createApi';
import { nowtimeAction } from './store/weather/actions/nowtime.action';
import axios from 'axios';
import { Registration } from './components/Registration';
import { addUsersAction } from './store/users/actions/addUser.action';
import { getUsersActions } from './store/users/actions/users.action';
import { nameCityAction } from './store/weather/actions/nameCity.action';



type Coords = {
  coords: {
    latitude: number,
    longitude: number
  }
}


function App() {
  // useEffect(()=>{
  //   axios('http://frogwether.ru:4000/citys?city=мос',{
  //     method:'GET'
  //   })
  //   .then(r=>console.log(r))
  // },[])
  


  type DataUser = {
    main: string,
    lat: number,
    lon: number,
  };

  localStorage.removeItem('dataUser');
  const getCity = localStorage.getItem('dataUser');

  function setDataUser() {
    const dataUserParse: DataUser = JSON.parse(`${getCity}`);
    dataUser.lat = dataUserParse.lat
    dataUser.lon = dataUserParse.lon
    dataUser.main = dataUserParse.main
  } 

  if (getCity) {
    dataUser.lat === 0 && setDataUser()
  }


  

  const dispatch = useAppDispatch();

  const city = useAppSelector(state => state.getNameCityReducer);
  const ddddd = useAppSelector(state => state.ussersReducer);

  const [country, setCountry] = useState<number>(0);

  // console.log(ddddd)

  const body = {
    "name": "1",
    "password": `${new Date()}`,
    "email": "e@ALEVTINA.gypsy",
    "age": 1,
    "coords": {
        "latitude": 23432,
        "longitude": 23432,
        "city": "23432"
    },
    "role": "admin"
  };

  
  const thisPosition = (position: Coords )=> {
    dataUser.lat = position.coords.latitude;
    dataUser.lon = position.coords.longitude;
    setCountry(country+1);
    dispatch(fiveDaysAction());
    dispatch(nowtimeAction());
    // dispatch(getUsersActions());
  };

  https://www.youtube.com/s/desktop/ff71ea81/cssbin/www-main-desktop-player-skeleton-2x.css


  type Error = { code: number, message: string };
  
  const thisError = (error: Error)=> {
  };

  useEffect(()=> {

    // addUsersAction(body)
    if (dataUser.lat === 0){
      thisPosition({coords: {latitude: 55.7522200, longitude: 37.6155600}});
    } else {
      navigator.geolocation.getCurrentPosition(thisPosition, thisError);
    }
  }, [0]);

  return (
    <div className='App' >
      {/* <Registration /> */}
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
