import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import {Provider} from 'react-redux';
import {taskReducer} from './reducers/taskReducer';
 
if (localStorage.getItem('tasks') == null)
    localStorage.setItem('tasks',JSON.stringify([]))

let initialState = {
  currentIndex : -1,
  list : JSON.parse(localStorage.getItem('tasks'))
}

var store = createStore(taskReducer,initialState)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
