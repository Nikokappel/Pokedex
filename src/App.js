import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';

export default function App(){
  return(
    <>
      <Router>
        <div className='App'>
        <NavBar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/About">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}
 
