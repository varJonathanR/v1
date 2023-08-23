import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from './StyledComponents'

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <Nav className={visible ? "" : "hide"}>
        <Link to="/">
          <h3>vJR</h3>
        </Link>
        <div className='linksCont'>
            <NavLink 
                className={({isActive}) => (isActive ? "active" : null)} 
                to="/"
            >Home</NavLink>
            <NavLink 
                className={({isActive}) => (isActive ? "active" : null)} 
                to="/projects"
            >Projects</NavLink>
            <NavLink 
                className={({isActive}) => (isActive ? "active" : null)} 
                to="/contact"
            >Contact</NavLink>
        </div>
    </Nav>
  )
}

export default Navbar