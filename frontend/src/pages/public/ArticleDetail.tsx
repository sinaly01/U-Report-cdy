import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  User,
  Share2 } from
'lucide-react';
import { Link } from '../../components/public/Link';
import { articles } from '../../data/mockData';
export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => String(a.id) === id);
  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Article introuvable</h2>
        <Link href="/articles" className="text-ureport-blue hover:underline">
          Retour aux articles
        </Link>
      </div>);

  }
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-gray-500 hover:text-ureport-blue transition-colors font-semibold mb-8">
          
          <ArrowLeft className="w-4 h-4 mr-2" /> Tous les articles
        </Link>

        <div className="mb-6">
          <span className="text-ureport-gold font-bold tracking-wider uppercase text-sm">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-ureport-dark mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-2 text-gray-400" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-gray-400" />
              <span>{article.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 hidden sm:inline">
              Partager :
            </span>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-ureport-blue hover:text-white transition-colors text-gray-600">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-ureport-blue hover:text-white transition-colors text-gray-600">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover" />
          
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="text-gray-800 leading-relaxed space-y-6">
            {/* Split content by paragraphs for better rendering if it was real HTML, here we just render the string */}
            <p>{article.content}</p>

            <p>
              L'engagement des jeunes est au cœur de la stratégie de
              développement local. En participant activement aux décisions qui
              les concernent, ils deviennent les véritables acteurs du
              changement.
            </p>

            <blockquote className="border-l-4 border-ureport-gold pl-6 py-2 my-8 bg-orange-50/50 rounded-r-xl italic text-xl text-gray-700">
              "Nous ne sommes pas seulement les leaders de demain, nous sommes
              les acteurs d'aujourd'hui. Chaque petite action compte pour
              transformer notre commune."
            </blockquote>

            <h3 className="text-2xl font-heading font-bold text-ureport-dark mt-10 mb-4">
              Comment s'impliquer ?
            </h3>
            <p>
              Si cet article vous a inspiré, sachez qu'il est très facile de
              rejoindre le mouvement. Consultez notre page d'événements pour
              voir les prochaines actions prévues dans votre quartier.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
            #UReport
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
            #Cocody
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
            #Jeunesse
          </span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
            #{article.category}
          </span>
        </div>
      </div>
    </div>);

}