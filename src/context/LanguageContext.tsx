import React, { createContext, useContext, useMemo, useState } from "react";

type Language = "pt-BR" | "en" | "es" | "pt-PT";

type TranslationValue = string | string[] | Record<string, unknown> | unknown[];

type Translations = Record<string, TranslationValue>;

const translations: Record<Language, Translations> = {
  "pt-BR": {
    navbar: {
      home: "Início",
      skills: "Habilidades",
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Contato",
      language: "Idioma",
      languages: {
        "pt-BR": "Português (Brasil)",
        en: "English",
        es: "Español",
        "pt-PT": "Português (Portugal)",
      },
    },
    hero: {
      greeting: "Olá, sou",
      name: "Douglas Ribeiro",
      role1: "Desenvolvedor Full Stack",
      role2: "Analista de Dados",
      role3: "Inteligência Artificial.",
      animatedLead: "Eu crio",
      animatedItems: [
        " Soluções full stack escaláveis ",
        "Funcionalidades inteligentes e orientadas a dados",
        "Arquitetura de sistemas escaláveis",
        "Experiências de usuário com IA",
      ],
      description:
        "Construindo software confiável, intuitivo e pronto para o futuro com paixão por inovação.",
      ctaWork: "Meus Projetos",
      ctaResume: "Currículo",
      ctaResumeTitle: "Baixar currículo",
    },
    about: {
      title: "Sobre mim",
      profileTitle: "Perfil profissional",
      profileP1:
        "Sou estudante de Ciência da Computação com foco em Desenvolvimento Web Full Stack e Análise de Dados com Python. Tenho experiência na criação de interfaces modernas e intuitivas, utilizando TypeScript, React, Next.js e Tailwind CSS, além de ferramentas de análise como Pandas e Matplotlib para transformar dados em insights.",
      profileP2:
        "Minha trajetória começou pela curiosidade em entender como as aplicações funcionam e evoluiu para a paixão em construir soluções web funcionais, eficientes e centradas no usuário, unindo engenharia sólida e tomada de decisão orientada a dados.",
      certificationsTitle: "Certificações e cursos",
      certifications: [
        "Formação Python Backend Developer - Digital Innovation One (2026).",
        "Engenharia de Prompt - Digital Innovation One (2026).",
        "Curso de Inglês (Em andamento) - Digital Innovation One (2026).",
        "Formação Full Stack Python – EBAC (2025).",
        "Inteligência Artificial aplicada a Dados com Copilot - Digital Innovation One (2025).",
        "Formação Data Science – Alura / Oracle (2025).",
        "SQL (Básico e Avançado) – Digital Innovation One (2025).",
        "Banco de Dados Oracle – Udemy (2025).",
        "Git e GitHub – Digital Innovation One (2025).",
        "Arquitetura de Redes – Udemy (2025).",
      ],
      timeline: [
        {
          badge: "Competência principal",
          title: "Desenvolvimento Full Stack",
          description:
            "Desenvolvimento de aplicações web completas com React, Next.js e Tailwind CSS no front-end, integrando APIs em Node.js e bancos de dados SQL e NoSQL para soluções escaláveis e seguras.",
        },
        {
          badge: "Foco técnico",
          title: "Análise de Dados",
          description:
            "Análise, visualização e geração de relatórios com Python, Pandas, NumPy, Matplotlib e Seaborn, transformando dados em insights práticos para apoiar decisões.",
        },
        {
          badge: "Crescimento contínuo",
          title: "Projetos e Aprendizado Contínuo",
          description:
            "Evoluo por meio de projetos pessoais e estudos constantes em tecnologia e dados. Soft skills: raciocínio analítico, resolução de problemas, trabalho em equipe e aprendizado rápido.",
        },
        {
          badge: "2025",
          title: "Soft Skills e Certificações",
          description: 
            "Desenvolvimento de habilidades interpessoais como comunicação, trabalho em equipe, resolução de problemas, raciocínio analítico, complementadas por certificações em Desenvolvimento Full Stack e Análise de Dados.",
        }
      ],
    },
    features: {
      title: "Principais capacidades",
      items: [
        {
          title: "Desenvolvimento full stack",
          description:
            "Criação de aplicações web completas com React, Node.js e TypeScript para soluções modernas e escaláveis.",
        },
        {
          title: "IA e aprendizado de máquina",
          description:
            "Criação de aplicações com IA e fluxos de automação usando OpenAI, Python e técnicas avançadas de ML.",
        },
        {
          title: "Arquitetura em cloud",
          description:
            "Projeto de soluções escaláveis em cloud com AWS, Docker e microserviços para aplicações de alto desempenho.",
        },
        {
          title: "Design de bancos de dados",
          description:
            "Especialista em bancos SQL e NoSQL, modelagem de dados e construção de aplicações robustas orientadas a dados.",
        },
        {
          title: "Design responsivo",
          description:
            "Criação de interfaces bonitas e acessíveis que funcionam perfeitamente em todos os dispositivos e plataformas.",
        },
        {
          title: "Otimização de performance",
          description:
            "Otimização de aplicações para velocidade, eficiência e experiência do usuário excepcional com técnicas avançadas.",
        },
      ],
    },
    technologies: {
      title: "Tecnologias e Ferramentas",
      subtitle: "Ferramentas e frameworks de ponta para construir o futuro",
      groups: {
        languages: "Linguagens",
        frontend: "Front-end",
        backend: "Back-end",
        database: "Banco de dados",
        devops: "DevOps e cloud",
      },
    },
    projects: {
      title: "Projetos",
      description:
        "Explore minha coleção de projetos que demonstram minhas habilidades em desenvolvimento web, análise de dados e engenharia de software. Cada projeto representa uma solução única para desafios reais, combinando tecnologias de ponta com aplicações práticas.",
      microTitle: "Microprojetos",
      items: [
        {
          id: 1,
          title: "Portfólio Fotográfico com Painel Admin",
          description:
            "Portfólio dinâmico em React com painel administrativo para gerenciamento de conteúdo fácil e atualizações em tempo real.",
          image: "/projects-uploads/fotografo.png",
          tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
          githubUrl: "https://github.com/DougRib/fotografo-portfolio",
        },
        {
          id: 2,
          title: "Análise de Dados em Python",
          description:
            "Exploração de dados usando Python, com foco em limpeza, transformação e geração de insights iniciais. Organização de métricas usando planilhas e visualizações simples.",
          image: "/projects-uploads/analise.jpg",
          tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
          githubUrl: "https://github.com/DougRib/desafio_alura_data_science",
        },
        {
          id: 3,
          title: "Projeto Healthtech",
          description:
            "Projeto contempla toda a pipeline de dados da ANS (download, validações, enriquecimento e agregação), scripts SQL para carga e análises no PostgreSQL, além da API em FastAPI e dashboard em Vue com visualizações e indicadores.",
          image: "/projects-uploads/dashboard-healtech.png",
          tags: [
            "FastAPI",
            "TypeScript",
            "Tailwind",
            "Vue.js",
            "Vite",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/DougRib/projeto_healthtech",
        },
        {
          id: 4,
          title: "Portfólio Developer",
          description:
            "Landing page pessoal desenvolvida com React e Tailwind CSS para apresentar projetos, habilidades e informações de contato de forma elegante e responsiva.",
          image: "/projects-uploads/portfolio-1.png",
          tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          githubUrl: "https://github.com/DougRib/portfolio",
        },
      ],
    },
    microProjects: {
      items: [
        {
          title: "Gerenciador de tarefas com IA",
          description:
            "Plataforma <span class='gradient-highlight'>com IA</span> para <span class='gradient-highlight'>organização inteligente de tarefas</span> e <span class='gradient-highlight'>otimização de produtividade</span>.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["AI", "React", "Node.js", "NLP", "Machine Learning"],
          demoUrl: "https://example.com/demo1",
          githubUrl: "https://github.com/kalpsenghani/ai-task-manager",
        },
        {
          title: "EventRaze",
          description:
            "Plataforma de gestão de eventos com <span class='gradient-highlight'>painel administrativo</span> e integração de <span class='gradient-highlight'>backend em PHP</span>.",
          image:
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["PHP", "Postgres", "HTML", "CSS", "JavaScript", "XAMPP"],
          githubUrl: "https://github.com/kalpsenghani/EventRaze",
        },
        {
          title: "Previsão do tempo",
          description:
            "Monitoramento do clima <span class='gradient-highlight'>em tempo real</span> com <span class='gradient-highlight'>API OpenWeatherMap</span> e <span class='gradient-highlight'>previsões</span>.",
          image:
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["React", "OpenWeatherMap API", "CSS", "Weather API", "Forecast"],
          demoUrl: "https://weather-app-kalpsenghani.netlify.app/",
          githubUrl: "https://github.com/kalpsenghani/Weather-App",
        },
        {
          title: "Analisador de YouTube Shorts vs Longos",
          description:
            "Plataforma avançada de <span class='gradient-highlight'>análises do YouTube</span> comparando <span class='gradient-highlight'>métricas de desempenho</span> com <span class='gradient-highlight'>visualizações interativas</span>.",
          image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
          tags: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Radix UI",
            "React Query",
            "React Router",
            "Framer Motion",
            "Recharts",
          ],
          githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
        },
        {
          title: "Temporizador Pomodoro",
          description:
            "Temporizador <span class='gradient-highlight'>Pomodoro</span> personalizável com <span class='gradient-highlight'>estatísticas de produtividade</span> e <span class='gradient-highlight'>monitoramento de foco</span>.",
          image:
            "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["React", "Timer", "Productivity", "Stats"],
          demoUrl: "https://pomo-focus-eta.vercel.app/",
          githubUrl: "https://github.com/kalpsenghani/PomoFocus",
        },
        {
          title: "Consultor de vagas com IA",
          description:
            "Analisador full stack de <span class='gradient-highlight'>currículo com IA</span> baseado no <span class='gradient-highlight'>OpenAI GPT-4</span> com <span class='gradient-highlight'>recomendações de vagas</span> e <span class='gradient-highlight'>preparação para entrevistas</span>.",
          image: "/lovable-uploads/Job-Advisor.png",
          tags: ["Axios", "OpenAI GPT-4", "React", "Node.js"],
          demoUrl: "https://yourjobadvisor.netlify.app/",
          githubUrl: "https://github.com/kalpsenghani/AI_Job_Advisor",
        },
      ],
    },
    contact: {
      sectionTitle: "Vamos nos conectar",
      statsTitle: "Estatísticas do desenvolvedor",
      statsSubtitle: "Conquistas e métricas em tempo real",
      statsLabels: {
        projects: "Projetos entregues",
        technologies: "Tecnologias",
        certifications: "Certificações",
        years: "Anos de experiência",
      },
      connectTitle: "Conecte-se comigo",
      platformsTitle: "Plataformas de programação",
      formTitle: "Vamos conversar",
      labels: {
        firstName: "Nome",
        lastName: "Sobrenome",
        email: "Email",
        collaborationType: "Tipo de colaboração",
        message: "Mensagem",
      },
      placeholders: {
        firstName: "Nome",
        lastName: "Sobrenome",
        email: "Seu email",
        message: "Sua mensagem",
      },
      collaboration: {
        collaboration: "Colaboração",
        freelance: "Freelance",
        project: "Projeto",
      },
      submit: "Enviar mensagem",
      sending: "Enviando...",
      validation: "Selecione um tipo de colaboração.",
      success: "Mensagem enviada com sucesso.",
      error: "Falha ao enviar a mensagem. Tente novamente mais tarde.",
      mailClientOpened:
        "Seu cliente de email foi aberto para enviar a mensagem.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Feito com",
      backToTop: "Voltar ao topo",
    },
    misc: {
      loading: "Carregando...",
      notFoundTitle: "Ops! Página não encontrada",
      notFoundCta: "Voltar para o início",
      articlesTitle: "Últimos artigos e insights",
      liveDemo: "Demo ao vivo",
      inProgress: "Em andamento",
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
      viewOnGithub: "Ver no GitHub",
      viewLive: "Ver ao vivo",
    },
  },
  en: {
    navbar: {
      home: "Home",
      skills: "Skills",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      languages: {
        "pt-BR": "Portuguese (Brazil)",
        en: "English",
        es: "Spanish",
        "pt-PT": "Portuguese (Portugal)",
      },
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Douglas Ribeiro",
      role1: "Full Stack Developer",
      role2: "Data Analyst",
      role3: "Artificial Intelligence.",
      animatedLead: "I build",
      animatedItems: [
        " Scalable full-stack solutions ",
        "Intelligent, data-driven features",
        "Scalable system architecture",
        "AI-powered user experiences",
      ],
      description:
        "Building reliable, intuitive, and future-ready software with a passion for innovation.",
      ctaWork: "My Work",
      ctaResume: "Resume",
      ctaResumeTitle: "Download resume",
    },
    about: {
      title: "About Me",
      profileTitle: "Professional profile",
      profileP1:
        "I'm a Computer Science student focused on Full Stack Web Development and Data Analysis with Python. I build modern, intuitive interfaces using TypeScript, React, Next.js, and Tailwind CSS, and analyze data with tools like Pandas and Matplotlib to generate insights.",
      profileP2:
        "My journey started with curiosity about how applications work and evolved into a passion for creating functional, efficient, and user-centered web solutions, combining solid engineering and data-driven decision-making.",
      certificationsTitle: "Certifications and courses",
      certifications: [
        "Python Backend Developer Program - Digital Innovation One (2026).",
        "Prompt Engineering - Digital Innovation One (2026).",
        "English Course (In progress) - Digital Innovation One (2026).",
        "Full Stack Python Program – EBAC (2025).",
        "AI Applied to Data with Copilot - Digital Innovation One (2025).",
        "Data Science Program – Alura / Oracle (2025).",
        "SQL (Basic & Advanced) – Digital Innovation One (2025).",
        "Oracle Database – Udemy (2025).",
        "Git and GitHub – Digital Innovation One (2025).",
        "Network Architecture – Udemy (2025).",
      ],
      timeline: [
        {
          badge: "Core capability",
          title: "Full Stack Development",
          description:
            "End-to-end web development with React, Next.js and Tailwind CSS on the front-end, integrating Node.js APIs and SQL/NoSQL databases for scalable, secure solutions.",
        },
        {
          badge: "Technical focus",
          title: "Data Analysis",
          description:
            "Analysis, visualization and reporting with Python, Pandas, NumPy, Matplotlib and Seaborn, turning data into actionable insights.",
        },
        {
          badge: "Continuous growth",
          title: "Projects & Continuous Learning",
          description:
            "Constant evolution through personal projects and ongoing studies in technology and data. Soft skills: analytical reasoning, problem solving, teamwork and fast learning.",
        },
      ],
    },
    features: {
      title: "Core capabilities",
      items: [
        {
          title: "Full Stack Development",
          description:
            "Building complete web applications with React, Node.js, and TypeScript for modern, scalable solutions.",
        },
        {
          title: "AI & Machine Learning",
          description:
            "Creating AI-powered applications and automation workflows using OpenAI, Python, and advanced ML techniques.",
        },
        {
          title: "Cloud Architecture",
          description:
            "Designing scalable cloud solutions with AWS, Docker, and microservices for high-performance applications.",
        },
        {
          title: "Database Design",
          description:
            "Expert in SQL and NoSQL databases, data modeling, and building robust data-driven applications.",
        },
        {
          title: "Responsive Design",
          description:
            "Creating beautiful, accessible user interfaces that work seamlessly across all devices and platforms.",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimizing applications for speed, efficiency, and exceptional user experience through advanced techniques.",
        },
      ],
    },
    technologies: {
      title: "Technologies I Work With",
      subtitle: "Cutting-edge tools and frameworks for building the future",
      groups: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        devops: "DevOps & Cloud",
      },
    },
    projects: {
      title: "Projects",
      description:
        "Explore my collection of projects showcasing skills in web development, data analysis, and software engineering. Each project is a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.",
      microTitle: "Micro Projects",
      items: [
        {
          id: 1,
          title: "Photography Portfolio with Admin Panel",
          description:
            "Dynamic React portfolio with an admin panel for easy content management and real-time updates.",
          image: "/projects-uploads/fotografo.png",
          tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
          githubUrl: "https://github.com/DougRib/fotografo-portfolio",
        },
        {
          id: 2,
          title: "Python Data Analysis",
          description:
            "Data exploration using Python, focused on cleaning, transformation, and initial insights. Metrics organized with spreadsheets and simple visualizations.",
          image: "/projects-uploads/analise.jpg",
          tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
          githubUrl: "https://github.com/DougRib/desafio_alura_data_science",
        },
        {
          id: 3,
          title: "Healthtech Project",
          description:
            "End-to-end ANS data pipeline (download, validation, enrichment, aggregation), SQL scripts for loading and analysis in PostgreSQL, plus a FastAPI API and Vue dashboard with visualizations and indicators.",
          image: "/projects-uploads/dashboard-healtech.png",
          tags: [
            "FastAPI",
            "TypeScript",
            "Tailwind",
            "Vue.js",
            "Vite",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/DougRib/projeto_healthtech",
        },
        {
          id: 4,
          title: "Developer Portfolio",
          description:
            "Personal landing page built with React and Tailwind CSS to showcase projects, skills, and contact information in an elegant, responsive layout.",
          image: "/projects-uploads/portfolio-1.png",
          tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          githubUrl: "https://github.com/DougRib/portfolio",
        },
      ],
    },
    microProjects: {
      items: [
        {
          title: "AI Task Manager",
          description:
            "<span class='gradient-highlight'>AI-powered</span> platform for <span class='gradient-highlight'>smart task organization</span> and <span class='gradient-highlight'>productivity optimization</span>.",
          image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["AI", "React", "Node.js", "NLP", "Machine Learning"],
          demoUrl: "https://example.com/demo1",
          githubUrl: "https://github.com/kalpsenghani/ai-task-manager",
        },
        {
          title: "EventRaze",
          description:
            "Event management platform with <span class='gradient-highlight'>admin dashboard</span> and <span class='gradient-highlight'>PHP backend</span> integration.",
          image:
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["PHP", "Postgres", "HTML", "CSS", "JavaScript", "XAMPP"],
          githubUrl: "https://github.com/kalpsenghani/EventRaze",
        },
        {
          title: "Weather Forecast",
          description:
            "Real-time <span class='gradient-highlight'>weather tracking</span> with <span class='gradient-highlight'>OpenWeatherMap API</span> and <span class='gradient-highlight'>forecast predictions</span>.",
          image:
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["React", "OpenWeatherMap API", "CSS", "Weather API", "Forecast"],
          demoUrl: "https://weather-app-kalpsenghani.netlify.app/",
          githubUrl: "https://github.com/kalpsenghani/Weather-App",
        },
        {
          title: "YouTube Short VS Long Analyzer",
          description:
            "Advanced <span class='gradient-highlight'>YouTube analytics</span> comparing <span class='gradient-highlight'>video performance metrics</span> with <span class='gradient-highlight'>interactive visualizations</span>.",
          image:
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
          tags: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Radix UI",
            "React Query",
            "React Router",
            "Framer Motion",
            "Recharts",
          ],
          githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
        },
        {
          title: "Pomodoro Timer",
          description:
            "Customizable <span class='gradient-highlight'>Pomodoro timer</span> with <span class='gradient-highlight'>productivity stats</span> and <span class='gradient-highlight'>focus tracking</span>.",
          image:
            "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["React", "Timer", "Productivity", "Stats"],
          demoUrl: "https://pomo-focus-eta.vercel.app/",
          githubUrl: "https://github.com/kalpsenghani/PomoFocus",
        },
        {
          title: "AI Job Advisor",
          description:
            "Full-stack <span class='gradient-highlight'>AI resume analyzer</span> powered by <span class='gradient-highlight'>OpenAI GPT-4</span> with <span class='gradient-highlight'>job recommendations</span> and <span class='gradient-highlight'>interview prep</span>.",
          image: "/lovable-uploads/Job-Advisor.png",
          tags: ["Axios", "OpenAI GPT-4", "React", "Node.js"],
          demoUrl: "https://yourjobadvisor.netlify.app/",
          githubUrl: "https://github.com/kalpsenghani/AI_Job_Advisor",
        },
      ],
    },
    contact: {
      sectionTitle: "Let's connect",
      statsTitle: "Developer stats",
      statsSubtitle: "Real-time achievements & metrics",
      statsLabels: {
        projects: "Projects delivered",
        technologies: "Technologies",
        certifications: "Certifications",
        years: "Years of experience",
      },
      connectTitle: "Connect with me",
      platformsTitle: "Coding platforms",
      formTitle: "Let's talk",
      labels: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        collaborationType: "Collaboration type",
        message: "Message",
      },
      placeholders: {
        firstName: "First name",
        lastName: "Last name",
        email: "Your email",
        message: "Your message",
      },
      collaboration: {
        collaboration: "Collaboration",
        freelance: "Freelance",
        project: "Project",
      },
      submit: "Send message",
      sending: "Sending...",
      validation: "Please select a collaboration type.",
      success: "Message sent successfully.",
      error: "Failed to send message. Please try again later.",
      mailClientOpened: "Your email client was opened to send the message.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
      backToTop: "Back to top",
    },
    misc: {
      loading: "Loading...",
      notFoundTitle: "Oops! Page not found",
      notFoundCta: "Return to home",
      articlesTitle: "Latest articles & insights",
      liveDemo: "Live Demo",
      inProgress: "In Progress",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      viewOnGithub: "View on GitHub",
      viewLive: "View Live",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      skills: "Habilidades",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma",
      languages: {
        "pt-BR": "Portugués (Brasil)",
        en: "Inglés",
        es: "Español",
        "pt-PT": "Portugués (Portugal)",
      },
    },
    hero: {
      greeting: "Hola, soy",
      name: "Douglas Ribeiro",
      role1: "Desarrollador Full Stack",
      role2: "Analista de Datos",
      role3: "Inteligencia Artificial.",
      animatedLead: "Creo",
      animatedItems: [
        " Soluciones full stack escalables ",
        "Funcionalidades inteligentes y basadas en datos",
        "Arquitectura de sistemas escalables",
        "Experiencias de usuario con IA",
      ],
      description:
        "Construyo software confiable, intuitivo y preparado para el futuro con pasión por la innovación.",
      ctaWork: "Mis Proyectos",
      ctaResume: "Currículum",
      ctaResumeTitle: "Descargar currículum",
    },
    about: {
      title: "Sobre mí",
      profileTitle: "Perfil profesional",
      profileP1:
        "Soy estudiante de Ciencias de la Computación con foco en Desarrollo Web Full Stack y Análisis de Datos con Python. Creo interfaces modernas e intuitivas con TypeScript, React, Next.js y Tailwind CSS, y analizo datos con herramientas como Pandas y Matplotlib para generar insights.",
      profileP2:
        "Mi trayectoria comenzó con la curiosidad por entender cómo funcionan las aplicaciones y evolucionó hacia la pasión por construir soluciones web funcionales, eficientes y centradas en el usuario, uniendo ingeniería sólida y decisiones basadas en datos.",
      certificationsTitle: "Certificaciones y cursos",
      certifications: [
        "Formación Python Backend Developer - Digital Innovation One (2026).",
        "Ingeniería de Prompt - Digital Innovation One (2026).",
        "Curso de Inglés (En curso) - Digital Innovation One (2026).",
        "Formación Full Stack Python – EBAC (2025).",
        "IA aplicada a Datos con Copilot - Digital Innovation One (2025).",
        "Formación Data Science – Alura / Oracle (2025).",
        "SQL (Básico y Avanzado) – Digital Innovation One (2025).",
        "Base de Datos Oracle – Udemy (2025).",
        "Git y GitHub – Digital Innovation One (2025).",
        "Arquitectura de Redes – Udemy (2025).",
      ],
      timeline: [
        {
          badge: "Competencia principal",
          title: "Desarrollo Full Stack",
          description:
            "Desarrollo de aplicaciones web completas con React, Next.js y Tailwind CSS en el front-end, integrando APIs en Node.js y bases de datos SQL y NoSQL para soluciones escalables y seguras.",
        },
        {
          badge: "Enfoque técnico",
          title: "Análisis de Datos",
          description:
            "Análisis, visualización y reportes con Python, Pandas, NumPy, Matplotlib y Seaborn, convirtiendo datos en insights accionables.",
        },
        {
          badge: "Crecimiento continuo",
          title: "Proyectos y Aprendizaje Continuo",
          description:
            "Evolución constante mediante proyectos personales y estudios continuos en tecnología y datos. Soft skills: razonamiento analítico, resolución de problemas, trabajo en equipo y aprendizaje rápido.",
        },
      ],
    },
    features: {
      title: "Capacidades clave",
      items: [
        {
          title: "Desarrollo Full Stack",
          description:
            "Construcción de aplicaciones web completas con React, Node.js y TypeScript para soluciones modernas y escalables.",
        },
        {
          title: "IA y Machine Learning",
          description:
            "Creación de aplicaciones con IA y flujos de automatización usando OpenAI, Python y técnicas avanzadas de ML.",
        },
        {
          title: "Arquitectura en la nube",
          description:
            "Diseño de soluciones escalables en la nube con AWS, Docker y microservicios para alto rendimiento.",
        },
        {
          title: "Diseño de bases de datos",
          description:
            "Experiencia en bases SQL y NoSQL, modelado de datos y construcción de aplicaciones robustas basadas en datos.",
        },
        {
          title: "Diseño responsivo",
          description:
            "Creación de interfaces hermosas y accesibles que funcionan perfectamente en todos los dispositivos y plataformas.",
        },
        {
          title: "Optimización de rendimiento",
          description:
            "Optimización de aplicaciones para velocidad, eficiencia y una experiencia de usuario excepcional.",
        },
      ],
    },
    technologies: {
      title: "Tecnologías con las que trabajo",
      subtitle: "Herramientas y frameworks de vanguardia para construir el futuro",
      groups: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de datos",
        devops: "DevOps y nube",
      },
    },
    projects: {
      title: "Proyectos",
      description:
        "Explora mi colección de proyectos que demuestran habilidades en desarrollo web, análisis de datos e ingeniería de software. Cada proyecto es una solución única a desafíos reales, combinando tecnología de punta con aplicaciones prácticas.",
      microTitle: "Microproyectos",
      items: [
        {
          id: 1,
          title: "Portafolio fotográfico con panel admin",
          description:
            "Portafolio dinámico en React con panel administrativo para gestión de contenido y actualizaciones en tiempo real.",
          image: "/projects-uploads/fotografo.png",
          tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
          githubUrl: "https://github.com/DougRib/fotografo-portfolio",
        },
        {
          id: 2,
          title: "Análisis de datos en Python",
          description:
            "Exploración de datos con Python, enfocada en limpieza, transformación y generación de insights iniciales. Organización de métricas con hojas de cálculo y visualizaciones simples.",
          image: "/projects-uploads/analise.jpg",
          tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
          githubUrl: "https://github.com/DougRib/desafio_alura_data_science",
        },
        {
          id: 3,
          title: "Proyecto Healthtech",
          description:
            "Pipeline completa de datos de la ANS (descarga, validaciones, enriquecimiento y agregación), scripts SQL para carga y análisis en PostgreSQL, además de API en FastAPI y dashboard en Vue con visualizaciones e indicadores.",
          image: "/projects-uploads/dashboard-healtech.png",
          tags: [
            "FastAPI",
            "TypeScript",
            "Tailwind",
            "Vue.js",
            "Vite",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/DougRib/projeto_healthtech",
        },
        {
          id: 4,
          title: "Portafolio Developer",
          description:
            "Landing page personal desarrollada con React y Tailwind CSS para presentar proyectos, habilidades e información de contacto de forma elegante y responsiva.",
          image: "/projects-uploads/portfolio-1.png",
          tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          githubUrl: "https://github.com/DougRib/portfolio",
        },
      ],
    },
    microProjects: { items: [] },
    contact: {
      sectionTitle: "Conectemos",
      statsTitle: "Estadísticas del desarrollador",
      statsSubtitle: "Logros y métricas en tiempo real",
      statsLabels: {
        projects: "Proyectos entregados",
        technologies: "Tecnologías",
        certifications: "Certificaciones",
        years: "Años de experiencia",
      },
      connectTitle: "Conecta conmigo",
      platformsTitle: "Plataformas de programación",
      formTitle: "Hablemos",
      labels: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Email",
        collaborationType: "Tipo de colaboración",
        message: "Mensaje",
      },
      placeholders: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Tu email",
        message: "Tu mensaje",
      },
      collaboration: {
        collaboration: "Colaboración",
        freelance: "Freelance",
        project: "Proyecto",
      },
      submit: "Enviar mensaje",
      sending: "Enviando...",
      validation: "Selecciona un tipo de colaboración.",
      success: "Mensaje enviado con éxito.",
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
      mailClientOpened: "Se abrió tu cliente de correo para enviar el mensaje.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con",
      backToTop: "Volver arriba",
    },
    misc: {
      loading: "Cargando...",
      notFoundTitle: "¡Ups! Página no encontrada",
      notFoundCta: "Volver al inicio",
      articlesTitle: "Últimos artículos e ideas",
      liveDemo: "Demo en vivo",
      inProgress: "En progreso",
      problem: "Problema",
      solution: "Solución",
      result: "Resultado",
      viewOnGithub: "Ver en GitHub",
      viewLive: "Ver en vivo",
    },
  },
  "pt-PT": {
    navbar: {
      home: "Início",
      skills: "Competências",
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Contacto",
      language: "Idioma",
      languages: {
        "pt-BR": "Português (Brasil)",
        en: "Inglês",
        es: "Espanhol",
        "pt-PT": "Português (Portugal)",
      },
    },
    hero: {
      greeting: "Olá, sou",
      name: "Douglas Ribeiro",
      role1: "Desenvolvedor Full Stack",
      role2: "Analista de Dados",
      role3: "Inteligência Artificial.",
      animatedLead: "Eu crio",
      animatedItems: [
        " Soluções full stack escaláveis ",
        "Funcionalidades inteligentes e orientadas a dados",
        "Arquitetura de sistemas escaláveis",
        "Experiências de utilizador com IA",
      ],
      description:
        "Construo software fiável, intuitivo e preparado para o futuro com paixão pela inovação.",
      ctaWork: "Os meus projetos",
      ctaResume: "Currículo",
      ctaResumeTitle: "Transferir currículo",
    },
    about: {
      title: "Sobre mim",
      profileTitle: "Perfil profissional",
      profileP1:
        "Sou estudante de Ciência da Computação com foco em Desenvolvimento Web Full Stack e Análise de Dados com Python. Crio interfaces modernas e intuitivas com TypeScript, React, Next.js e Tailwind CSS, e analiso dados com ferramentas como Pandas e Matplotlib para gerar insights.",
      profileP2:
        "A minha trajetória começou com a curiosidade em perceber como as aplicações funcionam e evoluiu para a paixão de construir soluções web funcionais, eficientes e centradas no utilizador, unindo engenharia sólida e decisões orientadas por dados.",
      certificationsTitle: "Certificações e cursos",
      certifications: [
        "Formação Python Backend Developer - Digital Innovation One (2026).",
        "Engenharia de Prompt - Digital Innovation One (2026).",
        "Curso de Inglês (Em andamento) - Digital Innovation One (2026).",
        "Formação Full Stack Python – EBAC (2025).",
        "Inteligência Artificial aplicada a Dados com Copilot - Digital Innovation One (2025).",
        "Formação Data Science – Alura / Oracle (2025).",
        "SQL (Básico e Avançado) – Digital Innovation One (2025).",
        "Base de Dados Oracle – Udemy (2025).",
        "Git e GitHub – Digital Innovation One (2025).",
        "Arquitectura de Redes – Udemy (2025).",
      ],
      timeline: [
        {
          badge: "Competência principal",
          title: "Desenvolvimento Full Stack",
          description:
            "Desenvolvimento de aplicações web completas com React, Next.js e Tailwind CSS no front-end, integrando APIs em Node.js e bases de dados SQL e NoSQL para soluções escaláveis e seguras.",
        },
        {
          badge: "Foco técnico",
          title: "Análise de Dados",
          description:
            "Análise, visualização e relatórios com Python, Pandas, NumPy, Matplotlib e Seaborn, transformando dados em insights acionáveis.",
        },
        {
          badge: "Crescimento contínuo",
          title: "Projetos e Aprendizagem Contínua",
          description:
            "Evoluo através de projetos pessoais e estudos constantes em tecnologia e dados. Soft skills: raciocínio analítico, resolução de problemas, trabalho em equipa e aprendizagem rápida.",
        },
      ],
    },
    features: {
      title: "Capacidades principais",
      items: [
        {
          title: "Desenvolvimento Full Stack",
          description:
            "Criação de aplicações web completas com React, Node.js e TypeScript para soluções modernas e escaláveis.",
        },
        {
          title: "IA e Machine Learning",
          description:
            "Criação de aplicações com IA e fluxos de automação usando OpenAI, Python e técnicas avançadas de ML.",
        },
        {
          title: "Arquitetura em cloud",
          description:
            "Desenho de soluções escaláveis em cloud com AWS, Docker e microserviços para alto desempenho.",
        },
        {
          title: "Design de bases de dados",
          description:
            "Especialista em bases SQL e NoSQL, modelação de dados e construção de aplicações robustas orientadas a dados.",
        },
        {
          title: "Design responsivo",
          description:
            "Criação de interfaces bonitas e acessíveis que funcionam perfeitamente em todos os dispositivos e plataformas.",
        },
        {
          title: "Otimização de performance",
          description:
            "Otimização de aplicações para velocidade, eficiência e experiência de utilizador excecional.",
        },
      ],
    },
    technologies: {
      title: "Tecnologias com as quais trabalho",
      subtitle: "Ferramentas e frameworks de ponta para construir o futuro",
      groups: {
        languages: "Linguagens",
        frontend: "Front-end",
        backend: "Back-end",
        database: "Base de dados",
        devops: "DevOps e cloud",
      },
    },
    projects: {
      title: "Projetos",
      description:
        "Explore a minha coleção de projetos que demonstram competências em desenvolvimento web, análise de dados e engenharia de software. Cada projeto representa uma solução única para desafios reais, combinando tecnologia de ponta com aplicações práticas.",
      microTitle: "Microprojetos",
      items: [
        {
          id: 1,
          title: "Portefólio fotográfico com painel admin",
          description:
            "Portefólio dinâmico em React com painel administrativo para gestão de conteúdo e atualizações em tempo real.",
          image: "/projects-uploads/fotografo.png",
          tags: ["Typescript", "TailwindCSS", "React", "Next.js", "Prisma"],
          githubUrl: "https://github.com/DougRib/fotografo-portfolio",
        },
        {
          id: 2,
          title: "Análise de dados em Python",
          description:
            "Exploração de dados com Python, com foco em limpeza, transformação e geração de insights iniciais. Organização de métricas com folhas de cálculo e visualizações simples.",
          image: "/projects-uploads/analise.jpg",
          tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
          githubUrl: "https://github.com/DougRib/desafio_alura_data_science",
        },
        {
          id: 3,
          title: "Projeto Healthtech",
          description:
            "Pipeline completa de dados da ANS (download, validações, enriquecimento e agregação), scripts SQL para carga e análises no PostgreSQL, além da API em FastAPI e dashboard em Vue com visualizações e indicadores.",
          image: "/projects-uploads/dashboard-healtech.png",
          tags: [
            "FastAPI",
            "TypeScript",
            "Tailwind",
            "Vue.js",
            "Vite",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/DougRib/projeto_healthtech",
        },
        {
          id: 4,
          title: "Portefólio Developer",
          description:
            "Landing page pessoal desenvolvida com React e Tailwind CSS para apresentar projetos, competências e informação de contacto de forma elegante e responsiva.",
          image: "/projects-uploads/portfolio-1.png",
          tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
          githubUrl: "https://github.com/DougRib/portfolio",
        },
      ],
    },
    microProjects: { items: [] },
    contact: {
      sectionTitle: "Vamos conectar-nos",
      statsTitle: "Estatísticas do programador",
      statsSubtitle: "Conquistas e métricas em tempo real",
      statsLabels: {
        projects: "Projetos entregues",
        technologies: "Tecnologias",
        certifications: "Certificações",
        years: "Anos de experiência",
      },
      connectTitle: "Conecta-te comigo",
      platformsTitle: "Plataformas de programação",
      formTitle: "Vamos conversar",
      labels: {
        firstName: "Nome",
        lastName: "Apelido",
        email: "Email",
        collaborationType: "Tipo de colaboração",
        message: "Mensagem",
      },
      placeholders: {
        firstName: "Nome",
        lastName: "Apelido",
        email: "O teu email",
        message: "A tua mensagem",
      },
      collaboration: {
        collaboration: "Colaboração",
        freelance: "Freelance",
        project: "Projeto",
      },
      submit: "Enviar mensagem",
      sending: "A enviar...",
      validation: "Seleciona um tipo de colaboração.",
      success: "Mensagem enviada com sucesso.",
      error: "Falha ao enviar a mensagem. Tenta novamente mais tarde.",
      mailClientOpened: "O teu cliente de email foi aberto para enviar a mensagem.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Feito com",
      backToTop: "Voltar ao topo",
    },
    misc: {
      loading: "A carregar...",
      notFoundTitle: "Ops! Página não encontrada",
      notFoundCta: "Voltar ao início",
      articlesTitle: "Últimos artigos e insights",
      liveDemo: "Demo ao vivo",
      inProgress: "Em andamento",
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
      viewOnGithub: "Ver no GitHub",
      viewLive: "Ver ao vivo",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  tArray: <T,>(path: string) => T[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const getNestedValue = (obj: Record<string, unknown>, path: string) => {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("pt-BR");

  React.useEffect(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    if (
      storedLanguage &&
      ["pt-BR", "en", "es", "pt-PT"].includes(storedLanguage)
    ) {
      setLanguageState(storedLanguage as Language);
      document.documentElement.lang = storedLanguage;
    } else {
      document.documentElement.lang = "pt-BR";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
  };

  const value = useMemo<LanguageContextValue>(() => {
    const t = (path: string) => {
      const result = getNestedValue(
        translations[language] as Record<string, unknown>,
        path
      );
      return typeof result === "string" ? result : "";
    };

    const tArray = <T,>(path: string): T[] => {
      const result = getNestedValue(
        translations[language] as Record<string, unknown>,
        path
      );
      return Array.isArray(result) ? (result as T[]) : [];
    };

    return { language, setLanguage, t, tArray };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
