import React from "react";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row pb-4" style={{ paddingTop: `60px` }}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <ImageDiv
                src="../images/354375721_1738263199957365_5747161446601416037_n.jpg"
                alt=""
                className="d-block w-100"
              />
            </div>
            <div className="col-6 text-light">
              <h3>Hi! I'm</h3>
              <h1><span style={{color:`rgb(217, 142, 2)`}}>Kristijan</span> Arsov</h1>
              <p>
              "I am a front-end developer proficient in building dynamic and responsive web applications, leveraging technologies such as React, Next.js, jQuery, and other cutting-edge tools to enhance user experiences."
              </p>
              <div className="social-links">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-gitlab"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const ImageDiv = styled.img`
  display: block;
  width: 100%;
  height: 550px;
  border-radius: 10px 10px 50px 50px;
  border-top: 3px solid rgb(217, 142, 2);
  box-shadow: 5px 5px 10px #000;

`;
