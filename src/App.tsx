import About from './components/About'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
