import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="ul-elements">
    <li className="logo-elements">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      Wave
    </li>
    <div className="links">
      <li>
        <Link className="nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </li>
    </div>
  </ul>
)

export default Header
