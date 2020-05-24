import React, { Component } from 'react';
import FrontPage from './components/Frontpage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={FrontPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
