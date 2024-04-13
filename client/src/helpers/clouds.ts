

function clouds(cloud: number): number {

  if (cloud > 60) return 3;
  else if (cloud > 30 && cloud < 60) return 2;
  else if (cloud > 10 && cloud < 30) return 1;
  else return 0;
  
};

export default clouds;