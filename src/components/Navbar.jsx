import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Burguer, LinkContainer } from './StyledComponents';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <p className='logo'>vJR</p>
        </Link>
        
        <Burguer onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={"icon nav-icon " + (isMobileMenuOpen ? "open" : "")}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Burguer>
        <LinkContainer open={isMobileMenuOpen}>
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
        </LinkContainer>
    </Nav>
  )
}