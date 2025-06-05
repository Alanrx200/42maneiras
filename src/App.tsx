import React from 'react';
import QuizContainer from './components/QuizContainer';
import { QuizProvider } from './context/QuizContext';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <QuizProvider>
        <QuizContainer />
      </QuizProvider>
    </div>
  );
}

export default App;