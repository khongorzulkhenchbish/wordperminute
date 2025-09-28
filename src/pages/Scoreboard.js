import React from "react";
import "../styles/Layout.css";
import { Row, Col, Nav, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import DarkModeToggle from "../components/DarkModeToggle";
import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../init-firebase';
import { FaTrophy } from 'react-icons/fa';

const Scoreboard = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
        try {
            const scoresCollectionRef = collection(db, "scores");
            const q = query(
                scoresCollectionRef,
                orderBy("wpm", "desc"),
                orderBy("accuracy", "desc")
            );

            const querySnapshot = await getDocs(q);
            const fetchedScores = [];

            querySnapshot.forEach((doc) => {
                // doc.data() returns a plain JavaScript object
                const data = doc.data();
                const scoreDate = data.date && typeof data.date.toDate === 'function'
                                    ? data.date.toDate()
                                    : new Date();

                fetchedScores.push({
                    id: doc.id, // Document ID is useful for React keys and for referencing the document
                    username: data.username,
                    wpm: data.wpm,
                    accuracy: data.accuracy,
                    date: scoreDate,
                });
            });

            // Assign 'rank' (rank) based on the order returned by the query
            const scoresWithrank = fetchedScores.map((score, index) => ({
            ...score,
            rank: index + 1,
            }));

            setScores(scoresWithrank);
        } catch (err) {
            console.error("Error fetching scores:", err);
            setError("Failed to load scores. Please check your browser's console for more details.");
        } finally {
            setLoading(false);
        }
        };

        fetchScores();
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <p style={{ textAlign: "center"}}>Loading scoreboard...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    const redirectToHome = () => () => {
        console.log('Redirecting to home...');
        window.location.href = '/';
    }

    return (
    <Row id="upper-part" className="justify-content-md-center">
        <Row className="header-container justify-content-md-center">
            <Row className="justify-content-between" id="menu-bar">
            <Col className="score-board" onClick={redirectToHome()}>Home</Col>
            <Nav className="justify-content-end col">
                <DarkModeToggle className="menu-item"/>
                <Button className="contactButton menu-item" href="https://www.linkedin.com/in/zulaconnect/">Contact us</Button>
            </Nav>
            </Row>

            <Table striped bordered hover style={{ marginTop: '20px'}}>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>WPM (word per minute)</th>
                    <th>Accuracy</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {scores.length === 0 ? (
                    <tr>
                    <td colSpan={5} style={{ textAlign: 'center' }}>No scores yet! Be the first to add one.</td>
                    </tr>
                ) : (
                    scores.map((score) => (
                    <tr key={score.id}>
                        <td>
                        {score.rank === 1 ? (
                            <FaTrophy color="gold"/>
                        ) : score.rank === 2 ? (
                            <FaTrophy color="silver" />
                        ) : score.rank === 3 ? (
                            <FaTrophy color="#CD7F32" /> // Hex code for bronze
                        ) : (
                            <span>{score.rank}</span>
                        )}
                        </td>
                        <td>{score.username}</td>
                        <td>{score.wpm}</td>
                        <td>{score.accuracy}%</td>
                        <td>{score.date?.toLocaleDateString()}</td>
                    </tr>
                    ))
                )}
                </tbody>
            </Table>
        </Row>
    </Row>
  );
};

export default Scoreboard;