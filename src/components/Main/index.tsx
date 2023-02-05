import { Route, Routes } from "react-router-dom";
import { dateWeather } from "../../routes";
import TenWeather from "../Pages/FiveDays"
import Run from "../Pages/Run";
import Blog from "../Pages/Blog";
import NowtimeWeather from "../Pages/Today/NowtimeWeather";
import Article from "../Pages/Blog/Article";


function Main(): JSX.Element {


  return (
    <>
      <Routes>
        {/* <Route path={`${dateWeather.nowtime}`} element={ <div>dateWeather.nowtime</div> } /> */}

        <Route path={`weather${dateWeather.nowtime}`} element={ <NowtimeWeather /> } />
        <Route path={'weather/:id'} element={ <NowtimeWeather /> } />
        <Route path={`weather${dateWeather.fiveDays}`} element={ <TenWeather /> } />
        <Route path={`weather${dateWeather.run}`} element={ <Run /> } />

        <Route path={dateWeather.blog} element={ <Blog /> } />
        <Route path={`${dateWeather.blog}/:id`} element={ <Article /> } />

        <Route path={`*`} element={ <> 404 </> } />
      </Routes>
    </>
  );
}

export default Main;
