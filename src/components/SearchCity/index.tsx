import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from './searchcity.module.scss'
import glassIcon from './assets/glass.svg'
import { dataUser } from "src/store/weather/createApi";
import useTimeout from "src/helpers/useTimeout";
import { nowtimeAction } from "src/store/weather/actions/nowtime.action";
import { fiveDaysAction } from "src/store/weather/actions/fiveDays.action";
import transliteral from "src/helpers/transliteration";
import { NavLink } from "react-router-dom";
import { sendTextForPush } from "src/helpers/sendPushMessage";
import { cities, citysEN } from "./cities";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";


type DataUser = {
  lat: number;
  lon: number;
  main: string;
}


function SearchCity(): JSX.Element {


  const dispatch = useAppDispatch();
  const nowtimeWeatherReducer = useAppSelector(item => item.nowtimeWeatherReducer);
  const loading = useAppSelector(item => item.fiveDaysWeatherReducer.loading);
  // const PushMeassage = PusPopuphHoc();
  const [nameCountry, setNameCountry] = useState<string>('us');

  const ScrollBar = ScrollBarHOK()

  useEffect(()=> {
    !!nowtimeWeatherReducer.main.sys.country ? 
    setNameCountry(nowtimeWeatherReducer.main.sys.country.toLowerCase()) :
    setNameCountry('us');
  }, [!!nowtimeWeatherReducer.main.sys && nowtimeWeatherReducer.main.sys.country]);

  const [country, setCountry] = useState<number>(0);
  const [isDataUser, setDataUser] = useState<DataUser>(dataUser);
  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  const searchCity = useRef() as MutableRefObject<HTMLInputElement>;


  const listCitiesHandler = (e: MouseEvent<HTMLUListElement>)=> {
    const target = e.target as HTMLDListElement;
    dataUser.main = target.textContent as string;
    dispatch(fiveDaysAction());
    setCountry(country+1);
    dispatch(nowtimeAction());

    
    const indexCity = cities.us.indexOf(inputEl.current.value)
    setDataUser({...isDataUser, main: citysEN[indexCity]});
    inputEl.current.value = '';
  };


  dataUser.main = isDataUser.main;


  const searchCitys = () => {
    

    const inputElValue = inputEl.current.value;
    const upperCase = inputElValue.charAt(0).toUpperCase() + inputElValue.slice(1);
    const lengthWord = upperCase.length;

    return cities[nameCountry as keyof typeof cities].filter((item)=> {
      item = item.charAt(0).toUpperCase() + item.slice(1);
      let newArray: string[] | string = [...item.split('')];
      newArray.length = lengthWord;
      newArray = newArray.join('');
      return newArray === upperCase;
    })
  };

  
  const timeout = useTimeout(200);
  const refreshPage = () => setCountry(country+1);
  const listCitysHandler = () => timeout(refreshPage);
  // const listCitysHandler = () => {
  //   !loading &&
  //   inputEl.current && 
  //   !searchCitys().length &&
  //   dispatch(addText(`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`))
  // }

  


  const lengthCitiesCheck = (
    inputEl.current && 
    inputEl.current.value.length > 0 && 
    searchCitys().length > 0
  )


  const numberRowsForCities = (
    inputEl.current && 
    inputEl.current.value && 
    !!searchCitys().length ? searchCitys().length : 1
  )

  console.log(numberRowsForCities * 37.5)


  // useEffect(()=> {
  //   !loading &&
  //   inputEl.current && 
  //   !searchCitys().length &&
  //   dispatch(addText(`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`))
  // }, [!!inputEl.current && inputEl.current.value])

  // const [arrayPush, setArrayPush] = useState<string[]>([])

  // const arrayPush = useAppSelector(item => item.pushMessageReducer)

  const numberPush = useAppSelector(state => state.pushMessageReducer.numberPush)
  const textForPush = (text: string, isNumber: number) => {
    if (
      !loading &&
      inputEl.current && 
      !searchCitys().length
    ) {
      sendTextForPush(text, isNumber, dispatch)
    }
  }


  return <>
    <div
      style={{
        "display": "flex",
        "width": "100%",
        "alignItems": "center"
      }}
    >
      <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 10px 10px 0'
        }}
        onClick={()=> setNameCountry('us')}
      >US</button>
      <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 10px 10px 0'
        }}
        onClick={()=> setNameCountry('ru')}
      >RU</button>
      <span>
        search for cities in the zone
      </span>
      {/* <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 0'
        }}
        onClick={()=> setNameCountry('kz')}
      >KZ</button> */}
    </div>

    <div 
      className={s.searchCity}
      ref={searchCity} 
    >
      <input 
        autoComplete={'true'}
        disabled={loading}
        title={"Enter the name of the city"}
        placeholder={`${loading ? 'Loading in progress' : 'Enter the name of the city'}`}
        onChange={(e)=> {

          const region = Object.keys(cities).filter(item=> item === nameCountry)

          if (!!region[0]) {
            listCitysHandler()
            textForPush(`City starting with '${e.target.value.toUpperCase()}' not found`, numberPush)
          } else {
            // console.log('1111')
            // dispatch(addText.changeNumberPush(numberPush))
            // sendTextForPush(`we don't have weather data in observation area '${nameCountry}'`, numberPush, dispatch)
            
            // dispatch(addText.changeNumberPush(numberPush))
            // textForPush(`we don't have weather data in observation area '${nameCountry}'`, numberPush)
            // setNameCountry('us')

            sendTextForPush(`We do not have a list of cities in the zone '${nameCountry}', but we have in the "us" zone `, numberPush, dispatch)
            setNameCountry('us')
          }
        }}
        ref={inputEl}
        type="search" 
        className={`${s.input} ${lengthCitiesCheck && s.input__active}`} 
        style={{
          background: `url(${glassIcon}) no-repeat #ffffff`,
          backgroundPosition: "15px 15px"
        }}
      />


 
     {<div
        className={`
          ${s.listCitys}
          ${lengthCitiesCheck && s.listCitysActive}
        `}
        style={{height: lengthCitiesCheck ? `${(38+ numberRowsForCities * 37.5)}px` : `${0}px`}}
     >
      
      <ul 
        onClick={(e)=> listCitiesHandler(e)}
        // style={{overflowY: lengthCitiesCheck ? 'scroll' : 'scroll'}}
      >
        {
          inputEl.current && inputEl.current.value && 
          searchCitys().map((item, index) => 
          <li 
            key={index}
          >
            <NavLink 
              aria-label={'город ' + item} 
              to={`weather/${transliteral(item).toLowerCase()}`}
            > {item.charAt(0).toUpperCase() + item.slice(1)} </NavLink>
          </li>)
        }
      </ul>
      </div>}
    </div>

      
    {/* { 
      !loading &&
      inputEl.current && 
      !searchCitys().length &&
      <PushMeassage 
        text={`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`} 
      />
    } */}
    
  </>
}



export default SearchCity