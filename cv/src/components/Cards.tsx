import React from "react";
import { DataType } from "../assets/list";
import { Link } from "react-router-dom";

const Cards: React.FC<DataType> = ({ img, title, text, link,branch }) => {
  return (
    <div className="col-3 mb-3">
      <Link to={link} >
        <div className="card" style={{borderRadius:`20px`}}>
          <div className="image" style={{borderRadius:`20px`}}>
            <img
              src={`images/${img}`}
              className="d-block w-100"
              style={{ height: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="details" style={{borderRadius:`20px`}}>
            <div className="center">
              <h1>{title}</h1>
              <p>{text}.</p>
              <Link to={branch} className="text-danger">to branch</Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
