import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { aboutContent } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full" />
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3Njc0NDY0Mjl8MA&ixlib=rb-4.1.0&q=85&w=600"
              alt="LEUWE TISSUE Manufacturing"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              South Africa's Trusted Tissue Manufacturer
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {aboutContent.overview}
            </p>
            <p className="text-slate-600 leading-relaxed">
              With years of experience in the industry, we have built a reputation 
              for delivering consistent quality and exceptional customer service. 
              Our products are found in homes, offices, hospitals, hotels, and 
              businesses across South Africa.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed">
              {aboutContent.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              {aboutContent.vision}
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Our Values</h4>
            <ul className="space-y-2">
              {aboutContent.values.map((value, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
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
