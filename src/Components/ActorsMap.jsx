import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularActorsMore } from '../redux/actions/filmsAcrtion';

const ActorsMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Allfilms.actors);

  function handlerMore() {
    dispatch(getPopularActorsMore());
  }
  function noMore() {
    console.log('Test');
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
                      alt={`img-${elem.name}`}
                    />
                  </div>
                  <div className="card_title title-white"></div>
                  <div className="details">
                    <h3>{elem.name}</h3>
                    <button onClick={noMore}>More</button>
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
