import React from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "./routes";
import Index from "./components/React";
import history from './history';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
        <Router history={history}>
            <Switch>
                {data.map((elem, idx) => {
                    return <Route key={idx} path={elem.path} component={elem.component} />
                })}
                <Route path="/" component={Index} />
            </Switch>
        </Router>
    );
  }
}

export default App;
