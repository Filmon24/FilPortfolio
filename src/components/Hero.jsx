import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
      <section id="home" className="pt-28 pb-20 w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Hello, I'm</h2>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">Filmon Ataklty</h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600 dark:text-gray-300 mb-6">
                Computer Science & Engineering Student
              </h2>
              
              <p className="text-slate-600 dark:text-gray-300 mb-8">
                Passionate about building innovative solutions to real-world problems. 
                Currently pursuing my BSc in Computer Science and Engineering <b> At Mekelle University. </b>
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  View My Projects
                </a>
                <a href="#contact" className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors shadow-md hover:shadow-lg">
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl float-animation">
                  <img 
                    src={profileImage}
                    alt="Filmon Ataklty" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;