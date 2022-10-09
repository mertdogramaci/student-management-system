package com.mertdogramaci.studentmanagementsystem.service;

import com.mertdogramaci.studentmanagementsystem.exception.UserNotFoundException;
import com.mertdogramaci.studentmanagementsystem.model.Lecture;
import com.mertdogramaci.studentmanagementsystem.model.User;
import com.mertdogramaci.studentmanagementsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    protected User findUserById(String id) {
        //System.out.println(userRepository.findById(id));
        return userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User could not found by id: " + id)
        );
    }

    public Optional<User> getUserById(String userId) {
        return userRepository.findById(userId);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String userId, User user) {
        User user1 = findUserById(userId);
        if (!user1.getId().equals("")) {
            user1.setName(user.getName());
            user1.setSurname(user.getSurname());
            user1.setUsername(user.getUsername());
            user1.setEmail(user.getEmail());
            user1.setUserType(user.getUserType());
        }
        return userRepository.save(user1);
    }

    public void deleteUserById(String id) {
        userRepository.deleteById(id);
    }

    /*public User addLecture(String id, Lecture lecture) {
        User user1 = findUserById(id);
        List<Lecture> lectureList = user1.getLectures();
        lectureList.add(lecture);
        user1.setLectures(lectureList);
        return userRepository.save(user1);
    }*/
}
