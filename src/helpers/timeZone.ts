import { FiveDays } from "src/types/weather/fiveDays";




export function timeZone(fiveDaysWeather: FiveDays, index: number) {

  const timeZoneInHurs = fiveDaysWeather.city.timezone / 60/ 60;

  

  var x = new Date();
  var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
  let timeZoneInMinuts: number = timeZoneInHurs + currentTimeZoneOffsetInHours

  if (timeZoneInMinuts < 0) {
    timeZoneInMinuts = timeZoneInMinuts * 60 * 60
  } else {
    timeZoneInMinuts = timeZoneInMinuts * 60 * 60
  }


  function timeConverter(UNIX_timestamp: number){
    const a = new Date(UNIX_timestamp * 1000);
    const year = a.getFullYear();
    const month = a.getMonth();
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();

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

  const isTimeConverter = timeConverter(fiveDaysWeather.list[index].dt + timeZoneInMinuts)


  return isTimeConverter;
};