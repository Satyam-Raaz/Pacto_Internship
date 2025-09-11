package com.example.HealthCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.repository.ClinicRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;


@Service
public class ClinicService {
	
	@Autowired
	ClinicRepository clinicRepo;
	
	public Clinic addClinic(Clinic clinic) {
		return clinicRepo.save(clinic);
	}

	public List<Clinic> getAll(){
		return clinicRepo.findAll();
	}
	
	public List<Clinic> getClinicByUserId(Long userId){
		return clinicRepo.findByUserId(userId);
	}
	
	public boolean deleteClinic(Long id) {
		Clinic clinic =clinicRepo.findById(id).get();
		if(clinic!=null) {
			clinicRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	public Clinic getClinicById(Long id) {
		Clinic clinic =clinicRepo.findById(id).get();
		return clinic;
	}
	
	public Clinic updateClinic(Long id,Clinic clinic) {
		Clinic fetchClinic=clinicRepo.findById(id).get();
		fetchClinic.setName(clinic.getName());
		fetchClinic.setExperience(clinic.getExperience());
		fetchClinic.setFees(clinic.getFees());
		fetchClinic.setLocation(clinic.getLocation());
		fetchClinic.setSpecialist(clinic.getSpecialist());
		fetchClinic.setImageUrl(clinic.getImageUrl());
		
		return clinicRepo.save(fetchClinic);
	}
	
	
	public Page<Clinic> getAllWithPage(int page,int size){
		Pageable pageable=PageRequest.of(page, size);
		Page<Clinic> page1=clinicRepo.findAll(pageable);
		return page1;
	}
	
}
