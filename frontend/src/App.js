import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/Theme.css';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
