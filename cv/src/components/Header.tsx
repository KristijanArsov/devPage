import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();

  return (
    <NavBarDiv className="py-3">
      <InnerWrapNavBar>
        <div className="col-4">
        <NavLink to={`/`} className="logo">
          CV
        </NavLink>
        </div>
        
       
        
        <div className="col-4 d-flex filters justify-content-center align-items-center text-center">
          <NavLink
            to={`/`}
            style={{ color: `${location.pathname === `/` ? `rgb(217, 142, 2)` : ``}` }}
          >
            Home
          </NavLink>
          <NavLink
            to={`/aboutPage`}
            style={{
              color: `${location.pathname === `/aboutPage` ? `rgb(217, 142, 2)` : ``}`,
            }}
          >
            About
          </NavLink>
          <NavLink
            to={`/projectsPage`}
            style={{
              color: `${location.pathname === `/projectsPage` ? `rgb(217, 142, 2)` : ``}`,
            }}
          >
            Projects
          </NavLink>
        </div>
      
        <div className="col-4">sonce/mesechina</div>
      </InnerWrapNavBar>
    </NavBarDiv>
  );
};

export default Header;

const NavBarDiv = styled.div`
  color: #fff;
  box-shadow: 0 5px 5px -5px #000;
`;

const InnerWrapNavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
width: 85%;
margin-left: auto;
margin-right: auto;
`
