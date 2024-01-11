import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutPage' element={<AboutPage/>}/>
      <Route path='/projectsPage' element={<ProjectsPage/>}/>
     </Routes>
    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
