import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './MainApp';
import UserScreen from './UserScreen';
import reportWebVitals from './reportWebVitals';
import UpdateScreen from './UpdateScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserScreen></UserScreen> */}
    {/* <MainApp></MainApp> */}
    <UpdateScreen></UpdateScreen>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
