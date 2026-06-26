import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import RenderingGallery from './components/RenderingGallery'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <RenderingGallery />
        <Strengths />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}
