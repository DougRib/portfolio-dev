import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfólio com painel administrativo",
    description: "Portfólio full stack com <span class='gradient-highlight'>painel administrativo integrado</span> para <span class='gradient-highlight'>gestão de conteúdo sem atrito</span>.",
    caseStudy: {
      problem: "Manter o conteúdo em várias páginas estáticas exigia edições manuais e atrasava atualizações.",
      solution: "Criei um painel administrativo com Next-Auth e uma API de conteúdo que permite edições por pessoas não técnicas e prévias de deploy.",
      result: "Reduzi o tempo de atualização de horas para <strong>minutos</strong> e permiti que stakeholders gerenciassem o conteúdo do portfólio."
    },
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kalpsenghani1.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
  {
    id: 2,
    title: "Sistema de gestão de funcionários",
    description: "Solução completa em <span class='gradient-highlight'>Angular e GraphQL</span> com <span class='gradient-highlight'>operações CRUD</span>.",
    caseStudy: {
      problem: "Fluxos manuais de RH causavam perda de solicitações e planilhas infladas.",
      solution: "Entreguei um frontend em Angular com endpoints GraphQL e uploads seguros para centralizar dados de funcionários.",
      result: "Melhorei o tempo de processamento em <strong>40%</strong> e forneci registros prontos para auditoria."
    },
    image: "/lovable-uploads/Ems.png",
    tags: ["Angular", "Node.js", "GraphQL", "Autenticação", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 3,
    title: "Monitor de lançamentos da SpaceX",
    description: "Integração <span class='gradient-highlight'>em tempo real com a API da SpaceX</span> e <span class='gradient-highlight'>filtros avançados</span>.",
    caseStudy: {
      problem: "Os dados de lançamentos estavam dispersos em vários endpoints, dificultando comparações.",
      solution: "Criei um dashboard unificado com dados normalizados, filtros avançados e cache no cliente.",
      result: "Permiti que analistas consultassem e comparassem missões com UX em <strong>menos de 1 segundo</strong> para filtros comuns."
    },
    image: "/lovable-uploads/Space-X.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "Dashboard de análise de cripto",
    description: "Plataforma full stack com <span class='gradient-highlight'>monitoramento de cripto em tempo real</span> e <span class='gradient-highlight'>gestão de portfólio</span>.",
    caseStudy: {
      problem: "Usuários tinham dificuldade em acompanhar a saúde do portfólio entre exchanges.",
      solution: "Implementei feeds de preço em tempo real, agregação de posições e alertas com WebSockets.",
      result: "Usuários ganharam melhor visibilidade do portfólio e relataram decisões mais rápidas."
    },
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://crypto-analytics-frontend.onrender.com/",
    githubUrl: "https://github.com/kalpsenghani/crypto-analytics-dashboard"
  },
  {
    id: 5,
    title: "Temporizador Pomodoro",
    description: "Suíte de produtividade <span class='gradient-highlight'>Pomodoro</span> com <span class='gradient-highlight'>dashboard de análises</span>, <span class='gradient-highlight'>sincronização entre dispositivos</span> e <span class='gradient-highlight'>modos de foco em equipe</span> — projeto completo com persistência e insights.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Análises", "Socket.IO"],
    demoUrl: "https://pomo-focus-eta.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/PomoFocus"
  },
  {
    id: 6,
    title: "Analisador de YouTube Shorts vs Longos",
    description: "Plataforma avançada de <span class='gradient-highlight'>análises</span> comparando <span class='gradient-highlight'>métricas de desempenho do YouTube</span> com <span class='gradient-highlight'>visualizações interativas</span> e <span class='gradient-highlight'>insights acionáveis</span>.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
    demoUrl: "https://yt-analyzer-kappa.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
    status: "Em andamento",
    statusColor: "",
    statusGlow: "in-progress"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projetos</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore minha coleção de projetos inovadores que demonstram minha expertise em IA, desenvolvimento web e engenharia de software. 
          Cada projeto representa uma solução única para desafios reais, combinando tecnologias de ponta com aplicações práticas.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Microprojetos</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
