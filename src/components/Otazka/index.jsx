import React from 'react';

const Otazka = ({
  questionNumber,
  questionsCount,
  title,
  image,
  answers,
  handleAnswer,
}) => {
  return (
    <div className="question">
      <p className="question__number">
        Otázka {questionNumber} / {questionsCount}
      </p>
      <h2 className="question__title">{title}</h2>
      <div className="question__content">
        <img className="question__image" src={image} alt="Ilustrační obrázek" />

        <div className="question__answers">
          {answers.map((element, index) => (
            <button
              className="question__answer"
              key={`answer${index}`}
              onClick={() => {
                handleAnswer(index);
              }}
            >
              {element}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otazka;
