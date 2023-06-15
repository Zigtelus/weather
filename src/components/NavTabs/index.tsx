
import s from './navtabs.module.scss'
import { useEffect, useRef, useState } from 'react'
import Links from './Links';
import { useLocation } from 'react-router-dom';

function NavTabs(): JSX.Element {

  const location = useLocation();

  // получить ссылку на страницу (blog или weather)
  const path = location.pathname.split("/")[1];

  const [tab, setTab] = useState<number>(0);
  const [findPlaceLine, setFindPlaceLine] = useState<string[]>([]);
  const tableTabs = useRef<HTMLDivElement | null>(null);

  const days = {
    "weather": 'Weather 24 hours',
    // "fiveDays": '5 дней',
    "blog": 'Blog',
    // "run": 'Run',
  };
  
  const getPlaceLinea = ()=> {
    const tableTabsWidth = tableTabs.current ? tableTabs.current.clientWidth : 0;
    const position: string[] = [];
    
    const lengthObject = Object.keys(days).length;
    const offset = (tableTabsWidth / lengthObject - 75) / 2;

    let i = 0;
    
    while (i < lengthObject) {
      const item = i * (tableTabsWidth / lengthObject) + offset;
      position.push(`${item}px`);
      i++;
    };

    setFindPlaceLine(position);
  };

  useEffect(()=> {
    getPlaceLinea()
    
    let i = -1
    while ( i++ < Object.keys(days).length -1) {
      Object.keys(days)[i] === path &&
      setTab(Number(i))
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[path])

  return (
    <div
      className={s.navTabs}
      ref={tableTabs}
      onClick={(event) => {
        const target = event.target as HTMLDivElement;
        if (target.id) return setTab(Number(target.id))}
      }
    >
      <Links days={days}/>
      
      {<div className={s.flag} style={{left: `${findPlaceLine[tab]}`}} />}
    </div>
  )
}

export default NavTabs;