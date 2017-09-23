package com.server.repository;

import java.util.List;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.server.beans.UserBean;
import com.server.entity.User;
import com.server.entity.UserDetails;

@Repository("userDao")
public class UserDaoImpl implements UserDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public User findByUsername(String username) {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from User where username=:username");
		query.setParameter("username", username);
		List<User> list = query.getResultList();
		if (list.size() == 1) {
			return list.get(0);
		}
		return null;
	}

	@Override
	@Transactional
	public User findById(String id) {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from User where id=:id");
		query.setParameter("id", id);
		List<User> list = query.getResultList();
		if (list.size() == 1) {
			return list.get(0);
		}
		return null;
	}

	@Override
	@Transactional
	public User findByProviderIdAndProviderUserId(String providerId, String providerUserId) {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from User where providerId=:providerId and providerUserId=:providerUserId");
		query.setParameter("providerId", providerId);
		query.setParameter("providerUserId", providerUserId);
		List<User> list = query.getResultList();
		if (list.size() == 1) {
			return list.get(0);
		}
		return null;
	}

	@Override
	@Transactional
	public void save(User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(user);
	}

	@Override
	public List<User> findAll() {
		return null;
	}

	@Override
	@Transactional
	public void updateUser(User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(user);
	}

	@Override
	@Transactional
	public User findUserByToken(String token) {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from User where accessToken=:accessToken");
		query.setParameter("accessToken", token);
		List<User> userList = query.getResultList();
		if (userList.size() == 1) {
			return userList.get(0);
		}
		return new User();
	}

	@Override
	@Transactional
	public int returnUserCount() {
		Session session = this.sessionFactory.getCurrentSession();
		Integer count = ((Long) session.createQuery("select count(*) from User").uniqueResult()).intValue();
		if (count == null) {
			return 0;
		} else {
			return count;
		}
	}

	@Override
	@Transactional
	public UserBean findByProviderUserId(String providerUserId) {
		UserBean userBean = new UserBean();
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from UserDetails where providerUserId=:providerUserId");
		query.setParameter("providerUserId", providerUserId);
		List<UserDetails> list = query.getResultList();
		if (list.size() == 1) {
			UserDetails userDetails = list.get(0);
			userBean.setBirthday(userDetails.getBirthday());
			userBean.setCreationDate(userDetails.getCreationDate());
			userBean.setEmail(userDetails.getEmail());
			userBean.setFirstname(userDetails.getFirstname());
			userBean.setGender(userDetails.getGender());
			userBean.setId(userDetails.getId());
			userBean.setFlag(userDetails.isFlag());
			userBean.setIndustry(userDetails.getIndustry());
			userBean.setLastname(userDetails.getLastname());
			userBean.setLocation(userDetails.getLocation());
			userBean.setUpdateDate(userDetails.getUpdateDate());
			userBean.setUsername(userDetails.getUsername());
			userBean.setRole(userDetails.getRole());
			return userBean;
		}
		return null;
	}

	@Override
	@Transactional
	public boolean saveUser(UserDetails user) {
		boolean flag = false;
		try{
		Session session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(user);
		flag  = true;
		}catch(Exception e){
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	@Transactional
	public boolean userAlreadyExists(String userId) {
		Session currentSession = this.sessionFactory.getCurrentSession();
		org.hibernate.query.Query createQuery = currentSession
				.createQuery("select count(1) from UserDetails where providerUserId=:providerUserId");
		createQuery.setParameter("providerUserId", userId);
		Long counts = (Long) createQuery.uniqueResult();
		return counts.intValue() == 1 ? true : false;
	}

	@Override
	@Transactional
	public int countUserRegistered() {
		Session session = this.sessionFactory.getCurrentSession();
		Integer count = ((Long) session.createQuery("select count(*) from UserDetails").uniqueResult()).intValue();
		if (count == null) {
			return 0;
		} else {
			return count;
		}
	}

	@Override
	@Transactional	
	public List<UserDetails> getAllUserList() {
		// TODO Auto-generated method stub
		Session session = this.sessionFactory.getCurrentSession();
		org.hibernate.query.Query  createQuery= session.createQuery("from UserDetails", UserDetails.class);
		List<UserDetails> UserDetailsList = createQuery.getResultList();
		return UserDetailsList;
	}
	
	@Override
	@Transactional
	public boolean updateUserTokens(String userName,String accessToken,String expireTime){
		Session session = this.sessionFactory.getCurrentSession();
		org.hibernate.query.Query  createQuery= session.createQuery("update User set accessToken=:accessToken,expireTime=:expireTime where username=:userName");
		createQuery.setParameter("userName",userName);
		createQuery.setParameter("accessToken",accessToken);
		createQuery.setParameter("expireTime",expireTime);
		int update = createQuery.executeUpdate();
		return update==1;
	}
}
