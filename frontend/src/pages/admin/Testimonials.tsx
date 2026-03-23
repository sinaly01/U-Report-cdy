import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, QuoteIcon, CheckIcon, XIcon } from 'lucide-react';
const testimonials = [
{
  id: 1,
  name: 'Awa Diomandé',
  role: 'Étudiante, U-Reporter',
  content:
  "Participer aux actions de U-Report Cocody m'a permis de comprendre l'importance de l'engagement citoyen. C'est une expérience très enrichissante.",
  status: 'Approuvé',
  avatar:
  'https://ui-avatars.com/api/?name=Awa+Diomande&background=0099DC&color=fff'
},
{
  id: 2,
  name: 'Marc Yao',
  role: 'Bénévole',
  content:
  "L'organisation des événements est toujours au top. On sent vraiment qu'on a un impact positif sur notre commune, surtout lors des journées de salubrité.",
  status: 'Approuvé',
  avatar:
  'https://ui-avatars.com/api/?name=Marc+Yao&background=6CC24A&color=fff'
},
{
  id: 3,
  name: 'Sarah Koné',
  role: 'Participante',
  content:
  "La formation en leadership m'a donné les outils nécessaires pour lancer mon propre projet communautaire. Merci à toute l'équipe !",
  status: 'En attente',
  avatar:
  'https://ui-avatars.com/api/?name=Sarah+Kone&background=FFC107&color=fff'
},
{
  id: 4,
  name: 'Dr. Bamba',
  role: 'Partenaire Santé',
  content:
  "Une jeunesse dynamique et engagée. C'est toujours un plaisir de collaborer avec U-Report pour nos campagnes de sensibilisation médicale.",
  status: 'Approuvé',
  avatar:
  'https://ui-avatars.com/api/?name=Dr+Bamba&background=8B5CF6&color=fff'
}];

export function Testimonials() {
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
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#1E293B]">
          Gestion des Témoignages
        </h2>
        <button className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors">
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Ajouter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item) =>
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
          
            <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-gray-100" />
            <div className="flex items-center space-x-4 mb-4">
              <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full" />
            
              <div>
                <h3 className="font-bold text-[#1E293B]">{item.name}</h3>
                <p className="text-sm text-[#64748B]">{item.role}</p>
              </div>
            </div>
            <p className="text-[#1E293B] text-sm italic mb-6 relative z-10">
              "{item.content}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Approuvé' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              
                {item.status}
              </span>

              {item.status === 'En attente' &&
            <div className="flex space-x-2">
                  <button className="flex items-center space-x-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded hover:bg-green-100 transition-colors">
                    <CheckIcon className="w-3.5 h-3.5" /> <span>Approuver</span>
                  </button>
                  <button className="flex items-center space-x-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded hover:bg-red-100 transition-colors">
                    <XIcon className="w-3.5 h-3.5" /> <span>Rejeter</span>
                  </button>
                </div>
            }
              {item.status === 'Approuvé' &&
            <button className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors">
                  Retirer du site
                </button>
            }
            </div>
          </div>
        )}
      </div>
    </motion.div>);

}