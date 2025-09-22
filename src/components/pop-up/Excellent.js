import React from "react";
import "../../styles/Layout.css";
import cheetah from '../../assets/cheetah.gif';
import data from "../../resources/data.json";

const Excellent = (accuracy, correct) => {


  return  <div>
            <div className="popup-header">{data.cheetah}</div>          
            <div>
              <img className="half-width"src={cheetah} alt="cheetah"/>
              <div className="popup-body">Word Count: {correct}, Accuracy: {accuracy}%</div>
            </div>
          </div>;
};

export default Excellent;
