import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import "../styles/Layout.css";
import { FaFacebook } from 'react-icons/fa';
import data from "../resources/data.json";


const Header = (props) => {
  return (
    <Row className="header-container">
        <Nav className="justify-content-end">
            <Nav.Link href="mailto: hongorzulnemo@gmail.com">{data.contact}</Nav.Link>
            {/* <Nav.Link href="/">{data.score_board}</Nav.Link> */}
            <Nav.Link href="https://www.facebook.com/khongorzul.khenchbish">
                <FaFacebook />
            </Nav.Link>
        </Nav>

        <Container className="meter-container">
           <Row className="center-content">
           <h1 id="header"> {data.header_text} </h1>
           </Row>
          <Row className="center-content">
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
          <Row className="center-content">
            <Col className="meter">
              <Col id="second">
                {props.data.sec}
              </Col>
              <Col className="desc">{data.sec} </Col>
            </Col>
          </Row>
        </Container>
    </Row>
  );
};

export default Header;
