import { fiveDaysAction } from "src/store/weather/actions/fiveDays.action";
import { dataUser } from "src/store/weather/createApi";
import { useAppDispatch } from "../../../hooks/redux";



function FiveDays(): JSX.Element {

    const dispatch = useAppDispatch();


    dataUser.main = 'london'


    return (
        <div className="main" onClick={()=> dispatch(fiveDaysAction())}>
            fiveDays
        </div>
    );
}

export default FiveDays;
