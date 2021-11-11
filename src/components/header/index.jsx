import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars, AiOutlineClose } from "react-icons/all";

export const NavBarLink = ({ url, name, onClick }) => {
  const location = useLocation();

  const getActive = (currentLocation) => {
    if (location.pathname === currentLocation) {
      return {
        color: "#0261a2",
        fontWeight: "600",
        paddingBottom: "1.8rem",
        borderBottom: "4px solid #0261a2",
      };
    }
  };
  return (
    <MyNavLink>
      <li onClick={onClick}>
        <Link to={url} className="nav_link" style={getActive(url)}>
          {name}
        </Link>
      </li>
    </MyNavLink>
  );
};

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  };

  const handleHideNav = () => {
    setShowNav(false);
  };

  const style = showNav ? { display: "block" } : {};
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <img src="/assets/images/logo.png" alt="" />
      </HeaderLeft>

      <HeaderRight style={style}>
        <HeaderList>
          <NavBarLink url="/" name="Home" onClick={handleHideNav} />
          <NavBarLink url="/about" name="About Me" onClick={handleHideNav} />
          <NavBarLink url="/contact" name="Contact" onClick={handleHideNav} />
          <NavBarLink url="/projects" name="Projects" onClick={handleHideNav} />
        </HeaderList>
      </HeaderRight>
      <NavBar>
        {!showNav ? (
          <FaBars onClick={handleShowNav} className="nav_bar_icons" />
        ) : (
          <AiOutlineClose onClick={handleHideNav} className="nav_bar_icons" />
        )}
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 7.5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  font-size: 1.25rem;
`;

const HeaderLeft = styled.div`
  img {
    width: 100%;
  }
`;

const HeaderRight = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: auto;
  font-family: var(--header-font-style);

  li {
    padding: 1rem 0rem 1rem 4rem;
    .active_nav_NavLink {
      color: #0261a2;
      text-decoration: none;
    }
    .inactive_nav__NavLink {
      color: #333333;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 240px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #333333;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5rem 1rem;
    li {
      margin: 1rem 0rem 1.5rem 0rem;
      color: #fff;

      .nav_link {
        color: #fff;
      }
    }
  }
`;

const NavBar = styled.nav`
  display: none;
  .nav_bar_icons {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MyNavLink = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    .nav_link {
      text-decoration: none;
      color: #333333;

      @media screen and (max-width: 768px) {
        color: #fff;
      }
    }
  }
`;
