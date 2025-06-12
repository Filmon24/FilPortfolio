const technicalSkills = {
    languages: ["JavaScript", "Python", "Java", "C++", "HTML/CSS", "SQL"],
    frameworks: ["React.js", "Node.js", "Express", "Django", "TensorFlow", "TailwindCSS"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    tools: ["Git/GitHub", "Docker", "AWS", "Figma", "Postman", "VS Code"]
  };
  
  const softSkills = [
    { name: "Communication", description: "Effective verbal and written communicator...", level: 90 },
    { name: "Teamwork", description: "Collaborative team player with experience...", level: 95 },
    { name: "Problem Solving", description: "Strong analytical skills with the ability...", level: 85 },
    { name: "Time Management", description: "Excellent organizational skills with...", level: 88 },
    { name: "Leadership", description: "Experience leading small teams and...", level: 82 }
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-500 pb-2">Skills & Technologies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              <i className="fas fa-code text-blue-500 mr-3"></i> Technical Skills
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.languages.map(skill => (
                    <span key={skill} className="skill-pill px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.frameworks.map(skill => (
                    <span key={skill} className="skill-pill px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Databases</h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.databases.map(skill => (
                    <span key={skill} className="skill-pill px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.tools.map(skill => (
                    <span key={skill} className="skill-pill px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              <i className="fas fa-users text-blue-500 mr-3"></i> Soft Skills
            </h3>
            
            <div className="space-y-6">
              {softSkills.map(skill => (
                <div key={skill.name}>
                  <h4 className="text-lg font-medium mb-3">{skill.name}</h4>
                  <p className="text-slate-600 mb-2">{skill.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;