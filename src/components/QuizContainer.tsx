import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuizHeader from './QuizHeader';
import ProgressBar from './ProgressBar';
import QuizQuestion from './QuizQuestion';
import LeadForm from './LeadForm';
import ResultsSection from './ResultsSection';
import quizData from '../data/quizData';

const QuizContainer: React.FC = () => {
  const { state } = useQuiz();
  const { currentStep, completed } = state;
  const totalQuestions = quizData.questions.length;

  const renderCurrentStep = () => {
    // Intro screen
    if (currentStep === 0) {
      return <QuizIntro />;
    }
    // Questions
    if (currentStep <= totalQuestions) {
      return <QuizQuestion questionData={quizData.questions[currentStep - 1]} questionIndex={currentStep - 1} />;
    }
    // Lead form before showing results
    if (currentStep === totalQuestions + 1 && !completed) {
      return <LeadForm />;
    }
    // Results after completion
    if (completed) {
      return <ResultsSection />;
    }

    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <QuizHeader />
      {currentStep > 0 && currentStep <= totalQuestions && (
        <ProgressBar currentStep={currentStep} totalSteps={totalQuestions} />
      )}
      <div className="mt-6 bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

const QuizIntro: React.FC = () => {
  const { nextStep } = useQuiz();

  return (
    <div className="text-center py-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        ❓ Descubra qual é o seu estilo de abordagem e aprenda como puxar assunto com qualquer mulher
        <span className="block text-xl italic text-gray-400 mt-2">(sem parecer forçado)</span>
      </h2>
      
      <div className="space-y-4 my-8">
        <p className="text-lg">Este quiz rápido vai revelar:</p>
        <ul className="text-left space-y-3 mx-auto max-w-md">
          <li className="flex items-start">
            <span className="text-red-400 mr-2">✓</span>
            <span>Seu estilo natural de abordagem (e como aprimorá-lo)</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-400 mr-2">✓</span>
            <span>Os erros que você pode estar cometendo sem perceber</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-400 mr-2">✓</span>
            <span>Frases específicas para puxar assunto que funcionam no seu caso</span>
          </li>
        </ul>
      </div>
      
      <button
        onClick={nextStep}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 shadow-lg"
      >
        Iniciar Quiz 🚀
      </button>
      
      <p className="mt-4 text-gray-400 text-sm">Leva apenas 1 minuto para completar</p>
    </div>
  );
};

export default QuizContainer;