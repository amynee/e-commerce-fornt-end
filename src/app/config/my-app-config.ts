export default {
    oidc: {
        clientId: '0oafcts2ng3efrchB5d7',
        issuer: 'https://dev-69572531.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        // Scopes provide access to information about a user
        scopes: ['openid', 'profile', 'email']
        // openid: required for authentication requests
        // profile: user's first name, last name, phone etc
        // email: user's email address
    }
}
