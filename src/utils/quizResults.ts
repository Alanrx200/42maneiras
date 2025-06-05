import { Question } from '../data/quizData';

type Answer = 'A' | 'B' | 'C';
type Answers = Record<number, Answer>;

interface ResultProfile {
  title: string;
  description: string;
  strengths: string[];
  improvements: string[];
}

// Define different result profiles
const resultProfiles: Record<string, ResultProfile> = {
  observador: {
    title: "O Observador Estratégico",
    description: "Você tem boas intenções, mas ainda trava na hora H. O bom é que isso tem solução simples — com as frases e abordagens certas, você pode chamar atenção de forma leve e autêntica, sem parecer forçado.",
    strengths: [
      "Você pensa antes de agir",
      "Tem sensibilidade para ler situações",
      "Se preocupa em causar uma boa impressão"
    ],
    improvements: [
      "Transformar planejamento em ação",
      "Desenvolver confiança para iniciar conversas",
      "Ter frases prontas para diferentes cenários"
    ]
  },
  explorador: {
    title: "O Explorador Hesitante",
    description: "Você tem coragem para iniciar, mas ainda não desenvolveu um estilo próprio de abordagem. Com as técnicas certas, você pode transformar suas tentativas em conversas fluidas e memoráveis.",
    strengths: [
      "Não tem medo de tentar",
      "Aprende com experiências passadas",
      "Tem potencial para rápida evolução"
    ],
    improvements: [
      "Estruturar melhor suas abordagens",
      "Aprender a manter o interesse na conversa",
      "Desenvolver um estilo pessoal de comunicação"
    ]
  },
  comunicador: {
    title: "O Comunicador em Formação",
    description: "Você já tem habilidade para iniciar conversas, mas precisa de técnicas para mantê-las interessantes e levá-las ao próximo nível. Com alguns ajustes, você pode se tornar um mestre da comunicação.",
    strengths: [
      "Já consegue quebrar o gelo com naturalidade",
      "Tem facilidade para iniciar conversas",
      "Demonstra autenticidade nas abordagens"
    ],
    improvements: [
      "Expandir seu repertório de assuntos",
      "Aprender a criar conexões mais profundas",
      "Desenvolver técnicas para manter o interesse"
    ]
  }
};

// Determine which profile matches based on answers
export const getResultProfile = (answers: Answers): ResultProfile => {
  // Count frequency of each answer
  let countA = 0;
  let countB = 0;
  let countC = 0;

  Object.values(answers).forEach(answer => {
    if (answer === 'A') countA++;
    if (answer === 'B') countB++;
    if (answer === 'C') countC++;
  });

  // Determine the dominant answer style
  if (countA >= countB && countA >= countC) {
    return resultProfiles.observador;
  } else if (countB >= countA && countB >= countC) {
    return resultProfiles.explorador;
  } else {
    return resultProfiles.comunicador;
  }
};