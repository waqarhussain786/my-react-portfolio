import React from 'react';
import ReactDOM from 'react-dom/client';
import { RobotList } from './robotsList.js';
import 'tachyons';
import CardList from './CardList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList RobotList={RobotList}/>
  </React.StrictMode>
);
