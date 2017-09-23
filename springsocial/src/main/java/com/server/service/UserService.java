package com.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.social.connect.ConnectionKey;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.server.beans.GrievPost;
import com.server.beans.RegistrationModel;
import com.server.beans.UserBean;
import com.server.entity.User;
import com.server.entity.UserDetails;
import com.server.repository.UserDao;

@Service
@Transactional
public class UserService implements SocialUserService {

	@Autowired
	private UserDao userDao;

	private final AccountStatusUserDetailsChecker detailsChecker = new AccountStatusUserDetailsChecker();

	@Override
	@Transactional(readOnly = true)
	public User loadUserByUserId(String userId)  {
		final User user = userDao.findById(userId);
		return checkUser(user);
	}

	@Override
	@Transactional(readOnly = true)
	public User loadUserByUsername(String username) {
		final User user = userDao.findByUsername(username);
		return checkUser(user);
	}

	@Override
	@Transactional(readOnly = true)
	public User loadUserByConnectionKey(ConnectionKey connectionKey) {
		final User user = userDao.findByProviderIdAndProviderUserId(connectionKey.getProviderId(), connectionKey.getProviderUserId());
		return checkUser(user);
	}

	@Override
	public void updateUserDetails(User user) {
		userDao.updateUser(user);
	}

	private User checkUser(User user) {
		if (user == null) {
			throw new UsernameNotFoundException("user not found");
		}
		detailsChecker.check(user);
		return user;
	}

	@Override
	@Transactional(readOnly = true)
	public User loadUserByToken(String token) {
		User user = userDao.findUserByToken(token);
		return user;
	}
	public int returnCountOfUsers(){
		int count = userDao.returnUserCount();
		return count;
	}

	@Override
	@Transactional(readOnly = true)
	public UserBean getUserByProviderUserId(String providerUserId) {
		UserBean user = userDao.findByProviderUserId(providerUserId);
		if(user==null){
			user = new UserBean();
		}
		return user;
	}

	@Override
	public boolean saveUser(UserBean user,HttpServletRequest httpServletRequest) {
		boolean flag = false;
		try{
			UserDetails userdetails = new UserDetails();
			userdetails.setUsername(user.getUsername());
			userdetails.setBirthday(user.getBirthday());
			userdetails.setCreationDate(user.getCreationDate());
			userdetails.setEmail(user.getEmail());
			userdetails.setFirstname(user.getFirstname());
			userdetails.setGender(user.getGender());
			userdetails.setId(user.getId());
			userdetails.setFlag(user.isFlag());
			userdetails.setIndustry(user.getIndustry());
			userdetails.setLastname(user.getLastname());
			userdetails.setLocation(user.getLocation());
			userdetails.setUpdateDate(user.getUpdateDate());
			userdetails.setUsername(user.getUsername());
			userdetails.setFlag(true);
			userdetails.setProviderUserId(user.getProviderUserId());
			userdetails.setRole("admin");
			if(userDao.saveUser(userdetails)){
				flag = true;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public int countOfUsersRegistered() {
		int count = userDao.countUserRegistered();
		return count;
	}

	@Override
	public ArrayList<UserBean> getAllUsers() {
		ArrayList<UserBean> userBeanList = new ArrayList<UserBean>();
		try{
			List<UserDetails> userDetailsList = userDao.getAllUserList();
			for (UserDetails userDetail : userDetailsList) {
				UserBean userBean = new UserBean();
				userBean.setUsername(userDetail.getUsername());
				userBean.setCreationDate(userDetail.getCreationDate());
				userBean.setEmail(userDetail.getEmail());
				userBean.setFirstname(userDetail.getFirstname());
				userBean.setFlag(userDetail.isFlag());
				userBean.setGender(userDetail.getGender());
				userBean.setId(userDetail.getId());
				userBean.setIndustry(userDetail.getIndustry());
				userBean.setLastname(userDetail.getLastname());
				userBean.setLocation(userDetail.getLocation());
				userBean.setProviderUserId(userDetail.getProviderUserId());
				userBean.setRole(userDetail.getRole());
				userBean.setUpdateDate(userDetail.getUpdateDate());
				userBean.setBirthday(userDetail.getBirthday());
				userBeanList.add(userBean);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return userBeanList;
	}
	
	@Override
	public boolean registerNewUser(RegistrationModel registrationModel){
		UUID uid = UUID.randomUUID();
		User user =  new User();
		user.setUsername(registrationModel.getUname());
		UserDetails udetails = new UserDetails();
		udetails.setFirstname(registrationModel.getFname());
		udetails.setEmail(registrationModel.getEmail());
		udetails.setLastname(registrationModel.getLname());
		udetails.setLocation(registrationModel.getLocation());
		udetails.setProviderUserId(uid.toString());
		return false;
	}

	@Override
	public boolean createGrievance(GrievPost grievPost) {
		
		return false;
	}
}
