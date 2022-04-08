import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollContainer } from "react-scroll-motion";

import Home from './pages/home/home.page';
import Project from './pages/home/project/project.page';

function App() {
  return (
    <ScrollContainer>
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/project" element={<Project/>}/>
     </Routes>
    </BrowserRouter>
    </ScrollContainer>

  );
}

export default App;
