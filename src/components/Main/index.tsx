import { Route, Routes } from "react-router-dom";
import { dateWeather } from "../../routes";
import s from './main.module.scss';
import TenWeather from "../Pages/FiveDays"
// import NowtimeWeather from "./Pages/Today";
import Run from "../Pages/Run";
import NowtimeWeather from "../Pages/Today";


function Main(): JSX.Element {

  return (
    <>
      <Routes>
        {/* <Route path={`${dateWeather.nowtime}`} element={ <div>dateWeather.nowtime</div> } /> */}
        <Route path={`weather${dateWeather.nowtime}`} element={ <NowtimeWeather /> } />
        <Route path={`weather${dateWeather.fiveDays}`} element={ <TenWeather /> } />
        <Route path={`weather${dateWeather.run}`} element={ <Run /> } />
        <Route path={`*`} element={ <> 404 </> } />
      </Routes>
    </>
  );
}

export default Main;
