import React from 'react';
import { Globe, Menu, X, Anchor } from 'lucide-react';

interface HeaderProps {
  language: 'zh' | 'en';
  setLanguage: (lang: 'zh' | 'en') => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const translations = {
    zh: {
      company: '卡内利船舶科技有限公司',
      home: '首页',
      services: '服务项目',
      about: '关于我们',
      contact: '联系我们'
    },
    en: {
      company: 'Carnelli Marine Technology Co., Ltd.',
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const navItems = [
    { key: 'home', label: t.home },
    { key: 'services', label: t.services },
    { key: 'about', label: t.about },
    { key: 'contact', label: t.contact }
  ];

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Anchor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t.company}</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentSection(item.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentSection === item.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <Globe className="h-4 w-4 text-gray-300" />
              <button
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {language === 'zh' ? 'EN' : '中文'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-sm"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentSection(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-left font-medium transition-colors duration-200 ${
                    currentSection === item.key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;