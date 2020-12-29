import { AxiosResponse } from "axios";
import { IComics } from "../shared/types";
import axios from 'axios'

export const getCollectioUri= (collectionUri: string) => {
  //Resolvi novamente criar uma instância pq resourceURI vem o
  //o link inteiro e não apenas o path, daí iria dar erro com
  //a baseURL já definida
  const response: Promise<AxiosResponse<IComics>> = axios.get(collectionUri, {
    params: {
      apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
    },
  });
  return response;
};
