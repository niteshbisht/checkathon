package com.server.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.social.twitter.api.TwitterProfile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.server.beans.UserBean;
import com.server.entity.UserDetails;
import com.server.service.SocialUserService;

@RestController
public class TwitterController {
	@Autowired
	Twitter twitter;
	@Autowired
    SocialUserService socialUserService;
	private Gson gson = new Gson();
	@RequestMapping(value = "/api/twitter/details", method = RequestMethod.GET, produces = "application/json")
    public String getSocialDetails() {
    	TwitterProfile userResult = twitter.userOperations().getUserProfile();
    	String userId = Long.toString(userResult.getId());
    	UserBean user = socialUserService.getUserByProviderUserId(userId);
    	String resultStr = null;
    	Date date = new Date();
    	if(user!=null){
    		user.setFlag(false);
    		user.setEmail("");
    		user.setBirthday("");
    		user.setFirstname(userResult.getName());
    		user.setGender("");
    		user.setIndustry("");
    		user.setUsername(userResult.getName());
    		user.setId(userId);
    		user.setUpdateDate("");
    		user.setCreationDate(date.toString());
    		user.setLastname("");
    		user.setLocation("");
    		return gson.toJson(user,UserBean.class);
    	}else{
    		user.setUpdateDate(date.toString());
    		resultStr  = gson.toJson(user,UserBean.class);
    		return resultStr;
    	}     
    }
    @RequestMapping(value = "/api/twitter/update", method = RequestMethod.GET, produces = "application/json")
    public void updateSocialDetails() {
    	
    }
}
