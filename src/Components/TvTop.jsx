import React from 'react';
import { useSelector } from 'react-redux';

const TvTop = () => {
  const topTv = useSelector((state) => state.Allfilms.topTv);
  function handlerMore() {
    console.log('Nice its work');
  }
  return (
    <div>
      <div className="cards">
        {topTv.map((elem, index) => {
          return (
            <div key={elem.id}>
              <div className="wrap">
                <div className="card 2" onClick={() => console.log(elem.id)}>
                  <div className="card_image">
                    <img
                      src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                      alt={elem.name}
                    />
                  </div>
                  <div className="card_title title-white"></div>
                  <div className="details">
                    <h3>
                      {elem.name.length > 17
                        ? elem.name.slice(0, 10)
                        : elem.name}
                    </h3>
                    <button onClick={handlerMore}>More</button>
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
