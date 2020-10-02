import React, {Component} from 'react';
import Auth from './authentication/auth';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
      return(
        <BrowserRouter>
        <div>
        <Route exact path="/" render={() => <Auth/>}></Route>
        <Route path="/home" render={() => <Home/>}></Route>
        <Route path="/portfolio" render={() => <Portfolio/>}></Route>
        </div>
        </BrowserRouter>
      );
  };
};

export default App;
