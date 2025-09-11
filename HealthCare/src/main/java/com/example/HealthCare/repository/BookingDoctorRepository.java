package com.example.HealthCare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.BookingDoctor;


@Repository
public interface BookingDoctorRepository extends JpaRepository<BookingDoctor,Long>{

	List<BookingDoctor> findByUserId(Long id);
}
