package com.server.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "department", uniqueConstraints = { @UniqueConstraint(columnNames = { "departmentName" }) })
public class Department implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6545813026787182874L;

	@Id
	private String id;
	
	@NotNull
	@JsonIgnore
	private String departmentName;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
}
