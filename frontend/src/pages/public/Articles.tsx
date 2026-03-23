import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../components/public/Link';
import { Card } from '../../components/ui/Card';
import { articles } from '../../data/mockData';
export function Articles() {
  const categories = ['Tous', 'Engagement', 'Santé', 'Environnement', 'Guide'];
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-ureport-dark mb-6">
            Actualités & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les histoires inspirantes de notre communauté, nos guides
            pratiques et les retours sur nos actions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat, index) =>
          <button
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${index === 0 ? 'bg-ureport-dark text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Featured Article */}
        {articles.length > 0 &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-16">
          
            <Link href={`/articles/${articles[0].id}`} className="group block">
              <Card
              hover
              className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
              
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  <div className="absolute top-4 left-4 bg-ureport-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                    À la une
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-sm text-ureport-gold font-bold mb-4 uppercase tracking-wider">
                    {articles[0].category}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-ureport-dark mb-4 group-hover:text-ureport-blue transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-semibold text-gray-900">
                        {articles[0].author}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{articles[0].date}</span>
                    </div>
                    <span className="text-ureport-blue font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                      Lire <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        }

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) =>
          <motion.div
            key={article.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}>
            
              <Link
              href={`/articles/${article.id}`}
              className="group block h-full">
              
                <Card hover className="h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-ureport-dark">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-ureport-dark mb-3 group-hover:text-ureport-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        {article.date}
                      </div>
                      <span className="text-ureport-blue font-semibold flex items-center text-sm group-hover:translate-x-1 transition-transform">
                        Lire <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}