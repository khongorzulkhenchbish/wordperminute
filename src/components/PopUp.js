import { React, useState } from "react";
import {Container, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import "../styles/Layout.css";
import data from "../resources/data.json";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../init-firebase';

const PopUp = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const refreshPage = () => {
        window.location.reload(false);
    }

    const addEntryToCollection = async (dataToAdd) => {
        try {
            const docRef = await addDoc(collection(db, "scores"), dataToAdd);
            console.log("Document written with ID: ", docRef.id);
            return docRef.id; // Return the new document ID
        } catch (e) {
            console.error("Error adding document: ", e);
            throw e; // Or handle the error as appropriate for your app
        }
    };

    const handleClick = () => () => {
        const username = document.getElementById('username').value;
        // console.log('Username:', username);
        if (username === '') {
            setMessage('Please enter your username');
            return;
        }
        const dataToAdd = {
            username: username,
            wpm: props.data.correct,
            accuracy: props.data.accuracy,
            timestamp: new Date()
        };
        addEntryToCollection(dataToAdd)
            .then((docId) => {
                console.log("Data successfully added with ID: ", docId);
                setMessage('Score saved successfully!');
                setSubmitted(true);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                setMessage('Failed to save score. Please try again.');
            });
    }

    const redirectToScoreBoard = () => () => {
        console.log('Redirecting to scoreboard...');
        window.location.href = '/scoreboard';
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
                    {!submitted ? (
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Enter your username"
                            aria-label="Enter your username"
                            aria-describedby="basic-addon2"
                            id="username"
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={handleClick()} className="contactButton">
                            Save Score
                            </Button>
                        </InputGroup>
                    ) : (
                        <>
                            <div style={{ color: "green", marginBottom: "1rem" }}>{message}</div>
                            <Button className="contactButton" onClick={redirectToScoreBoard()} style={{marginBottom: "1rem"}}>Check Score Board</Button>
                        </>
                        )}
                        {message && !submitted && (
                            <div style={{ color: "red", marginBottom: "1rem" }}>{message}</div>
                    )}
                    <div className="popup-footer">
                        <Button className="contactButton" onClick={refreshPage}>{data.bnt_close}</Button>{' '}
                    </div>
                </div>
            </div>
          </div>
        </Container>
  );
};

export default PopUp;
