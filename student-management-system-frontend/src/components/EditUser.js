import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Form, FormGroup, Input, Label } from 'reactstrap';

function EditUser() {
    const [userType, setUserType] = useState("STUDENT");
    const defaultButtonColor = "#6c757d";
    const activeButtonColor = "#0d6efd";

    const initialUserState = {
        name: "",
        surname: "",
        username: "",
        userType: "STUDENT",
        email: "",
    };

    const [user, setUser] = useState(initialUserState);
    const navigate = useNavigate();
    const { id } = useParams();
    const [isExecuted, setIsExecuted] = useState(false);

    useEffect(
        () => {
            if (id !== undefined) {
                fetch(`/user/${id}`).then(response => response.json()).then(data => setUser(data));
            }

            if (isExecuted !== true) {
                if (user.userType === "STUDENT") {
                    setUserType(0);
                } else if (user.userType === "TEACHER") {
                    setUserType(1);
                } else if (user.userType === "ASSISTANT") {
                    setUserType(2);
                }
    
                setIsExecuted(true);
            }
        }, [id, setUser, setUserType, user, isExecuted]
    );

    useEffect(
        () => {
            setIsExecuted(false);
        }, []
    );

    const handleChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        user.userType = userType;

        await fetch('/user' + (user.id ? '/' + user.id : ''), {
            method: (user.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        setUser(initialUserState);
        navigate('/user');
    }

    const handleClick = async (event) => {
        event.preventDefault();
        for (let index = 0; index < 3; index++) {
            document.getElementById("userType" + index).style.background = defaultButtonColor;
        }
        
        document.getElementById("userType" + event.target.value).style.background = activeButtonColor;

        if (event.target.value === "0") {
            setUserType("STUDENT");
        } else if (event.target.value === "1") {
            setUserType("TEACHER");
        } else if (event.target.value === "2") {
            setUserType("ASSISTANT");
        }
    }

    const title = <h2>{user.id ? 'Edit User' : 'Create a New User'}</h2>;

    return (
        <div>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={user.name || ''}
                            onChange={handleChange} autoComplete="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname">Surname</Label>
                        <Input type="text" name="surname" id="surname" value={user.surname || ''}
                            onChange={handleChange} autoComplete="surname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={user.username || ''}
                            onChange={handleChange} autoComplete="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userType">User Type</Label>
                        <ButtonGroup onClick={handleClick}>
                            {userType === 0 ? <Button id="userType0" Style={"background-color: #0d6efd"} value={"0"}>Student</Button>:<Button id="userType0" value={"0"}>Student</Button>}
                            {userType === 1 ? <Button id="userType1" Style={"background-color: #0d6efd"} value={"1"}>Teacher</Button>:<Button id="userType1" value={"1"}>Teacher</Button>}
                            {userType === 2 ? <Button id="userType2" Style={"background-color: #0d6efd"} value={"2"}>Assistant</Button>:<Button id="userType2" value={"2"}>Assistant</Button>}
                        </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={user.email || ''}
                            onChange={handleChange} autoComplete="email" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/user">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default EditUser;