import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEaUNGe31kRs38t5wY0F3AjewUPccxHPE",
  authDomain: "my-react-blog-b8d04.firebaseapp.com",
  projectId: "my-react-blog-b8d04",
  storageBucket: "my-react-blog-b8d04.appspot.com",
  messagingSenderId: "853792235240",
  appId: "1:853792235240:web:bfa8700b57551d14b6735d"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
