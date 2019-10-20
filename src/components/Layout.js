import React from 'react';
import './Layout.css';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container fluid="true">
      {/* first container */}
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
                <Col className="counter" id="charMin">
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
                <Col className="counter" id="second">
                  60
                </Col>
                <Col className="desc">
                  SECOND
                </Col>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* main container */}
      <Row>
        <Col className="text-right" id="leftWord">
        </Col>
        <input className="text-right" id="in" type="text" onInput="solve()" onBlur="this.focus()" autoFocus></input >
        <Col className="text-left" id="rightWord">
        </Col>
      </Row>
        {/* last container */}

        <Row className="justify-content-center d-flex adv">
          <div className="contentBox text-right">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v4xZUr0BEfE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="contentBox">
            <h1>BROUGHT TO YOU BY LIVECHAT</h1>
            <p>LiveChat is an application that enables the visitors on your site to 
              <strong>ch
              at live with your customer support</strong>. As opposed 
            to the outdated phone technology, LiveChat lets you to chat with severa
            l customers at the same time, track their behaviour and measure sales conversio
            n. Give us a try!</p>
            <button type="button" className="btn btn-primary" >SIGN UP FOR FREE</button>
          </div>
        </Row>
      </Container>
    )
}

export default Layout;
