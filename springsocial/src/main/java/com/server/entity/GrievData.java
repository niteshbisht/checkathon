package com.server.entity;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table(name="grievdata")
public class GrievData implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8261953488714477507L;

	@Id
	private String id;
	
	@NotNull
	private String stateregdepid;
		
	@NotNull
	private String grievience;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStateregdepid() {
		return stateregdepid;
	}

	public void setStateregdepid(String stateregdepid) {
		this.stateregdepid = stateregdepid;
	}

	public String getGrievience() {
		return grievience;
	}

	public void setGrievience(String grievience) {
		this.grievience = grievience;
	}
	
}
