import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, ImageIcon, CalendarIcon } from 'lucide-react';
const albums = [
{
  id: 1,
  title: 'Journée de salubrité Riviera',
  date: '05 Oct 2024',
  photos: 45,
  cover:
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
},
{
  id: 2,
  title: 'Formation Leadership',
  date: '22 Sep 2024',
  photos: 128,
  cover:
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
},
{
  id: 3,
  title: 'Don de sang CHU Cocody',
  date: '15 Sep 2024',
  photos: 32,
  cover:
  'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
},
{
  id: 4,
  title: 'Rencontre avec le Maire',
  date: '01 Sep 2024',
  photos: 15,
  cover:
  'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
},
{
  id: 5,
  title: 'Campagne de reboisement',
  date: '20 Aoû 2024',
  photos: 84,
  cover:
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
}];

export function Gallery() {
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
        <h2 className="text-xl font-bold text-[#1E293B]">Albums Photos</h2>
        <button className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors">
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Nouvel Album</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album) =>
        <div
          key={album.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
          
            <div className="relative h-48 overflow-hidden">
              <img
              src={album.cover}
              alt={album.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <button className="text-white bg-white/20 hover:bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium transition-colors w-full">
                  Gérer les photos
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#1E293B] mb-2 line-clamp-1 group-hover:text-[#0099DC] transition-colors">
                {album.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <div className="flex items-center">
                  <CalendarIcon className="w-3.5 h-3.5 mr-1" />
                  {album.date}
                </div>
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                  <ImageIcon className="w-3.5 h-3.5 mr-1" />
                  {album.photos}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>);

}