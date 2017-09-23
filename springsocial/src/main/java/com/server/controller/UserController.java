package com.server.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.server.beans.CustomUserConnection;
import com.server.beans.GrievPost;
import com.server.beans.RegistrationModel;
import com.server.beans.UserBean;
import com.server.beans.UserUpdate;
import com.server.entity.User;
import com.server.repository.UserDao;
import com.server.service.SocialUserService;
import com.server.service.TokenAuthenticationService;
import com.server.utils.Constants;

@RestController
public class UserController {
	private static final Logger logger = Logger.getLogger(UserController.class);
	private static final String AUTH_HEADER_NAME = "x-auth-token";
	
	private static final String FACEBOOK = "facebook";
	private static final String TWITTER = "twitter";
	private static final String GITHUB = "github";
	private static final String LINKEDIN ="linkedin";
	private static final String LIVE = "live";
	private static final String GOOGLEPLUS ="google";
	@Autowired
	private CustomUserConnection customConnectionBean;
	
	@Autowired
	private TokenAuthenticationService tokenAuthenticationService;
	
	@Autowired
	UserDao userDao;
	@Autowired
	SocialUserService userService;
	private Gson gson = new Gson();
	@RequestMapping(value = "/api/user/details", method = RequestMethod.GET)
	public String getCurrentUser(HttpServletRequest request) {
		String token = request.getHeader(AUTH_HEADER_NAME);
		User user = userDao.findUserByToken(token);
		String userResult = gson.toJson(user, User.class);
		return userResult;
	}
	@RequestMapping(value="/api/useraccess",method=RequestMethod.GET)
	public String isSuccess(HttpServletRequest request){
		CustomUserConnection connection = new CustomUserConnection();
		Cookie resultCookie[] =request.getCookies();
		String providerId = "";
		if(resultCookie.length>0){
		for(Cookie ckie:resultCookie){
			String strName = ckie.getName();
			if(strName.equals(Constants.PROVIDER_COOKIE)){
				providerId = ckie.getValue();
				break;
			}
		}
		}
		connection.setProviderId(providerId);
		return gson.toJson(connection, CustomUserConnection.class);
	}
	
	@RequestMapping(value="/api/user/showallusers",method=RequestMethod.POST)
	public String getAllUsers(HttpServletRequest request){
		String result= null;
		List<UserBean> userBeanList = userService.getAllUsers();
		try{
			JsonArray jsonArr = gson.toJsonTree(userBeanList).getAsJsonArray();			
			result = jsonArr.toString();
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}
	
	
	@RequestMapping(value="/api/user/promoteUsers",method=RequestMethod.POST)
	public String promoteUsers(HttpServletRequest request,@RequestBody UserUpdate userUpdate){
		String result= null;
		try{
			JsonArray jsonArr = gson.toJsonTree(userUpdate).getAsJsonArray();			
			result = jsonArr.toString();
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}
	
	
	@RequestMapping(value = "/api/user/saveUser", method = RequestMethod.POST, consumes="application/json", produces="application/json")
	public @ResponseBody HttpEntity<String> saveUser( HttpServletRequest request,@RequestBody  UserBean userBean) {
		String result = "error";
		HttpEntity<String> httpEntity =null;
		try {
			userBean.setFlag(true);
			if(userService.saveUser(userBean,request)){
				result = "success";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		httpEntity = new HttpEntity<String>(result);
		return httpEntity;
	}
	@RequestMapping(value = "/api/updateUser", method = RequestMethod.GET)
	public String updateUser(HttpServletRequest request) {
		String result = null;
		try {
			result = "success";
		} catch (Exception e) {
			result = "error";
			e.printStackTrace();
		}
		return result;
	}
	@RequestMapping(value = "/api/promoteToAdmin", method = RequestMethod.GET)
	public String promoteToAdmin(HttpServletRequest request) {
		String result = null;
		try {
			result = "success";
		} catch (Exception e) {
			result = "error";
			e.printStackTrace();
		}
		return result;
	}
	
	@RequestMapping(value="/registerNewUser", method = RequestMethod.POST)
	public String registerNewUser(HttpServletRequest request, @RequestBody RegistrationModel registrationModel){
		userService.registerNewUser(registrationModel);
		return "";
	}
	
	@RequestMapping(value="/postGrievience",method=RequestMethod.POST)
	public String postGrievience(HttpServletRequest request, @RequestBody GrievPost grievPost){
		userService.createGrievance(grievPost);
		return "";
	}
	
}
