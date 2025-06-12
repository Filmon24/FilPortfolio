const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "AI Image Recognition",
      description: "Machine learning application that classifies images with 92% accuracy using CNN.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "TensorFlow", "Flask", "OpenCV"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "University Portal",
      description: "A comprehensive university management system for students, faculty, and administration.",
      image: "https://images.unsplash.com/photo-1557838923-298f30969410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      tags: ["Django", "PostgreSQL", "Bootstrap"],
      github: "#",
      demo: "#"
    }
  ];
  
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
                      <a href={project.github} className="text-blue-500 hover:text-blue-700">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={project.demo} className="text-blue-500 hover:text-blue-700">
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
                  <a href="#" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                    Read More <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              <i className="fab fa-github mr-3"></i> View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;