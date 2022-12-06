import './index.scss';
import hours from "src/helpers/hours";
import converTemp from "src/helpers/temperature";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";
import { FiveDays, ListFiveDays } from "src/types/weather/fiveDays";
import PictureWeather from "../PictureWeather";
import { timeZone } from 'src/helpers/timeZone';




function ItemsDay({fiveDaysWeather}: {fiveDaysWeather: FiveDays}): JSX.Element {







  const listFiveDays = fiveDaysWeather.list;
  const ScrollBar = ScrollBarHOK();


  // const sunrise = new Date((fiveDaysWeather.city.sunrise + fiveDaysWeather.city.timezone) * 1000)
  // const sunrise = new Date((1670274000))



  // const sec = fiveDaysWeather.city.timezone;
  // const min = fiveDaysWeather.city.timezone / 60;
  // const hourss = fiveDaysWeather.city.timezone / 60/ 60;

  
  // // console.log('sec ', sec)
  // // console.log('min ', min)
  // // console.log('hour ', hour)

  // var x = new Date();
  // var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
  // let yyyy: number = hourss + currentTimeZoneOffsetInHours

  // if (yyyy < 0) {
  //   yyyy = -(yyyy * 60 * 60) 
  // } else {
  //   yyyy = yyyy * 60 * 60
  // }


  // function timeConverter(UNIX_timestamp: number){
  //   let a = new Date(UNIX_timestamp * 1000);
  //   let year = a.getFullYear();
  //   let month = a.getMonth();
  //   let date = a.getDate();
  //   let hour = a.getHours();
  //   let min = a.getMinutes();
  //   let sec = a.getSeconds();

  //   let month1 = String(month);
  //   if (month < 10) {
  //     month1 = '0' + month
  //   }

  //   let date1 = `${date}`;
  //   if (date < 10) {
  //     date1 = '0' + date
  //   }

  //   let hour1 = `${hour}`;
  //   if (hour < 10) {
  //     hour1 = '0' + hour
  //   }

  //   let min1 = `${min}`;
  //   if (min < 10) {
  //     min1 = '0' + min
  //   }

  //   let sec1 = `${sec}`;
  //   if (sec < 10) {
  //     sec1 = '0' + sec
  //   }

  //   let time = year + '-' + month1 + '-' + date1 + ' ' + hour1 + ':' + min1 + ':' + sec ;
  //   return time;
  // }

  // console.log(fiveDaysWeather.city.name)
  // console.log(hourss + currentTimeZoneOffsetInHours)
  // console.log(timeConverter(fiveDaysWeather.list[0].dt))
  // console.log(timeConverter(fiveDaysWeather.list[0].dt + yyyy))
  // console.log(hours(timeConverter(fiveDaysWeather.list[0].dt + yyyy)))
  // const isTimeZone = timeZone(fiveDaysWeather)



  let arrayTemps: number = 0;
  const itemsDayBase = <div className="day">
  {
    listFiveDays
    .filter((item, index) => (0 < index && index < 9))
    .map((item, index) => {
  
      let tempIt = converTemp(item.main.temp, 'kelvin')
  
      if (index === 0) {
        arrayTemps = -(5 * tempIt)
      }
  
      if (item.main.temp < 0) {
        tempIt = -tempIt
      }
  
  
      const chour = hours(item.dt_txt);
      // console.log(item.dt_txt)
      return <div key={item.dt} className="day__item">
        <div className="day__item__body">
  
          <div 
            className={'day__item__temperature'}
          >
            <div style={{bottom: `${arrayTemps - (-(5* tempIt))}px`}}>{converTemp(item.main.temp, 'kelvin')}°</div>
          </div>
  
          <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '10%', overflow: 'hidden', boxShadow: '0px 0px 10px -3px black',}}>
            <PictureWeather
              weatherNow={item}
              city={fiveDaysWeather.city}
            />
          </div>
          <div style={{marginTop: '20px'}}>{chour} : 00</div>
        </div>
      </div>
    })
  }
  </div>


  return <ScrollBar componentt={itemsDayBase} />
}

export default ItemsDay