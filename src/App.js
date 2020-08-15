import React from 'react';
import Header from './components/Header';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import Home from "./features"
import Footer from './components/Footer';
import Auth from './auth'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Switch>
          <Redirect exact from="/" to="/home" />
          
          <Route path="/home" >
            <Home />
          </Route>

          <Route path="/auth">
            <Auth />
          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
