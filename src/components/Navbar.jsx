import '../assets/css/navbar.css';
import { useNavigate } from 'react-router-dom';
import useTheme from '../context/theme/context';

function Navbar() {
  

  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className={theme}>
      <h1 onClick={() => navigate("/")}>React context</h1>
      <label id="switch" className="switch">
          <input defaultChecked={theme === "light" && true} type="checkbox" id="slider" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} />
          <span className="slider round"></span>
      </label>
    </nav>
  );
}

export default Navbar;