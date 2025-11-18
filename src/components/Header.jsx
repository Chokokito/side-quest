import { Title, SubTitle, Text, Span } from "../components/Text/text";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { Play } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-around my-4 items-center ">
      <Logo />
      <Menu />
      <Button
        Icon={Play}
        cn="bg-[#E5D0FF]/90  border-slate-800 text-[#202020] hover:translate-y-1 hover:scale-110 transition-all glow-hover backdrop-blur-xs "
        cnIcon="bg-[#321843] text-slate-200  "
      >
        Inscreva-se!
      </Button>
    </header>
  );
}
