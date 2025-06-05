import React, { createContext, useContext, useState, ReactNode } from 'react';

type Answer = 'A' | 'B' | 'C';

interface QuizState {
  currentStep: number;
  answers: Record<number, Answer>;
  userInfo: {
    name: string;
    contact: string;
  };
  completed: boolean;
}

interface QuizContextType {
  state: QuizState;
  selectAnswer: (questionIndex: number, answer: Answer) => void;
  nextStep: () => void;
  prevStep: () => void;
  submitUserInfo: (name: string, contact: string) => void;
  resetQuiz: () => void;
}

const initialState: QuizState = {
  currentStep: 0,
  answers: {},
  userInfo: {
    name: '',
    contact: '',
  },
  completed: false,
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(initialState);

  const selectAnswer = (questionIndex: number, answer: Answer) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: answer,
      },
    }));
  };

  const nextStep = () => {
    setState((prev) => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }));
  };

  const prevStep = () => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  };

  const submitUserInfo = (name: string, contact: string) => {
    setState((prev) => ({
      ...prev,
      userInfo: { name, contact },
      completed: true,
    }));
  };

  const resetQuiz = () => {
    setState(initialState);
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        selectAnswer,
        nextStep,
        prevStep,
        submitUserInfo,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};