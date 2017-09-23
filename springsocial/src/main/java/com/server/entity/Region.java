package com.server.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "region", uniqueConstraints = { @UniqueConstraint(columnNames = { "regionName" }) })
public class Region implements Serializable{ 
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6001501979075950415L;

	@Id
	private String id;
	
	@NotNull
	@JsonIgnore
	private String regionName;
	
	

	public String getRegionName() {
		return regionName;
	}

	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}

