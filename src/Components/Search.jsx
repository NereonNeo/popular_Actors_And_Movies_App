import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../Css/search.css';
import FilmsMap from './FilmsMap';
import TvTop from './TvTop';
const Search = () => {
  return (
    <div>
      <Router>
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
          <div className="info">
            <div className="title">Топы дня</div>
          </div>
          <div className="buttons">
            <div className="tv-button">
              <Link to="/topTv">
                <button>Tv</button>
              </Link>
            </div>
            <div className="movie-button">
              <Link to="/topMovie">
                <button>Movie</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="films-map">
          <Switch>
            <Route exact path="/topMovie" component={FilmsMap} />
            <Route exact path="/topTv" component={TvTop} />
          </Switch>
          {/* <h2>Films of the week</h2>
          <FilmsMap /> */}
        </div>
      </Router>
    </div>
  );
};

export default Search;
