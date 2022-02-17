
import './App.css';
import React from 'react'
import ListNew from './components/ListNews/ListNews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Post/Posts";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
   
   <div className="App">
    <GlobalProvider>
          <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Form" element={<Form />} />
            <Route path="/ListNew" element={<ListNew />}/>
          </Routes>
          </Router>  

     
        <Posts />
      </GlobalProvider>
    </div>
   
   
      );
    
};


export default App;
