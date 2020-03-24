import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

class Header extends React.Component {
    // constructor() {
    //     super();
    // }

    render () {
      return (
        <Row style={{backgroundColor:'#527dbc'}}> 
        <Col style={{backgroundColor:'#8eba13'}}>
          <img src="#" alt="logo"></img>
        </Col>
        <div className="w-100">
        </div>
        <Col className="justify-content-center d-flex">
          <Container className="cont">
            <Row className="justify-content-center">
              <h1 id="header">ХУРДАН БИЧИЖ СУРЦГААЯ</h1>
            </Row>
            <Row className="justify-content-center">
              <Col className="meter">
                <Col className="counter" id="wordMin">
                  0
                </Col>
                <Col className="desc">
                  WORDS/MIN
                </Col>
              </Col>
              <Col className="meter">
                <Col className="counter" id="charMin" >
                0
                </Col>
                <Col className="desc">
                  CHARS/MIN
                </Col>
              </Col>
              <Col className="meter">
                <Col className="counter" id="accuracy">
                  0
                </Col>
                <Col className="desc">
                  %accuracy
                </Col>
              </Col>
            </Row>
            <Row className="justify-content-center d-flex">
              <Col className="meter">
                <Col className="counter" id="second" func={this.CountDown}>
                  
                </Col>
                <Col className="desc">
                  SECOND
                </Col>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      )
    }
};

export default Header;