import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePageForTv } from '../redux/actions/filmsAcrtion';

const TvTop = () => {
  const dispatch = useDispatch();
  const topTv = useSelector((state) => state.Allfilms.topTv);
  function handlerMore(id) {
    console.log('Tv:', id);
    dispatch(savePageForTv(id));
  }
  return (
    <div>
      <div className="cards">
        {topTv.map((elem, index) => {
          return (
            <div key={elem.id}>
              <div className="wrap">
                <div className="card 2" onClick={() => handlerMore(elem.id)}>
                  <div className="card_image">
                    <img
                      src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                      alt={elem.name}
                    />
                  </div>
                  <div className="card_title title-white"></div>
                  <div className="details">
                    <h3>
                      {elem.name.length > 20
                        ? elem.name.slice(0, 18)
                        : elem.name}
                    </h3>
                    <p>№ {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TvTop;
