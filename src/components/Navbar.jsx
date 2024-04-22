import { useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css';

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="dark">
      <h1 onClick={() => navigate("/")}>React context</h1>
      <label id="switch" className="switch">
        <input type="checkbox" id="slider" />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}

export default Navbar;