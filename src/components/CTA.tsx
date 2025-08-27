import React from 'react';
import { Calendar, MessageCircle, Zap, ArrowRight } from 'lucide-react';

const CTA = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Book Strategy Call',
      description: 'Free 30-minute consultation to discuss your project',
      action: 'Schedule Now',
      primary: true
    },
    {
      icon: MessageCircle,
      title: 'Pitch Your Idea',
      description: 'Share your vision and get expert feedback',
      action: 'Start Conversation',
      primary: false
    },
    {
      icon: Zap,
      title: 'Co-Launch Partnership',
      description: 'Explore revenue sharing opportunities',
      action: 'Learn More',
      primary: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you have a clear vision or just a spark of an idea, we're here to help you turn it into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 text-center ${
                  option.primary
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 hover:shadow-2xl transform hover:scale-105'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  option.primary ? 'bg-white/20' : 'bg-blue-600'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className={`mb-6 ${option.primary ? 'text-blue-100' : 'text-gray-300'}`}>
                  {option.description}
                </p>
                
                <button className={`group flex items-center justify-center space-x-2 w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  option.primary
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  <span>{option.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Drop us a line or schedule a call — we typically respond within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:hello@innovatelab.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
              hello@innovatelab.com
            </a>
            <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;