import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home.component';
import Test from './components/Test/Test.component';
import Result from './components/Result/Result.component';

function App() {
  return (
    <div className="App">
            <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Test" element={<Test/>} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
