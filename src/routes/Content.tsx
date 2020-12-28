import { Route } from "react-router-dom";
import { CharacterDetails, CharactersList } from "../pages/inedex";

export const ContentRoutes = () => {
  return (
    <>
      <Route exact path="/">
        <CharactersList />
      </Route>
      <Route exact path="/characters/:characterId">
        <CharacterDetails />
      </Route>
    </>
  );
};

