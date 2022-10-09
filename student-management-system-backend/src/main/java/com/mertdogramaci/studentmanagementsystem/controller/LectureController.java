package com.mertdogramaci.studentmanagementsystem.controller;

import com.mertdogramaci.studentmanagementsystem.model.Lecture;
import com.mertdogramaci.studentmanagementsystem.service.LectureService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lecture")
public class LectureController {
    private final LectureService lectureService;

    public LectureController(LectureService lectureService) {
        this.lectureService = lectureService;
    }

    @GetMapping
    public ResponseEntity<List<Lecture>> getAllLectures() {
        return ResponseEntity.ok(lectureService.getAllLectures());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lecture> updateLecture(@PathVariable String id, @RequestBody Lecture lecture) {
        return ResponseEntity.ok(lectureService.updateLecture(id, lecture));
    }

    @PutMapping("/addTeacher/{id}")
    public ResponseEntity<Lecture> addTeacher(@PathVariable String id, @RequestBody String teacherId) {
        return ResponseEntity.ok(lectureService.addTeacher(id, teacherId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lecture> getLectureById(@PathVariable String id) {
        return ResponseEntity.ok(lectureService.getLectureById(id));
    }

    @PostMapping
    public ResponseEntity<Lecture> createLecture(@RequestBody Lecture lecture) {
        return ResponseEntity.ok(lectureService.createLecture(lecture));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLecture(@PathVariable String id) {
        lectureService.deleteLectureById(id);
        return ResponseEntity.ok().build();
    }
}
