import profileImage from '../assets/profile.jpg';

const About = () => {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900 w-full transition-colors duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
              <span className="border-b-4 border-blue-500 pb-2">About Me</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-lg">
                  <img 
                    src={profileImage}
                    alt="Filmon Ataklty" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6">
                  I'm a fourth-year Computer Science and Engineering student at Mekelle University with a passion for software development, problem-solving, and creating impactful technology solutions.
                </p>
                
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-6">
                  What drives me is the opportunity to apply my technical knowledge to solve real-world challenges. Whether it's developing efficient algorithms, building user-friendly applications, or diving into data analysis.
                </p>
                
                <p className="text-lg text-slate-700 dark:text-gray-300 mb-8">
                  Beyond academics, I actively seek opportunities to contribute to open-source projects and develop my own projects that showcase my skills.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/50 px-4 py-3 rounded-lg shadow-sm">
                    <p className="font-medium text-blue-800 dark:text-blue-300"><i className="fas fa-graduation-cap mr-2"></i> Mekelle University</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/50 px-4 py-3 rounded-lg shadow-sm">
                    <p className="font-medium text-blue-800 dark:text-blue-300"><i className="fas fa-laptop-code mr-2"></i> 4th Year CSE Student</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/50 px-4 py-3 rounded-lg shadow-sm">
                    <p className="font-medium text-blue-800 dark:text-blue-300"><i className="fas fa-map-marker-alt mr-2"></i> Mekelle, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;