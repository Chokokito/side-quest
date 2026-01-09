import { SubTitle, Text, Title } from "../Text/text";
import Button from "../Button";
import {
  Building2,
  Rocket,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const benefits = [
  {
    icon: ShieldCheck,
    title: "Talento Validado",
    description:
      "Chega de portfólios genéricos. Nossos designers já entregaram projetos visuais complexos e validados.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Rocket,
    title: "Prontos para o Mercado",
    description:
      "Alunos da Zion treinados para lidar com briefings reais, prazos e ferramentas da indústria desde o dia 1.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "Olhar Estratégico",
    description:
      "Formamos criativos que entendem de negócios, não apenas de ferramentas. Design que converte.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Companies() {
  return (
    <section
      id="empresas"
      className={` py-12 lg:py-24 relative overflow-hidden ${poppins.className}`}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px]  rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full -z-10" />

      <div className="max-w-8xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left items-center justify-center ">
            <div className=" px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center ">
              <span className="text-sm font-semibold text-blue-100 tracking-wide uppercase">
                Para Empresas
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Sua próxima contratação de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                elite
              </span>{" "}
              está aqui.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Não perca tempo filtrando centenas de currículos. A Side Quest
              conecta sua empresa diretamente aos talentos que já provaram seu
              valor na prática.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="
          https://docs.google.com/forms/d/e/1FAIpQLSeHhftIr0s_0ML3hE2LR3uPyz12vEAimY6mSSHWY9rTI3Zbxw/viewform
          
          "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  Icon={Building2}
                  cn="bg-white text-sm text-slate-900 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
                  cnIcon="bg-slate-200 text-slate-900"
                >
                  Quero ser parceiro
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="flex-1 grid gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#130b2e]/80 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm flex items-start gap-5"
              >
                <div
                  className={`p-3 rounded-xl bg-[#E5D0FF]/90 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={24} className="text-[#321843]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
