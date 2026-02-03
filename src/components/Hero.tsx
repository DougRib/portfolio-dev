import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { LayoutGrid } from "./LayoutGrid";
import { FileChartColumn } from "./FileChartColumn";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo_Douglas_Ribeiro.pdf";
    link.download = "Curriculo_Douglas_Ribeiro.pdf";
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-36">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-relaxed mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Olá, sou
              <span className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-cyan-500 via-red-500 to-cyan-500 text-transparent bg-clip-text">
                {" "}
                Douglas Ribeiro
              </span>
            </span>
            <span className="block mt-2">
              <span className="block bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
                Desenvolvedor Full Stack
              </span>
              <span className="block bg-gradient-to-t from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text">
                Analista de Dados
              </span>
              <span className="block bg-gradient-to-r from-red-100 via-cyan-700 to-purple-500 text-transparent bg-clip-text">
                Inteligência Artificial
              </span>
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">Eu crio</span>
            <AnimatedText
              text={[
                " Soluções full stack escaláveis ",
                "Funcionalidades inteligentes e orientadas a dados",
                "Arquitetura de sistemas escaláveis",
                "Experiências de usuário com IA",
              ]}
              className="text-blue-400 font-medium"
            />
          </motion.h2>

          <motion.p
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Construindo software confiável, intuitivo e pronto para o futuro com
            paixão por inovação.
          </motion.p>

          {/* Social Icons above buttons */}
          <motion.div
            className="flex justify-center gap-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="https://github.com/DougRib"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-cyan-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <IconBrandGithub className="w-6 h-6 relative z-10 text-white group-hover:text-gray-500 transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/douglasribeiro21"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-cyan-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <IconBrandLinkedin className="w-6 h-6 relative z-10 text-white group-hover:text-blue-500 transition-colors duration-300" />
              </div>
            </a>
            <a
              href="https://instagram.com/odev.douglas"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-cyan-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <IconBrandInstagram className="w-6 h-6 relative z-10 text-white group-hover:text-pink-400 transition-colors duration-300" />
              </div>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#projects" className="gradient-border-button">
              <LayoutGrid width={20} height={20} stroke="#ffffff" />
              Meus Projetos
            </a>
            <div className="flex items-center gap-2">
              <button
                className="gradient-border-button "
                onClick={handleResumeDownload}
              >
                <FileChartColumn width={20} height={20} stroke="#ffffff" />
                Donwload Currículo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all ">
              <a href="#about" className="text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
