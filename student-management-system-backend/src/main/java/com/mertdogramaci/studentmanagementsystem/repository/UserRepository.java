package com.mertdogramaci.studentmanagementsystem.repository;

import com.mertdogramaci.studentmanagementsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
