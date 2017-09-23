package com.server.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.github.api.GitHub;
import org.springframework.social.github.api.GitHubUserProfile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.server.beans.UserBean;
import com.server.entity.UserDetails;
import com.server.service.SocialUserService;

@RestController
public class GithubController {/*

	@Autowired
	private GitHub github;
	@Autowired
    SocialUserService socialUserService;
	private Gson gson = new Gson();
	@RequestMapping(value = "/api/github/details", method = RequestMethod.GET, produces = "application/json")
    public String getSocialDetails() {
    	GitHubUserProfile userResult = github.userOperations().getUserProfile();
    	String userId = Long.toString(userResult.getId());
    	UserBean user = socialUserService.getUserByProviderUserId(userId);
    	String resultStr = null;
    	Date date = new Date();
    	if(user!=null){
    		user.setFlag(false);
    		user.setEmail(userResult.getEmail());
    		user.setBirthday("");
    		user.setFirstname(userResult.getName());
    		user.setGender("");
    		user.setIndustry(userResult.getCompany());
    		user.setUsername(userResult.getUsername());
    		user.setId(userId);
    		user.setUpdateDate("");
    		user.setCreationDate(date.toString());
    		user.setLastname("");
    		user.setLocation(userResult.getLocation());
    		return gson.toJson(user, UserBean.class);
    	}else{
    		user.setUpdateDate(date.toString());
    		resultStr  = gson.toJson(user,UserBean.class);
    		return resultStr;
    	}     
    }
    @RequestMapping(value = "/api/github/update", method = RequestMethod.GET, produces = "application/json")
    public void updateSocialDetails() {
    	
    }

*/}
