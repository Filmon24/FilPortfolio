import { experiences } from '../data/experience';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slower animation for the timeline
  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Gentler slide animations
  const leftX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={containerRef}>
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="border-b-4 border-blue-500 pb-2">Work Experience</span>
      </h2>
      
      <div className="flex justify-center mb-12">
        <a href="#" className="flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors shadow-md hover:shadow-lg">
          <i className="fas fa-download mr-3"></i> Download Full CV (PDF)
        </a>
      </div>
      
      <div className="relative">
        <motion.div 
          className="absolute left-4 md:left-1/2 h-full border-r-2 border-dashed border-blue-200"
          style={{ height: lineY }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="relative pl-16 md:pl-0 md:flex md:justify-between md:items-center md:odd:flex-row-reverse"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <motion.div 
                className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10 border-4 border-white shadow-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <i className="fas fa-briefcase text-white text-sm"></i>
              </motion.div>
              
              <motion.div 
                className="md:w-5/12"
                style={{ x: index % 2 === 0 ? leftX : rightX }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{exp.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">{exp.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-3">{exp.company}</h4>
                  <div className="mb-4">
                    <p className="text-slate-600 mb-3">{exp.description}</p>
                    {exp.location && (
                      <p className="text-sm text-slate-500 flex items-center">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-blue-800 mb-2">Key Responsibilities & Achievements:</h5>
                    <ul className="text-slate-600 space-y-2">
                      {exp.points.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                          <i className="fas fa-check-circle text-blue-500 mt-1 mr-2 text-sm"></i>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  {exp.technologies && (
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-blue-800 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
              
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 