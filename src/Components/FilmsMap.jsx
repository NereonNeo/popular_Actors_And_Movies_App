import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FilmsMap = () => {
  // const dispatch = useDispatch();
  const [film, setFilm] = useState([]);
  const state = useSelector((state) => state.Allfilms.actors);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=2bbb5d3e3e46103441594cbbedb59e3c'
    )
      .then((res) => res.json())
      .then((data) => setFilm(data.results));
  }, []);
  function handlerMore() {
    console.log('Nice its work');
  }
  console.log(film);
  return (
    <>
      <div className="cards">
        {film.map((elem, index) => {
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
                    <h3>{elem.title}</h3>
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

export default FilmsMap;
