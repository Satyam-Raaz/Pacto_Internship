package com.example.HealthCare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private Long userId;
	private String testName;
	private String centerName;
	private String imageUrl;
	private String Slot;

	
	public Booking(String testName, String centerName,String imageUrl) {
		super();
		this.testName = testName;
		this.centerName = centerName;
		this.imageUrl=imageUrl;
	}



	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTestName() {
		return testName;
	}
	public void setTestName(String testName) {
		this.testName = testName;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getSlot() {
		return Slot;
	}
	public void setSlot(String slot) {
		Slot = slot;
	}
	
	
	public Long getUser_id() {
		return userId;
	}
	public void setUser_id(Long userId) {
		this.userId = userId;
	}
	
	
	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	

	@Override
	public String toString() {
		return "Booking [id=" + id + ", testName=" + testName + ", centerName=" + centerName + ", Slot=" + Slot + "]";
	}
}
