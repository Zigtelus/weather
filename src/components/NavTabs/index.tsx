
import s from './navtabs.module.scss'
import { useRef, useState } from 'react'
import Links from './Links';

function NavTabs(): JSX.Element {


  const pathname = window.location.pathname;
  const [tab, setTab] = useState<number>(0);
  const tableTabs = useRef<HTMLDivElement | null>(null);



  const days = {
    "today": 'Сейчас',
    // "fiveDays": '5 дней',
    // "run": 'run'
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
    }

    return position;
  };


  return (
    <div
      className={s.navTabs}
      ref={tableTabs}
      onClick={(event) => {
        const target = event.target as HTMLDivElement;
        return setTab(Number(target.id))}
      }
    >
      <Links days={days}/>
      
      {<div className={s.flag} style={{left: `${getPlaceLinea()[tab]}`}} />}
    </div>
  )
}

export default NavTabs;