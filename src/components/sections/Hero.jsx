import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Button from "../Button";
import BlurText from "../reactbits/BlurText";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const { Title, Text } = require("../Text/text");

function Hero() {
  return (
    <section
      id="hero"
      className="flex  p-6 pt-24 lg:p-10 lg:pt-10 border-b-2 border-slate-200/20 lg:flex-row flex-col hero align-center items-center "
    >
      <div className="md:w-3xl lg:mx-5 lg:my-0 mb-8 flex justify-center item-center flex-col">
        <BlurText
          text="Sua carreira não é um jogo de um jogador só."
          className={poppins.className}
        />

        <Text className=" pt-5">
          A Side Quest é o local onde os melhores talentos da{" "}
          <b className="text-[#FFD943]">ZION</b> encontram empresas prontas para
          a próxima fase. Deixe de acumular teoria, comece a construir seu
          futuro.
        </Text>
        <div className="flex gap-4 mt-6 flex-col md:flex-row text-lg">
          <a
            href="
          https://docs.google.com/forms/d/e/1FAIpQLSeHhftIr0s_0ML3hE2LR3uPyz12vEAimY6mSSHWY9rTI3Zbxw/viewform
          
          "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              Icon={ArrowUpRight}
              cn={
                " font-sm transition duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-r from-indigo-600 to-[#927CF3]  md:flex hidden shadow-1 hover:from-indigo-700 hover:to-blue-400 "
              }
              cnIcon={"bg-[#221943]"}
            >
              Acessar banco de talentos
            </Button>
          </a>

          <a
            href="


https://docs.google.com/forms/d/e/1FAIpQLSfewnMwD8I7Z6unnONY42Zpg_1gsRKQWppkBuqs6DkPNUX9Eg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              Icon={ArrowDownRight}
              cn={
                "transition duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-[#8B61C9] shadow-2 hover:from-purple-700 hover:to-violet-400 "
              }
              cnIcon={"bg-[#221943] "}
            >
              Mostrar meu potencial
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] flex justify-center items-center">
        <img
          src="/Pantera.png"
          alt=""
          fetchPriority="high"
          className="w-full h-auto drop-shadow-2xl animate-float drop-shadow-purple-300"
        />
      </div>
    </section>
  );
}

export default Hero;
