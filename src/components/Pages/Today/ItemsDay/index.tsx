import './index.scss';
import hours from "src/helpers/hours";
import converTemp from "src/helpers/temperature";
import { ScrollBarHOK } from "src/hocs/scrollBar/index.hoc";
import { FiveDays } from "src/types/weather/fiveDays";
import { PictureWeatherSmall } from "../PictureWeatherSmall";
import { ExampleAllWeatherIcons } from '../NowtimeWeather/ExampleAllWeatherIcons';
import { useState } from 'react';
import Button from './button';




function ItemsDay({fiveDaysWeather}: {fiveDaysWeather: FiveDays}): JSX.Element {



  const listFiveDays = fiveDaysWeather.list;
  const ScrollBar = ScrollBarHOK();

  const [instruction, setInstruction] = useState<boolean>(false)



  let arrayTemps: number = 0;
  const itemsDayBase = <div style={{marginTop: '50px'}}>



    <div 
      onClick={()=> setInstruction(!instruction)}
      className={instruction ? 'aaaa' : ''}
    >
      <Button />
      <span style={{marginLeft: '10px'}}>{instruction ? 'hide' : 'how'} description of weather icons</span>
    </div>
  
    {

    instruction ?
    <ExampleAllWeatherIcons /> :
    <div className="day">

      {
        listFiveDays
        .filter((item, index) => (0 <= index && index < 8))
        .map((item, index) => {
      
          let tempIt = converTemp(item.main.temp, 'kelvin')
      
          if (index === 0) {
            arrayTemps = -(5 * tempIt)
          }
      
          if (item.main.temp < 0) {
            tempIt = -tempIt
          }
      
      
          const chour = hours(item.dt_txt);
          
          return <div key={item.dt} className="day__item">
            <div className="day__item__body">
      
              <div 
                className={'day__item__temperature'}
              >
                <div style={{bottom: `${arrayTemps - (-(5* tempIt))}px`}}>{converTemp(item.main.temp, 'kelvin')}°</div>
              </div>
      
              <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '10%', overflow: 'hidden', boxShadow: '0px 0px 10px -3px black',}}>
                <PictureWeatherSmall
                  weatherNow={item}
                  city={fiveDaysWeather.city}
                />
              </div>
              <div style={{marginTop: '20px'}}>{chour} : 00</div>
            </div>
          </div>
        })
      }

    </div>}
  </div>

  return <ScrollBar componentt={itemsDayBase} />
}

export default ItemsDay