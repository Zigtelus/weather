import './index.scss';
import hours from "src/helpers/hours";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";
import { ListFiveDays } from "src/types/weather/fiveDays";



type Props = {
  list: ListFiveDays[];
};


function Wind({list}: Props): JSX.Element {

  const ScrollBar = ScrollBarHOK();

  const items = <div className={'wind__items'}>
    {
      list
      .filter((item, index)=> (1 < index && index < 11))
      .map((item) => <div className={'wind__item'} key={item.dt}>
        <span>
          направление ветра
          <div style={{transform: `rotate(${item.wind.deg}deg)`, fontSize: "20px", width: "20px", height: "20px", margin: "10px"}}>↑</div>
        </span>
        <span>скорость ветра {item.wind.speed}</span>
        <span>{hours(item.dt_txt)} : 00</span>
      </div>)
    }
  </div>

  return <div style={{width: '100%'}}>
    <h3 className={'wind__title'}>Ветер</h3>
    <ScrollBar componentt={items} />
  </div>
}


export default Wind;