import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SkillsEducation } from './components/SkillsEducation';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <About />
      <Experience />
      <SkillsEducation />
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App;