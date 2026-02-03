import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Fotógrafico com Painel Admin",
    description:" Portfólio dinâmico em React com painel administrativo para gerenciamento de conteúdo fácil e atualizações em tempo real.",
    image: "/projects-uploads/fotografo.png",
    tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
    githubUrl: "https://github.com/DougRib/fotografo-portfolio"
  },
  {
    id: 2,
    title: "Análise de Dados em Python",
    description: "Exploração de dados usando Python, com foco em limpeza, transformação e geração de insights iniciais. Organização de métricas usando planilhas evisualizações simples.",
    image: "/projects-uploads/analise.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    //demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/DougRib/desafio_alura_data_science"
  },
  {
    id: 3,
    title: "Projeto Healthtech",
    description: "Projeto contempla toda a pipeline de dados da ANS (download, validações, enriquecimento e agregação), scripts SQL para carga e análises no PostgreSQL, além da API em FastAPI e dashboard em Vue com visualizações e indicadores.",
    image: "/projects-uploads/dashboard-healtech.png",
    tags: ["FastAPI", "TypeScript", "Tailwind", "Vue.js", "Vite", "PostgreSQL"],
    //demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/DougRib/projeto_healthtech"
  },
  {
    id: 4,
    title: "Portfólio Developer",
    description: "Landing page pessoal desenvolvida com React e Tailwind CSS para apresentar projetos, habilidades e informações de contato de forma elegante e responsiva.",
    image: "/projects-uploads/portfolio-1.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/DougRib/portfolio"
  },
  
  /*{
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
  },
  */
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-2">Projetos</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore minha coleção de projetos que demonstram minhas habilidades em desenvolvimento web, análise de dados e engenharia de software. 
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
      {/* <div className="mt-16">
            <h3 className="section-title mb-8">Microprojetos</h3>
            <GlowingEffectDemo />
          </div> */
      }
    </section>
  );
};

export default Projects;
