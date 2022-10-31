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

  const [country, setCountry] = useState<number>(0);

  const body = {
    "title": "§§§§",
    "price": 121233,
    "id": "22352354",
  };

  // addUsersAction(body)
  
  const thisPosition = (position: Coords )=> {
    dataUser.lat = position.coords.latitude;
    dataUser.lon = position.coords.longitude;
    setCountry(country+1);
    dispatch(fiveDaysAction());
    dispatch(nowtimeAction());
  };


  type Error = { code: number, message: string };
  
  const thisError = (error: Error)=> {
  };

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(thisPosition, thisError);

    // console.log('navigator.geolocation')
    // console.log(qq)

      


    if (dataUser.lat === 0)
      thisPosition({coords: {latitude: 55.7522200, longitude: 37.6155600}})


  }, [0]);

  if (city.main[0]?.local_names.eu) dataUser.main = city.main[0]?.local_names.eu;
  
  useEffect(()=> {
    if (city.main[0]?.local_names.eu) dispatch(nowtimeAction());
    if (city.main[0]?.local_names.eu) dispatch(fiveDaysAction());
  }, [dataUser.main]);



  return (
    <div className='App' >
      <Registration />
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
