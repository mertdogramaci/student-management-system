package com.mertdogramaci.studentmanagementsystem.service;

import com.mertdogramaci.studentmanagementsystem.exception.LectureNotFoundException;
import com.mertdogramaci.studentmanagementsystem.model.Lecture;
import com.mertdogramaci.studentmanagementsystem.repository.LectureRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class LectureService {
    private final LectureRepository lectureRepository;
    private final UserService userService;

    public LectureService(LectureRepository lectureRepository, UserService userService) {
        this.lectureRepository = lectureRepository;
        this.userService = userService;
    }

    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }

    protected Lecture findLectureById(String id) {
        return lectureRepository.findById(id).orElseThrow(
                () -> new LectureNotFoundException("Lecture could not found by id: " + id)
        );
    }

    public Lecture getLectureById(String lectureId) {
        return findLectureById(lectureId);
    }

    public Lecture updateLecture(String lectureId, Lecture lecture) {
        Lecture lecture1 = findLectureById(lectureId);
        if (!lecture1.getId().equals("")) {
            lecture1.setName(lecture.getName());
            lecture1.setDescription(lecture.getDescription());
            lecture1.setLectureType(lecture.getLectureType());
            lecture1.setRoom(lecture.getRoom());
            lecture1.setCourseCode(lecture.getCourseCode());
            lecture1.setTeacher(lecture.getTeacher());
            lecture1.setStartSlot(lecture.getStartSlot());
            lecture1.setLastSlot(lecture.getLastSlot());
            lecture1.setLectureDay(lecture.getLectureDay());
        }
        return lectureRepository.save(lecture1);
    }

    public Lecture addTeacher(String lectureId, String teacherId) {
        Lecture lecture1 = findLectureById(lectureId);
        if (!lecture1.getId().equals("")) {
            //lecture1.setTeacher(userService.addLecture(teacherId, lecture1));
        }
        return lectureRepository.save(lecture1);
    }

    public Lecture createLecture(Lecture lecture) {
        return lectureRepository.save(lecture);
    }

    public void deleteLectureById(String id) {
        lectureRepository.delete(lectureRepository.getReferenceById(id));
    }
}
