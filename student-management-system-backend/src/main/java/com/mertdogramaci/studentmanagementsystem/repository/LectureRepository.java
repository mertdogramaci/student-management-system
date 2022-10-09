package com.mertdogramaci.studentmanagementsystem.repository;

import com.mertdogramaci.studentmanagementsystem.model.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<Lecture, String> {
}
