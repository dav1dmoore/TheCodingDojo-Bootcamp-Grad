package com.moore.dojosninjas.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

//..
@Entity
@Table(name="ninjas")
public class Ninja {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
@NotNull
@Size( min = 2, max = 50, message="Ninja first name must be atleast 2 characters!" )
 private String firstName;
@NotNull
@Size( min = 2, max = 50, message="Ninja last name must be atleast 2 characters!"  )
 private String lastName;
 private int age;
 @Column(updatable=false)
 @DateTimeFormat(pattern="yyyy-MM-dd")
 private Date createdAt;
 @DateTimeFormat(pattern="yyyy-MM-dd")
 private Date updatedAt;
 @ManyToOne(fetch = FetchType.LAZY)
 @JoinColumn(name="dojo_id")
 private Dojo dojo;
 
 public Ninja() {
     
 }
 
 public Ninja(Long id, String firstName, String lastName, int age, Date createdAt, Date updatedAt, Dojo dojo) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.createdAt = createdAt;
	this.updatedAt = updatedAt;
	this.dojo = dojo;
}
 
@PrePersist
 protected void onCreate(){
     this.createdAt = new Date();
     this.updatedAt = new Date();
 }
 @PreUpdate
 protected void onUpdate(){
     this.updatedAt = new Date();
 }

 // ...
 // getters and setters removed for brevity
 // ...
 
public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public int getAge() {
	return age;
}

public void setAge(int age) {
	this.age = age;
}

public Date getCreatedAt() {
	return createdAt;
}

public void setCreatedAt(Date createdAt) {
	this.createdAt = createdAt;
}

public Date getUpdatedAt() {
	return updatedAt;
}

public void setUpdatedAt(Date updatedAt) {
	this.updatedAt = updatedAt;
}

public Dojo getDojo() {
	return dojo;
}

public void setDojo(Dojo dojo) {
	this.dojo = dojo;
}

}


