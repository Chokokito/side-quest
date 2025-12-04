import { SubTitle, Text } from "../Text/text";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "UX Designer @ TechFlow",
    content:
      "A Side Quest mudou minha carreira. Encontrei projetos que realmente desafiaram minhas habilidades e me conectaram com empresas incríveis.",
    avatar: "https://ui-avatars.com/api/?name=Ana+Silva&background=AD7CF3&color=fff",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Fullstack Dev @ StartUp",
    content:
      "A plataforma é intuitiva e direta ao ponto. Sem burocracia, apenas conexões reais e oportunidades de crescimento.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=8B61C9&color=fff",
  },
  {
    id: 3,
    name: "Beatriz Costa",
    role: "Product Manager @ Inova",
    content:
      "Consegui montar meu time dos sonhos através da Side Quest. A qualidade dos talentos aqui é diferenciada.",
    avatar: "https://ui-avatars.com/api/?name=Beatriz+Costa&background=5b21b6&color=fff",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className={`w-full overflow-hidden border-b-2 border-slate-200/20 py-20 flex flex-col items-center justify-center relative overflow-hidden ${poppins.className}`}>
      {/* Background Elements (Optional subtle glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]  rounded-full -z-10" />

      <div className="text-center mb-12 px-4">
        <SubTitle>
          O que dizem os <span className="text-[#AD7CF3]">Players</span>
        </SubTitle>
        <Text>
          Histórias de quem já subiu de nível com a Side Quest.
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 max-w-7xl w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative p-8 rounded-2xl bg-[#1a103c]/60 border border-white/5 hover:border-[#AD7CF3]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(173,124,243,0.3)] backdrop-blur-sm flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#AD7CF3]/20 transition-colors">
              <Quote size={48} fill="currentColor" />
            </div>

            <div>
              <p className="text-gray-300 text-base leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#1a103c] flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">
                  {testimonial.name}
                </h4>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
