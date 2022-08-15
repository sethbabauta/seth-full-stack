import {  Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div class="Navbar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://github.com/sethbabauta">Github</a>
    </div>
  )
}

export default Navbar
