import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Game from './screens/Game'

ReactDOM.render(
  <React.StrictMode>
    <Game style={{backgroundColor: '#0A1D37'}}/>
  </React.StrictMode>,
  document.getElementById('root')
);
