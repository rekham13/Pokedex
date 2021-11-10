import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
    <React.Fragment>
      <NavBar/>
      <Home />
    </React.Fragment>,
  document.getElementById('root')
);
