import hours from "src/helpers/hours";
import moreLess from "src/helpers/moreLess";
import converTemp from "src/helpers/temperature";
import { FiveDays } from "src/types/weather/fiveDays";
import { Nowtime } from "src/types/weather/nowtime";


type Props = {
  nowtimeWeather: Nowtime;
  fiveDaysWeather: FiveDays;
}


function Temperature(props: Props): JSX.Element {


  const nowtimeWeather = props.nowtimeWeather.main;
  const fiveDaysWeather = props.fiveDaysWeather;


  const { feels_like, temp } = nowtimeWeather;

  const ifIt = !!feels_like || 0;
  

  const morningEvening = ()=> {
    
    let array = 0;

    return fiveDaysWeather.list
    .filter((item)=> ((array <= 2 ) && 
    (hours(item.dt_txt) === 9 || hours(item.dt_txt) === 15 || 
    hours(item.dt_txt) === 21 || hours(item.dt_txt) === 15 )) 
    && array++)

  }
    

  return <div className="weather_main__temperature">


    <span>
      {
        morningEvening()?.map((item)=> {
          return <span key={item.dt}>
            {moreLess(converTemp(temp, 'fahrenheit'), converTemp(item.main.temp, 'kelvin'))}
            {converTemp(item.main.temp, 'kelvin')} 
          </span>
        })
      }
    </span>


    <span className="weather_main__temperature__middle">
      {ifIt && converTemp(temp, 'fahrenheit')}°
    </span>


    <span>ощущается как: {ifIt && converTemp(feels_like, 'fahrenheit')}</span>


  </div>
}

export default Temperature;