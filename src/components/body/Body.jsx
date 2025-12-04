import BlurText from "../reactbits/BlurText";
import Companies from "../sections/Companies";
import Hero from "../sections/Hero";
import Students from "../sections/Students";
import Testimonials from "../sections/Testimonials";
import Works from "../sections/Works";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Body() {
  return (
    <main className="mx-20 flex flex-col mt-20 justify-center items-center md:text-4xl text-3xl">
      <Hero></Hero>
      <div className=" p-6 my-5 mt-8">
        <h2 className={poppins.className}>
          Pare de <b className="text-[#AD7CF3]">treinar</b>. Comece a{" "}
          <b className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            jogar
          </b>
          .
        </h2>
      </div>
      <Works></Works>
      <Testimonials />
      <Students />
      <Companies></Companies>
    </main>
  );
}
