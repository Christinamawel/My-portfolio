import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import ProjectDetails from "./ProjectDetails.js";
import projectsArray from "../projectsArray.js";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home projectsArray={projectsArray}/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetails/>}/>
      </Routes>
  );
}

export default App;
