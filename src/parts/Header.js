import React from "react";
import propTypes from "prop-types";

import { useRouter } from "next/router";

import Link from "next/link";

export default function Header({ onLight }) {
   const linkColor = onLight ? "text-gray-900" : "text-white";

   const router = useRouter();

   const linkCTA =
      router.pathname.indexOf("/login") > -1
         ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
         : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
   const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
   return (
      <header className="flex justify-between items-center">
         <div style={{ height: 54 }}>
            <img
               src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.svg`}
               alt=""
               className="on-dark"
            />
         </div>
         <ul className="flex">
            <li>
               <Link href="/">
                  <a
                     className={[
                        linkColor,
                        "text-white hover:text-teal-500 text-lg px-6 py-3",
                     ].join(" ")}
                  >
                     Home
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/">
                  <a
                     className={[
                        linkColor,
                        "text-white hover:text-teal-500 text-lg px-6 py-3",
                     ].join(" ")}
                  >
                     Pricing
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/">
                  <a
                     className={[
                        linkColor,
                        "text-white hover:text-teal-500 text-lg px-6 py-3",
                     ].join(" ")}
                  >
                     Features
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/">
                  <a
                     className={[
                        linkColor,
                        "text-white hover:text-teal-500 text-lg px-6 py-3",
                     ].join(" ")}
                  >
                     Story
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/">
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href={linkCTA}
                     className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 ml-6"
                  >
                     {textCTA}
                  </a>
               </Link>
            </li>
         </ul>
      </header>
   );
}

Header.propTypes = {
   onLight: propTypes.bool,
};
