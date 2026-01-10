import { Poppins } from "next/font/google";
import Logo from "./Logo";
import { Instagram, Linkedin, Twitter, Github, Phone } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/zion_belohorizonte/",
    label: "Instagram",
  },
  {
    icon: Phone,
    href: "https://wa.me/5531991234567",
    label: "WhatsApp",
  },
];

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Alunos", href: "#alunos" },
  { label: "Empresas", href: "#empresas" },
];

export default function Footer() {
  return (
    <footer
      className={`w-full bg-[#0f001c] border-t border-white/10 pt-12 pb-6 lg:pt-16 lg:pb-8 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A plataforma definitiva para designers da{" "}
              <span className="text-amber-400 font-bold">ZION</span> mostrarem
              seu valor e conectarem-se com o mercado.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#AD7CF3] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Conecte-se</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#AD7CF3] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Side Quest. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 hidden">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
            >
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
