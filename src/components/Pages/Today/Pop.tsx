import hours from "src/helpers/hours";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";
// import { ScrollBarHOK } from "src/hoks/scrollBar/index.hok";
import { ListFiveDays } from "src/types/weather/fiveDays";



type Rain = {
    list: ListFiveDays[]
}



function Pop({list}: Rain): JSX.Element {

    
    const ScrollBar = ScrollBarHOK();

    const items = <div style={{display: 'flex'}}>
    {
        list
        .filter((item, index) => (1 < index && index < 11))
        .map((item)=> {
            return <div style={{display: 'flex', flexDirection: 'column', minWidth: '200px'}} key={item.dt}>
                <span>вероятность {item.pop}%</span>
                <span>объем {!!list[0].rain ?  list[0].rain['3h'] : '0' }мм</span>
                <span>время {hours(item.dt_txt)} : 00</span>
            </div>
        })
    }
    </div>

    return <div style={{width: '100%'}}>
        <h3>Осадки</h3>
        <ScrollBar componentt={items}/>
    </div>
}


export default Pop;