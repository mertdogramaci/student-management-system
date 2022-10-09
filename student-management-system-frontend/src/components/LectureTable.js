import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

function LectureTable(probs) {
    function remove(id) {
        fetch(`/lecture/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          const updatedLectures = [...probs.lectures].filter(i => i.id !== id);
          probs.setLectures(updatedLectures);
        });
    }
    
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Course Code</th>
                    <th>Name</th>
                    <th>Lecture Type</th>
                    <th>Teacher</th>
                    <th>Room</th>
                    <th>Creation Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {probs.lectures.map((lecture) => {
                    return (
                        <tr key={lecture.id}>
                            <th>{lecture.id}</th>
                            <th>{lecture.courseCode}</th>
                            <th>{lecture.name}</th>
                            <th>{lecture.lectureType}</th>
                            {(lecture.teacher === undefined) ? <th>{lecture.teacher.name} {lecture.teacher.surname}</th> : <th>Did not assign any teachers to this lecture</th>}
                            <th>{lecture.room}</th>
                            <th>{lecture.creationDate}</th>
                            <th>
                                <Button size="sm" color="primary" tag={Link} to={"/lecture/" + lecture.id}>See Details</Button>{" "}    
                                <ButtonGroup>
                                    <Button size="sm" color="primary" tag={Link} to={"/lecture/edit/" + lecture.id}>Edit</Button>
                                    <Button size="sm" color="primary" onClick={() => remove(lecture.id)}>Delete</Button>
                                </ButtonGroup>
                            </th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default LectureTable;