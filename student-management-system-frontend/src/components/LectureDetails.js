import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import AppNavbar from "../AppNavbar";

function LectureDetails() {
    const initialLectureState = {
        name: "",
        description: "",
        lectureType: "",
        courseCode: "",
        lectureDay: "",
        startSlot: 0,
        lastSlot: 0,
        room: "",
    };

    const [lecture, setLecture] = useState(initialLectureState);
    const { id } = useParams();

    useEffect(
        () => {
            if (id !== undefined) {
                fetch(`/lecture/${id}`).then(response => response.json()).then(data => setLecture(data));
            }
        }, [id, setLecture]
    );


    return (
        <div>
            <AppNavbar/>
            <Container>
                <h1>Details For the {lecture.courseCode} - {lecture.name}</h1>
                <h2>Name</h2>
                <h5>{lecture.name}</h5>
                
                <h2>Description</h2>
                <h5>{lecture.description}</h5>
                
                <h2>Lecture Type</h2>
                <h5>{lecture.lectureType}</h5>
                
                <h2>Course Code</h2>
                <h5>{lecture.courseCode}</h5>
                            
                <h2>Lecture Day</h2>
                <h5>{lecture.lectureDay}</h5>
                        
                <h2>Lecture Start Time</h2>
                <h5>{lecture.startSlot}</h5>

                <h2>Lecture Last Time</h2>
                <h5>{lecture.lastSlot}</h5>
                        
                <h2>Room</h2>
                <h5>{lecture.room}</h5>               
                <Button color="secondary" tag={Link} to="/lecture">Cancel</Button>
            </Container>
        </div>
    );
}

export default LectureDetails;