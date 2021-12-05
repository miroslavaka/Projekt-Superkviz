import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Kvizy = () => {
  const [kvizyall, setKvizyall] = useState(null);

  const fetchKvizy = () => {
    fetch(
      'https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json',
    )
      .then((response) => response.json())
      .then((data) => setKvizyall(data));
  };

  useEffect(() => {
    fetchKvizy();
  }, []);

  return (
    <>
      <div className="quiz-list">
        {kvizyall?.map((element) => (
          <div className="quiz-item" key={element.title}>
            <img
              className="quiz-item__image"
              src={element.image}
              alt={element.title}
            />
            <div className="quiz-item__content">
              <h2 className="quiz-item__title">{element.title}</h2>
              <p className="quiz-item__questions">{element.questions} otázek</p>
              {/* <a className="quiz-item__link" href="#">
                Spustit kvíz
              </a> */}
              <Link className="quiz-item__link" to={`/kviz/${element.id}`}>
                Spustit kvíz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kvizy;
