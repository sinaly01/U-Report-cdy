import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, ExternalLinkIcon, Edit2Icon, Trash2Icon } from 'lucide-react';
const partners = [
{
  id: 1,
  name: "UNICEF Côte d'Ivoire",
  type: 'Institutionnel',
  website: 'unicef.org/cotedivoire',
  logo: 'https://ui-avatars.com/api/?name=UNICEF&background=0099DC&color=fff&font-size=0.3'
},
{
  id: 2,
  name: 'Mairie de Cocody',
  type: 'Gouvernemental',
  website: 'mairiecocody.ci',
  logo: 'https://ui-avatars.com/api/?name=Mairie+Cocody&background=6CC24A&color=fff&font-size=0.3'
},
{
  id: 3,
  name: 'Orange CI',
  type: 'Sponsor Privé',
  website: 'orange.ci',
  logo: 'https://ui-avatars.com/api/?name=Orange&background=FF7900&color=fff&font-size=0.3'
},
{
  id: 4,
  name: 'Croix-Rouge CI',
  type: 'ONG',
  website: 'croixrouge-ci.org',
  logo: 'https://ui-avatars.com/api/?name=Croix+Rouge&background=ef4444&color=fff&font-size=0.3'
},
{
  id: 5,
  name: 'Université FHB',
  type: 'Académique',
  website: 'univ-fhb.edu.ci',
  logo: 'https://ui-avatars.com/api/?name=UFHB&background=1E293B&color=fff&font-size=0.3'
}];

export function Partners() {
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
          Réseau de Partenaires
        </h2>
        <button className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors">
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Ajouter un partenaire</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {partners.map((partner) =>
        <div
          key={partner.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
          
            <div className="w-24 h-24 rounded-full border-4 border-gray-50 mb-4 overflow-hidden bg-white shadow-sm">
              <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-cover" />
            
            </div>
            <h3 className="font-bold text-[#1E293B] mb-1">{partner.name}</h3>
            <span className="text-xs font-medium text-[#0099DC] bg-blue-50 px-2 py-1 rounded-md mb-4">
              {partner.type}
            </span>

            <a
            href={`https://${partner.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-[#64748B] hover:text-[#0099DC] transition-colors mb-6">
            
              {partner.website} <ExternalLinkIcon className="w-3 h-3 ml-1" />
            </a>

            <div className="flex items-center justify-center space-x-3 w-full pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-gray-400 hover:text-[#6CC24A] transition-colors p-2 rounded-md hover:bg-green-50">
                <Edit2Icon className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-md hover:bg-red-50">
                <Trash2Icon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>);

}