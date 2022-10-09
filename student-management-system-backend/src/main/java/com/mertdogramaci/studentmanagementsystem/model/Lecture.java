package com.mertdogramaci.studentmanagementsystem.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "lectures")
public class Lecture {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "lectureType")
    private LectureType lectureType;

    @Column(name = "courseCode")
    private String courseCode;

    @Column(name = "lectureDay")
    private Weekdays lectureDay;

    @Column(name = "startSlot")
    private int startSlot;

    @Column(name = "lastSlot")
    private int lastSlot;

    @Column(name = "room")
    private String room;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private User teacher;

    /*@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Exam> exams = new ArrayList<>();*/

    @Column(name = "creationDate")
    private LocalDateTime creationDate = LocalDateTime.now();

    public Lecture() {

    }

    public Lecture(String name,
                   String description,
                   LectureType lectureType,
                   String courseCode,
                   Weekdays lectureDay,
                   int startSlot,
                   int lastSlot,
                   String room) {
        this.name = name;
        this.description = description;
        this.lectureType = lectureType;
        this.courseCode = courseCode;
        this.lectureDay = lectureDay;
        this.startSlot = startSlot;
        this.lastSlot = lastSlot;
        this.room = room;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LectureType getLectureType() {
        return lectureType;
    }

    public void setLectureType(LectureType lectureType) {
        this.lectureType = lectureType;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public User getTeacher() {
        return teacher;
    }

    public void setTeacher(User teacher) {
        this.teacher = teacher;
    }

    public Weekdays getLectureDay() {
        return lectureDay;
    }

    public void setLectureDay(Weekdays lectureDay) {
        this.lectureDay = lectureDay;
    }

    public int getStartSlot() {
        return startSlot;
    }

    public void setStartSlot(int startSlot) {
        this.startSlot = startSlot;
    }

    public int getLastSlot() {
        return lastSlot;
    }

    public void setLastSlot(int lastSlot) {
        this.lastSlot = lastSlot;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lecture lecture = (Lecture) o;
        return startSlot == lecture.startSlot && lastSlot == lecture.lastSlot && Objects.equals(id, lecture.id) && Objects.equals(name, lecture.name) && Objects.equals(description, lecture.description) && lectureType == lecture.lectureType && Objects.equals(courseCode, lecture.courseCode) && lectureDay == lecture.lectureDay && Objects.equals(room, lecture.room) && Objects.equals(teacher, lecture.teacher) && Objects.equals(creationDate, lecture.creationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, lectureType, courseCode, lectureDay, startSlot, lastSlot, room, teacher, creationDate);
    }
}
