import React from 'react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white/90 text-sm font-medium">Trusted by 50+ startups</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Idea to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Market </span>
          in 90 Days
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We're not freelancers. We're your dedicated innovation crew — combining strategy, design, development, and launch expertise to turn your vision into a market-ready product.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="group flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-200">
            <PlayCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-lg font-medium">Watch Our Process</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Launched</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2M+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Funding Raised</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">90%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">30</div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">Days Average</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;