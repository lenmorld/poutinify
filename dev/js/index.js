// import 'babel-polyfill';  // polyfill for backwards-compatible
import React from 'react';
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// components
import Header from './components/Header';
import App from './components/App';




const About = () => (
  <h2>About</h2>
)

const Contact = () => (
  <h2>Contact</h2>
)

const Main = () => (
  <div>
    <header>
      <Header />
      <div className="header-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>

    <hr />

    <Route exact path='/' component={App} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />

  </div>
)

const Root = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
