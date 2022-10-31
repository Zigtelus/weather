import s from "./navigation.module.scss"
import SearchCity from "../SearchCity"
import NavTabs from "../NavTabs"


function Navigation(): JSX.Element{
  

  return(
    <div className={s.navigation}>
      <SearchCity/>
      <NavTabs/>
    </div>
  );
}

export default Navigation;