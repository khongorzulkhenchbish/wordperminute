import React from "react";
import "../../styles/Layout.css";
import bunny from '../../assets/bunny.gif';
import data from "../../resources/data.json";

const Average = (accuracy,correct) => {


  return  <div>
            <div className="popup-header">{data.result_header} {data.bunny}</div> 
            <div>
            <img className="half-width" src={bunny} alt="bunny"/>
              <div className="popup-body">Word Count: {correct}, Accuracy: {accuracy}%</div>
            </div>
          </div>;
};

export default Average;

