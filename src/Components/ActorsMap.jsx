import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularActorsMore,
  savePageForActors,
} from '../redux/actions/filmsAcrtion';
import { Link } from 'react-router-dom';

const ActorsMap = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Allfilms.actors);

  function handlerMore() {
    dispatch(getPopularActorsMore());
  }
  function noMore(id) {
    console.log('Actors:', id);
    dispatch(savePageForActors(id));
  }
  return (
    <>
      <div className="cards">
        {state.map((elem, index) => {
          return (
            <div key={elem.id}>
              <Link to="/info">
                <div className="wrap">
                  <div className="card 2" onClick={() => noMore(elem.id)}>
                    <div className="card_image">
                      <img
                        src={`https://image.tmdb.org/t/p/original${elem.profile_path}`}
                        alt={`img-${elem.name}`}
                      />
                    </div>
                    <div className="card_title title-white"></div>
                    <div className="details">
                      <h3>{elem.name}</h3>
                      <p>№ {index + 1}</p>
                      {/* <button onClick={() => noMore(elem.id)}>More</button> */}
                    </div>
                  </div>
                </div>
              </Link>
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
