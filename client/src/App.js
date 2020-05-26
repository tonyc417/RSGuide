import React, { Component } from 'react';
import Nav from './components/Navbar';
import FrontPage from './components/Frontpage';
import GuidePage from './components/Guides';
import CombatGuide from './components/Combat';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/guides" exact component={GuidePage} />
            <Route path="/combat" exact component={CombatGuide} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
