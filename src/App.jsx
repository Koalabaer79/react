import React, { Component } from 'react';
import './App.css';


import Navi from './Components/Navi';
import data from './Components/Pages';

// To use routing functionalities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navi></Navi>
          <Switch>
            {data.map(function (item, idx) {
              console.log(item.component);
              return <Route key={idx} path={item.path} component={item.component} />
            })}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
