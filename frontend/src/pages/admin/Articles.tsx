import React from 'react';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  SearchIcon,
  Edit2Icon,
  Trash2Icon,
  EyeIcon } from
'lucide-react';
const articles = [
{
  id: 1,
  title: "L'impact de la jeunesse à Cocody : Bilan 2024",
  category: 'Actualités',
  status: 'Publié',
  date: '14 Oct 2024',
  views: 1240
},
{
  id: 2,
  title: "Comment s'engager dans sa commune ?",
  category: 'Formation',
  status: 'Publié',
  date: '10 Oct 2024',
  views: 856
},
{
  id: 3,
  title: 'Retour sur la journée de salubrité à la Riviera',
  category: 'Communauté',
  status: 'Brouillon',
  date: '05 Oct 2024',
  views: 0
},
{
  id: 4,
  title: 'Les nouveaux partenaires de U-Report',
  category: 'Actualités',
  status: 'Publié',
  date: '28 Sep 2024',
  views: 2100
},
{
  id: 5,
  title: 'Sensibilisation au CHU de Cocody',
  category: 'Santé',
  status: 'Publié',
  date: '15 Sep 2024',
  views: 3420
}];

export function Articles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4
      }}
      className="space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099DC] focus:border-transparent" />
          
        </div>
        <button className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors whitespace-nowrap">
          <PlusIcon className="w-5 h-5" />
          <span>Créer un article</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-[#64748B] text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Titre</th>
                <th className="px-6 py-4 font-medium">Catégorie</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Vues</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {articles.map((article) =>
              <tr
                key={article.id}
                className="hover:bg-gray-50 transition-colors">
                
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#1E293B]">
                      {article.title}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#64748B] bg-gray-100 px-2.5 py-1 rounded-md">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${article.status === 'Publié' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#64748B]">
                    {article.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#64748B]">
                    {article.views.toLocaleString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-1.5 text-gray-400 hover:text-[#0099DC] transition-colors rounded-md hover:bg-blue-50">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#6CC24A] transition-colors rounded-md hover:bg-green-50">
                      <Edit2Icon className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded-md hover:bg-red-50">
                      <Trash2Icon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>);

}