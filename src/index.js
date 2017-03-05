import 'babel-polyfill';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';

import ToursStore from './App/Stores/ToursStore.js';
import App from './App/App.js';
import './index.styl';

const toursStore = new ToursStore();

render((
    <Provider toursStore={toursStore}>
        <App />
    </Provider>
), document.getElementById('react-root-container'));
