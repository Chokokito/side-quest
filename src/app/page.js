import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import Body from "../components/body/Body";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer />
    </>
  );
}
