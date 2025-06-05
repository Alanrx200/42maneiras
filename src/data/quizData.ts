export interface Question {
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
}

interface QuizData {
  title: string;
  description: string;
  questions: Question[];
}

const quizData: QuizData = {
  title: "Descubra qual é o seu estilo de abordagem",
  description: "Responda sinceramente para descobrir como melhorar sua comunicação com mulheres",
  questions: [
    {
      text: "O que você sente quando vê uma mulher interessante?",
      options: {
        A: "Travado, não sei o que falar.",
        B: "Fico nervoso, mas às vezes arrisco.",
        C: "Até puxo assunto, mas nem sempre dá certo."
      }
    },
    {
      text: "Onde você costuma tentar puxar assunto?",
      options: {
        A: "Instagram / DM",
        B: "WhatsApp / Tinder",
        C: "Ao vivo (baladas, festas)"
      }
    },
    {
      text: "Qual dessas situações mais te representa?",
      options: {
        A: "Escrevo e apago a mensagem várias vezes.",
        B: "Faço piada pra quebrar o gelo, mas não sei manter a conversa.",
        C: "Às vezes começo bem, mas logo fica sem assunto."
      }
    },
    {
      text: "Qual dessas frases você já ouviu ou pensou?",
      options: {
        A: "\"Mulher bonita já deve ouvir isso todo dia.\"",
        B: "\"Não quero parecer um cara qualquer.\"",
        C: "\"Queria algo original, mas não sei o quê.\""
      }
    }
  ]
};

export default quizData;