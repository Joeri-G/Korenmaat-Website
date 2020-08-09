import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Website from './Website/Website';

ReactDOM.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
  document.getElementById('KorenmaatHomePage')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
