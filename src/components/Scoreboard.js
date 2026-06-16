import React from "react";
import "../styles/Layout.css";
import { Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Scoreboard = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const res = await fetch('/api/scores');
                if (!res.ok) throw new Error('Failed to fetch scores');
                const data = await res.json();
                const scoresWithRank = data.map((score, index) => ({
                    id: score.id,
                    username: score.username,
                    wpm: score.wpm,
                    accuracy: score.accuracy,
                    date: score.created_at
                        ? new Date(score.created_at).toLocaleString('en-US', {
                            year: 'numeric', month: 'short', day: 'numeric',
                            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
                        }).replace(',', '')
                        : '',
                    rank: index + 1,
                }));
                setScores(scoresWithRank);
            } catch (err) {
                console.error("Error fetching scores:", err);
                setError("Failed to load scores.");
            } finally {
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center"}}>Loading scoreboard...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    return (
        <Row className="justify-content-md-center score-board-bg">
            <Row className="header-container justify-content-md-center">
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
                            <td>{score.date}</td>
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