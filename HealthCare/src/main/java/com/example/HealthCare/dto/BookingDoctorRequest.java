package com.example.HealthCare.dto;

public class BookingDoctorRequest {
	private String date;
	private Long centerId;
	
	
    public BookingDoctorRequest(String date, Long centerId) {
		super();
		this.date = date;
		this.centerId = centerId;
	}
    
    

	public BookingDoctorRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public Long getCenterId() {
		return centerId;
	}

	public void setCenterId(Long centerId) {
		this.centerId = centerId;
	}
	
	
}
	
	


