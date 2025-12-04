import React from "react";
import { Poppins } from "next/font/google";
import { Span } from "./Text/text";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Button = ({ Icon, onClick, children, cn, cnIcon, cnText }) => (
  <button
    onClick={onClick}
    className={
      (poppins.className,
        `flex items-center gap-2 transition p-1 pl-4 pr-1 poppins-semibold rounded-[30px] w-min sm:text-lg md:text-sm text-nowrap cursor-pointer ${cn}`)
    }
  >
    <span className={`text-sm  ${cnText}`}>
      {children}
    </span>

    <span
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full ml-6 ${cnIcon}`}
    >
      {Icon ? <Icon size={20} /> : null}
    </span>
  </button >
);

export default Button;
