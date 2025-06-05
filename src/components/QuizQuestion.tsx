import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Question } from '../data/quizData';
import { motion } from '../utils/motion';

interface QuizQuestionProps {
  questionData: Question;
  questionIndex: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ questionData, questionIndex }) => {
  const { state, selectAnswer, nextStep } = useQuiz();
  const [selectedOption, setSelectedOption] = useState<string | null>(
    state.answers[questionIndex] || null
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionSelect = (option: 'A' | 'B' | 'C') => {
    setSelectedOption(option);
    selectAnswer(questionIndex, option);
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      nextStep();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-4"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
        {questionData.text}
      </h3>

      <div className="space-y-4 mt-8">
        {Object.entries(questionData.options).map(([key, value]) => (
          <motion.button
            key={key}
            onClick={() => handleOptionSelect(key as 'A' | 'B' | 'C')}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedOption === key
                ? 'bg-blue-600 border-blue-400 shadow-lg'
                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isAnimating}
          >
            <div className="flex items-start">
              <span className={`font-bold mr-3 ${
                selectedOption === key ? 'text-white' : 'text-blue-400'
              }`}>
                {key}
              </span>
              <span className="flex-1">{value}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizQuestion;