import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Otazka from '../Otazka';
import Vyhodnoceni from '../Vyhodnoceni';

import './style.css';

const Kviz = () => {
  const { id } = useParams();
  //console.log('id: ' + id);

  const [questions, setQuestions] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`,
    )
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        //setActiveQuestion(0);
        setQuestions(json.questions);
        setLoading(false);
      }),
      [];
  });
  //console.log(questions);

  const handleAnswer = (answer) => {
    console.log(answer);

    setAnswers(answers.concat([answer]));
    setAnswers([...answers, answer]); //bude obsahovat vsetky prvky puvodniho pole a este answer ktoru som ted dostal
    setActiveQuestion(activeQuestion + 1);
  };

  /*  if (activeQuestion === undefined) {
    return <p>načitavam data</p>;
  } */

  //ak neni nacitane vrat loading
  if (loading) {
    return <p>načitavam data</p>;
  }

  if (activeQuestion === questions.length) {
    //return <p>výsledek</p>;
    return <Vyhodnoceni questions={questions} answers={answers} />;
  }

  return (
    <>
      <h1>Detail kvizu</h1>
      <p>{id}</p>

      {/* {JSON.stringify(questions)} */}

      <Otazka
        questionNumber={activeQuestion + 1}
        questionsCount={questions.length}
        title={questions[activeQuestion].title}
        image={questions[activeQuestion].image}
        answers={questions[activeQuestion].answers}
        handleAnswer={handleAnswer}
      />

      {/*       <div className="question">
      <p className="question__number">Otázka {activeQuestion + 1} / 5</p>
      <h2 className="question__title">{questions[activeQuestion].title}</h2>
      <div class="question__content">
        <img
          class="question__image"
          src={questions[activeQuestion].image}
          alt="Ilustrační obrázek"
        />

        <div class="question__answers">
          {questions[activeQuestion].answers.map((element) => (
            <button className="question__answer">{element}</button>
          ))}
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Kviz;
