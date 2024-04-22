import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import '../assets/css/navbar.css';

function Navbar({theme, setTheme}) {

  const navigate = useNavigate();

  return (
    <nav className={theme}>
      <h1 onClick={() => navigate("/")}>React context</h1>
      <label id="switch" className="switch">
        <input
          defaultChecked={theme === "light" && true}
          type="checkbox"
          id="slider"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}

export default Navbar;