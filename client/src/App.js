import React from 'react';
import logo from './logo.svg';
import FrontPage from './components/Frontpage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <FrontPage />
    </div>
  );
}

export default App;
