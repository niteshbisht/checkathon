package com.server.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "stateregionmapping")
public class StateRegionMapping implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1612842843718607683L;

	@Id
	private String id;
	
	@NotNull
	private String stateid;
	
	@NotNull
	private String regid;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStateid() {
		return stateid;
	}

	public void setStateid(String stateid) {
		this.stateid = stateid;
	}

	public String getRegid() {
		return regid;
	}

	public void setRegid(String regid) {
		this.regid = regid;
	}

}
