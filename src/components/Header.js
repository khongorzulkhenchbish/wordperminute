import React from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import "../styles/Layout.css";
import data from "../resources/data.json";
import DarkModeToggle from "./DarkModeToggle";

const Header = (props) => {
  return (
    <Row className="header-container justify-content-md-center">
        <Row className="justify-content-between" id="menu-bar">
          <Col className="score-board" onClick={() => console.log('hey')}>Score Board</Col>
          <Nav className="justify-content-end col">
            <DarkModeToggle className="menu-item"/>
            <Button className="contactButton menu-item" href="https://www.linkedin.com/in/zulaconnect/">Contact us</Button>
          </Nav>
        </Row>

        <Container>
           <Row className="center-content">
           <h1 id="header"> {data.header_text} </h1>
           </Row>
          <Row className="justify-content-md-center">
            <Col className="meter center-content">
              <Col id="second">
                {props.data.sec}
              </Col>
              <Col className="desc">{data.sec} </Col>
            </Col>
            <Col className="meter center-content">
              <Col id="wordMin">
                {props.data.correct}
              </Col>
              <Col className="desc">{data.wrdMin} </Col>
            </Col>
            <Col className="meter center-content">
              <Col id="charMin">
                {props.data.totalLetter}
              </Col>
              <Col className="desc">{data.charMin} </Col>
            </Col>
            <Col className="meter center-content">
              <Col id="accuracy">
                {props.data.accuracy}%
              </Col>
              <Col className="desc">{data.accuracy} </Col>
            </Col>
          </Row>
        </Container>
    </Row>
  );
};

export default Header;
