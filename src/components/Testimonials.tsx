import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "InnovateLab transformed our rough idea into a market-ready product in just 12 weeks. Their end-to-end approach saved us months of coordination headaches.",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      company: "Raised $2.1M Series A",
      rating: 5,
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      content: "Working with this team felt like having senior co-founders rather than contractors. They understood our vision and executed beyond our expectations.",
      author: "Marcus Rodriguez",
      role: "Founder, GrowthCo",
      company: "50K+ users in 6 months",
      rating: 5,
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      content: "The design and development quality is exceptional. But what sets them apart is their strategic thinking and market understanding.",
      author: "Emily Thompson",
      role: "Co-founder, EcoMarket",
      company: "Featured in TechCrunch",
      rating: 5,
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      content: "They didn't just build our app — they helped us find product-market fit. The growth strategies they implemented doubled our conversion rate.",
      author: "David Park",
      role: "CEO, FinanceFlow",
      company: "200% revenue growth",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      content: "Professional, responsive, and results-driven. They delivered a scalable platform that handles our growing user base without any issues.",
      author: "Lisa Kumar",
      role: "CTO, MedConnect",
      company: "HIPAA compliant platform",
      rating: 5,
      image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      content: "The team's diverse expertise meant we never had to look elsewhere. From strategy to launch, they handled everything with exceptional quality.",
      author: "James Wilson",
      role: "Founder, GameHub",
      company: "100K+ active users",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Founders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from the founders who've achieved remarkable success with our partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a call to discuss your project and see how we can help you achieve similar results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Book Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;