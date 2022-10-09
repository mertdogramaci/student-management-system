import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import EditStudent from './components/EditUser';
import LecturesPage from './components/LecturesPage';
import AddTeacher from './components/AddTeacher';
import HomePage from './components/HomePage';
import EditLecture from './components/EditLecture';
import TimeTable from './components/TimeTable';
import AddAssistant from './components/AddAssistant';
import LectureDetails from './components/LectureDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact element={<HomePage />} path={"/"} />
          <Route exact element={<UsersPage />} path={"/user"} />
          <Route exact element={<EditStudent />} path={"/user/create"} />
          <Route exact element={<EditStudent />} path={'/user/:id'} />
          <Route exact element={<LecturesPage />} path={"/lecture"} />
          <Route exact element={<AddTeacher />} path={"/lecture/addTeacher/:id"} />
          <Route exact element={<EditLecture />} path={"/lecture/create"} />
          <Route exact element={<EditLecture />} path={"/lecture/edit/:id"} />
          <Route exact element={<TimeTable />} path={"/timetable"} />
          <Route exact element={<AddAssistant/>} path={"/lecture/addAssistant/:id"}/>
          <Route exact element={<LectureDetails/>} path={"/lecture/:id"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
