import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Desenvolvimento full stack",
      description: "Criação de aplicações web completas com React, Node.js e TypeScript para soluções modernas e escaláveis.",
    },
    {
      title: "Análise de dados",
      description: "Análise e visualização de dados e criação de dashboards interativos com ferramentas como Python, Numpy, Pandas, Matplotlib e Power BI.",
    },
    {
      title: "IA e aprendizado de máquina",
      description: "Criação de aplicações com IA e fluxos de automação usando OpenAI, Python e técnicas de ML.",
    },
    {
      title: "Design de bancos de dados",
      description: "Bancos SQL e NoSQL, modelagem de dados e construção de aplicações robustas orientadas a dados.",
    },
    {
      title: "Design responsivo",
      description: "Criação de interfaces bonitas e acessíveis que funcionam perfeitamente em todos os dispositivos e plataformas.",
    },
    {
      title: "Otimização de performance",
      description: "Otimização de aplicações para velocidade, eficiência e experiência do usuário excepcional com técnicas avançadas.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 