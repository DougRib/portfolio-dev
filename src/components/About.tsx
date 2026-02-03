import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: "education" | "experience" | "award";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "Competência principal",
    title: "Desenvolvimento Full Stack",
    description:
      "Desenvolvimento de aplicações web completas com React, Next.js e Tailwind CSS no front-end, integrando APIs em Python, Node.js e bancos de dados SQL e NoSQL para soluções escaláveis e seguras.",
    type: "experience"
  },
  {
    id: 2,
    year: "Foco técnico",
    title: "Análise de Dados",
    description:
      "Análise, visualização e geração de relatórios com Python, Pandas, NumPy, Matplotlib e Seaborn, transformando dados em insights práticos para apoiar decisões.",
    type: "experience"
  },
  {
    id: 3,
    year: "Crescimento contínuo",
    title: "Projetos e Aprendizado Contínuo",
    description:
      "Evoluo por meio de projetos pessoais e estudos constantes em tecnologia e dados. Buscando sempre novas habilidades para aprimorar minhas soluções.",
    type: "education"
  },
  {
    id: 4,
    year: "2025 em diante",
    title: "Soft Skills e Certificações",
    description:
      "Desenvolvimento de habilidades interpessoais como comunicação, trabalho em equipe, resolução de problemas, raciocínio analítico, complementadas por certificações em Desenvolvimento Full Stack e Análise de Dados.",
    type: "award"
  }
];

const About = () => {
  const { t, tArray } = useLanguage();
  const [showAllCerts, setShowAllCerts] = useState(false);
  const certifications = tArray<string>("about.certifications");
  const visibleCertifications = showAllCerts
    ? certifications
    : certifications.slice(0, 4);
  const timelineItems = tArray<{ badge: string; title: string; description: string }>(
    "about.timeline"
  ).map((item, index) => ({
    id: index + 1,
    type: index === 2 ? "education" : "experience",
    year: item.badge,
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">{t("about.title")}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <div className="lg:col-span-1 group">
          <Card className="h-full glass-card rounded-xl border-muted group-hover:border-blue-400 transition-all duration-200 shadow-xl">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                {t("about.profileTitle")}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t("about.profileP1")}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mt-4">
                {t("about.profileP2")}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  {t("about.certificationsTitle")}
                </h3>
                <div className="flex flex-col gap-3">
                  {visibleCertifications.map((course) => (
                    <div
                      key={course}
                      className="p-3 rounded-lg bg-black/30 border border-blue-500/20 text-sm text-gray-300 hover:border-blue-300 transition-all duration-200 shadow-xl"
                    >
                      {course}
                    </div>
                  ))}
                </div>
                {certifications.length > 4 && (
                  <button
                    type="button"
                    onClick={() => setShowAllCerts((prev) => !prev)}
                    className="mt-4 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {showAllCerts ? "Ver menos" : "Ver todas as certificações"}
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineItems.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all duration-200 w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
