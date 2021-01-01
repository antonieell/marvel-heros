import { Result } from "../../../types";

export interface SearchHeroResultProps {
  matchHeros: Result[];
  isSearchActive: boolean;
  handleSearchState: (action: string) => void;
}

export interface SearchHeroLinkProps {
  value: Result;
  isSearchActive: boolean;
  handleSearchState: (action: string) => void;
}
