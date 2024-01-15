import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/AboutPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
import Header from "./components/Header";
import DataContextConstructor from "./contexts/dataContext";

function App() {
  return (
    <div className="App">
      <DataContextConstructor>
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/projectsPage" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      </DataContextConstructor>
     
    </div>
  );
}

export default App;
