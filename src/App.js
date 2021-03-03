import { useDispatch } from 'react-redux';
import './Css/App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/Search';
import Hot from './Components/Hot';
import Liked from './Components/Liked';
import SavePage from './Components/SavePage';
import { useEffect } from 'react';
import { getPopularActors } from './redux/actions/filmsAcrtion';
function App() {
  // const state = useSelector((state) => state.app.switcher);
  // const dispatch = useDispatch();
  // const handlerSwitch = () => {
  //   dispatch(switcherFC());
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularActors());
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
              <Route exact path="/info" component={Liked} />
              <Route exact path="/savePage" component={SavePage} />
            </Switch>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
