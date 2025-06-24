import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-500 pb-2">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-100 transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="View on GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                    <a href={project.demo} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                  onClick={() => window.open(project.demo, '_blank')}
                  disabled={project.demo === "#"}
                >
                  Watch It <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Filmon24" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <i className="fab fa-github mr-3"></i> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;