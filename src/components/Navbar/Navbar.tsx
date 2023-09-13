import './Navbar.css'
import logo from "../../assets/images/logo_transparent.png";

function Navbar() {
  return (


    <nav className="nav">
      <div className="heading">
        <img className='brandLogo' src={logo} />
        <h4 className='brandName'>flawIT</h4>
      </div>

      <ul className="nav-links">

        <li><a className="active" href="index.html">Home</a></li>
        <li><a href="pages/about.html">About</a></li>
        <li><a href="pages/services.html">Services</a></li>
        <li><a href="pages/contact.html">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar