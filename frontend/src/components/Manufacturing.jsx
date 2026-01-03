import React from 'react';
import { Factory, ShieldCheck, Sparkles, Leaf } from 'lucide-react';
import { manufacturingFeatures } from '../data/mock';

const iconMap = {
  Factory: Factory,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Leaf: Leaf,
};

const Manufacturing = () => {
  return (
    <section id="manufacturing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mb-4">
            Manufacturing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Production Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            State-of-the-art manufacturing facilities combined with strict quality 
            control measures ensure every product meets our high standards.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-2xl blur-xl" />
            <img
              src="https://images.pexels.com/photos/35454191/pexels-photo-35454191.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Manufacturing Process"
              className="relative w-full rounded-2xl shadow-2xl border border-white/10"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden sm:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-xs text-slate-500">Production</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-xs text-slate-500">Quality Check</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {manufacturingFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="group flex gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
