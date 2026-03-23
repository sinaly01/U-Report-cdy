import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

export function RegistrationModal({ isOpen, onClose, eventTitle }: RegistrationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative">
          <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="pr-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900">S'inscrire</h3>
              <p className="text-[#0099DC] font-medium text-sm mt-1">{eventTitle}</p>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors bg-white shadow-sm border border-gray-100"><XIcon className="w-5 h-5" /></button>
          </div>
          
          <div className="p-6">
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Inscription confirmée !</h4>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">Merci pour votre engagement. Vous recevrez un email avec tous les détails pratiques de l'événement.</p>
                <Button fullWidth onClick={() => { setIsSuccess(false); onClose(); }}>Fermer</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Nom" required />
                  <Input label="Prénom" required />
                </div>
                <Input label="Email" type="email" required />
                <Input label="Téléphone" type="tel" required placeholder="+225 0000000000" />
                <div className="pt-4">
                  <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Inscription en cours...' : 'Confirmer ma présence'}
                  </Button>
                </div>
                <p className="text-xs text-center text-gray-400 mt-4">Vos données resteront confidentielles et serviront uniquement pour l'organisation de cet événement.</p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
