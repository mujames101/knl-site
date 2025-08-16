import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [currentSection, setCurrentSection] = useState('home');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'services':
        return <Services language={language} />;
      case 'about':
        return <About language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return (
          <>
            <Hero language={language} setCurrentSection={setCurrentSection} />
            <Services language={language} />
            <About language={language} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      
      <main>
        {renderCurrentSection()}
      </main>
      
      <Footer language={language} />
    </div>
  );
}

export default App;