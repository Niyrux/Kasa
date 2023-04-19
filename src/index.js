import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './component/header/header';
import { BrowserRouter } from "react-router-dom"
import MyRoute from './route';
import Footer from './component/footer/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyRoute />
      <Footer />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
