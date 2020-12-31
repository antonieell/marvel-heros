import { AxiosResponse } from "axios";
import { ICharacter } from "../shared/types";
import api from "./api";
import axios from 'axios'

type Offset = undefined | number
export const getCharacters = (offset:Offset = undefined) => {
  const response: Promise<
    AxiosResponse<ICharacter>
  > = api.get("/v1/public/characters", { params: { offset } });
  return response;
};

export const getCharacterById = (id: string) => {
  const response: Promise<AxiosResponse<ICharacter>> = api.get(
    `/v1/public/characters/${id}`
  );
  return response;
};

export const getCharacterByStartsName = (nameStartsWith: string) => {
  //Nesse caso o param da api tava vindo antes e ele não tava encontrando
  //então criei uma nova instância
  const response: Promise<AxiosResponse<ICharacter>> = axios.get(
    `https://gateway.marvel.com/v1/public/characters`,
    {
      params: {
        nameStartsWith,
        apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
      },
    }
  );
  return response;
};


