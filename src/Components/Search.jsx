import React from 'react';
import '../Css/search.css';
import FilmsMap from './FilmsMap';
const Search = () => {
  return (
    <div>
      <div className="content">
        <div className="wrapp">
          <div className="input-wrapp">
            <input
              type="text"
              name="input"
              className="input_search"
              placeholder="Name of film"
            />
          </div>
          <div className="button-wrapp">
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="films-map">
        <h2>Films of the week</h2>
        <FilmsMap />
      </div>
    </div>
  );
};

export default Search;
