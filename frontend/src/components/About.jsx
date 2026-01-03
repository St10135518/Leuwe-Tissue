import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { aboutContent, companyInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full" />
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="order-2 lg:order-1">
            <img
              src={companyInfo.productImage}
              alt="LEUWE TISSUE Products"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
              South Africa's Trusted Tissue Manufacturer
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {aboutContent.overview}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              With years of experience in the industry, we have built a reputation 
              for delivering consistent quality and exceptional customer service. 
              Our products are found in homes, offices, hospitals, hotels, and 
              businesses across South Africa.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-teal-500/20">
              <Target className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutContent.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-cyan-500/20">
              <Eye className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutContent.vision}
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 sm:col-span-2 lg:col-span-1">
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-emerald-500/20">
              <Heart className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">Our Values</h4>
            <ul className="space-y-2">
              {aboutContent.values.map((value, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
