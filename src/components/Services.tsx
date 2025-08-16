import React from 'react';
import { Ship, Activity, Volume2, BarChart3, Waves, Shield } from 'lucide-react';

interface ServicesProps {
  language: 'zh' | 'en';
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const translations = {
    zh: {
      title: '专业服务项目',
      subtitle: '我们为船舶行业提供全方位的技术分析与解决方案',
      services: {
        structural: {
          title: '船舶结构强度分析',
          description: '采用先进的有限元分析技术，对船体结构进行全面的强度评估，确保船舶结构安全性和可靠性。',
          features: ['有限元分析', '疲劳强度评估', '极限强度分析', '结构优化设计']
        },
        vibration: {
          title: '振动分析与控制',
          description: '专业的船舶振动测试与分析服务，提供有效的振动控制解决方案，改善船舶舒适性。',
          features: ['振动测试', '模态分析', '振动控制设计', '减振方案优化']
        },
        noise: {
          title: '噪声评估与控制',
          description: '全面的船舶噪声分析与控制服务，确保符合国际海事组织噪声标准要求。',
          features: ['噪声测试', '声学分析', '降噪设计', '声学材料选择']
        },
        dynamic: {
          title: '动力学分析',
          description: '船舶动力学特性分析，包括运动响应预报和海洋工程结构动力分析。',
          features: ['运动响应分析', '波浪载荷计算', '动力定位分析', '锚泊系统分析']
        },
        fatigue: {
          title: '疲劳寿命评估',
          description: '基于长期海洋环境载荷的船舶结构疲劳寿命预测和评估服务。',
          features: ['疲劳载荷谱分析', '裂纹扩展分析', '寿命预测', '维护策略制定']
        },
        safety: {
          title: '结构安全评估',
          description: '船舶结构完整性评估，包括损伤检测、剩余强度分析和安全性评价。',
          features: ['损伤评估', '剩余强度分析', '安全性评价', '维修建议']
        }
      }
    },
    en: {
      title: 'Professional Services',
      subtitle: 'Comprehensive technical analysis and solutions for the maritime industry',
      services: {
        structural: {
          title: 'Structural Strength Analysis',
          description: 'Advanced finite element analysis for comprehensive vessel structural assessment, ensuring structural safety and reliability.',
          features: ['Finite Element Analysis', 'Fatigue Strength Assessment', 'Ultimate Strength Analysis', 'Structural Optimization']
        },
        vibration: {
          title: 'Vibration Analysis & Control',
          description: 'Professional vessel vibration testing and analysis services with effective vibration control solutions to improve vessel comfort.',
          features: ['Vibration Testing', 'Modal Analysis', 'Vibration Control Design', 'Damping Solution Optimization']
        },
        noise: {
          title: 'Noise Assessment & Control',
          description: 'Comprehensive vessel noise analysis and control services ensuring compliance with IMO noise standards.',
          features: ['Noise Testing', 'Acoustic Analysis', 'Noise Reduction Design', 'Acoustic Material Selection']
        },
        dynamic: {
          title: 'Dynamic Analysis',
          description: 'Vessel dynamics analysis including motion response prediction and offshore structure dynamic analysis.',
          features: ['Motion Response Analysis', 'Wave Load Calculation', 'Dynamic Positioning Analysis', 'Mooring System Analysis']
        },
        fatigue: {
          title: 'Fatigue Life Assessment',
          description: 'Vessel structural fatigue life prediction and assessment based on long-term marine environmental loads.',
          features: ['Fatigue Load Spectrum Analysis', 'Crack Propagation Analysis', 'Life Prediction', 'Maintenance Strategy']
        },
        safety: {
          title: 'Structural Safety Assessment',
          description: 'Vessel structural integrity assessment including damage detection, residual strength analysis, and safety evaluation.',
          features: ['Damage Assessment', 'Residual Strength Analysis', 'Safety Evaluation', 'Repair Recommendations']
        }
      }
    }
  };

  const t = translations[language];

  const serviceList = [
    { key: 'structural', icon: Ship, color: 'bg-blue-600' },
    { key: 'vibration', icon: Activity, color: 'bg-green-600' },
    { key: 'noise', icon: Volume2, color: 'bg-purple-600' },
    { key: 'dynamic', icon: Waves, color: 'bg-cyan-600' },
    { key: 'fatigue', icon: BarChart3, color: 'bg-orange-600' },
    { key: 'safety', icon: Shield, color: 'bg-red-600' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const serviceData = t.services[service.key as keyof typeof t.services];
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.key}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${service.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{serviceData.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{serviceData.description}</p>
                
                <div className="space-y-2">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'zh' ? '需要专业的船舶技术服务？' : 'Need Professional Marine Technical Services?'}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {language === 'zh' 
              ? '联系我们的专家团队，获取定制化的技术解决方案' 
              : 'Contact our expert team for customized technical solutions'
            }
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            {language === 'zh' ? '立即咨询' : 'Contact Now'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;