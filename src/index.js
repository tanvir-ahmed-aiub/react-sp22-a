import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Components/Login';
import Event from './Components/Event';
import Post from './Components/Post';
ReactDOM.render(
  <React.StrictMode>
  <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/event" element={<Event></Event>}></Route>
          <Route path="/post" element={<Post></Post>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

