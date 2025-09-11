package com.example.HealthCare.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Test;

@Repository
public interface  CenterRepository  extends JpaRepository<Center,Long>{
	List<Center> findByTests(Test test);
	Center findByName(String name);
	Page<Center> findAll(Pageable pageable);

}
