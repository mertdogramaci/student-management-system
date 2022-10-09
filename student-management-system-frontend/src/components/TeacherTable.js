import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function TeacherTable(probs) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            fetch(`/user`).then(response => response.json()).then(data => setUsers(data));
        }, [setUsers]
    );

    const handleSubmit = async (id) => {
        await fetch('/lecture/addTeacher/' + probs.lectureId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        });
        navigate('/lecture');
    }

    return (
        <div>
            <table className="styled-table">
                <tbody>
                    {users.map((user) => {
                        if (user.userType === "TEACHER") {
                            return (
                                <tr key={user.id}>
                                    <th>{user.name}</th>
                                    <th>{user.surname}</th>
                                    <th>{user.userType}</th>
                                    <th>
                                        <Button size="sm" color="primary" onClick={() => handleSubmit(user.id)}>Add as a Teacher</Button>
                                    </th>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherTable;