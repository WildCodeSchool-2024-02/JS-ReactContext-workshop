import '../assets/css/navbar.css';

function Navbar() {
  return (
    <nav className='dark'>
      <h1>React context</h1>
      <label id="switch" className="switch">
          <input type="checkbox" id="slider" />
          <span className="slider round"></span>
      </label>
    </nav>
  );
}

export default Navbar;