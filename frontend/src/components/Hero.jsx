import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Premium Quality Products',
    'Bulk & Wholesale Pricing',
    'Nationwide Delivery',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">Trusted Tissue Manufacturer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              {companyInfo.tagline}
              <span className="block mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                LEUWE TISSUE
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              South Africa's leading tissue manufacturer delivering premium quality 
              toilet paper, paper towels, facial tissues, and jumbo rolls for 
              businesses and consumers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#products')}
                size="lg"
                variant="outline"
                className="border-slate-500 text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300"
              >
                View Products
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-teal-400" />
                  <span className="text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Actual Product */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <img
                src={companyInfo.productImage}
                alt="LEUWE TISSUE Premium Products"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-slate-800">10+</div>
                <div className="text-xs sm:text-sm text-slate-500">Years Experience</div>
              </div>
              
              {/* Floating Quality Badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-teal-500 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <span className="text-xs sm:text-sm font-semibold">High Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
