import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="topnav">

      <div className='navBar'>
        <div className="logo">
          <span>JJ Travels </span>
        </div>
        <div>
          <NavLink exact to="/" activeClassName="activeLink"> Home</NavLink>
        </div>
        <div>
          <NavLink to="/catalogue" activeClassName="activeLink">Catalogue</NavLink>
        </div>
        <div>
          <NavLink to="/location" activeClassName="activeLink">Location</NavLink>
        </div>
        <div className='Contact'>
          <NavLink to="/contact" activeClassName="activeLink">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
