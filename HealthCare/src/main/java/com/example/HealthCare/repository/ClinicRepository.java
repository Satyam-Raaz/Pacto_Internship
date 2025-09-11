package com.example.HealthCare.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.Clinic;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic,Long> {
	
	List<Clinic> findByUserId(Long userId);
	
	Page<Clinic> findAll(Pageable pageable);

	
	

}
