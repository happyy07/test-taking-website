import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home.component';
import Finish from './components/Finish/Finish.component';
import Result from './components/Result/Result.component';
import QOption from './components/QOption/QOption.component';
import Question from './components/Question/Question.component';
import QuestionPage from './components/Question/Question.page';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import {getAllTests} from './services/APIService';

function App() {
  const [tests,setTests]=useState([])
  useEffect(() => {
    // Update the document title using the browser API
    getAllTests().then((res)=>{
      setTests(res.data)
    })
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home tests={tests}/>} />
        <Route path="/Finish" element={<Finish />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/test/:testId/" element={<QuestionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
