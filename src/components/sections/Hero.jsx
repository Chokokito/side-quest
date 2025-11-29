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
    <section id="hero" className="flex lg:flex-row flex-col hero align-center items-center ">
      <div className="md:w-3xl lg:mx-5 lg:my-0 mb-8 flex justify-center item-center flex-col">
        <BlurText
          text="Sua carreira não é um jogo de um jogador só."
          className={poppins.className}
        />

        <Text className=" pt-5">
          A Side Quest é o lobby onde os melhores talentos da{" "}
          <b className="text-[#FFD943]">ZION</b> encontram empresas prontas para
          a próxima fase. Deixe de farmar teoria, comece a buildar seu futuro.
        </Text>
        <div className="flex gap-4 mt-6 flex-col md:flex-row text-sm">
          <Button
            Icon={ArrowUpRight}
            cn={
              " transition duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-r from-indigo-600 to-[#927CF3]  md:flex hidden shadow-1 hover:from-indigo-700 hover:to-blue-400 "
            }
            cnIcon={"bg-[#221943]"}
          >
            Acessar banco de talentos
          </Button>
          <Button
            Icon={ArrowDownRight}
            cn={
              "transition duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-r from-purple-600 to-[#8B61C9] shadow-2 hover:from-purple-700 hover:to-violet-400 "
            }
            cnIcon={"bg-[#221943] "}
          >
            Mostrar meu potencial
          </Button>
        </div>
      </div>
      <div className="w-[300px] md:w-[400px] lg:w-[500px] flex justify-center items-center">
        <img
          src="/Pantera.png"
          alt=""
          className=" drop-shadow-2xl animate-float drop-shadow-purple-300"
        />
      </div>
    </section>
  );
}

export default Hero;
