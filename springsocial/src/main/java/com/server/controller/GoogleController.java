package com.server.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.userinfo.GoogleUserInfo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.server.beans.UserBean;
import com.server.entity.UserDetails;
import com.server.repository.UserDao;
import com.server.service.SocialUserService;

@RestController
public class GoogleController {
	@Autowired
	Google google;
	@Autowired
	UserDao userDao;
	@Autowired
	SocialUserService userService;
	private Gson gson = new Gson();
	@RequestMapping(value = "/api/google/details", method = RequestMethod.GET, produces = "application/json")
    public String getSocialDetails() {
    	GoogleUserInfo userResult = google.userOperations().getUserInfo();
    	String userId = userResult.getId();
    	UserBean user = userService.getUserByProviderUserId(userId);
    	String resultStr = null;
    	Date date = new Date();
    	com.server.entity.User userForId = userDao.findByProviderIdAndProviderUserId("google", userId);
    	boolean userAlreadyExists = userDao.userAlreadyExists(userId);
    	if (!userAlreadyExists) {
			user.setBirthday("");
			user.setUsername(userResult.getFirstName());
			user.setFirstname(userResult.getFirstName());
			user.setGender(userResult.getGender());
			user.setLastname(userResult.getLastName());
			user.setLocation("");
			user.setIndustry("");
			user.setCreationDate(date.toString());
			user.setUpdateDate(date.toString());
			user.setEmail(userResult.getEmail());
			user.setProviderUserId(userForId.getProviderUserId());
			user.setId(userForId.getId());
			user.setFlag(false);
			int count = userService.countOfUsersRegistered();
			if (count == 0) {
				user.setRole("admin");
			} else {
				user.setRole("user");
			}
			resultStr = gson.toJson(user, UserBean.class);
			return resultStr;
		} else {
			com.server.beans.UserBean userDetails = userDao.findByProviderUserId(userId);
			user.setFlag(true);
			user.setBirthday(userDetails.getBirthday());
			user.setUsername(userDetails.getUsername());
			user.setFirstname(userDetails.getFirstname());
			user.setGender(userDetails.getGender());
			user.setLastname(userDetails.getLastname());
			user.setLocation(userDetails.getLocation());
			user.setIndustry(userDetails.getIndustry());
			user.setCreationDate(userDetails.getCreationDate());
			user.setUpdateDate(userDetails.getUpdateDate());
			user.setEmail(userDetails.getEmail());
			user.setProviderUserId(userDetails.getProviderUserId());
			user.setId(userDetails.getId());
			user.setRole(userDetails.getRole());
			resultStr = gson.toJson(user, UserBean.class);
			return resultStr;
		}
    }
    @RequestMapping(value = "/api/google/update", method = RequestMethod.GET, produces = "application/json")
    public void updateSocialDetails() {
    	
    }
}
