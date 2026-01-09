import { Title, SubTitle, Text, Span } from "../components/Text/text";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { Play } from "lucide-react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { ShineBorder } from "./ui/shine-border";

export default function Header() {
  return (
    <header className="flex w-[95%] max-w-lg md:max-w-7xl justify-between my-2 items-center fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-blue-300/10 backdrop-blur-[8px] rounded-[50px] px-4 md:px-6 py-3">
      <ShineBorder shineColor={["#AD7CF3", "#927CF3"]} duration={5} />
      <div
        className={`flex items-center gap-2 text-lg font-thin text-white/50 ${poppins.className}`}
      >
        <Logo />
        <h1 className="">
          | <span className="text-amber-400 font-bold">ZION</span> Belo
          Horizonte
        </h1>
      </div>

      <Menu />
      <a
        href="


https://docs.google.com/forms/d/e/1FAIpQLSfewnMwD8I7Z6unnONY42Zpg_1gsRKQWppkBuqs6DkPNUX9Eg/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Button
          Icon={Play}
          cn=" bg-[#E5D0FF]/90 !pl-1 md:!pl-3 border-slate-800 text-[#202020] hover:translate-y-1 hover:scale-110 transition-all glow-hover backdrop-blur-xs "
          cnIcon="bg-[#321843] text-slate-200 !ml-0 "
          cnText="md:block hidden"
        >
          Inscreva-se!
        </Button>
      </a>
    </header>
  );
}
