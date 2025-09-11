package com.example.HealthCare.entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Clinic {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)

	private Long id;
	private String name;
	private String location;
	private String specialist;
	private String experience;
	private String imageUrl;
	private int rating;
	private double fees;
	private Long userId;
	
	public Clinic() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Clinic( String name, String location, String specialist, String experience, String imageUrl, double fees,Long userId) {
		super();
		this.name = name;
		this.location = location;
		this.specialist = specialist;
		this.experience = experience;
		this.fees = fees;
		this.imageUrl=imageUrl;
		this.userId=userId;
	}
	public double getFees() {
		return fees;
	}
	public void setFees(double fees) {
		this.fees = fees;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "Clinic [id=" + id + ", name=" + name + ", location=" + location + ", specialist=" + specialist
				+ ", experience=" + experience + ", rating=" + rating + "]";
	}
	
}
