import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <body>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact />
          </Routes>
        </Router>
        <p>
          Yo mama's so fat, when she skips a meal, the stock market drops.
        </p>
      </body>
    </div>
  );
}

export default App;
