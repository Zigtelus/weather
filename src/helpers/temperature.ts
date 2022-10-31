

function converTemp(isTemp: number, ver?: string) {
  
  isTemp > 100 && (ver = 'kelvin');

  switch (ver) {
    case 'fahrenheit':
      return Number(((isTemp - 32) * 5/9).toFixed(1));
    case 'kelvin':
      return Number((isTemp - 273.15).toFixed(1));
    default:
      return Number(isTemp);
  };

};

export default converTemp;