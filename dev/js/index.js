// import 'babel-polyfill';  // polyfill for backwards-compatible
import React from 'react';
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from 'react-router-dom';

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
  <div class="container">
    <Header />
    {/* <hr /> */}
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
