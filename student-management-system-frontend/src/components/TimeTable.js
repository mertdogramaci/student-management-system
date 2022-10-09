import { useEffect, useState } from "react";
import AppNavbar from "../AppNavbar";

function TimeTable() {
    const initialLectureState = {
        courseCode: "",
        name: ""
    }
    const timetable = new Array(5).fill(0).map(row => new Array(8).fill(initialLectureState));
    
    const [lectures, setLectures] = useState([]);

    useEffect(
        () => {
            fetch(`/lecture`).then(response => response.json()).then(data => setLectures(data));
        }, [setLectures]
    );

    for (let index = 0; index < lectures.length; index++) {
        let i = 0;
        let j = lectures[index].startSlot;

        if (lectures[index].lectureDay === "MONDAY") {
            i = 0;
        } else if (lectures[index].lectureDay === "TUESDAY") {
            i = 1;
        } else if (lectures[index].lectureDay === "WEDNESDAY") {
            i = 2;
        } else if (lectures[index].lectureDay === "THURSDAY") {
            i = 3;
        } else if (lectures[index].lectureDay === "FRIDAY") {
            i = 4;
        }

        timetable[i][j] = {courseCode: lectures[index].courseCode, name: lectures[index].name}
        let index2 = lectures[index].lastSlot - lectures[index].startSlot + 1;

        for (let index3 = 0; index3 < index2; index3++) {
            timetable[i][j + index3] = {courseCode: lectures[index].courseCode, name: lectures[index].name};
        }
    }

    return (
        <div>
            <AppNavbar/>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>TIMES/DAYS</th>
                        <th>MONDAY</th>
                        <th>TUESDAY</th>
                        <th>WEDNESDAY</th>
                        <th>THURSDAY</th>
                        <th>FRIDAY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>08.40<br/>09.30</th>
                        <th>{timetable[0][0].courseCode}<br/>{timetable[0][0].name}</th>
                        <th>{timetable[1][0].courseCode}<br/>{timetable[1][0].name}</th>
                        <th>{timetable[2][0].courseCode}<br/>{timetable[2][0].name}</th>
                        <th>{timetable[3][0].courseCode}<br/>{timetable[3][0].name}</th>
                        <th>{timetable[4][0].courseCode}<br/>{timetable[4][0].name}</th>
                    </tr>
                    <tr>
                        <th>09.40<br/>10.30</th>
                        <th>{timetable[0][1].courseCode}<br/>{timetable[0][1].name}</th>
                        <th>{timetable[1][1].courseCode}<br/>{timetable[1][1].name}</th>
                        <th>{timetable[2][1].courseCode}<br/>{timetable[2][1].name}</th>
                        <th>{timetable[3][1].courseCode}<br/>{timetable[3][1].name}</th>
                        <th>{timetable[4][1].courseCode}<br/>{timetable[4][1].name}</th>
                    </tr>
                    <tr>
                        <th>10.40<br/>11.30</th>
                        <th>{timetable[0][2].courseCode}<br/>{timetable[0][2].name}</th>
                        <th>{timetable[1][2].courseCode}<br/>{timetable[1][2].name}</th>
                        <th>{timetable[2][2].courseCode}<br/>{timetable[2][2].name}</th>
                        <th>{timetable[3][2].courseCode}<br/>{timetable[3][2].name}</th>
                        <th>{timetable[4][2].courseCode}<br/>{timetable[4][2].name}</th>
                    </tr>
                    <tr>
                        <th>11.40<br/>12.30</th>
                        <th>{timetable[0][3].courseCode}<br/>{timetable[0][3].name}</th>
                        <th>{timetable[1][3].courseCode}<br/>{timetable[1][3].name}</th>
                        <th>{timetable[2][3].courseCode}<br/>{timetable[2][3].name}</th>
                        <th>{timetable[3][3].courseCode}<br/>{timetable[3][3].name}</th>
                        <th>{timetable[4][3].courseCode}<br/>{timetable[4][3].name}</th>
                    </tr>
                    <tr>
                        <th>13.30<br/>14.20</th>
                        <th>{timetable[0][4].courseCode}<br/>{timetable[0][4].name}</th>
                        <th>{timetable[1][4].courseCode}<br/>{timetable[1][4].name}</th>
                        <th>{timetable[2][4].courseCode}<br/>{timetable[2][4].name}</th>
                        <th>{timetable[3][4].courseCode}<br/>{timetable[3][4].name}</th>
                        <th>{timetable[4][4].courseCode}<br/>{timetable[4][4].name}</th>
                    </tr>
                    <tr>
                        <th>14.30<br/>15.20</th>
                        <th>{timetable[0][5].courseCode}<br/>{timetable[0][5].name}</th>
                        <th>{timetable[1][5].courseCode}<br/>{timetable[1][5].name}</th>
                        <th>{timetable[2][5].courseCode}<br/>{timetable[2][5].name}</th>
                        <th>{timetable[3][5].courseCode}<br/>{timetable[3][5].name}</th>
                        <th>{timetable[4][5].courseCode}<br/>{timetable[4][5].name}</th>
                    </tr>
                    <tr>
                        <th>15.30<br/>16.20</th>
                        <th>{timetable[0][6].courseCode}<br/>{timetable[0][6].name}</th>
                        <th>{timetable[1][6].courseCode}<br/>{timetable[1][6].name}</th>
                        <th>{timetable[2][6].courseCode}<br/>{timetable[2][6].name}</th>
                        <th>{timetable[3][6].courseCode}<br/>{timetable[3][6].name}</th>
                        <th>{timetable[4][6].courseCode}<br/>{timetable[4][6].name}</th>
                    </tr>
                    <tr>
                        <th>16.30<br/>17.20</th>
                        <th>{timetable[0][7].courseCode}<br/>{timetable[0][7].name}</th>
                        <th>{timetable[1][7].courseCode}<br/>{timetable[1][7].name}</th>
                        <th>{timetable[2][7].courseCode}<br/>{timetable[2][7].name}</th>
                        <th>{timetable[3][7].courseCode}<br/>{timetable[3][7].name}</th>
                        <th>{timetable[4][7].courseCode}<br/>{timetable[4][7].name}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TimeTable;