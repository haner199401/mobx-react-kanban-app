import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';

import App from './components/App';
import NotesModel from './model/NotesModel';

const store = new NotesModel();

window.store = store;

render(
  <Provider store={store}>
    <App/> 
  </Provider>,
  document.getElementById('root')
);