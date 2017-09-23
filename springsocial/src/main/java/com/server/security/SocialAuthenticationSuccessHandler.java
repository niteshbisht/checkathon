package com.server.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.server.entity.User;
import com.server.service.SocialUserService;
import com.server.service.TokenAuthenticationService;

@Component
public class SocialAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

	@Autowired
	private TokenAuthenticationService tokenAuthenticationService;

	@Autowired
	private SocialUserService userService;
	
//	@Resource
//	DefaultTokenServices tokenServices;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws ServletException, IOException {
		final User authenticatedUser = userService.loadUserByUsername(authentication.getName());
		final UserAuthentication userAuthentication = new UserAuthentication(authenticatedUser);
		tokenAuthenticationService.addAuthentication(request,response, userAuthentication);
		//OAuth2Authentication loadAuthentication = tokenServices.loadAuthentication(authenticatedUser.getAccessToken());
		super.onAuthenticationSuccess(request, response, authentication);
	}
}
