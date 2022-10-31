

function wind(speed: number) {

  speed = speed / 2;
  if (speed < 5) return 'слабый ветер';
  else if (speed < 14) return 'умеренный ветер';
  else if (speed < 24) return 'сильный ветер';
  else if (speed < 32) return 'очень сильный';
  else if (speed > 32) return 'ураган';

};


export default wind;