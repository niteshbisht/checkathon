package com.server.security;

import java.util.UUID;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.server.entity.User;
import com.server.entity.UserRole;
import com.server.repository.UserDao;
import com.server.utils.Utils;

@Component("connectionSignUp")
public class AutoSignUpHandler implements ConnectionSignUp {
	private static final Logger logger = Logger.getLogger(AutoSignUpHandler.class);
    @Autowired
    private UserDao userDao;
    private Connection<?> connectionObj;
    
    @Override
    @Transactional
    public String execute(final Connection<?> connection) {
        final User user = new User();
        String userIdForuser = UUID.randomUUID().toString();
        user.setId(userIdForuser);
        logger.info("Generated UUID "+userIdForuser);
        connectionObj = connection;
        String userName = connection.fetchUserProfile().getFirstName();
        if(userName==null||userName.equals("null")){
        	userName = connection.fetchUserProfile().getUsername();
        }
        user.setUsername(userName);
        user.setProviderId(connection.getKey().getProviderId());
        user.setProviderUserId(connection.getKey().getProviderUserId());
        user.setAccessToken(connection.createData().getAccessToken());
        user.setRefreshToken(connection.createData().getRefreshToken());
        user.setExpireTime(connection.createData().getExpireTime().toString());
        return grantRoles(user);
    }

    private String grantRoles(final User user) {
      logger.info("Grant Roles here to the new user");
       String userId = null;
       User userNew = userDao.findByUsername(user.getUsername());
       int count =userDao.returnUserCount();
       if (userNew == null) {
			if (count == 0) {
				user.grantRole(UserRole.ADMIN);
			} else {
				user.grantRole(UserRole.USER);
			}
    	   		logger.info("New User Found");
                userDao.save(user);
                userId = user.getUserId();
        }else{
        	logger.info("Existing User");
        	userId = userNew.getUserId();
        	Long currtimeOfSystem = System.currentTimeMillis();
        	Long expireTimefromDB =  Long.parseLong(userNew.getExpireTime());
        	if(Utils.isExpired(currtimeOfSystem, expireTimefromDB)){
        		userDao.updateUserTokens(userNew.getUsername(),userNew.getAccessToken(),userNew.getExpireTime());
        	}
        }
        return userId;
    }

	public Connection<?> getConnectionObj() {
		return connectionObj;
	}
}
