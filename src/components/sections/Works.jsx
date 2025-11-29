import { Poppins } from "next/font/google";
import TiltedCard from "../reactbits/TiltedCard";
import {
  BookKey,
  BriefcaseBusiness,
  Palette,
  FastForward,
  Brain,
  MoveUpRight,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FeatureItem = ({ Icon, title, description }) => (
  <div className="flex items-start gap-5 group">
    <div className="p-3 rounded-xl bg-[#E5D0FF] shadow-[0_0_15px_rgba(229,208,255,0.3)] group-hover:scale-110 transition-transform duration-300 shrink-0">
      <Icon size={24} className="text-[#221943]" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#AD7CF3] transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function Works() {
  return (
    <section id="sobre" className={`w-full py-24 relative overflow-hidden ${poppins.className}`}>
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">

        {/* Block 1: O Player */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="order-1 lg:order-1">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="1. O Player"
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
                <p className="text-sm font-bold p-6 bg-slate-800/20 rounded-xl backdrop-blur-md text-white">
                  1. O PLAYER
                </p>
              }
            />
          </div>

          <div className="flex-1 order-2 lg:order-2 space-y-8">
            <div>
              <span className="text-[#AD7CF3] font-semibold tracking-wider uppercase text-sm">Para quem cria</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                Transforme teoria em <br className="hidden lg:block" /> prova técnica.
              </h2>
            </div>

            <div className="space-y-6">
              <FeatureItem
                Icon={BookKey}
                title="Acesso a Projetos Reais"
                description="Troque exercícios fictícios por demandas verídicas de empresas parceiras."
              />
              <FeatureItem
                Icon={BriefcaseBusiness}
                title="Validação de Mercado"
                description="Seu código e design são avaliados por quem realmente entende do assunto."
              />
              <FeatureItem
                Icon={Palette}
                title="Portfólio Vivo"
                description="Construa uma vitrine de soluções entregues, não apenas de conceitos estudados."
              />
            </div>
          </div>
        </div>

        {/* Block 2: O Mercado */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-[#AD7CF3] font-semibold tracking-wider uppercase text-sm">Para quem busca</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                Encontre competência, <br className="hidden lg:block" /> não apenas promessa.
              </h2>
            </div>

            <div className="space-y-6">
              <FeatureItem
                Icon={FastForward}
                title="Recrutamento Baseado em Entrega"
                description="Avalie o candidato pelo que ele constrói, eliminando a triagem cega de currículos."
              />
              <FeatureItem
                Icon={Brain}
                title="Soluções Criativas"
                description="Acesse a mente fresca e a energia dos melhores alunos da ZION para seus desafios."
              />
              <FeatureItem
                Icon={MoveUpRight}
                title="Conexão Direta"
                description="Encurte o caminho entre a sua vaga e o talento certo, sem burocracia."
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="2. O Mercado"
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
                <p className="text-sm font-bold p-6 bg-slate-800/20 rounded-xl backdrop-blur-md text-white">
                  2. O MERCADO
                </p>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
