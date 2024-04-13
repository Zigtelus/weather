import { createAPI } from "../createApi";

const api = createAPI();


export const changeUser = async (body: any)=> {

  const secondPartURL = `/users/${body.userId}`;

  try {
    const res = await api.patch<string>(`${secondPartURL}`, body);
    
    return res.data;
  } catch (error) {
    console.log('error ', error);
  };
    
  
};