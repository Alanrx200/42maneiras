import React from 'react';
import { MessageCircle } from 'lucide-react';

const QuizHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <div className="flex items-center mb-2">
        <MessageCircle size={28} className="text-red-500 mr-2" />
        <h1 className="text-2xl font-bold">ConversaMaster</h1>
      </div>
      <p className="text-gray-400 text-sm">
        Desbloqueie seu potencial de comunicação com mulheres
      </p>
    </div>
  );
};

export default QuizHeader;