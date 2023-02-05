
function sunriseSunset(sunriseUtc: number, sunsetUtc: number, timezone: number, nowTime: number) {

  function getTimeUTC(timeSunrise: number) {

    const dateSunrise = new Date(timeSunrise * 1000);
    const hoursSunrise = dateSunrise.getUTCHours();
    const minutesSunrise = dateSunrise.getUTCMinutes();
  
    return hoursSunrise
  };
  
  const isTimeZone = timezone / 60 / 60

  const hours = (time: number)=> {

    if (time === 0) {
      const item = 24 - isTimeZone
      if (item > 24) {
        return 24 + isTimeZone
      }
      return item
    }


    const item = time + isTimeZone
    if (item > 24) {
      return item - 24
    } 

    if (item < 0) {
      return 24 + item
    }
    

    return item
  }

  const timesUTC = {
    sunrise: hours(getTimeUTC(sunriseUtc)),
    sunset: hours(getTimeUTC(sunsetUtc)),
    nowtime: getTimeUTC(nowTime + timezone),
  }
  
  // console.log(timesUTC)
  if (timesUTC.sunset >= timesUTC.nowtime && timesUTC.nowtime >= timesUTC.sunrise) {
    return true
  } else {
    return false
  }


}

export { sunriseSunset };