import { lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Footer } from './components/layout/Footer';

const About = lazy(() => import('./components/sections/About').then((module) => ({ default: module.About })));
const Skills = lazy(() => import('./components/sections/Skills').then((module) => ({ default: module.Skills })));
const Experience = lazy(() => import('./components/sections/Experience').then((module) => ({ default: module.Experience })));
const Projects = lazy(() => import('./components/sections/Projects').then((module) => ({ default: module.Projects })));
const Certifications = lazy(() => import('./components/sections/Certifications').then((module) => ({ default: module.Certifications })));
const Contact = lazy(() => import('./components/sections/Contact').then((module) => ({ default: module.Contact })));

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-amber-500/30 selection:text-amber-700 font-sans">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections in Prompt Order */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Suspense fallback={<div className="sr-only" aria-live="polite">Loading portfolio content</div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      {/* Broadcast Footer */}
      <Footer />
    </div>
  );
}

export default App;
