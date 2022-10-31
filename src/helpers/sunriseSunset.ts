
function sunriseSunset(sunriseUtc: number, sunsetUtc: number, nowTime: number) {

  function getTimeUTC(timeSunrise: number) {
    const dateSunrise = new Date(timeSunrise * 1000);
    const hoursSunrise = dateSunrise.getUTCHours();
    const minutesSunrise = dateSunrise.getUTCMinutes();
  
    return hoursSunrise
  };
  
  
  const timesUTC = {
    sunrise: getTimeUTC(sunriseUtc) +6,
    sunset: getTimeUTC(sunsetUtc) +6,
    nowtime: getTimeUTC(nowTime),
  }
  
  
  if (timesUTC.sunset > timesUTC.nowtime && timesUTC.nowtime > timesUTC.sunrise) {
    return true
  } else {
    return false
  }
}

export { sunriseSunset };