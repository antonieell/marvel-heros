import clxs from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="absolute inset-0 h-12 px-4 bg-black ">
      <div className="relative flex items-center justify-center h-full mx-auto max-w-screen-lg ">
        <Link className="w-24 mx-auto text-center" to="/">
          <img className="w-full h-full" src="/assets/marvelLogo.png" />
        </Link>
        <SearchInput />
      </div>
    </header>
  );
};

const SearchInput = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchState = (action = "toggle") => {
    if (action === "close") return setIsSearchActive(false);
    if (action === "open") return setIsSearchActive(true);
    return setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="right-0 flex md:absolute">
      <label
        className="w-8 mr-2 text-red-400 cursor-pointer"
        htmlFor="search_heros"
        onClick={() => handleSearchState("open")}
      >
        <img
          className="text-red-400 fill-current"
          src="/svg/search.svg"
          alt="search"
        />
      </label>
      <input
        id="search_heros"
        autoComplete="off"
        onChange={(e) => console.log(e.target.value)}
        onBlur={() => handleSearchState("close")}
        className={clxs(
          "bg-transparent  rounded-sm transition-all duration-1000",
          isSearchActive ? "w-48" : "w-0"
        )}
        type="text"
      />
      <button
        onClick={() => handleSearchState("close")}
        className={clxs(isSearchActive ? "-ml-8" : "hidden")}
      >
        <img src="/svg/close.svg" alt="search" />
      </button>
    </div>
  );
};
