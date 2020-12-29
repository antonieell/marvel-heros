import {AxiosResponse} from "axios";
import { ICharacter } from "../shared/types";
import api from "./api";

export const getCharacters = () => {
  const response: Promise<AxiosResponse<ICharacter>> = api.get("/v1/public/characters");
  return response
};