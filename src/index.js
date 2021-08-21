import React from 'react';
import ReactDOM from 'react-dom';
import Game from './screens/Game'

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
