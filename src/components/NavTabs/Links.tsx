import s from "./navtabs.module.scss";
import { NavLink } from "react-router-dom";
import { dateWeather } from "../../routes";


type Props = {
  days: {
    weather: string,
    blog: string
  }
};

function Links ({days}: Props): JSX.Element {


  type Days = typeof days;
  type Keys = keyof Days;


  return <>
  {
    (Object.keys(days) as Keys[]).map((item, index) =>
      <NavLink
        id={`${index}`}
        key={index}
        className={`${s.tabs} ${s.tabs}_${index}`}
        to={`${dateWeather[item]}`}
      >
        {days[item]}
      </NavLink>
    )
  }
  </>
};


export default Links;