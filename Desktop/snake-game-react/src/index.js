import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderComponent from './HeaderComponent.js'
import 'bootstrap/dist/css/bootstrap.css';
import GameComponent from './GameComponent';
// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
// utility functions


ReactDOM.render(<> <HeaderComponent/> <GameComponent size={400}/> </>,document.getElementById('root'));
