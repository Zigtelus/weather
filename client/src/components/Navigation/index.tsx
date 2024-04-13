import s from "./navigation.module.scss"
import SearchCity from "../SearchCity"
import NavTabs from "../NavTabs"
import { Registration } from "../Registration";


function Navigation(): JSX.Element{
  return(
    <div className={s.navigation}>
      <SearchCity/>
      <Registration />
      <NavTabs/>
    </div>
  );
}

export default Navigation;