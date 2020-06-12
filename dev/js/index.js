// import 'babel-polyfill';  // polyfill for backwards-compatible
import React from 'react';
import ReactDOM from "react-dom";

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
    <App />
  </div>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
