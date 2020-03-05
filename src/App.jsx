import React, { Component } from 'react';
import './scss/main.scss';
import Index from './Components/Home';
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
            {data.map((item, idx) => {
              // console.log(item.component);
              return <Route path={item.location} component={item.component} key={idx} />
            })}
            <Route path="/" component={Index} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;