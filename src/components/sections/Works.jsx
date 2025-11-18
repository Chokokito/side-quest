import { Poppins } from "next/font/google";
import VariableProximity from "../reactbits/VariableProximity";
import TiltedCard from "../reactbits/TiltedCard";
import {
  ArrowBigDown,
  BookKey,
  BriefcaseBusiness,
  Palette,
} from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "400", "200"],
});

export default function Works() {
  return (
    <div className="flex align-center items-center mt-20 md:w-6xl flex-col gap-30 lg:mx-5">
      <div className="flex  lg:flex-row flex-col gap-20 items-center justify-center">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="text-sm font-bold p-6 bg-slate-800/20 rounded-xl ">
              1. O PLAYER
            </p>
          }
        ></TiltedCard>
        <div className={`${poppins.className}`}>
          <h1 className="text-purple-200 font-bold">Para quem cria.</h1>
          <h2 className={`${poppins.className} text-2xl font-semibold`}>
            Transforme teoria em prova técnica.
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <BookKey></BookKey>
                </div>
                <p className="text-xl text-slate-200">
                  <b> Acesso a Projetos Reais:</b> Troque exercícios fictícios
                  por demandas verídicas de empresas parceiras.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <BriefcaseBusiness></BriefcaseBusiness>
                </div>
                <p className="text-xl text-slate-200 mt-2">
                  <b>Validação de Mercado:</b> Seu código e design são avaliados
                  por quem realmente entende do assunto.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <Palette></Palette>
                </div>
                <p className="text-xl text-slate-200 mt-2">
                  <b>Portfólio Vivo:</b> Construa uma vitrine de soluções
                  entregues, não apenas de conceitos estudados.
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="flex  lg:flex-row flex-col gap-20 items-center justify-center">
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Kendrick Lamar - GNX"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="text-sm font-bold p-6 bg-slate-800/20 rounded-xl ">
              2. O MERCADO
            </p>
          }
        ></TiltedCard>
        <div className={`${poppins.className} `}>
          <h1 className="text-purple-200 font-bold">Para quem busca.</h1>
          <h2 className={`${poppins.className} text-2xl font-semibold`}>
            Encontre competência, não apenas promessa.
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <BookKey></BookKey>
                </div>
                <p className="text-xl text-slate-200">
                  <b> Acesso a Projetos Reais:</b> Troque exercícios fictícios
                  por demandas verídicas de empresas parceiras.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <BriefcaseBusiness></BriefcaseBusiness>
                </div>
                <p className="text-xl text-slate-200 mt-2">
                  <b>Validação de Mercado:</b> Seu código e design são avaliados
                  por quem realmente entende do assunto.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {" "}
                <div className="p-4 border-1 border-white rounded-2xl">
                  <Palette></Palette>
                </div>
                <p className="text-xl text-slate-200 mt-2">
                  <b>Portfólio Vivo:</b> Construa uma vitrine de soluções
                  entregues, não apenas de conceitos estudados.
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
