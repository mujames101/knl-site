import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

interface AboutProps {
  language: 'zh' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const translations = {
    zh: {
      title: '关于卡内利船舶科技',
      subtitle: '专业 • 创新 • 可靠',
      description: '卡内利船舶科技有限公司可追溯于2010年，是一家专业从事船舶结构分析、振动控制和噪声评估的高新技术企业。我们拥有一支由资深海洋工程师和技术专家组成的专业团队，致力于为全球船舶行业提供优质的技术服务。',
      mission: {
        title: '我们的使命',
        content: '通过先进的技术和专业的服务，为船舶行业提供安全、高效、环保的技术解决方案，推动海洋工程技术的发展与创新。'
      },
      vision: {
        title: '我们的愿景',
        content: '成为全球领先的船舶技术服务提供商，以卓越的技术实力和优质的服务品质赢得客户信赖。'
      },
      values: [
        { title: '专业', description: '拥有深厚的技术积累和丰富的项目经验' },
        { title: '创新', description: '持续追求技术创新和服务模式创新' },
        { title: '质量', description: '严格的质量控制体系确保服务品质' },
        { title: '诚信', description: '诚实守信，与客户建立长期合作关系' }
      ],
      stats: [
        { icon: Award, number: '15+', label: '年专业经验' },
        { icon: Users, number: '30+', label: '专业团队' },
        { icon: Globe, number: '20+', label: '服务国家' },
        { icon: Target, number: '200+', label: '成功项目' }
      ]
    },
    en: {
      title: 'About Canelli Marine Technology',
      subtitle: 'Professional • Innovative • Reliable',
      description: 'Canelli Marine Technology Co., Ltd. can traced back to 2010 as a high-tech enterprise specializing in vessel structural analysis, vibration control, and noise assessment. We have a professional team of senior marine engineers and technical experts, dedicated to providing quality technical services to the global maritime industry.',
      mission: {
        title: 'Our Mission',
        content: 'To provide safe, efficient, and environmentally friendly technical solutions for the maritime industry through advanced technology and professional services, promoting the development and innovation of marine engineering technology.'
      },
      vision: {
        title: 'Our Vision',
        content: 'To become a globally leading marine technology service provider, earning customer trust through excellent technical capabilities and superior service quality.'
      },
      values: [
        { title: 'Professional', description: 'Deep technical expertise and extensive project experience' },
        { title: 'Innovation', description: 'Continuous pursuit of technological and service innovation' },
        { title: 'Quality', description: 'Strict quality control system ensuring service excellence' },
        { title: 'Integrity', description: 'Honest and trustworthy, building long-term partnerships' }
      ],
      stats: [
        { icon: Award, number: '15+', label: 'Years Experience' },
        { icon: Users, number: '30+', label: 'Professional Team' },
        { icon: Globe, number: '20+', label: 'Countries Served' },
        { icon: Target, number: '200+', label: 'Successful Projects' }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">{t.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {t.stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission.title}</h3>
            <p className="text-gray-700 leading-relaxed">{t.mission.content}</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision.title}</h3>
            <p className="text-gray-700 leading-relaxed">{t.vision.content}</p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'zh' ? '核心价值观' : 'Core Values'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-xl font-bold text-blue-600 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Image */}
        <div className="mt-20">
          <div 
            className="h-96 rounded-2xl bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">
                  {language === 'zh' ? '携手共创海洋工程未来' : 'Building the Future of Marine Engineering Together'}
                </h3>
                <p className="text-xl opacity-90">
                  {language === 'zh' ? '专业技术 • 优质服务 • 值得信赖' : 'Professional Technology • Quality Service • Trustworthy'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;