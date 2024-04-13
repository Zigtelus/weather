

function useTimeout(timer:number = 80) {
    
  let time: number = 0;
  let timeout: ReturnType<typeof setTimeout>;

  return ( refresh: ()=> void ) => {
    clearTimeout(timeout);
    time = timer;
    timeout = setTimeout(()=> {
      time = 0;
      refresh();
    }, time);
  };
  
};

export default useTimeout;