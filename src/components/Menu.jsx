import { ShineBorder } from "./ui/shine-border";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
});

export default function Menu() {
  return (
    <div className="p-2 xl:px-6  lg:px-10 font-thin h-min bg-blue-300/10 backdrop-blur-[1px] rounded-[50px] poppins-regular  hidden lg:flex justify-between items-center">
      <ShineBorder shineColor={["#AD7CF3", "#927CF3"]} duration={5} />
      <ul className="flex items-center  gap-16 list-none justify-around text-white xl:text-lg md:text-md transition-all">
        <li className={poppins.className}>
          <a href="#sobre" className="hover:text-purple-400 ">
            Sobre
          </a>
        </li>
        <li className={poppins.className}>
          <a href="#empresas" className="hover:text-purple-400 ">
            Empresas
          </a>
        </li>
        <li className={poppins.className}>
          <a href="#alunos" className="hover:text-purple-400">
            Alunos
          </a>
        </li>
        <li className={poppins.className}>
          <a href="#depoimentos" className="hover:text-purple-400">
            Depoimentos
          </a>
        </li>
      </ul>
    </div>
  );
}
