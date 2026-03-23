import React from 'react';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  SearchIcon,
  CalendarIcon,
  MapPinIcon,
  UsersIcon,
  MoreVerticalIcon } from
'lucide-react';
const events = [
{
  id: 1,
  title: 'Journée de sensibilisation au VIH/SIDA',
  date: '15 Oct 2024',
  time: '08:00 - 14:00',
  location: 'Université FHB, Cocody',
  status: 'À venir',
  registered: 145,
  capacity: 200
},
{
  id: 2,
  title: 'Formation en leadership jeune',
  date: '22 Oct 2024',
  time: '09:00 - 16:00',
  location: 'Mairie de Cocody',
  status: 'Ouvert',
  registered: 42,
  capacity: 50
},
{
  id: 3,
  title: 'Campagne de propreté Cocody',
  date: '05 Nov 2024',
  time: '07:00 - 12:00',
  location: 'Blockhauss',
  status: 'Ouvert',
  registered: 89,
  capacity: 100
},
{
  id: 4,
  title: "Atelier d'éducation civique",
  date: '10 Sep 2024',
  time: '14:00 - 17:00',
  location: 'Lycée Classique',
  status: 'Terminé',
  registered: 120,
  capacity: 120
}];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Ouvert':
      return 'bg-green-100 text-green-700';
    case 'À venir':
      return 'bg-blue-100 text-blue-700';
    case 'Terminé':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};
export function Events() {
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
            placeholder="Rechercher un événement..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099DC]" />
          
        </div>
        <button className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors whitespace-nowrap">
          <PlusIcon className="w-5 h-5" />
          <span>Créer un événement</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) =>
        <div
          key={event.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative">
          
            <button className="absolute top-4 right-4 text-gray-400 hover:text-[#1E293B]">
              <MoreVerticalIcon className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${getStatusColor(event.status)}`}>
              
                {event.status}
              </span>
              <h3 className="text-lg font-bold text-[#1E293B] line-clamp-2">
                {event.title}
              </h3>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-[#64748B]">
                <CalendarIcon className="w-4 h-4 mr-2 text-[#0099DC]" />
                {event.date} • {event.time}
              </div>
              <div className="flex items-center text-sm text-[#64748B]">
                <MapPinIcon className="w-4 h-4 mr-2 text-[#0099DC]" />
                {event.location}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center text-sm font-medium text-[#1E293B]">
                  <UsersIcon className="w-4 h-4 mr-2 text-[#64748B]" />
                  Inscriptions
                </div>
                <span className="text-sm text-[#64748B]">
                  {event.registered} / {event.capacity}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                className={`h-2 rounded-full ${event.registered >= event.capacity ? 'bg-red-500' : 'bg-[#6CC24A]'}`}
                style={{
                  width: `${event.registered / event.capacity * 100}%`
                }}>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>);

}