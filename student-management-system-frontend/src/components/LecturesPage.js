import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import AppNavbar from "../AppNavbar";
import LectureTable from "./LectureTable";

function LecturesType() {
    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        fetch('/lecture').then(response => response.json()).then(data => {
            setLectures(data);
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="App-intro">
                    <AppNavbar/>
                    <h2>Lecture List</h2>
                    <LectureTable lectures={lectures} setLectures={setLectures}/>
                    <Button tag={Link} to={"/lecture/create"}>Add Lecture</Button>{' '}
                    <Button tag={Link} to={"/timetable"}>See the Time Table</Button>
                </div>
            </header>
        </div>
    );
}

export default LecturesType;