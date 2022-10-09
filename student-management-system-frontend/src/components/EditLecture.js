import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Form, FormGroup, Input, Label } from 'reactstrap';

function EditLecture() {
    const [lectureType, setLectureType] = useState("COMPULSORY");
    const [lectureDay, setLectureDay] = useState("MONDAY");
    const [startSlot, setStartSlot] = useState(0);
    const [lastSlot, setLastSlot] = useState(0);
    const defaultButtonColor = "#6c757d";
    const activeButtonColor = "#0d6efd";

    const initialLectureState = {
        name: "",
        description: "",
        lectureType: "COMPULSORY",
        courseCode: "",
        lectureDay: "MONDAY",
        startSlot: 0,
        lastSlot: 0,
        room: "",
    };

    const [lecture, setLecture] = useState(initialLectureState);
    const navigate = useNavigate();
    const { id } = useParams();
    const [isExecuted, setIsExecuted] = useState(false);
    

    useEffect(
        () => {
            if (id !== undefined) {
                fetch(`/lecture/${id}`).then(response => response.json()).then(data => setLecture(data));
            }
            if (isExecuted !== true) {
                if (lecture.lectureDay === "MONDAY") {
                    setLectureDay(0);
                } else if (lecture.lectureDay === "TUESDAY") {
                    setLectureDay(1);
                } else if (lecture.lectureDay === "WEDNESDAY") {
                    setLectureDay(2);
                } else if (lecture.lectureDay === "THURSDAY") {
                    setLectureDay(3);
                } else if (lecture.lectureDay === "FRIDAY") {
                    setLectureDay(4);
                }

                if (lecture.lectureType === "COMPULSORY") {
                    setLectureType(0);
                } else if (lecture.lectureType === "ELECTIVE") {
                    setLectureType(1);
                }
    
                setStartSlot(lecture.startSlot);
                setLastSlot(lecture.lastSlot);
                setIsExecuted(true);
            }
        }, [id, setLecture, setLectureDay, lecture, setLastSlot, setStartSlot, isExecuted, setIsExecuted, setLectureType]
    );

    useEffect(
        () => {
            setIsExecuted(false);
        }, []
    );

    const handleChange = (event) => {
        const { name, value } = event.target

        setLecture({ ...lecture, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        lecture.lectureType = lectureType;
        lecture.lectureDay = lectureDay;
        lecture.startSlot = startSlot;
        lecture.lastSlot = lastSlot;

        await fetch('/lecture' + (lecture.id ? '/' + lecture.id : ''), {
            method: (lecture.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lecture)
        });
        setLecture(initialLectureState);
        navigate('/lecture');
    }

    const handleClick = async (event) => {
        event.preventDefault();
        for (let index = 0; index < 2; index++) {
            document.getElementById("type" + index).style.background = defaultButtonColor;
        }
        
        document.getElementById("type" + event.target.value).style.background = activeButtonColor;

        if (event.target.value === "0") {
            setLectureType("COMPULSORY");
        } else if (event.target.value === "1") {
            setLectureType("ELECTIVE");
        }
    }

    const handleDayClick = async (event) => {
        event.preventDefault();
        for (let index = 0; index < 5; index++) {
            document.getElementById("day" + index).style.background = defaultButtonColor;
        }
        
        document.getElementById("day" + event.target.value).style.background = activeButtonColor;

        if (event.target.value === "0") {
            setLectureDay("MONDAY");
        } else if (event.target.value === "1") {
            setLectureDay("TUESDAY");
        } else if (event.target.value === "2") {
            setLectureDay("WEDNESDAY");
        } else if (event.target.value === "3") {
            setLectureDay("THURSDAY");
        } else if (event.target.value === "4") {
            setLectureDay("FRIDAY");
        }
    }

    const handleStartClick = async (event) => {
        event.preventDefault();
        for (let index = 0; index < 8; index++) {
            document.getElementById("start" + index).style.background = defaultButtonColor;
        }
        
        document.getElementById("start" + event.target.value).style.background = activeButtonColor;

        if (event.target.value === "0") {
            setStartSlot(0);
        } else if (event.target.value === "1") {
            setStartSlot(1);
        } else if (event.target.value === "2") {
            setStartSlot(2);
        } else if (event.target.value === "3") {
            setStartSlot(3);
        } else if (event.target.value === "4") {
            setStartSlot(4);
        } else if (event.target.value === "5") {
            setStartSlot(5);
        } else if (event.target.value === "6") {
            setStartSlot(6);
        } else if (event.target.value === "7") {
            setStartSlot(7);
        }
    }

    const handleLastClick = async (event) => {
        event.preventDefault();
        for (let index = 0; index < 8; index++) {
            document.getElementById("last" + index).style.background = defaultButtonColor;
        }
        
        document.getElementById("last" + event.target.value).style.background = activeButtonColor;

        if (event.target.value === "0") {
            setLastSlot(0);
        } else if (event.target.value === "1") {
            setLastSlot(1);
        } else if (event.target.value === "2") {
            setLastSlot(2);
        } else if (event.target.value === "3") {
            setLastSlot(3);
        } else if (event.target.value === "4") {
            setLastSlot(4);
        } else if (event.target.value === "5") {
            setLastSlot(5);
        } else if (event.target.value === "6") {
            setLastSlot(6);
        } else if (event.target.value === "7") {
            setLastSlot(7);
        }
    }

    const title = <h2>{lecture.id ? 'Edit Lecture' : 'Create a New Lecture'}</h2>;

    return (
        <div>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={lecture.name || ''}
                            onChange={handleChange} autoComplete="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={lecture.description || ''}
                            onChange={handleChange} autoComplete="description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="LectureType">Lecture Type</Label>
                        <ButtonGroup onClick={handleClick}>
                            {lectureType === 0 ? <Button id="type0" Style={"background-color: #0d6efd"} value={"0"}>Compulsory</Button>:<Button id="type0" value={"0"}>Compulsory</Button>}
                            {lectureType === 1 ? <Button id="type1" Style={"background-color: #0d6efd"} value={"1"}>Elective</Button>:<Button id="type1" value={"1"}>Elective</Button>}
                        </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="courseCode">Course Code</Label>
                        <Input type="text" name="courseCode" id="courseCode" value={lecture.courseCode || ''}
                            onChange={handleChange} autoComplete="courseCode" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lectureDay">Lecture Day</Label>
                        <ButtonGroup onClick={handleDayClick}>
                            {lectureDay === 0 ? <Button id="day0" Style={"background-color: #0d6efd"} value={"0"}>Monday</Button>:<Button id="day0" value={"0"}>Monday</Button>}
                            {lectureDay === 1 ? <Button id="day1" Style={"background-color: #0d6efd"} value={"1"}>Tuesday</Button>:<Button id="day1" value={"1"}>Tuesday</Button>}
                            {lectureDay === 2 ? <Button id="day2" Style={"background-color: #0d6efd"} value={"2"}>Wednesday</Button>:<Button id="day2" value={"2"}>Wednesday</Button>}
                            {lectureDay === 3 ? <Button id="day3" Style={"background-color: #0d6efd"} value={"3"}>Thursday</Button>:<Button id="day3" value={"3"}>Thursday</Button>}
                            {lectureDay === 4 ? <Button id="day4" Style={"background-color: #0d6efd"} value={"4"}>Friday</Button>:<Button id="day4" value={"4"}>Friday</Button>}
                        </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="startSlot">Lecture Start Time</Label>
                        <ButtonGroup onClick={handleStartClick}>
                            {startSlot === 0 ? <Button id="start0" Style={"background-color: #0d6efd"} value={"0"}>8.40<br/>9.30</Button>:<Button id="start0" value={"0"}>8.40<br/>9.30</Button>}
                            {startSlot === 1 ? <Button id="start1" Style={"background-color: #0d6efd"} value={"1"}>9.40<br/>10.30</Button>:<Button id="start1" value={"1"}>9.40<br/>10.30</Button>}
                            {startSlot === 2 ? <Button id="start2" Style={"background-color: #0d6efd"} value={"2"}>10.40<br/>11.30</Button>:<Button id="start2" value={"2"}>10.40<br/>11.30</Button>}
                            {startSlot === 3 ? <Button id="start3" Style={"background-color: #0d6efd"} value={"3"}>11.40<br/>12.30</Button>:<Button id="start3" value={"3"}>11.40<br/>12.30</Button>}
                            {startSlot === 4 ? <Button id="start4" Style={"background-color: #0d6efd"} value={"4"}>13.30<br/>14.20</Button>:<Button id="start4" value={"4"}>13.30<br/>14.20</Button>}
                            {startSlot === 5 ? <Button id="start5" Style={"background-color: #0d6efd"} value={"5"}>14.30<br/>15.20</Button>:<Button id="start5" value={"5"}>14.30<br/>15.20</Button>}
                            {startSlot === 6 ? <Button id="start6" Style={"background-color: #0d6efd"} value={"6"}>15.30<br/>16.20</Button>:<Button id="start6" value={"6"}>15.30<br/>16.20</Button>}
                            {startSlot === 7 ? <Button id="start7" Style={"background-color: #0d6efd"} value={"7"}>16.30<br/>17.20</Button>:<Button id="start7" value={"7"}>16.30<br/>17.20</Button>}
                        </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastSlot">Lecture Last Time</Label>
                        <ButtonGroup onClick={handleLastClick}>
                            {lastSlot === 0 ? <Button id="last0" Style={"background-color: #0d6efd"} value={"0"}>8.40<br/>9.30</Button>:<Button id="last0" value={"0"}>8.40<br/>9.30</Button>}
                            {lastSlot === 1 ? <Button id="last1" Style={"background-color: #0d6efd"} value={"1"}>9.40<br/>10.30</Button>:<Button id="last1" value={"1"}>9.40<br/>10.30</Button>}
                            {lastSlot === 2 ? <Button id="last2" Style={"background-color: #0d6efd"} value={"2"}>10.40<br/>11.30</Button>:<Button id="last2" value={"2"}>10.40<br/>11.30</Button>}
                            {lastSlot === 3 ? <Button id="last3" Style={"background-color: #0d6efd"} value={"3"}>11.40<br/>12.30</Button>:<Button id="last3" value={"3"}>11.40<br/>12.30</Button>}
                            {lastSlot === 4 ? <Button id="last4" Style={"background-color: #0d6efd"} value={"4"}>13.30<br/>14.20</Button>:<Button id="last4" value={"4"}>13.30<br/>14.20</Button>}
                            {lastSlot === 5 ? <Button id="last5" Style={"background-color: #0d6efd"} value={"5"}>14.30<br/>15.20</Button>:<Button id="last5" value={"5"}>14.30<br/>15.20</Button>}
                            {lastSlot === 6 ? <Button id="last6" Style={"background-color: #0d6efd"} value={"6"}>15.30<br/>16.20</Button>:<Button id="last6" value={"6"}>15.30<br/>16.20</Button>}
                            {lastSlot === 7 ? <Button id="last7" Style={"background-color: #0d6efd"} value={"7"}>16.30<br/>17.20</Button>:<Button id="last7" value={"7"}>16.30<br/>17.20</Button>}
                        </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="room">Room</Label>
                        <Input type="text" name="room" id="room" value={lecture.room || ''}
                            onChange={handleChange} autoComplete="room" />
                    </FormGroup>
                    <FormGroup>
                        <ButtonGroup>
                            <Button color="primary" tag={Link} to={"/lecture/addTeacher/" + lecture.id}>Add Teacher</Button>{" "}
                            <Button color="primary" tag={Link} to={"/lecture/addAssistant/" + lecture.id}>Add Assistant</Button>{" "} 
                        </ButtonGroup>
                        <br/>
                        <br/>
                        <ButtonGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/lecture">Cancel</Button>
                        </ButtonGroup>  
                    </FormGroup>
                </Form>
            </Container>
        </div>
    );
}

export default EditLecture;