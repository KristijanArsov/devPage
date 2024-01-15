import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";


const HeroSection = () => {
  return (
    <div className="row pb-4" style={{ paddingTop: `60px` }}>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <ImageDiv
            src="../images/IMG_0690.jpg"
            alt=""
            className="d-block w-100"
          />
        </div>
        <div className="col-6">
          <h3>Hi! I'm</h3>
          <h1>
            <span style={{ color: `rgb(217, 142, 2)` }}>Kristijan</span>{" "}
            Arsov
          </h1>
          <p>
            "I am a front-end developer proficient in building dynamic and
            responsive web applications, leveraging technologies such as
            React, Next.js, jQuery, and other cutting-edge tools to enhance
            user experiences."
          </p>
          <div className="social-links">
            <Link to={`https://www.linkedin.com/in/kristijan-arsov-aa2534225/`}>
            <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to={`https://github.com/KristijanArsov`}>
            <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection

const ImageDiv = styled.img`
  display: block;
  object-fit: cover;
  height: 550px;
  border-radius: 10px 10px 50px 50px;
  border-top: 3px solid rgb(217, 142, 2);
  box-shadow: 5px 5px 10px #000;
`;