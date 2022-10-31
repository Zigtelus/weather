import { Route, Routes } from "react-router-dom";
import { dateWeather } from "../routes";
import './Main.scss';
import TenWeather from "./Pages/FiveDays"
// import NowtimeWeather from "./Pages/Today";
import Run from "./Pages/Run";
import NowtimeWeather from "./Pages/Today";



function Main(): JSX.Element {

  return (
    <>
      <Routes>
        <Route path={`${dateWeather.nowtime}`} element={ <div>dateWeather.nowtime</div> } />
        <Route path={`${dateWeather.today}`} element={ <NowtimeWeather /> } />
        <Route path={`${dateWeather.fiveDays}`} element={ <TenWeather /> } />
        <Route path={`${dateWeather.run}`} element={ <Run /> } />
      </Routes>
    </>
  );
}

export default Main;
