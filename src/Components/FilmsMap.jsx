import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopMovie } from '../redux/actions/filmsAcrtion';

const FilmsMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Allfilms.topFilm);
  function handlerMore() {
    console.log('Nice its work');
  }

  return (
    <>
      <div className="cards">
        {state.map((elem, index) => {
          return (
            <div key={elem.id}>
              <div className="wrap">
                <div className="card 2" onClick={() => console.log(elem.id)}>
                  <div className="card_image">
                    <img
                      src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                      alt={elem.title}
                    />
                  </div>
                  <div className="card_title title-white"></div>
                  <div className="details">
                    <h3>
                      {elem.title.length >= 15
                        ? elem.title.slice(0, 10)
                        : elem.title}
                    </h3>
                    <button onClick={handlerMore}>More</button>
                    <div>
                      <p>№ {index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilmsMap;
