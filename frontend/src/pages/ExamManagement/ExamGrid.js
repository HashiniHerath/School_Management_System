import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ExamGrid = () => {
    const [exams, setExams] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8070/exam')
            .then(response => {
                setExams(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the exam list: ${error}`);
            });
    }, []);

    return (
        <Container>
            <Row>
                {exams.map((exam, index) => (
                    <Col sm={4} key={index}>
                        <Card className="mb-4">
                            <Card.Body

                            >
                                <Card.Title>{exam.examname}</Card.Title>
                                <Card.Text>
                                    Grade: {exam.grade}<br />
                                    Subject: {exam.subject}<br />
                                    Date: {exam.date}<br />
                                    Time: {exam.time}<br />
                                    Description: {exam.description}
                                </Card.Text>
                                <Button
                                    onClick={(e) => {
                                        navigate("/attemptQuiz/"+exam._id)
                                    }}
                                >
                                    Attempt
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ExamGrid;
