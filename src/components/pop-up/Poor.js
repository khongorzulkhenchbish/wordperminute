import React from "react";
import "../../styles/Layout.css";
import snail from '../../assets/snail.gif';
import data from "../../resources/data.json";


const Poor = (accuracy, correct) => {
  return  <div>
            <div className="popup-header">Таны хурд: {data.snail}</div>
            <div>
                <img className="popup-body" src={snail} alt="snail"/>
                <div className="popup-body">Та {correct} үг, {accuracy}% амжилттай бичлээ.</div>
            </div>
          </div>;
};

export default Poor;
