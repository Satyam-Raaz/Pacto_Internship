package com.example.HealthCare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.dto.BookingDoctorRequest;
import com.example.HealthCare.entity.BookingDoctor;
import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.repository.BookingDoctorRepository;
import com.example.HealthCare.repository.ClinicRepository;

@Service
public class BookingDoctorService {
	
	@Autowired
	BookingDoctorRepository repo;
	
	@Autowired
	ClinicRepository clinicRepo;
	
	
	public BookingDoctor addBooking(Long id,BookingDoctorRequest bookingRequest) {
		BookingDoctor booking=new BookingDoctor();
		Clinic clinic=clinicRepo.findById(id).get();
		booking.setDate(bookingRequest.getDate());
		booking.setUserId(id);
		booking.setDoctorName(clinic.getName());
		booking.setAddress(clinic.getLocation());
		
		return repo.save(booking);
		
	}

	public List<BookingDoctor> getById(Long id){
		return repo.findByUserId(id);
	}
}
