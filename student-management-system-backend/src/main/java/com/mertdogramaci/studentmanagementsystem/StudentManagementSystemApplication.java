package com.mertdogramaci.studentmanagementsystem;

import com.mertdogramaci.studentmanagementsystem.model.*;
import com.mertdogramaci.studentmanagementsystem.repository.LectureRepository;
import com.mertdogramaci.studentmanagementsystem.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentManagementSystemApplication implements CommandLineRunner {

	private final UserRepository userRepository;
	private final LectureRepository lectureRepository;

	public StudentManagementSystemApplication(UserRepository userRepository, LectureRepository lectureRepository) {
		this.userRepository = userRepository;
		this.lectureRepository = lectureRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementSystemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user = userRepository.save(new User("Mert",
				"Doğramacı",
				UserType.STUDENT,
				"21946055",
				"mertdogramaci@gmail.com"));

		User user1 = userRepository.save(new User("Tamer",
				"Doğramacı",
				UserType.TEACHER,
				"tamer.dogramaci",
				"tamerdogramaci@gmail.com"));

		User user2 = userRepository.save(new User("Halise",
				"Doğramacı",
				UserType.TEACHER,
				"halise.dogramaci",
				"halisedogramaci@gmail.com"));

		User user3 = userRepository.save(new User("Emre",
				"Akdeniz",
				UserType.ASSISTANT,
				"emre.akdeniz",
				"emreakdeniz@gmail.com"));

		Lecture lecture1 = lectureRepository.save(new Lecture("Introduction to Programming",
				"deneme",
				LectureType.COMPULSORY,
				"BBM101",
				Weekdays.MONDAY,
				0,
				2,
				"D1"));

		Lecture lecture2 = lectureRepository.save(new Lecture("Introduction to Computer Engineering",
				"deneme",
				LectureType.COMPULSORY,
				"BBM105",
				Weekdays.WEDNESDAY,
				4,
				5,
				"D2"));
	}
}
