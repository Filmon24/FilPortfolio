const Layout = ({ children }) => {
    return (
      <div className="font-['Inter'] bg-gray-50 dark:bg-gray-900 text-slate-800 dark:text-gray-100 min-h-screen w-full overflow-x-hidden transition-colors duration-300">
        {children}
      </div>
    );
  };
  
  export default Layout;