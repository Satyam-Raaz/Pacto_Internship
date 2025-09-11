package com.example.HealthCare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.Test;

@Repository
public interface TestRepository extends JpaRepository<Test,Long>{
	List<Test> findByName(String name);
	
}
