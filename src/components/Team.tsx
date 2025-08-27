import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Technical Lead',
      expertise: 'Full-Stack Development',
      bio: '8+ years building scalable applications for startups and enterprise.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Maya Rodriguez',
      role: 'Design Director',
      expertise: 'UX/UI & Brand Strategy',
      bio: 'Award-winning designer with 6+ years creating conversion-focused experiences.',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jordan Kim',
      role: 'Growth Strategist',
      expertise: 'Marketing & Analytics',
      bio: 'Former startup founder with expertise in growth hacking and market penetration.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sam Okafor',
      role: 'Content Creator',
      expertise: 'Storytelling & Media',
      bio: 'Creative director specializing in compelling narratives and visual content.',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Riley Thompson',
      role: 'DevOps Engineer',
      expertise: 'Infrastructure & Security',
      bio: 'Cloud architect ensuring scalable, secure deployments from day one.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Casey Park',
      role: 'Product Manager',
      expertise: 'Strategy & Execution',
      bio: 'Former tech consultant with deep experience in product-market fit.',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your Innovation Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated team of specialists who've helped dozens of startups go from idea to successful launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-purple-600 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how our team can accelerate your project timeline.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Schedule Team Introduction
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;