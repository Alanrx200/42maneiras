import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion } from '../utils/motion';

const LeadForm: React.FC = () => {
  const { submitUserInfo } = useQuiz();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'email' | 'whatsapp'>('whatsapp');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !contact.trim()) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    
    if (contactType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact)) {
        setError('Por favor, digite um email válido');
        return;
      }
    } else {
      const whatsappRegex = /^[0-9]{10,11}$/;
      if (!whatsappRegex.test(contact.replace(/\D/g, ''))) {
        setError('Por favor, digite um WhatsApp válido (DDD + número)');
        return;
      }
    }
    
    submitUserInfo(name, contact);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-4 text-center"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3">Quase lá! 🔥</h3>
        <p className="text-gray-300">
          Te envio as 3 frases mais poderosas agora — digita aqui rapidinho:
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-500 bg-opacity-20 border border-red-400 text-red-100 px-4 py-2 rounded"
          >
            {error}
          </motion.div>
        )}
        
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setContactType('whatsapp')}
            className={`flex-1 px-4 py-2 rounded-lg transition ${
              contactType === 'whatsapp'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setContactType('email')}
            className={`flex-1 px-4 py-2 rounded-lg transition ${
              contactType === 'email'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Email
          </button>
        </div>
        
        <div>
          <input
            type={contactType === 'email' ? 'email' : 'tel'}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={contactType === 'email' ? 'Seu melhor email' : 'Seu WhatsApp (com DDD)'}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Meu Resultado Agora 👉
        </motion.button>
        
        <p className="text-xs text-gray-400 mt-4">
          Seus dados estão seguros e nunca serão compartilhados. Você pode cancelar a qualquer momento.
        </p>
      </form>
    </motion.div>
  );
};

export default LeadForm;