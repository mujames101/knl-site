import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactProps {
  language: 'zh' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const translations = {
    zh: {
      title: '联系我们',
      subtitle: '专业的技术团队随时为您提供服务',
      form: {
        name: '姓名',
        email: '邮箱',
        company: '公司名称',
        phone: '联系电话',
        service: '感兴趣的服务',
        message: '详细需求',
        submit: '发送消息'
      },
      services: [
        '船舶结构强度分析',
        '振动分析与控制',
        '噪声评估与控制',
        '动力学分析',
        '疲劳寿命评估',
        '结构安全评估'
      ],
      contact: {
        address: '中国上海市浦东新区海洋科技园区',
        phone: '+86-21-1234-5678',
        email: 'info@carnelli-marine.com',
        hours: '周一至周五 9:00-18:00'
      },
      placeholders: {
        name: '请输入您的姓名',
        email: '请输入您的邮箱地址',
        company: '请输入公司名称',
        phone: '请输入联系电话',
        message: '请详细描述您的需求...'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Our professional technical team is ready to serve you',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        phone: 'Phone',
        service: 'Service of Interest',
        message: 'Message',
        submit: 'Send Message'
      },
      services: [
        'Structural Strength Analysis',
        'Vibration Analysis & Control',
        'Noise Assessment & Control',
        'Dynamic Analysis',
        'Fatigue Life Assessment',
        'Structural Safety Assessment'
      ],
      contact: {
        address: 'Marine Technology Park, Pudong New Area, Shanghai, China',
        phone: '+86-21-1234-5678',
        email: 'info@carnelli-marine.com',
        hours: 'Monday - Friday 9:00-18:00'
      },
      placeholders: {
        name: 'Enter your name',
        email: 'Enter your email address',
        company: 'Enter company name',
        phone: 'Enter phone number',
        message: 'Please describe your requirements in detail...'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'zh' ? '消息已发送，我们会尽快联系您！' : 'Message sent! We will contact you soon!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '发送消息' : 'Send Message'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.placeholders.name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.placeholders.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t.placeholders.company}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.placeholders.phone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.service}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                >
                  <option value="">{language === 'zh' ? '请选择服务类型' : 'Select service type'}</option>
                  {t.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.form.message} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.placeholders.message}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{t.form.submit}</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'zh' ? '联系信息' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'zh' ? '地址' : 'Address'}
                    </h4>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'zh' ? '电话' : 'Phone'}
                    </h4>
                    <p className="text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'zh' ? '邮箱' : 'Email'}
                    </h4>
                    <p className="text-gray-600">{t.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'zh' ? '工作时间' : 'Business Hours'}
                    </h4>
                    <p className="text-gray-600">{t.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'zh' ? '我们的位置' : 'Our Location'}
              </h3>
              <div 
                className="h-64 bg-gray-200 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop')`
                }}
              >
                <div className="w-full h-full bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">{language === 'zh' ? '上海海洋科技园区' : 'Shanghai Marine Tech Park'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;