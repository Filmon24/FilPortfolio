import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="border-b-4 border-blue-500 pb-2">Work Experience</span>
      </h2>
      
      <div className="flex justify-center mb-12">
        <a href="#" className="flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-900 transition-colors shadow-md hover:shadow-lg">
          <i className="fas fa-download mr-3"></i> Download Full CV (PDF)
        </a>
      </div>
      
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full border-r-2 border-dashed border-blue-200"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-16 md:pl-0 md:flex md:justify-between md:items-center md:odd:flex-row-reverse">
              <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10 border-4 border-white shadow-lg">
                <i className="fas fa-briefcase text-white text-sm"></i>
              </div>
              
              <div className="md:w-5/12">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{exp.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">{exp.company}</h4>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <ul className="text-slate-600 space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check text-blue-500 mt-1 mr-2 text-sm"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 