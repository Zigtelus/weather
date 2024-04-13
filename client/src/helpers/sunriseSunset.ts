
// функция опредлеяющая время рассвета и заката по UNIX данным
function sunriseSunset(sunriseUtc: number, sunsetUtc: number, timezone: number, nowTime: number) {
  
  // получение часов (без минут) из UNIX формата
  function getTimeUTC(timeSunrise: number) {

    // UNIX формат побязательно умножить на 1000 для получения данных
    const date = new Date(timeSunrise * 1000);
    
    // Получаем UTC время строкой
    const utcHours = date.getUTCHours();
    
    // Форматируем значение, чтобы добавить ведущий ноль, если часы < 10
    const formattedHours = utcHours.toString().padStart(2, '0');
  
    // часы в минуты обращаем
    return Number(formattedHours)
  };
  

  // временная зона города, который показывает погоду
  // из UTC формата получает часы 
  const isTimeZone = timezone / 60 / 60


  // получаем нужное время с учетом временной зоны
  const hours = (time: number)=> {

    let newTime = time

    // добавляем или убавляем временную зону (+ на - дает -, а на + не меняется)
    newTime += isTimeZone

    if (newTime < 0) {
      newTime += 24
    } else if (newTime === 0) {
      newTime = 24
    } else if (newTime > 24) {
      newTime -= 24
    }

    return newTime
  }

  const timesUTC = {
    sunrise: hours(getTimeUTC(sunriseUtc)),
    sunset: hours(getTimeUTC(sunsetUtc)),
    nowtime: getTimeUTC(nowTime + timezone),
  }

  if ((timesUTC.sunset > timesUTC.nowtime) === (timesUTC.nowtime >= timesUTC.sunrise)) {
    return {
      ...timesUTC,
      timesOfDay: 'light'
    }
  } else {
    return {
      ...timesUTC,
      timesOfDay: 'nieght'
    }
  }

}

export { sunriseSunset };