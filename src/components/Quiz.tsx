import React, { useState } from 'react';
import quizData from '../data/quizzes';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (answerIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(answerIndex);

    setTimeout(() => {
      setUserAnswers(prev => [...prev, answerIndex]);
      setSelectedOption(null);

      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsQuizFinished(true);
      }
    }, 320);
  };

  const renderQuestion = () => {
    const question = quizData[currentQuestionIndex];
    if (!question) return <div>Pergunta não encontrada.</div>;

    return (
      <div className="quiz-container">
        <div className="quiz-question">
          <h2>{currentQuestionIndex + 1}. {question.question}</h2>
        </div>

        <ul className="quiz-options" role="list">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index;
            return (
              <li key={index} className="quiz-option">
                <button
                  type="button"
                  className={`quiz-option-button ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  aria-pressed={isSelected}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderResults = () => {
    const correctCount = userAnswers.reduce((acc, answerIndex, idx) => {
      const q = quizData[idx];
      const correctIndex = q.options.indexOf(q.answer);
      if (answerIndex === correctIndex) return acc + 1;
      return acc;
    }, 0);

    return (
      <div className="quiz-results">
        <h2>Resultados</h2>
        <p>Você acertou {correctCount} de {quizData.length} perguntas.</p>

        <div style={{ marginTop: 12 }}>
          {quizData.map((q, qi) => {
            const userAnswerIndex = userAnswers[qi];
            const answered = typeof userAnswerIndex === 'number';
            const correctIndex = q.options.indexOf(q.answer);
            const userAnswerText = answered ? q.options[userAnswerIndex] : '— Não respondida —';
            const correctAnswerText = q.options[correctIndex];
            const isCorrect = answered && userAnswerIndex === correctIndex;

            const explanation = (answered && q.explanations && q.explanations[userAnswerIndex])
              ? q.explanations[userAnswerIndex]
              : (q.explanations && q.explanations[correctIndex]) || '';

            return (
              <div key={qi} className="quiz-review-item">
                <h3>{qi + 1}. {q.question}</h3>
                <p><strong>Sua resposta:</strong> {userAnswerText} {isCorrect ? '✅' : (answered ? '❌' : '')}</p>
                {!isCorrect && answered && <p><strong>Resposta correta:</strong> {correctAnswerText}</p>}
                {explanation && <p><em>Explicação:</em> {explanation}</p>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {isQuizFinished ? renderResults() : renderQuestion()}
    </div>
  );
};

export default Quiz;