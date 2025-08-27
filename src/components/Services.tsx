import React from 'react';
import { Lightbulb, Palette, Code, Rocket, Users, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategy & Concept',
      description: 'From idea validation to market positioning, we craft winning strategies that resonate with your target audience.',
      features: ['Market Research', 'MVP Planning', 'Business Model Design']
    },
    {
      icon: Palette,
      title: 'Design & UX',
      description: 'Beautiful, conversion-focused designs that tell your story and drive user engagement.',
      features: ['UI/UX Design', 'Brand Identity', 'Prototyping']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Scalable, secure applications built with modern technologies and best practices.',
      features: ['Web & Mobile Apps', 'API Development', 'Database Architecture']
    },
    {
      icon: Rocket,
      title: 'Launch & Growth',
      description: 'Strategic launch campaigns and growth hacking to maximize your market impact.',
      features: ['Go-to-Market', 'Performance Marketing', 'Analytics Setup']
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Scale your team with our experts who integrate seamlessly with your existing workflow.',
      features: ['Dedicated Teams', 'Flexible Engagement', 'Knowledge Transfer']
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Optimization',
      description: 'Continuous improvement and feature development to keep you ahead of the competition.',
      features: ['Performance Monitoring', 'Feature Updates', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            End-to-End Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle everything from concept to launch, so you can focus on building your business while we build your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;