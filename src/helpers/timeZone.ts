import { FiveDays } from "src/types/weather/fiveDays";




export function timeZone(fiveDaysWeather: FiveDays, index: number) {

  const hourss = fiveDaysWeather.city.timezone / 60/ 60;

  
  
  // console.log('sec ', sec)
  // console.log('min ', min)
  // console.log('hour ', hour)

  var x = new Date();
  var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
  let yyyy: number = hourss + currentTimeZoneOffsetInHours

  // console.log(yyyy)
  if (yyyy < 0) {
    yyyy = yyyy * 60 * 60
  } else {
    yyyy = yyyy * 60 * 60
  }
  // console.log(yyyy)


  function timeConverter(UNIX_timestamp: number){
    let a = new Date(UNIX_timestamp * 1000);
    let year = a.getFullYear();
    let month = a.getMonth();
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();

    let month1 = String(month);
    if (month < 10) {
      month1 = '0' + month
    }

    let date1 = `${date}`;
    if (date < 10) {
      date1 = '0' + date
    }

    let hour1 = `${hour}`;
    if (hour < 10) {
      hour1 = '0' + hour
    }

    let min1 = `${min}`;
    if (min < 10) {
      min1 = '0' + min
    }

    let sec1 = `${sec}`;
    if (sec < 10) {
      sec1 = '0' + sec
    }

    let time = year + '-' + month1 + '-' + date1 + ' ' + hour1 + ':' + min1 + ':' + sec1 ;
    return time;
  }

  const isTimeConverter = timeConverter(fiveDaysWeather.list[index].dt + yyyy)

  // console.log(fiveDaysWeather.city.name)
  // console.log(hourss + currentTimeZoneOffsetInHours)
  // console.log(timeConverter(fiveDaysWeather.list[index].dt))
  // console.log(timeConverter(fiveDaysWeather.list[index].dt + yyyy))
  // console.log(hours(timeConverter(fiveDaysWeather.list[0].dt + yyyy)))

  // console.log('fiveDaysWeather.list[index].dt_txt ', fiveDaysWeather.list[index].dt_txt)
  // console.log('isTimeConverter ', isTimeConverter)

  return isTimeConverter;
};