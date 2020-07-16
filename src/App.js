import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Artist, Cart, Events, Genres, LandingPage, Shop, Login, ArtistDetail, Profile } from './pages'
import ProtectedRoute  from './utils/ProtectedRoute'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux"



function App() {
  const user = useSelector(s=>s.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetchUser()
  },[])

  const fetchUser = async () => {
    const token = localStorage.getItem("token")
    if (!token) return

    const res = await fetch("http://localhost:5000/users/me", {

        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const dt = await res.json();
        
        dispatch({type:"LOGIN", payload: dt.data})
        dispatch({type:"LOADED"})
    }
}
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/">
          <LandingPage />
        </Route>

        <Route exact={true} path="/cart">
          <Cart />
        </Route>

        <ProtectedRoute   user={user} exact={true} path="/me" component={Profile} />

        <Route exact={true} path="/user">
          <Login />
        </Route>

        <Route exact={true} path="/events">
          <Events />
        </Route>

        <Route exact={true} path="/explore">
          <Genres />
        </Route>

        <Route exact={true} path="/artists/">
          <Artist />
        </Route>

        <Route exact={true} path="/artists/:title">
          <ArtistDetail />
        </Route>

        <Route exact={true} path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
