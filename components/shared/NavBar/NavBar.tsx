import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInputComponent";

export const NavBar: React.FC = () => {
  return (
    <header className="absolute inset-0 h-12 px-4 bg-black ">
      <div className="relative flex items-center justify-center h-full mx-auto max-w-screen-lg ">
        <Logo />
        <SearchInput />
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <a href="/" className="w-24 mx-auto text-center">
        <Image width={100} height={36} layout="responsive" className="w-full h-full" alt="Logo" src="/assets/marvelLogo.png" />
      </a>
    </Link>
  );
};
