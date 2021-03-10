import { useDispatch } from 'react-redux';
import './Css/App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/Search';
import Hot from './Components/Hot';
import SavePage from './Components/SavePage';
import { useEffect } from 'react';
import {
  getPopularActors,
  getTopMovie,
  getTopTV,
} from './redux/actions/filmsAcrtion';
import Info from './Components/Info';
function App() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.app.switcher);
  // const dispatch = useDispatch();
  // const handlerSwitch = () => {
  //   dispatch(switcherFC());
  // };

  useEffect(() => {
    dispatch(getPopularActors());
    dispatch(getTopMovie());
    dispatch(getTopTV());
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/hot" component={Hot} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/savePage" component={SavePage} />
            </Switch>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
