
function sunriseSunset(sunriseUtc: number, sunsetUtc: number, timezone: number, nowTime: number) {

  function getTimeUTC(timeSunrise: number) {


    const dateSunrise = new Date(timeSunrise * 1000);
    const hoursSunrise = dateSunrise.getUTCHours();
    const minutesSunrise = dateSunrise.getUTCMinutes();
  
    return hoursSunrise
  };
  
  const isTimeZone = timezone / 60 / 60

  const hours = (time: number)=> {
    const item = time + isTimeZone
    if (item > 24) {
      return item - 24
    }
    return item
  }

  const timesUTC = {
    sunrise: hours(getTimeUTC(sunriseUtc)),
    sunset: hours(getTimeUTC(sunsetUtc)),
    nowtime: getTimeUTC(nowTime + timezone),
  }
  
  console.log(timesUTC)
  console.log('nowTime ', timesUTC.nowtime)
  if (timesUTC.sunset > timesUTC.nowtime && timesUTC.nowtime > timesUTC.sunrise) {
    return true
  } else {
    return false
  }
}

export { sunriseSunset };