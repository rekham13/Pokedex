import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeDex from './CustomController/CustomController';

ReactDOM.render(
    <React.Fragment>
      <PokeDex />
    </React.Fragment>,
  document.getElementById('root')
);
