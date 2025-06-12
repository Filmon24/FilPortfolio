const Footer = () => {
    const links = [
      { id: 'home', text: 'Home' },
      { id: 'about', text: 'About' },
      { id: 'experience', text: 'Experience' },
      { id: 'projects', text: 'Projects' },
      { id: 'skills', text: 'Skills' },
      { id: 'contact', text: 'Contact' }
    ];
  
    return (
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                YourName
              </h2>
              <p className="mt-2 text-slate-400">Computer Science & Engineering Student</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {links.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">© 2023 YourName. All rights reserved.</p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;