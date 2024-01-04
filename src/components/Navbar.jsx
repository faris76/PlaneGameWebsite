import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const content = (
    <>
      <div className="absolute left-0 right-0 z-10 block w-full transition  lg:hidden top-16 bg-primary">
        <ul className="p-8 text-xl text-center">
          <Link spy={true} smooth={true} to="Home">
            <li className="py-4 m-4 border-b border-hover hover:bg-hover hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="py-4 m-4 border-b border-hover hover:bg-hover hover:rounded">
              Leaderboard
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="py-4 m-4 border-b border-hover hover:bg-hover hover:rounded">
              levels
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="py-4 m-4 border-b border-hover hover:bg-hover hover:rounded">
              Enviroments
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="py-4 m-4 border-b border-hover hover:bg-hover hover:rounded">
              Assets
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="z-50 flex justify-between px-8 py-4 border-b md:px-20 lg:px-20 text-fontColor h-10vh lg:py-5 border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="items-center justify-end hidden font-normal lg:flex md:flex lg:flex-1">
          <div className="">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
                  Leaderboard
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
                  Levels
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
                  Enviroment
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
                  Assets
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transtion"
          onClick={() => setClick(!click)}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
