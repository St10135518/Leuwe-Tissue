import React from 'react';
import { Package, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { products } from '../data/mock';

const Products = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Quality Tissue Products
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            From everyday essentials to industrial-grade supplies, we manufacture 
            a comprehensive range of tissue products to meet your needs.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.bulkAvailable && (
                  <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-teal-500 hover:bg-teal-600 text-xs">
                    Bulk Available
                  </Badge>
                )}
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-3 sm:w-4 h-3 sm:h-4 text-teal-500" />
                  <span className="text-[10px] sm:text-xs font-medium text-teal-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Specifications */}
                <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate-500">Ply</span>
                    <span className="text-slate-700 font-medium">{product.specifications.ply}</span>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate-500">
                      {product.specifications.sheets ? 'Sheets' : 'Length'}
                    </span>
                    <span className="text-slate-700 font-medium">
                      {product.specifications.sheets || product.specifications.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-[10px] sm:text-xs">
                    <span className="text-slate-500">Packaging</span>
                    <span className="text-slate-700 font-medium">{product.specifications.packaging}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Need custom specifications or bulk orders? Contact us for personalized solutions.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group"
          >
            Request Custom Order
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
