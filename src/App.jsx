
import './App.css';
import React from 'react';
import ListNews from './components/ListNews/ListNews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
   
  <div className="App">
    <GlobalProvider>
          <Router>
          <Header /> 
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} /> 
            <Route path="/Form" element={<Form />} />
            <Route path="/ListNews" element={<ListNews />}/>
          </Routes>
          </Router>  

    </GlobalProvider>
  </div>
   
   
      );
    
};


export default App;
