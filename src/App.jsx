import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skils from './components/Skils'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skils />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </Layout>
  )
}

export default App
