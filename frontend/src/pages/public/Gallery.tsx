import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { galleryAlbums } from '../../data/mockData';
export function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-ureport-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-12 h-12 mx-auto mb-6 text-ureport-blue" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Galerie Photos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revivez les moments forts de nos actions sur le terrain en images.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryAlbums.map((album, index) =>
          <motion.div
            key={album.id}
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
            
              <Card hover className="group cursor-pointer h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center text-white/80 text-sm mb-2 font-medium">
                      <span>{album.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <ImageIcon className="w-4 h-4 mr-1" />{' '}
                        {album.photosCount} photos
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-ureport-gold transition-colors">
                      {album.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-ureport-blue hover:text-ureport-blue transition-colors">
            Charger plus d'albums
          </button>
        </div>
      </div>
    </div>);

}