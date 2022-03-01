// es7 & styled components rafce
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, BurgerIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink, NavIcon2 } from './Navbar.styled';


const Navbar = () => {
    // React hook - State for toggle button on click 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const displayButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true) 
        }
    }
useEffect(() => {
    displayButton()
}, [])

window.addEventListener('resize', displayButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
                AH Solutions       
              <NavIcon2 />
            </NavLogo>

            <BurgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </BurgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/resume">Resume</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar