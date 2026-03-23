import React from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  UsersIcon,
  SendIcon,
  MousePointerClickIcon } from
'lucide-react';
const subscribers = [
{
  id: 1,
  email: 'jean.kouassi@email.ci',
  date: '15 Oct 2024',
  status: 'Actif'
},
{
  id: 2,
  email: 'atoure99@email.ci',
  date: '14 Oct 2024',
  status: 'Actif'
},
{
  id: 3,
  email: 'seydou.b@email.ci',
  date: '10 Oct 2024',
  status: 'Désabonné'
},
{
  id: 4,
  email: 'marie.koffi@email.ci',
  date: '08 Oct 2024',
  status: 'Actif'
},
{
  id: 5,
  email: 'ib.diarra@email.ci',
  date: '05 Oct 2024',
  status: 'Actif'
}];

export function Newsletter() {
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
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-[#0099DC] rounded-lg">
            <UsersIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-[#64748B] font-medium">Abonnés Totaux</p>
            <p className="text-2xl font-bold text-[#1E293B]">2,450</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center space-x-4">
          <div className="p-3 bg-green-50 text-[#6CC24A] rounded-lg">
            <MailIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-[#64748B] font-medium">
              Taux d'ouverture
            </p>
            <p className="text-2xl font-bold text-[#1E293B]">42.5%</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center space-x-4">
          <div className="p-3 bg-purple-50 text-[#8B5CF6] rounded-lg">
            <MousePointerClickIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-[#64748B] font-medium">Taux de clic</p>
            <p className="text-2xl font-bold text-[#1E293B]">18.2%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compose Section */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-[#1E293B] mb-4">
            Nouvelle Campagne
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">
                Sujet de l'email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099DC]"
                placeholder="Ex: Récapitulatif du mois..." />
              
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">
                Contenu
              </label>
              <textarea
                rows={6}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099DC] resize-none"
                placeholder="Rédigez votre message ici...">
              </textarea>
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors">
              
              <SendIcon className="w-4 h-4" />
              <span>Envoyer la campagne</span>
            </button>
          </form>
        </div>

        {/* Subscribers List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#1E293B]">
              Derniers Abonnés
            </h2>
            <button className="text-sm font-medium text-[#0099DC] hover:text-[#007bb5]">
              Exporter CSV
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[#64748B] text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Date d'inscription</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {subscribers.map((sub) =>
                <tr
                  key={sub.id}
                  className="hover:bg-gray-50 transition-colors">
                  
                    <td className="px-6 py-4 text-sm font-medium text-[#1E293B]">
                      {sub.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748B]">
                      {sub.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${sub.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>);

}