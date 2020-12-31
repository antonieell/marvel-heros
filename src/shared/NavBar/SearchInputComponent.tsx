import clxs from "clsx";
import { useState} from "react";
import  Link  from "next/link";
import {getCharacterByStartsName} from "../../api";
import { Result } from "../types";

const SearchInput: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [heros, setHero] = useState<Result[]>([])

  const handleSearchCallsApi = async (e:React.ChangeEvent<HTMLInputElement>) => {
      const {data} = await getCharacterByStartsName(e.target.value)
      console.log(e.target.value)
      setHero(data.data.results)
  }

  const handleSearchState = (action = "toggle") => {
    if (action === "close") return setIsSearchActive(false);
    if (action === "open") return setIsSearchActive(true);
    return setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="relative right-0 flex flex-shrink-0 md:absolute">
      <label
        className="w-8 mr-2 text-red-400 cursor-pointer"
        htmlFor="search_heros"
        onClick={() => handleSearchState("open")}
      >
        <img
          className="w-full text-red-400 fill-current"
          src="/svg/search.svg"
          alt="search"
        />
      </label>
      <input
        id="search_heros"
        autoComplete="off"
        onChange={handleSearchCallsApi}
        className={clxs(
          "bg-transparent  rounded-sm transition-all duration-1000",
          isSearchActive ? "w-48" : "w-0"
        )}
        type="text"
      />
      <SearchHeroResult matchHeros={heros} isSearchActive={isSearchActive} />
      <button
        onClick={() => handleSearchState("close")}
        className={clxs(isSearchActive ? "-ml-8" : "hidden")}
      >
        <img src="/svg/close.svg" alt="search" />
      </button>
    </div>
  );
};

interface SearchHeroResultProps {
  matchHeros: Result[];
  isSearchActive: boolean;
}

const SearchHeroResult: React.FC<SearchHeroResultProps> = ({
  matchHeros,
  isSearchActive,
}) => {
  return (
    <div className="absolute left-0 z-10 w-full h-auto bg-gray-600 divide-y-2 divide-gray-500 divide-opacity-25 top-full">
      {matchHeros.map((value) => (
        <SearchHeroLink isSearchActive={isSearchActive} value={value} />
      ))}
    </div>
  );
};

const SearchHeroLink: React.FC<{ value: Result; isSearchActive: boolean }> = ({
  value,
  isSearchActive,
}) => {
  return (
    <Link key={value.id} href={`/character/${value.id}`}>
      <a
        className={clxs(
          "flex items-center h-10 overflow-hidden",
          !isSearchActive && "hidden"
        )}
      >
        <div className="flex-shrink-0 block w-12 h-full bg-gray-100">
          <img
            className="w-full h-full"
            src={`${value?.thumbnail?.path}/standard_fantastic.${value?.thumbnail?.extension}`}
            alt="hero icon"
          />
        </div>
      </a>
      <p className="ml-4 truncate whitespace-nowrap">{value.name}</p>
    </Link>
  );
};

export default SearchInput;
