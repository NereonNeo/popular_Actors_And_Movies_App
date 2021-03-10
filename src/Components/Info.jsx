import React from 'react';
import { useSelector } from 'react-redux';

const Info = () => {
  const filmsSavePage = useSelector((state) => state.Allfilms.savePage);
  return (
    <div>
      {filmsSavePage.map((elem, index) => {
        return (
          <div className="" key={elem.id}>
            {elem.gender === 2 ? 'Man' : 'Woman'}
            <p>{elem.name || elem.title}</p>
            <p>{elem.overview || null}</p>
            <img
              src={`https://image.tmdb.org/t/p/original${
                elem.profile_path || elem.poster_path
              }`}
              alt={elem.name}
              width="200"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Info;
