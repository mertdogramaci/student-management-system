import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

function AddAssistant() {
    const [lectureName, setLectureName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [assistantId, setAssistantId] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(
        () => {
            fetch(`/lecture/${id}`).then(response => response.json()).then(data => {setLectureName(data.name); setCourseCode(data.courseCode)});
        }, [id, setLectureName]
    );

    const handleChange = (event) => {
        const value = event.target.value
        setAssistantId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/lecture/addAssistant/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(assistantId)
        });
        navigate('/lecture');
    }

    return (
        <div>
            <Container>
                <h3>Add Assistant</h3>
                to the Lecture : <h3>{courseCode} - {lectureName}</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="assistantId">User ID of the Assistant</Label>
                        <Input type="text" name="assistantId" id="assistantId" value={assistantId || ''}
                            onChange={handleChange} autoComplete="assistantId" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/lecture">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default AddAssistant;