import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users, Megaphone } from 'lucide-react';
import { Card } from '../../components/ui/Card';
export function About() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero */}
      <div className="relative py-24 bg-ureport-light overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ureport-blue/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-ureport-dark mb-6">
              À propos de{' '}
              <span className="text-ureport-blue">U-Report Cocody</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Détachement officiel de U-Report Côte d'Ivoire, notre communauté rassemble 
              plus de 9 840 jeunes engagés pour le développement de la commune de Cocody. 
              Soutenus par l'UNICEF, nous promouvons des valeurs fortes telles que l'intégrité, 
              l'altruisme et le respect de la chose publique.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
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
            }}>
            
            <Card className="p-8 h-full bg-gradient-to-br from-white to-blue-50 border-blue-100">
              <Target className="w-12 h-12 text-ureport-blue mb-6" />
              <h2 className="text-2xl font-heading font-bold text-ureport-dark mb-4">
                Notre Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Donner aux jeunes les moyens de s'exprimer sur les enjeux qui
                les concernent, de participer aux décisions locales et de mener
                des actions concrètes pour améliorer les conditions de vie dans
                leurs quartiers.
              </p>
            </Card>
          </motion.div>

          <motion.div
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
              delay: 0.2
            }}>
            
            <Card className="p-8 h-full bg-gradient-to-br from-white to-orange-50 border-orange-100">
              <Shield className="w-12 h-12 text-ureport-gold mb-6" />
              <h2 className="text-2xl font-heading font-bold text-ureport-dark mb-4">
                Notre Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Une commune de Cocody où chaque jeune est un acteur de
                changement reconnu, où sa voix compte dans les politiques
                publiques et où son engagement citoyen est valorisé.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ureport-dark mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le concept U-Report repose sur trois piliers fondamentaux pour
              engager la jeunesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-ureport-blue">
                <Megaphone className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. S'exprimer</h3>
              <p className="text-gray-600">
                Participez à nos sondages via SMS ou réseaux sociaux pour donner
                votre avis sur les sujets importants.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-ureport-gold">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Se réunir</h3>
              <p className="text-gray-600">
                Rejoignez la communauté lors de nos rencontres, formations et
                ateliers pour échanger et apprendre.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-green-500">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Agir</h3>
              <p className="text-gray-600">
                Passez à l'action en participant à nos événements sur le terrain
                : salubrité, sensibilisation, aide sociale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}