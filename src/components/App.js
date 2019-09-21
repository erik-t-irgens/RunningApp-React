import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" >Hi</Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
