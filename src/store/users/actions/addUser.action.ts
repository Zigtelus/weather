import { createAPI } from "../createApi";

type Body = {
    "title": string,
    "price": number,
    "id": string
}

const api = createAPI();


export const addUsersAction = async (body?: Body)=> {
    
  const secondPartURL = `/products`;

  try {
    const res = await api.post<string>(`${secondPartURL}/user`, body);
    console.log('secondPartURL')
    console.log(secondPartURL)
    return res.data;
  } catch (error) {
    console.log('addUsersAction');
    console.log('error ', error);
  };
    
  
};