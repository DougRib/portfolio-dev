import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import GlowingEffectDemo from "./ui/glowing-effect-demo";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const { t, tArray } = useLanguage();
  const projectsData = tArray<Project>("projects.items");
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-2">{t("projects.title")}</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          {t("projects.description")}
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
