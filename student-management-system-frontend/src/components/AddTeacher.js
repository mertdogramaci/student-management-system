import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container} from 'reactstrap';
import TeacherTable from "./TeacherTable";

function AddTeacher() {
    const [lectureName, setLectureName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const { id } = useParams();

    useEffect(
        () => {
            fetch(`/lecture/${id}`).then(response => response.json()).then(data => {setLectureName(data.name); setCourseCode(data.courseCode)});
        }, [id, setLectureName]
    );

    return (
        <div>
            <Container>
                <h3>Add Teacher</h3>
                to the Lecture : <h3>{courseCode} - {lectureName}</h3>
                <TeacherTable lectureId={id}/>
                <Button color="secondary" tag={Link} to="/lecture">Cancel</Button>
            </Container>
        </div>
    );
}

export default AddTeacher;