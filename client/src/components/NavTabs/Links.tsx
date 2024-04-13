import s from "./navtabs.module.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import { useAppSelector } from "src/hooks/redux";

type Props = {
  days: {
    weather: string,
    blog: string
  }
};

function Links ({days}: Props): JSX.Element {

  const city = useAppSelector(state => state.fiveDaysWeatherReducer.main.city.name);

  type Days = typeof days;
  type Keys = keyof Days;

  return <>
  {
    (Object.keys(days) as Keys[]).map((item, index) =>
      <NavLink
        id={`${index}`}
        key={index}
        className={`${s.tabs} ${s.tabs}_${index}`}
        to={findRoute(item)}
      >
        {days[item]}
      </NavLink>
    )
  }
  </>;

  function findRoute(item: Keys) {
    if (item === routes.weather) {
      return `${routes[item]}/${city}`;
    } else {
      return `${routes[item]}`;
    };
  };
};


export default Links;