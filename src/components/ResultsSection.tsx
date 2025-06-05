import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion } from '../utils/motion';
import { Share2, Download } from 'lucide-react';
import { getResultProfile } from '../utils/quizResults';

const ResultsSection: React.FC = () => {
  const { state, resetQuiz } = useQuiz();
  const { answers, userInfo } = state;
  
  const result = getResultProfile(answers);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Seu Resultado 🎉</h2>
        <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-white font-bold text-lg mb-4">
          {result.title}
        </div>
        <p className="text-lg">{`Olá ${userInfo.name}!`}</p>
      </div>
      
      <div className="bg-gray-700 rounded-lg p-6 mb-8">
        <p className="text-lg leading-relaxed mb-4">{result.description}</p>
        
        <div className="border-t border-gray-600 pt-4 mt-6">
          <h3 className="font-bold text-lg mb-3">Seus pontos fortes:</h3>
          <ul className="space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-gray-600 pt-4 mt-6">
          <h3 className="font-bold text-lg mb-3">Áreas para melhorar:</h3>
          <ul className="space-y-2">
            {result.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">→</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 shadow-lg mb-8">
        <h3 className="text-xl font-bold mb-4">
          🔥 Liberar acesso às 42 frases prontas para puxar assunto com qualquer mulher
        </h3>
        <p className="mb-6">
          Nossas frases foram testadas e aprovadas por homens como você que tinham dificuldade para iniciar conversas interessantes.
        </p>
        <motion.button
          href="https://bit.ly/42maneiiras"
          className="block w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-6 rounded-lg text-lg shadow-xl transition focus:outline-none focus:ring-2 focus:ring-yellow-300 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quero Desbloquear as Frases 👉
        </motion.button>
      </div>
      
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <button 
          onClick={resetQuiz}
          className="flex-1 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 font-medium py-2 px-4 rounded transition"
        >
          Refazer o Quiz
        </button>
        <button className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition">
          <Share2 size={18} className="mr-2" />
          Compartilhar Resultado
        </button>
        <button className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition">
          <Download size={18} className="mr-2" />
          Salvar Resultado
        </button>
      </div>
    </motion.div>
  );
};

export default ResultsSection;