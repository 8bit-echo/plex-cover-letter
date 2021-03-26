import './assets/scss/App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log(
  `👋 Hey there! Aren't you a curious one? Thanks for taking the time to read my cover letter, and inspecting my code. I hope you've enjoyed reading it as much as I enjoyed making it. To see the source code visit the github link at the bottom of the page.`
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
