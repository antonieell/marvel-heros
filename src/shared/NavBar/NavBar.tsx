import { Link } from "react-router-dom";
import SearchInput from "./SearchInputComponent";

export const NavBar: React.FC = () => {
  return (
    <header className="absolute inset-0 h-12 px-4 bg-black ">
      <div className="relative flex items-center justify-center h-full mx-auto max-w-screen-lg ">
        <Logo/>
        <SearchInput />
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <Link className="w-24 mx-auto text-center" to="/">
      <img className="w-full h-full" alt="Logo" src="/assets/marvelLogo.png" />
    </Link>
  );
};
