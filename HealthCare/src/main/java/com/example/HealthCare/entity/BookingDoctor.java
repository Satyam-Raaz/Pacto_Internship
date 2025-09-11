package com.example.HealthCare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BookingDoctor {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String doctorName;
	private String date;
	private String address;
	private Long userId;
	
	
	
	public BookingDoctor() {
		super();
		// TODO Auto-generated constructor stub
	}


	public BookingDoctor(String doctorName, String date, String address,Long userId) {
		super();
		this.doctorName = doctorName;
		this.date = date;
		this.address = address;
		this.userId=userId;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDoctorName() {
		return doctorName;
	}


	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	@Override
	public String toString() {
		return "BookingDoctor [id=" + id + ", doctorName=" + doctorName + ", date=" + date + ", address=" + address
				+ "]";
	}
	
	
	
	
	
	
	

}
