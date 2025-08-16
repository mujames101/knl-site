import React from 'react';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'zh' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const translations = {
    zh: {
      company: '上海卡内利船舶科技有限公司',
      description: '专业的船舶技术服务提供商，致力于为全球船舶行业提供优质的结构分析、振动控制和噪声评估服务。',
      services: {
        title: '服务项目',
        items: [
          '船舶结构强度分析',
          '振动分析与控制',
          '噪声评估与控制',
          '动力学分析'
        ]
      },
      contact: {
        title: '联系方式',
        address: '中国上海市浦东新区海洋科技园区',
        phone: '+86-21-1234-5678',
        email: 'info@carnelli-marine.com'
      },
      copyright: '版权所有',
      rights: '保留所有权利'
    },
    en: {
      company: 'Carnelli Marine Technology Co., Ltd.',
      description: 'Professional marine technology service provider, dedicated to providing quality structural analysis, vibration control, and noise assessment services for the global maritime industry.',
      services: {
        title: 'Services',
        items: [
          'Structural Strength Analysis',
          'Vibration Analysis & Control',
          'Noise Assessment & Control',
          'Dynamic Analysis'
        ]
      },
      contact: {
        title: 'Contact Info',
        address: 'Marine Technology Park, Pudong New Area, Shanghai, China',
        phone: '+86-21-1234-5678',
        email: 'info@carnelli-marine.com'
      },
      copyright: 'Copyright',
      rights: 'All rights reserved'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Anchor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">{t.company}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t.description}</p>
            <div className="flex space-x-4">
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 cursor-pointer">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 cursor-pointer">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.services.title}</h4>
            <ul className="space-y-2">
              {t.services.items.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.contact.title}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{t.contact.address}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">{t.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">{t.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t.copyright} © {new Date().getFullYear()} {t.company}. {t.rights}.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                {language === 'zh' ? '服务条款' : 'Terms of Service'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;