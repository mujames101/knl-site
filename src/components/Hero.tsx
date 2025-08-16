import React from 'react';
import { ArrowRight, Ship, Activity, Volume2 } from 'lucide-react';

interface HeroProps {
  language: 'zh' | 'en';
  setCurrentSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ language, setCurrentSection }) => {
  const translations = {
    zh: {
      title: '专业船舶技术解决方案',
      subtitle: '船舶强度分析 • 振动控制 • 噪声评估',
      description: '卡内利船舶科技致力于为全球船舶行业提供专业的结构强度分析、振动控制和噪声评估服务，确保您的船舶安全、高效、环保运行。',
      cta: '了解我们的服务',
      experience: '专业经验',
      projects: '完成项目',
      clients: '服务客户'
    },
    en: {
      title: 'Professional Marine Technology Solutions',
      subtitle: 'Structural Analysis • Vibration Control • Noise Assessment',
      description: 'Canelli Marine Technology is dedicated to providing professional structural strength analysis, vibration control, and noise assessment services for the global maritime industry, ensuring safe, efficient, and environmentally friendly vessel operations.',
      cta: 'Explore Our Services',
      experience: 'Years Experience',
      projects: 'Projects Completed',
      clients: 'Clients Served'
    }
  };

  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 mb-8 font-light">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
          
          <button
            onClick={() => setCurrentSection('services')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>{t.cta}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Key Services Icons */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center text-white group">
            <div className="bg-blue-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
              <Ship className="h-10 w-10 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'zh' ? '结构强度' : 'Structural Strength'}
            </h3>
            <p className="text-gray-300">
              {language === 'zh' ? '专业的船舶结构强度分析' : 'Professional vessel structural analysis'}
            </p>
          </div>
          
          <div className="text-center text-white group">
            <div className="bg-blue-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
              <Activity className="h-10 w-10 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'zh' ? '振动控制' : 'Vibration Control'}
            </h3>
            <p className="text-gray-300">
              {language === 'zh' ? '先进的振动分析与控制技术' : 'Advanced vibration analysis and control'}
            </p>
          </div>
          
          <div className="text-center text-white group">
            <div className="bg-blue-600/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
              <Volume2 className="h-10 w-10 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {language === 'zh' ? '噪声评估' : 'Noise Assessment'}
            </h3>
            <p className="text-gray-300">
              {language === 'zh' ? '全面的噪声分析与控制方案' : 'Comprehensive noise analysis solutions'}
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-gray-300">{t.experience}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
            <div className="text-gray-300">{t.projects}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">{t.clients}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;