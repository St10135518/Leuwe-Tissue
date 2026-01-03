import React from 'react';
import { Award, Package, Truck } from 'lucide-react';
import { highlights } from '../data/mock';

const iconMap = {
  Award: Award,
  Package: Package,
  Truck: Truck,
};

const Highlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <div
                key={highlight.id}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 border border-transparent hover:border-teal-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
