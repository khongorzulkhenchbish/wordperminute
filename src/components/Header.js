import React from "react";
import { Row, Col, Container, Nav, Button } from "react-bootstrap";
import "../styles/Layout.css";
import data from "../resources/data.json";
import DarkModeToggle from "./DarkModeToggle";

const Header = (props) => {
  return (
    <Row className="header-container">
        <Nav className="justify-content-end">
          <DarkModeToggle />
          <Button className="contactButton" href="https://www.linkedin.com/in/zulaconnect/">Contact us</Button>
        </Nav>

        <Container className="meter-container">
           <Row className="center-content">
           <h1 id="header"> {data.header_text} </h1>
           </Row>
          <Row className="center-content">
            <Col className="meter">
              <Col id="second">
                {props.data.sec}
              </Col>
              <Col className="desc">{data.sec} </Col>
            </Col>
            <Col className="meter">
              <Col id="wordMin">
                {props.data.correct}
              </Col>
              <Col className="desc">{data.wrdMin} </Col>
            </Col>
            <Col className="meter">
              <Col id="charMin">
                {props.data.totalLetter}
              </Col>
              <Col className="desc">{data.charMin} </Col>
            </Col>
            <Col className="meter">
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
