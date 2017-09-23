package com.server.service;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.social.connect.ConnectionKey;
import org.springframework.social.security.SocialUserDetailsService;

import com.server.beans.GrievPost;
import com.server.beans.RegistrationModel;
import com.server.beans.UserBean;
import com.server.entity.User;

public interface SocialUserService extends SocialUserDetailsService, UserDetailsService {

    User loadUserByConnectionKey(ConnectionKey connectionKey);
    /**/   User loadUserByUserId(String userId);
 /**/   User loadUserByUsername(String username);
    void updateUserDetails(User user);
    User loadUserByToken(String token);
	int returnCountOfUsers();
	UserBean getUserByProviderUserId(String providerUserId);
	boolean saveUser(UserBean user, HttpServletRequest httpServletRequest);	
	int countOfUsersRegistered();
	ArrayList<UserBean> getAllUsers();
	boolean registerNewUser(RegistrationModel registrationModel);
	boolean createGrievance(GrievPost grievPost);
}
