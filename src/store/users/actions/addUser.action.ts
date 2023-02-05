import { createAPI } from "../createApi";

type Body = {
  "name": string,
  "password": string,
  "email": string,
  "age": number,
  "dateRegistration": string,
  "coords": {
      "latitude": number,
      "longitude": number,
      "city": string,
  },
  
}

const api = createAPI();


export const addUsersAction = async (body: Body)=> {
    
  const secondPartURL = `/users/`;

  try {
    const res = await api.post<string>(`${secondPartURL}`, body);
    
    return res.data;
  } catch (error) {
    console.log('error ', error);
  };
    
  
};