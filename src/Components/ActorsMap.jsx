import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularActorsMore } from '../redux/actions/filmsAcrtion';

const ActorsMap = () => {
  let cd = [];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Allfilms.actors);

  function handlerMore() {
    dispatch(getPopularActorsMore());
    cd = state.filter((x) => x.gender === 1);
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
                      src={`https://image.tmdb.org/t/p/original${elem.profile_path}`}
                    />
                  </div>
                  <div className="card_title title-white"></div>
                  <div className="details">
                    <h3>{elem.name}</h3>
                    <button onClick={() => console.log(elem.id)}>More</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {state.length <= 20 ? (
          <button onClick={handlerMore}>More</button>
        ) : null}
      </div>
    </>
  );
};

export default ActorsMap;
