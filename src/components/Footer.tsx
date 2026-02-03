import { useState, useEffect } from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
  { image: "/icons-footer/react.svg", label: "React" },
  { image: "/icons-footer/ts.svg", label: "TypeScript" },
  { image: "/icons-footer/tailwindcss.svg", label: "Tailwind" },
  { image: "/icons-footer/vite-dark.svg", label: "Vite" },
];

  
  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="bg-gray-900/80 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Logo and copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/e9810342-de6a-4f13-9171-0077afe8c75a.png" 
                alt="Kalp Logo" 
                className="h-10 w-10"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  &copy; {currentYear} Douglas Ribeiro. Todos os direitos reservados.
                </p>
                <p className="text-gray-400 text-md mt-1">
                  Feito com <Heart className="inline w-3 h-3 text-red-500" /> e <Code2 className="inline w-3 h-3 text-blue-500" />
                </p>
              </div>
            </div>

            {/* Right side - Tech stack icons */}
            <div className="flex items-center space-x-4">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  title={tech.label}
                >
                  <img src={tech.image} alt={tech.label} className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full border border-cyan-800 hover:border-cyan-600 hover:shadow-cyan-500/20 bg-gray-800/80 hover:bg-gray-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5 " />
        </button>
      )}
    </footer>
  );
};

export default Footer;
