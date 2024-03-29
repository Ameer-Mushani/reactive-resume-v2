import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competers from './pages/competers/competers';
import Robotics from './pages/robotics/robotics';
import SAP from './pages/sap/sap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<App/>} />
         <Route path="/competers" element={<Competers/>} />
         <Route path="/robotics" element={<Robotics/>} />
         <Route path="/sap" element={<SAP/>} />
      </Routes>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
