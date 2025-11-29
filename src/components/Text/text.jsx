
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});



export function Title({ children }) {
  return (
    <h1 className={"text-2xl sm:text-3xl md:text-4xl poppins-bold"}>
      {children}
    </h1>
  );
}

export function SubTitle({ children }) {
  return (
    <h2 className={`text-xl poppins-semibold sm:text-2xl md:text-4xl ${poppins.className}`}>
      {children}
    </h2>
  );
}

export function Text({ children }) {
  return (
    <p className="text-lg poppins-regular sm:text-xl md:text-xl mt-4">
      {children}
    </p>
  );
}

export function Span(children) {
  return (
    <span className="text-base poppins-regular sm:text-lg md:text-xl">
      {children}
    </span>
  );
}
