import { useState } from 'react'
import logoproduct from '../assets/logoproduct.svg'
import { PiTextAlignRightThin } from "react-icons/pi";
import { PiXThin } from "react-icons/pi";
// import { PiSealCheckLight } from "react-icons/pi";
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from '../styles/Navbar.style';
import { navbarData } from '../data/NavbarData';

const Navbar = ({ hide }) => {
  const [show, setShow] = useState(false);
  return (
    <Nav hide={hide}>
      <NavbarContainer>
        <NavLogo to="/" onClick={scroll.scrollToTop}>
          <NavIcon src={logoproduct}/>
        </NavLogo>

        {!hide && (
          <>
            <IconContext.Provider value={{ color: '#bd1622' }}>
              <MobileIcon onClick={() => setShow(!show)}>
                {show ? <PiXThin /> : <PiTextAlignRightThin />}
              </MobileIcon>
            </IconContext.Provider>
            <NavMenu hide={hide} show={show}>
              {navbarData.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks
                    spy={true}
                    duration={500}
                    smooth={true}
                    exact="true"
                    offset={el.offset}
                    onClick={() => setShow(false)}
                    to={el.to}
                  >
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;