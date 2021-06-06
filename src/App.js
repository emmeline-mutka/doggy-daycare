//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Welcome from './components/Welcome';
import DogsList from './components/DogsList';
import InfoDog from './components/InfoDog';


function App() {

  return (

    <div className="app-container">
      <header className="App-header">
        <Router basename={process.env.PUBLIC_URL}>
          <div className="husky-banner">
          <img src="img/husky-banner.jpg" alt="" />
          </div>
            <div className="header-title">
              <Link to="welcome"><button>Hundkojan</button></Link>
            </div>
        </Router>
      </header>
      <main>
      <div className="App">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Welcome />
                </Route>
                <Route path="/welcome">
                  <Welcome />
                </Route>
                <Route path="/dogslist">
                  <DogsList />
                </Route>
                <Route path="/infodog">
                  <InfoDog />
                </Route>
              </Switch>
            </Router>
          </div>
      </main>
    </div>
  );
}

export default App;
