package com.server.repository;

import java.util.List;

import com.server.beans.GrievPost;
import com.server.beans.UserBean;
import com.server.entity.Department;
import com.server.entity.Region;
import com.server.entity.State;
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
	
	int insertGrievData(GrievPost grievPost);

	List<UserDetails> getAllUserList();

	boolean updateUserTokens(String userName, String accessToken, String expireTime);

	List<State> getStates();

	List<Region> getRegions(String stateId);

	List<Department> getDepartments(String stateId, String regId);
}
