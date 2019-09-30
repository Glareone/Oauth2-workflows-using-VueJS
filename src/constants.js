const GOOGLE_CLIENT_ID = '141066975376-76ks9855blhuluf98m027rr94o6eqn0r.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '1YDYWnM5VilJcu-UOWYzLNgO';
const GOOGLE_REDIRECT_URI = 'http://localhost:8080/google';
const GOOGLE_REDIRECT_ENCODE_URI = 'http%3A%2F%2Flocalhost%3A8080%2Fgoogle';

// For /auth endpoint (To get code). Scope - emails from Gmail.
export const GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=URLENCODE(redirectURI)&response_type=code&client_id=clientId&scope=https%3A%2F%2Fmail.google.com%2F&approval_prompt=force';
export const GOOGLE_AUTHORIZATION_ENDPOINT = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${GOOGLE_REDIRECT_ENCODE_URI}&response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=https%3A%2F%2Fmail.google.com%2F&approval_prompt=force`;

// For /token endpoint (to get token)
export const GOOGLE_TOKEN_ENDPOINT_PROTOTYPE = 'https://accounts.google.com/oauth2/token&grant_type=authorization_code&code=CODE&redirect_uri=URLENCODE(redirectURI)&client_id=CLIENDID&client_secret=clientSecret';
export const GOOGLE_TOKEN_ENDPOINT = `https://accounts.google.com/oauth2/token&grant_type=authorization_code&code=CODE&redirect_uri=${GOOGLE_REDIRECT_ENCODE_URI}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}`;
