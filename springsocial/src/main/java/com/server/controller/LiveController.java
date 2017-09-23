package com.server.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.live.api.Live;
import org.springframework.social.live.api.LiveProfile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.server.beans.UserBean;
import com.server.entity.UserDetails;
import com.server.service.SocialUserService;

@RestController
public class LiveController {/*
	@Autowired
	Live live;
	@Autowired
    SocialUserService socialUserService;
	private Gson gson = new Gson();
	@RequestMapping(value = "/api/live/details", method = RequestMethod.GET, produces = "application/json")
    public String getSocialDetails() {
    	LiveProfile userResult = live.userOperations().getUserProfile();
    	String userId = userResult.getId();
    	UserBean user = socialUserService.getUserByProviderUserId(userId);
    	String resultStr = null;
    	Date date = new Date();
    	if(user!=null){
    		user.setFlag(false);
    		user.setEmail(userResult.getEmail());
    		user.setBirthday("");
    		user.setFirstname(userResult.getFirstName());
    		user.setGender(userResult.getGender());
    		user.setIndustry("");
    		user.setUsername(userResult.getFirstName());
    		user.setId(userResult.getId());
    		user.setUpdateDate("");
    		user.setCreationDate(date.toString());
    		user.setLastname(userResult.getLastName());
    		user.setLocation("");
    		return gson.toJson(user,UserBean.class);
    	}else{
    		user.setUpdateDate(date.toString());
    		resultStr  = gson.toJson(user,UserBean.class);
    		return resultStr;
    	}     
    }
    @RequestMapping(value = "/api/live/update", method = RequestMethod.GET, produces = "application/json")
    public void updateSocialDetails() {
    	
    }
*/}
