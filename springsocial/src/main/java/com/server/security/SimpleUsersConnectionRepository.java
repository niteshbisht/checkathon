package com.server.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.social.connect.*;
import org.springframework.social.connect.mem.TemporaryConnectionRepository;

import com.server.entity.User;
import com.server.service.SocialUserService;

import java.util.*;

/**
 * A Simplified version of the JdbcUsersConnectionRepository that does not persist multiple connections to/from users.
 * This repository works with a one-to-one relation between between User and Connection
 * Note that it uses the JPA based UserService so no custom SQL is used
 */
public class SimpleUsersConnectionRepository implements UsersConnectionRepository {

    private SocialUserService userService;
    private ConnectionFactoryLocator connectionFactoryLocator;
    private ConnectionSignUp connectionSignUp;
    private Connection connection;
    public SimpleUsersConnectionRepository(SocialUserService userService, ConnectionFactoryLocator connectionFactoryLocator) {
        this.userService = userService;
        this.connectionFactoryLocator = connectionFactoryLocator;
    }

    @Override
    public List<String> findUserIdsWithConnection(Connection<?> connection) {
        try {
            User user = userService.loadUserByConnectionKey(connection.getKey());
            ConnectionData createData = connection.createData();
			user.setAccessToken(createData.getAccessToken());
            userService.updateUserDetails(user);
            return Arrays.asList(user.getUserId());
        } catch (AuthenticationException ae) {
            return Arrays.asList(connectionSignUp.execute(connection));
        }
    }

    @Override
    public Set<String> findUserIdsConnectedTo(String providerId, Set<String> providerUserIds) {
        Set<String> keys = new HashSet<>();
        for (String userId: providerUserIds) {
            ConnectionKey ck = new ConnectionKey(providerId, userId);
            try {
                keys.add(userService.loadUserByConnectionKey(ck).getUserId());
            } catch (AuthenticationException ae) {
                //ignore
            }
        }
        return keys;
    }

    @Override
    public ConnectionRepository createConnectionRepository(String userId) {
        final ConnectionRepository connectionRepository = new TemporaryConnectionRepository(connectionFactoryLocator);
        final User user = userService.loadUserByUserId(userId);
        final ConnectionData connectionData = new ConnectionData(
                user.getProviderId(),
                user.getProviderUserId(),
                null, null, null,
                user.getAccessToken(),
                null, null, null);

        connection = connectionFactoryLocator
                .getConnectionFactory(user.getProviderId()).createConnection(connectionData);
        connectionRepository.addConnection(connection);
        return connectionRepository;
    }

    public void setConnectionSignUp(ConnectionSignUp connectionSignUp) {
        this.connectionSignUp = connectionSignUp;
    }
    public Connection getConnection(){
    	return this.connection;
    }
}
