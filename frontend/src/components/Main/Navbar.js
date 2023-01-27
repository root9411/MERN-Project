import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = ({click}) => {
  return (
    <nav className="navbar">

      {/* logo */}
        <div className="navbar__logo"> 
            <h2>MERN Shopping Cart</h2>
        </div>


      {/* Links */}
        <ul className="navbar__links">
            <li>
                <Link to="/cart">
                    <i className='fas fa-shopping-cart'></i>
                Cart
                <span className='cartlogo__badge'>0</span>

                </Link>
            </li>
            <li>
                <Link to="/">
                Shop
                </Link>
            </li>
        </ul>



      {/* hamburger menu */}
        <div className='hamburger__menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar
