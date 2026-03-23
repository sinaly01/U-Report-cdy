import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, SearchIcon, CalendarIcon, MapPinIcon, UsersIcon, MoreVerticalIcon, XIcon, Edit2Icon, Trash2Icon } from 'lucide-react';

const initialEvents = [
  { id: 1, title: 'Journée de sensibilisation au VIH/SIDA', date: '15 Oct 2024', time: '08:00 - 14:00', location: 'Université FHB, Cocody', status: 'À venir', registered: 145, capacity: 200 },
  { id: 2, title: 'Formation en leadership jeune', date: '22 Oct 2024', time: '09:00 - 16:00', location: 'Mairie de Cocody', status: 'Ouvert', registered: 42, capacity: 50 },
  { id: 3, title: 'Campagne de propreté Cocody', date: '05 Nov 2024', time: '07:00 - 12:00', location: 'Blockhauss', status: 'Ouvert', registered: 89, capacity: 100 },
  { id: 4, title: "Atelier d'éducation civique", date: '10 Sep 2024', time: '14:00 - 17:00', location: 'Lycée Classique', status: 'Terminé', registered: 120, capacity: 120 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Ouvert': return 'bg-green-100 text-green-700';
    case 'À venir': return 'bg-blue-100 text-blue-700';
    case 'Terminé': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export function Events() {
  const [events, setEvents] = useState(initialEvents);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', location: '', date: '', time: '', capacity: 100, status: 'À venir' });
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleOpenModal = (evt: any = null) => {
    setActiveDropdownId(null);
    if (evt) {
      setEditingEvent(evt);
      setFormData({ title: evt.title, location: evt.location, date: evt.date, time: evt.time, capacity: evt.capacity, status: evt.status });
    } else {
      setEditingEvent(null);
      setFormData({ title: '', location: '', date: '', time: '', capacity: 100, status: 'À venir' });
    }
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setActiveDropdownId(null);
    if (window.confirm('Voulez-vous vraiment supprimer cet événement ?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(events.map(ev => ev.id === editingEvent.id ? { ...ev, ...formData } : ev));
    } else {
      const newEvent = {
        id: Date.now(),
        ...formData,
        registered: 0
      };
      setEvents([newEvent, ...events]);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Rechercher un événement..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099DC]" />
        </div>
        <button onClick={() => handleOpenModal()} className="flex items-center space-x-2 bg-[#0099DC] text-white px-4 py-2 rounded-lg hover:bg-[#007bb5] transition-colors whitespace-nowrap">
          <PlusIcon className="w-5 h-5" />
          <span>Créer un événement</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative">
            <button onClick={() => setActiveDropdownId(activeDropdownId === event.id ? null : event.id)} className="absolute top-4 right-4 text-gray-400 hover:text-[#1E293B] p-1 rounded-md hover:bg-gray-100">
              <MoreVerticalIcon className="w-5 h-5" />
            </button>
            {activeDropdownId === event.id && (
              <div className="absolute right-4 top-10 w-36 bg-white border border-gray-100 shadow-lg rounded-lg py-1 z-10">
                <button onClick={() => handleOpenModal(event)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0099DC] flex items-center">
                  <Edit2Icon className="w-4 h-4 mr-2" /> Modifier
                </button>
                <button onClick={() => handleDelete(event.id)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                  <Trash2Icon className="w-4 h-4 mr-2" /> Supprimer
                </button>
              </div>
            )}

            <div className="mb-4 pr-6">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${getStatusColor(event.status)}`}>
                {event.status}
              </span>
              <h3 className="text-lg font-bold text-[#1E293B] line-clamp-2">{event.title}</h3>
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
                <span className="text-sm text-[#64748B]">{event.registered} / {event.capacity}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className={`h-2 rounded-full ${event.registered >= event.capacity ? 'bg-red-500' : 'bg-[#0099DC]'}`} style={{ width: `${(event.registered / event.capacity) * 100}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden relative z-[60]">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">{editingEvent ? 'Modifier l\'événement' : 'Créer un événement'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600"><XIcon className="w-5 h-5" /></button>
              </div>
              <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titre de l'événement</label>
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input required type="text" placeholder="15 Oct 2024" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
                    <input required type="text" placeholder="08:00 - 14:00" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
                  <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacité</label>
                    <input required type="number" value={formData.capacity} onChange={e => setFormData({...formData, capacity: parseInt(e.target.value) || 100})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                    <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0099DC]">
                      <option>À venir</option>
                      <option>Ouvert</option>
                      <option>Terminé</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4 flex justify-end space-x-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Annuler</button>
                  <button type="submit" className="px-4 py-2 bg-[#0099DC] text-white rounded-lg hover:bg-[#007bb5] transition-colors">{editingEvent ? 'Enregistrer' : 'Créer'}</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}