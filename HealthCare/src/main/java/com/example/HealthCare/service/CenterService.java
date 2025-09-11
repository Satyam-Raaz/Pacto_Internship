package com.example.HealthCare.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Test;
import com.example.HealthCare.repository.CenterRepository;
import com.example.HealthCare.repository.TestRepository;

@Service
public class CenterService {
	@Autowired
	CenterRepository repo;
	
	@Autowired
	TestRepository testRepo;
	
    @Autowired
    private JavaMailSender mailSender;

	public Center addCenter(Center center) {
		List<Test> test=center.getTests();
		testRepo.saveAll(test);
		return repo.save(center);
	}


	public Center updateCenter(Center center) {
		return repo.save(null);
		
	}

	public List<Center> getAll() {
		return repo.findAll();
	}
	
	public List<Center> getCenterByTest(String name){
		List<Test> tests=testRepo.findByName(name);
		List<Center> centers=new ArrayList<>();
		for(Test test:tests) {
			centers.addAll(repo.findByTests(test));
		}
		return centers;
	}
	
	public Center getCenterByName(String name) {
		return repo.findByName(name);
	}
	
	public List<Test> getTestById(Long id) {
		Center center= repo.findById(id).get();
		return center.getTests();
		
	}
	
	public String getCenterName(Long id) {
		Center center= repo.findById(id).get();
		return center.getName();
	}
	
	public Page<Center> getAllWithPage(int page,int size){
		Pageable pageable=PageRequest.of(page, size);
		Page<Center> page1=repo.findAll(pageable);
		return page1;
	}

}
