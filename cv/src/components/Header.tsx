import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();

  return (
    <NavBarDiv className="navbar navbar-expand-lg">
      <NavLink to={`/`} className="logo">
        <ImgDiv src={`../images/Kabam_Logo.png`} />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="filters navbar-nav mr-auto ml-auto">
          <NavLink
            to={`/`}
            style={{
              color: `${location.pathname === `/` ? `red` : `rgb(217, 142, 2)`}`,
              fontWeight: `${location.pathname == `/` ? '600': ''}`
            }}
          >
            Home
          </NavLink>

          <NavLink
            to={`/aboutPage`}
            style={{
              color: `${
                location.pathname === `/aboutPage` ? `red` : `rgb(217, 142, 2)`
              }`,
              fontWeight: `${location.pathname == `/aboutPage` ? '600': ''}`
            }}
          >
            About
          </NavLink>
          <NavLink
            to={`/projectsPage`}
            style={{
              color: `${
                location.pathname === `/projectsPage` ? `red` : `rgb(217, 142, 2)`
              }`,
              fontWeight: `${location.pathname == `/projectsPage` ? '600': ''}`
            }}
          >
            Projects
          </NavLink>
        </ul>
        <ThemeToggle />
      </div>
    </NavBarDiv>
  );
};

export default Header;

const NavBarDiv = styled.div`
  box-shadow: 0 5px 5px -5px #000;
`;
const ImgDiv = styled.img`
  width: 60px;
  display: block;
`;
