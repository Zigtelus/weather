
import s from './navtabs.module.scss'
import { useEffect, useRef, useState } from 'react'
import Links from './Links';
import { useAppSelector } from 'src/hooks/redux';

function NavTabs(): JSX.Element {

  const location = window.location;

  const fiveDaysWeatherReducer = useAppSelector(state => state.fiveDaysWeatherReducer.main);
  const articleReducer = useAppSelector(state => state.articleReducer.main);
  const articlesReducer = useAppSelector(state => state.articlesReducer.main);

  const [tab, setTab] = useState<number>(0);
  const [findPlaceLine, setFindPlaceLine] = useState<string[]>([]);
  const tableTabs = useRef<HTMLDivElement | null>(null);

  const days = {
    "weather": 'Weather 24 hours',
    // "fiveDays": '5 дней',
    // "run": 'run'
    "blog": 'Blog'
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
      Object.keys(days)[i] === location.pathname.split('/')[1] &&
      setTab(Number(i))
    }
  },[location.href])

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