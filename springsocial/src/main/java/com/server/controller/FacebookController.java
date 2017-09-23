package com.server.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.server.beans.UserBean;
import com.server.entity.UserDetails;
import com.server.repository.UserDao;
import com.server.service.SocialUserService;
import com.server.service.UserService;

@RestController
public class FacebookController {
	@Autowired
	Facebook facebook;
	@Autowired
	SocialUserService socialUserService;
	private Gson gson = new Gson();

	@Autowired
	UserDao userDao;

	@Autowired
	SocialUserService userService;

	@RequestMapping(value = "/api/facebook/details", method = RequestMethod.GET, produces = "application/json")
	public String getSocialDetails() {
		User userResult = facebook.userOperations().getUserProfile();
		String userId = userResult.getId();
		UserBean user = socialUserService.getUserByProviderUserId(userId);
		String resultStr = null;
		Date date = new Date();
		com.server.entity.User userForId = userDao.findByProviderIdAndProviderUserId("facebook", userId);
		boolean userAlreadyExists = userDao.userAlreadyExists(userId);
		if (!userAlreadyExists) {
			user.setBirthday(userResult.getBirthday());
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

	@RequestMapping(value = "/api/facebook/update", method = RequestMethod.GET, produces = "application/json")
	public void updateSocialDetails() {

	}
}
