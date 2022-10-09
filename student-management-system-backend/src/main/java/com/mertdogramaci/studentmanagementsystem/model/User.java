package com.mertdogramaci.studentmanagementsystem.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "userType")
    private UserType userType;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "creationDate")
    private LocalDateTime creationDate = LocalDateTime.now();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Lecture> lectures = new ArrayList<>();

    public User() {

    }

    public User(String name, String surname, UserType userType, String username, String email) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.userType = userType;
    }

    public User(String name, String surname, UserType userType, String email) {
        this.name = name;
        this.surname = surname;
        username = name + surname;
        this.email = email;
        this.userType = userType;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public List<Lecture> getLectures() {
        return lectures;
    }

    public void setLectures(List<Lecture> lectures) {
        this.lectures = lectures;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name) && Objects.equals(surname, user.surname) && userType == user.userType && Objects.equals(username, user.username) && Objects.equals(email, user.email) && Objects.equals(creationDate, user.creationDate) && Objects.equals(lectures, user.lectures);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, surname, userType, username, email, creationDate, lectures);
    }
}
