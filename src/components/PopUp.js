import React from "react";
import {Container, Button } from "react-bootstrap";
import "../styles/Layout.css";
import Poor from './pop-up/Poor';
import Avg from './pop-up/Average';
import Excellent from './pop-up/Excellent';
import data from "../resources/data.json";

const PopUp = (props) => {
    const showPopUp = () => {
        const score = props.data.correct;
        const accuracy = props.data.accuracy;
        const correct = props.data.correct;

        if(score < 28) {
            return Poor(accuracy, correct);
        }
        else if(score < 42) {
            return Avg(accuracy, correct);
        } 
        else {
            return Excellent(accuracy, correct);
        }
    }
    const refreshPage = () => {
        window.location.reload(false);
    }
  return (
        <Container className="popup-container" style={{display: props.data.visible ? 'block' : 'none' }}>
          <div className="popup-overlay">
            <div className="popup-wrapper">
                <div className="popup-window">
                    {showPopUp()}
                    <div className="popup-footer">
                        <Button variant="primary" onClick={refreshPage}>{data.btn_restart}</Button>{' '}
                    </div>
                </div>
            </div>
          </div>
        </Container>
  );
};

export default PopUp;
