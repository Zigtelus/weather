import './index.scss';
import hours from "src/helpers/hours";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";
import { ListFiveDays } from "src/types/weather/fiveDays";



type Rain = {
  list: ListFiveDays[]
}



function Pop({list}: Rain): JSX.Element {

    
  const ScrollBar = ScrollBarHOK();

  const items = <div className={'pop__items'}>
  {
    list
    .filter((item, index) => (1 < index && index < 11))
    .map((item)=> {
      return <div className={'pop__item'} key={item.dt}>
        <span>вероятность {item.pop}%</span>
        <span>объем {!!list[0].rain ?  list[0].rain['3h'] : '0' }мм</span>
        <span>время {hours(item.dt_txt)} : 00</span>
      </div>
    })
  }
  </div>

  return <div style={{width: '100%'}}>
    <h3 className={'pop__title'}>Осадки</h3>
    <ScrollBar componentt={items}/>
  </div>
}


export default Pop;