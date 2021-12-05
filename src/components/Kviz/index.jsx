import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './style.css';

const Kviz = () => {
  const { id, otazkaId } = useParams();
  console.log(id);
  /* const stringId = id.toString();
  console.log(stringId); */

  const [kviz, setKviz] = useState(null);
  const [i, setI] = useState(0);
  //const[correct, setCorrect] = useState(0);
  const fetchKviz = () => {
    fetch(
      `https://github.com/Czechitas-React-podklady/superkviz-api/blob/main/quiz/${id}.json`,
    )
      .then((response) => response.json())
      .then((data) => setKviz(data));
  };

  useEffect(() => {
    fetchKviz();
  }, []);
  console.log(kviz);

  /*  const handleClick = (choosen) => {
    setI(i + 1);
  }; */

  return (
    <>
      <div className="question">
        <p className="question__number">
          {/* Otázka 1 / 5 */}Otázka {i + 1}/5
        </p>

        <h2 className="question__title">
          {/* Zrcadlo, kdo je na světě nejkrásnější? */}
          {kviz.questions[i].title}
        </h2>

        <div className="question__content">
          <img
            className="question__image"
            /* src="../assets/snehurka.jpg" */
            src={kviz.questions[i].image}
            alt="Ilustrační obrázek"
          />

          <div className="question__answers">
            {/* <button className="question__answer">Ledová královna</button>
            <button className="question__answer">Sněhurka</button>
            <button className="question__answer">
              Já! Já jsem nejkrásnější.
            </button> */}
            <Link
              className="question__answer"
              to={
                i + 1 < ClipboardItem.questions.length
                  ? `/kvizy/${id}`
                  : `/kvizy/vysledek`
              }
              onClick={() => handleClick(0)}
            ></Link>
            <Link
              className="question__answer"
              to={
                i + 1 < ClipboardItem.questions.length
                  ? `/kvizy/${id}`
                  : `/kvizy/vysledek`
              }
              onClick={() => handleClick(1)}
            ></Link>
            <Link
              className="question__answer"
              to={
                i + 1 < ClipboardItem.questions.length
                  ? `/kvizy/${id}`
                  : `/kvizy/vysledek`
              }
              onClick={() => handleClick(2)}
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kviz;
