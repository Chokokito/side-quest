"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Corrected import for framer-motion
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import TiltedCard from "../reactbits/TiltedCard";
import { Poppins } from "next/font/google";
import { ShineBorder } from "@/components/ui/shine-border";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const studentsData = [
  {
    id: 1,
    name: "Miguel Fernando",
    role: "Programador Full Stack",
    description:
      "Programador experimente com foco no desenvolvimento front-end, com especialização em criar websites interativos e responsivos ( como esse 😝 ) .",
    image: "/Gueguel.png",
    behanceUrl:
      "https://www.behance.net/gallery/231617699/Portfolio-Miguel-Fernando-Creative-Dev",
  },
  {
    id: 2,
    name: "André Costa",
    role: "Designer Gráfico",
    description:
      "Designer Gráfico com experiência em criação de logomarcas e pixel art para estúdios de jogos mundo a fora.",
    image: "/dede.jpeg",
    behanceUrl: "https://behance.net/deh_dsgn",
  },
  {
    id: 3,
    name: "Gustavo Alcantara",
    role: "Designer Gráfico/Ilustador",
    description:
      "Designer Gráfico e Ilustrador com profunda experiência em Photoshop, portador de um estilo único de arte tanto digital quanto física.",
    image: "/ghal.jpeg",
    behanceUrl: "https://behance.net/eualcantara",
  },
];

export default function Students() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % studentsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + studentsData.length) % studentsData.length
    );
  };

  const currentStudent = studentsData[currentIndex];

  return (
    <section
      id="students"
      className={`${poppins.className} overflow-hidden w-full min-w-[350px] py-12 px-4 md:px-8 my-10 mt-10 border-b-2 border-slate-200/20  border-1 border-slate-200/20 bg-slate-900/30 rounded-xl text-white `}
    >
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">
          {/* Left Column - Carousel Images */}
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px] order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute"
              >
                <TiltedCard
                  imageSrc={currentStudent.image}
                  altText={currentStudent.name}
                  captionText={currentStudent.role}
                  containerHeight="400px"
                  containerWidth="350px"
                  imageHeight="400px"
                  imageWidth="350px"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="left-0 w-full p-4 bg-black text-white rounded-b-[15px]">
                      <p className="font-bold text-lg">{currentStudent.name}</p>
                      <p className="text-sm opacity-80">
                        {currentStudent.role}
                      </p>
                    </div>
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-8 z-10 order-1 lg:order-2">
            <motion.div
              key={`text - ${currentIndex} `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">
                TALENTOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  EM DESTAQUE
                </span>
              </h2>

              <div className="h-1 w-20 bg-purple-500 mb-8 rounded-full" />

              <h3 className="text-3xl font-bold mb-2">{currentStudent.name}</h3>
              <p className="text-xl text-purple-400 mb-6 font-medium">
                {currentStudent.role}
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                {currentStudent.description}
              </p>

              <a
                href={currentStudent.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors group"
              >
                Ver Portfólio
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Controls */}
            <div className="flex items-center gap-6 pt-8 border-t border-zinc-800">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="p-4 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all active:scale-95"
                  aria-label="Previous student"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-4 rounded-full border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all active:scale-95"
                  aria-label="Next student"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex gap-2">
                {studentsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h - 2 rounded - full transition - all duration - 300 ${
                      idx === currentIndex
                        ? "w-8 bg-purple-500"
                        : "w-2 bg-zinc-700 hover:bg-zinc-600"
                    } `}
                    aria-label={`Go to slide ${idx + 1} `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
