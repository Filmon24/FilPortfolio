import { social } from '../data/social';

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-500 pb-2">Get In Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {/* Formspree Integration: Add action and method attributes */}
              <form action="https://formspree.io/f/xovwwpoq" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  {/* Important: Ensure the 'name' attribute matches your desired field name in Formspree */}
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200" required></textarea>
                </div>
                
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-envelope text-blue-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800 mb-1">Email Me</h3>
                    <a href={`mailto:${social.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">{social.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fab fa-linkedin text-blue-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800 mb-1">LinkedIn</h3>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">Connect on LinkedIn</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fab fa-github text-blue-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800 mb-1">GitHub</h3>
                    <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">View my GitHub</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800 mb-1">Location</h3>
                    <p className="text-slate-600">{social.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-slate-800 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {social.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      title={link.name}
                    >
                      <i className={`${link.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Contact;