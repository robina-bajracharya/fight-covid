import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleArrows,
  faLaptopHouse,
  faHandsWash,
} from "@fortawesome/free-solid-svg-icons";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <div className="footer__people">
          <FontAwesomeIcon icon={faPeopleArrows} size="4x" color="white" />
          <h3 className="txt">
            Keep the distance!
          </h3>
        </div>
        <div className="footer__house">
          <FontAwesomeIcon icon={faLaptopHouse} size="4x" color="white" />
          <h3 className="txt">Stay at home!</h3>
        </div>
        <div className="footer__hands">
          <FontAwesomeIcon icon={faHandsWash} size="4x" color="white" />
          <h3 className="txt">Wash your hands!</h3>
        </div>
      </div>
      <h4 className="footer__credits">
        &copy; Copyright 2020 created by A&R Team!
      </h4>
    </div>
  );
};

export default footer;
