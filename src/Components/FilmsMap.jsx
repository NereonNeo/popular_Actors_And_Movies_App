import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePageForFilms } from '../redux/actions/filmsAcrtion';
import { Link } from 'react-router-dom';

const FilmsMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Allfilms.topFilm);
  function handlerMore(id) {
    console.log('Films:', id);
    dispatch(savePageForFilms(id));
  }

  return (
    <>
      <div className="cards">
        {state.map((elem, index) => {
          return (
            <div key={elem.id}>
              <Link to="/info">
                <div className="wrap">
                  <div className="card 2" onClick={() => handlerMore(elem.id)}>
                    <div className="card_image">
                      <img
                        src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                        alt={elem.title}
                      />
                    </div>
                    <div className="card_title title-white"></div>
                    <div className="details">
                      <h3>
                        {elem.title.length >= 20
                          ? elem.title.slice(0, 18)
                          : elem.title}
                      </h3>
                      <div>
                        <p>№ {index + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilmsMap;
