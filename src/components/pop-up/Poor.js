import React from "react";
import "../../styles/Layout.css";
import snail from '../../assets/snail.gif';
import data from "../../resources/data.json";


const Poor = (accuracy, correct) => {
  return  <div>
            <div className="popup-header">{data.snail}</div>
            <div>
                <img className="popup-body" src={snail} alt="snail"/>
                <div className="popup-body">Word Count: {correct}, Accuracy: {accuracy}%</div>
            </div>
          </div>;
};

export default Poor;
