import React from 'react';
import { Factory, ShieldCheck, Sparkles, Leaf } from 'lucide-react';
import { manufacturingFeatures, companyInfo } from '../data/mock';

const iconMap = {
  Factory: Factory,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Leaf: Leaf,
};

const Manufacturing = () => {
  return (
    <section id="manufacturing" className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mb-4">
            Manufacturing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Production Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            State-of-the-art manufacturing facilities combined with strict quality 
            control measures ensure every product meets our high standards.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-2xl blur-xl" />
            <img
              src={companyInfo.productImage}
              alt="LEUWE TISSUE Products"
              className="relative w-full rounded-2xl shadow-2xl border border-white/10"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Production</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">Quality Check</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {manufacturingFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="group flex gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
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
