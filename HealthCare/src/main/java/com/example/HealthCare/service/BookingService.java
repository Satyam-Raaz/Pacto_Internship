package com.example.HealthCare.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.dto.BookingDetails;
import com.example.HealthCare.dto.BookingRequest;
import com.example.HealthCare.entity.Booking;
import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Test;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.repository.BookingRepository;
import com.example.HealthCare.repository.TestRepository;
import com.example.HealthCare.repository.UserRepository;

@Service
public class BookingService {
	
	
	@Autowired
	BookingRepository repoBooking;
	
	@Autowired
	TestRepository testRepo;
	
	@Autowired
	CenterService centerService;
	
	@Autowired
	UserRepository userRepo;

	
	public Booking addBooking(BookingRequest requestBooking,Long id){
		Booking booking=new Booking();
		Center center=centerService.getCenterByName(requestBooking.getCenterName());
		List<Test> tests=center.getTests();
		Test test2=new Test();
		for(Test test:tests) {
			if(test.getName().equals(requestBooking.getTestName())) {
				test2=test;
				break;
			}
		}
        if (test2.getSeats()>0) {
			LocalDate date = LocalDate.now();
			LocalTime time = LocalTime.now();
			date.plusDays(5);
			time.plusHours(8);
			LocalDateTime dateTime = LocalDateTime.of(date, time);
			DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			// Convert to strings
			String dateTimeStr = dateTime.format(dateTimeFormatter);
			booking.setTestName(requestBooking.getTestName());
			booking.setCenterName(requestBooking.getCenterName());
			booking.setImageUrl(requestBooking.getImageUrl());
			booking.setSlot(dateTimeStr);
			booking.setUser_id(id);
			return repoBooking.save(booking);
		}
        else {
        	return null;
        }
	}

	public List<BookingDetails> getAll() {
		List<BookingDetails> bookingDetails=new ArrayList<>();
		List<Booking> bookings=repoBooking.findAll();
		System.out.println("First error");
		for(Booking booking:bookings) {
			User user=userRepo.findById(booking.getUser_id()).get();
			System.out.println(user.getId());
			BookingDetails bookingDetail=new BookingDetails();
			bookingDetail.setCenterName(booking.getCenterName());
			bookingDetail.setTestName(booking.getTestName());
			bookingDetail.setSlot(booking.getSlot());
			bookingDetail.setUsername(user.getUsername());
			bookingDetail.setAddress(user.getAddress());
			bookingDetail.setContactNo(user.getContactNo());
			bookingDetails.add(bookingDetail);
		}
		System.out.println("Third error");

		return bookingDetails;
		
	}
	
	public List<BookingDetails> getBooking(Long id) {
		List<BookingDetails> bookingDetails=new ArrayList<>();
		User user=userRepo.findById(id).get();
		List<Booking> bookings=repoBooking.findByUserId(id);
		for(Booking booking:bookings) {
			BookingDetails bookingDetail=new BookingDetails();
			bookingDetail.setCenterName(booking.getCenterName());
			bookingDetail.setTestName(booking.getTestName());
			bookingDetail.setSlot(booking.getSlot());
			bookingDetail.setUsername(user.getUsername());
			bookingDetail.setAddress(user.getAddress());
			bookingDetail.setContactNo(user.getContactNo());
			bookingDetails.add(bookingDetail);
		}

		return bookingDetails;
		
	}
	
	
	
	
	
	

}
