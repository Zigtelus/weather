

function hours(string: string) {

  const indexColon = string.indexOf(":");

  return Number(string.slice(indexColon-2, indexColon)) * 1;

};

export default hours;