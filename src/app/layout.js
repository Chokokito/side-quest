import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "300", "200", "500"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SideQuest - Inicie sua jornada no mercado de trabalho!",
  description:
    "Plataforma que conecta estudantes da Zion a projetos reais, impulsionando suas carreiras com experiência prática e networking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} ${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
