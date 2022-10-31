import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getUsersActions } from "src/store/users/actions/users.action";



export function Registration (): JSX.Element {


  const users = useAppSelector(state => state.ussersReducer);

  const dispatch = useAppDispatch();

  const getUsers = ()=> {

    dispatch(getUsersActions());
  }

  return <>
    <button
      onClick={getUsers}
      className=""
    >авторизоваться</button>
    <button className="">зарегистрироваться</button>
  </>
}