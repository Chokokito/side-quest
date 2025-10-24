import React from "react";

const Button = ({ Icon, onClick, children }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2  p-2 pl-4 poppins-semibold rounded-[30px] bg-blue-600 text-white w-min"
  >
    {children}
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600">
      {Icon ? <Icon size={20} /> : null}
    </span>
  </button>
);

export default Button;
