import React from "react";
import Main from "../components/Main";
import "../styles/Layout.css";
import { useState, useEffect } from "react";
import { Row, Col, Nav, Button, Container } from "react-bootstrap";
import Scoreboard from "../components/Scoreboard";
import Footer from "../components/Footer";

const Home = () => {
    const [isDark, setIsDark] = useState(false);
    const [presentScoreboard, setPresentScoreboard] = useState(false);

    useEffect(() => {
        // Apply the dark-mode class to the body element
        if (isDark) {
        document.body.classList.add('dark-mode');
        } else {
        document.body.classList.remove('dark-mode');
        }
    }, [isDark]);

    return (
      <div className="biggest-container">
        {/* Header to control the dark mode */}
        <Container fluid id="nav-container">
          <Row className="justify-content-between" id="menu-bar">
            <Col className="score-board" onClick={() => setPresentScoreboard(!presentScoreboard)}>
              {presentScoreboard ? "Home" : "Score Board"}
            </Col>
            <Nav className="justify-content-end col">
                <div className="menu-item">
                    <div className="theme-toggle-container">
                        <span className={`toggle-text ${!isDark ? 'active-text' : ''}`}>Light</span>
                        <label className="switch">
                            <input
                            type="checkbox"
                            checked={isDark}
                            onChange={() => setIsDark(!isDark)}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span className={`toggle-text ${isDark ? 'active-text' : ''}`}>Dark</span>
                    </div>
                </div>
                <Button className="contactButton menu-item" href="https://www.linkedin.com/in/zulaconnect/">Contact us</Button>
            </Nav>
          </Row>
        </Container>
        {/* Decide whether to render the home or scoreboard based on the state */}
        {presentScoreboard ? (
          <Scoreboard />
        ) : (
          <Main />
        )}
        <Footer />
      </div>
    );
};

export default Home;