import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import IRoute from './router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<IRoute />, document.getElementById('root'));
registerServiceWorker();
