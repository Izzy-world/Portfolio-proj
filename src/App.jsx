import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './pages/AboutPage'
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <About />
              <ContactForm />
            </>
          } />
          {/* Both routes will show the same AboutPage component */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;