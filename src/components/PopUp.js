import React from "react";
import {Container, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import "../styles/Layout.css";
import data from "../resources/data.json";

const PopUp = (props) => {
    const refreshPage = () => {
        window.location.reload(false);
    }
  return (
        <Container className="popup-container" style={{display: props.data.visible ? 'block' : 'none' }}>
          <div className="popup-overlay">
            <div className="popup-wrapper">
                <div className="popup-window">
                    <div className="popup-header">{data.final_result}</div>
                    <Container className="popup-body">
                        <Row className="justify-content-md-center" style={{marginBottom: '30px', marginTop: '30px'}}>
                            <Col className="meter center-content">
                                <Col id="wordMin">
                                    {props.data.correct}
                                </Col>
                                <Col className="desc">{data.wrdMin} </Col>
                            </Col>
                            <Col className="meter center-content">
                                <Col id="accuracy">
                                    {props.data.accuracy}%
                                </Col>
                                <Col className="desc">{data.accuracy} </Col>
                            </Col>
                        </Row>
                    </Container>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Enter your username"
                        aria-label="Enter your username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" className="contactButton">
                        Save Score
                        </Button>
                    </InputGroup>
                    <div className="popup-footer">
                        <Button className="contactButton" onClick={refreshPage}>{data.btn_restart}</Button>{' '}
                    </div>
                </div>
            </div>
          </div>
        </Container>
  );
};

export default PopUp;
