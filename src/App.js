import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Artist, Cart, Events,Genres, LandingPage,Shop,User} from './pages'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact={true} path="/">
              <LandingPage/>
            </Route>

            <Route exact={true} path="/cart">
              <Cart/>
            </Route>

            <Route exact={true} path="/user">
              <User/>
            </Route>

            <Route exact={true} path="/events">
              <Events/>
            </Route>

            <Route exact={true} path="/explore">
              <Genres/>
            </Route>

            <Route exact={true} path="/artists">
              <Artist/>
            </Route>

            <Route exact={true} path="/shop">
              <Shop/>
            </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
