// import { useState } from "react";
// import { Link } from "react-scroll";
// import { FaTimes } from "react-icons/fa";
// import { CiMenuFries } from "react-icons/ci";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const content = (
//     <>
//       <div className="h-[100vh] w-[100%] inline ">
//         <div className="absolute left-0 right-0 z-10 block w-full transition lg:hidden top-16 bg-primary ">
//           <ul className="pb-4 text-xl text-center text-black">
//             <Link spy={true} smooth={true} to="Home">
//               <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
//                 Home
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="About">
//               <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
//                 Leaderboard
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Services">
//               <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
//                 levels
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Projects">
//               <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
//                 Enviroments
//               </li>
//             </Link>
//             <Link spy={true} smooth={true} to="Contact">
//               <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
//                 Assets
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
//   return (
//     <nav className="bg-base ">
//       <div className="z-50 flex justify-between px-8 py-4 border-b md:px-20 lg:px-20 text-fontColor h-10vh lg:py-5 border-slate-800">
//         <div className="flex items-center flex-1">
//           <span className="text-3xl font-bold">Logo</span>
//         </div>
//         <div className="items-center justify-end hidden font-normal lg:flex md:flex lg:flex-1">
//           <div className="">
//             <ul className="flex gap-8 mr-16 text-[18px]">
//               <Link spy={true} smooth={true} to="Home">
//                 <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
//                   Home
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="About">
//                 <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
//                   Leaderboard
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Services">
//                 <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
//                   Levels
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Projects">
//                 <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
//                   Enviroment
//                 </li>
//               </Link>
//               <Link spy={true} smooth={true} to="Contact">
//                 <li className="transition border-b-2 cursor-pointer hover:text-secondary border-base hover:border-secondary">
//                   Assets
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div>{click && content}</div>
//         <button
//           className="block sm:hidden transtion"
//           onClick={() => setClick(!click)}
//         >
//           {click ? <FaTimes /> : <CiMenuFries />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setClick(!click);
  };

  const content = (
    <div ref={navbarRef} className="h-[100vh] w-[100%] inline">
      <div className="absolute left-0 right-0 z-10 block w-full transition lg:hidden top-16 bg-primary ">
        <ul className="pb-4 text-xl text-center text-black">
          <Link spy={true} smooth={true} to="Home">
            <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
              Leaderboard
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
              levels
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
              Enviroments
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="py-4 m-4 border-b border-base hover:bg-base hover:text-white hover:rounded">
              Assets
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="bg-base sticky top-0 z-10">
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
              <Link spy={true} smooth={true} to="leaderboard">
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
          className="block transition sm:hidden"
          onClick={handleButtonClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
