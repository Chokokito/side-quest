import { Title, SubTitle, Text, Span } from "../components/Text/text";
import Logo from "../components/Logo";
import Menu from "../components/Menu"
import Button from "../components/Button";
import { ArrowDown } from "lucide-react";

export default function Header() {
  return <header className="flex justify-around my-4 ">
    <Logo/>
    <Menu/>
    <Button Icon={ArrowDown}>Teste</Button>
  </header>
}