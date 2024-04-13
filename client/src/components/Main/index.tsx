import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";
import TenWeather from "../Pages/FiveDays"
import Run from "../Pages/Run";
import Blog from "../Pages/Blog";
import NowtimeWeather from "../Pages/Today/NowtimeWeather";
import Article from "../Pages/Blog/Article";


function DefaultPage(): JSX.Element {
  window.location.assign('/weather');

  return <div><NowtimeWeather /></div>
}

function Main(): JSX.Element {

  const {weather, nowtime, fiveDays, run, blog} = routes;

  return (
    <>
      <Routes>
        {/* <Route path={`${dateWeather.nowtime}`} element={ <div>dateWeather.nowtime</div> } /> */}
        <Route path={`/`} element={ <DefaultPage/>} />
        <Route path={`${weather}/${nowtime}`}   element={ <NowtimeWeather /> } />
        <Route path={`${weather}/:id`}          element={ <NowtimeWeather /> } />
        <Route path={`${weather}/${fiveDays}`}  element={ <TenWeather /> } />
        <Route path={`${weather}/${run}`}       element={ <Run /> } />

        <Route path={blog}          element={ <Blog /> } />
        <Route path={`${blog}/:id`} element={ <Article /> } />

        <Route path={`*`} element={ <> 404 </> } />
      </Routes>
    </>
  );
}

export default Main;
