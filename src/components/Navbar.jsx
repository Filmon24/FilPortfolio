import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'projects', text: 'Projects' },
    { id: 'skills', text: 'Skills' },
    { id: 'contact', text: 'Contact' }
  ];

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavClick = (id) => {
    setActiveNav(id);
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Filmon Ataklty
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-link px-3 py-2 text-sm font-medium ${activeNav === link.id ? 'active-nav' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.text}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-500 text-xl"></i>
              ) : (
                <i className="fas fa-moon text-gray-700 text-xl"></i>
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-yellow-500 text-xl"></i>
              ) : (
                <i className="fas fa-moon text-gray-700 text-xl"></i>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg transition-colors duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeNav === link.id 
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-blue-50 dark:hover:bg-blue-900/50'
              }`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;