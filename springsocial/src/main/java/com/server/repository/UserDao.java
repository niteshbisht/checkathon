package com.server.repository;

import java.util.List;

import com.server.beans.UserBean;
import com.server.entity.User;
import com.server.entity.UserDetails;

public interface UserDao{

	com.server.entity.User findByUsername(String username);

	com.server.entity.User findById(String userId);

	com.server.entity.User findByProviderIdAndProviderUserId(String providerId, String providerUserId);

	com.server.entity.User findUserByToken(String token);
	
	void save(User user);

	List<User> findAll();

	void updateUser(User user);
	
	int returnUserCount();
	
	UserBean findByProviderUserId(String providerUserId);
	
	boolean saveUser(UserDetails user);
	
	boolean userAlreadyExists(String userId);
	
	int countUserRegistered();
	

	List<UserDetails> getAllUserList();

	boolean updateUserTokens(String userName, String accessToken, String expireTime);
}
