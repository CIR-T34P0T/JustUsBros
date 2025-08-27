import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: 'FinanceFlow',
      category: 'fintech',
      description: 'AI-powered personal finance app that raised $1.2M seed funding',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Node.js', 'AI/ML'],
      results: '50K+ users in 6 months',
      links: { live: '#', github: '#' }
    },
    {
      title: 'EcoMarket',
      category: 'ecommerce',
      description: 'Sustainable marketplace connecting eco-conscious consumers with green brands',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Stripe', 'GraphQL'],
      results: '$500K GMV in launch month',
      links: { live: '#', github: '#' }
    },
    {
      title: 'MedConnect',
      category: 'healthtech',
      description: 'Telemedicine platform streamlining patient-doctor interactions',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'WebRTC', 'HIPAA Compliant'],
      results: '95% patient satisfaction',
      links: { live: '#', github: '#' }
    },
    {
      title: 'GameHub',
      category: 'gaming',
      description: 'Community platform for indie game developers and players',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'MongoDB'],
      results: '100K+ active users',
      links: { live: '#', github: '#' }
    },
    {
      title: 'EduTech Pro',
      category: 'edtech',
      description: 'Interactive learning platform with AI-powered personalization',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Python', 'TensorFlow'],
      results: '85% completion rate',
      links: { live: '#', github: '#' }
    },
    {
      title: 'WorkFlow',
      category: 'saas',
      description: 'Project management tool designed for remote-first teams',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Django', 'PostgreSQL'],
      results: '40% productivity increase',
      links: { live: '#', github: '#' }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'healthtech', name: 'HealthTech' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'edtech', name: 'EdTech' },
    { id: 'saas', name: 'SaaS' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to market leader — see how we've helped startups achieve remarkable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.live}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.links.github}
                    className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">{project.results}</div>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;