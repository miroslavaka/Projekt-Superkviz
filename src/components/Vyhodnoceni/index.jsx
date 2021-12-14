import React from 'react';

const Vyhodnoceni = ({ questions, answers }) => {
  let pocetSpravnych = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      pocetSpravnych++;
    }
  });

  return (
    <div className="evaluation">
      <h2 className="evaluation__title">Tvoje hodnocení</h2>
      <div className="evaluation__content">
        <div className="results">
          {questions.map((question, index) => {
            return (
              <div className="result">
                <img
                  className="result__icon"
                  src={
                    answers[index] === question.correctAnswer
                      ? '../assets/correct.svg'
                      : '../assets/incorrect.svg'
                  }
                  alt={question.correctAnswer}
                />

                <div className="result__content">
                  <h3 className="result__title">
                    {index + 1}.{question.title}
                  </h3>
                  <p className="result__answer">
                    Tvoje odpověď: {question.answers[answers[index]]}
                  </p>
                  <p className="result__answer result__answer--correct">
                    Správná odpověď: {question.answers[question.correctAnswer]}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="results__count">
            Správně máš {pocetSpravnych} ze {questions.length} otázek.
          </div>
          <div className="success-rate">
            {Math.round((pocetSpravnych * 100) / questions.length)} %
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vyhodnoceni;
