import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './component/header/header';
import Bandeau from './component/bandeau/bandeau';
import { BrowserRouter } from "react-router-dom"
import MyRoute from './route';
import Footer from './component/footer/footer';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <MyRoute />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
