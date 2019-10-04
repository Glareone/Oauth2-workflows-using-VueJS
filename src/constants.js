// ------------------------------------------------- GOOGLE ----------------------------------------
const GOOGLE_CLIENT_ID = '141066975376-76ks9855blhuluf98m027rr94o6eqn0r.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '1YDYWnM5VilJcu-UOWYzLNgO';
const GOOGLE_REDIRECT_URI = 'http://localhost:8080/google';
const GOOGLE_REDIRECT_ENCODED_URI = encodeURI(GOOGLE_REDIRECT_URI);
export const GOOGLE_BASE_URI = 'https://accounts.google.com/o/oauth2';
// For /auth endpoint (To get code). Scope - emails from Gmail. "GET" Request
export const GOOGLE_AUTHORIZATION_ENDPOINT_PROTOTYPE = `${GOOGLE_BASE_URI}/auth?redirect_uri=URLENCODE(redirectURI)&response_type=code&client_id=clientId&scope=https%3A%2F%2Fmail.google.com%2F&approval_prompt=force`;
export const GOOGLE_AUTHORIZATION_ENDPOINT = `${GOOGLE_BASE_URI}/auth?redirect_uri=${GOOGLE_REDIRECT_ENCODED_URI}&response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=https%3A%2F%2Fmail.google.com%2F&approval_prompt=force`;
// For /token endpoint (to get token). "POST" Request
export const GOOGLE_TOKEN_ENDPOINT_PROTOTYPE = `${GOOGLE_BASE_URI}/token + body: &grant_type=authorization_code&code=CODE&redirect_uri=URLENCODE(redirectURI)&client_id=CLIENDID&client_secret=clientSecret&approval_prompt=force`;
export const GOOGLE_TOKEN_ENDPOINT = `${GOOGLE_BASE_URI}/token`;
// access_type=offline to get refresh token too.
// https://stackoverflow.com/questions/8942340/get-refresh-token-google-api
export const GOOGLE_TOKEN_DATA = `&grant_type=authorization_code&code=CODE&redirect_uri=${GOOGLE_REDIRECT_ENCODED_URI}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&access_type=offline&approval_prompt=force&prompt=consent`;

// -------------------------------------------------- FIREBASE -------------------------------------
export const FIREBASE_KEY = 'AIzaSyCOMzxMfs0gbqbsG6lq5BBawxrvaq457HI';
export const FIREBASE_AUTHORIZATION_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;

// -------------------------------------------------- FACEBOOK -------------------------------------
const FACEBOOK_APP_ID = '2722392394458827';
const FACEBOOK_APP_SECRET = '2beed2badc5f6c71b135755e051fd9f7';
const FACEBOOK_REDIRECT_URI = 'http://localhost:8080/facebook/';
const FACEBOOK_REDIRECT_URI_ENCODED = encodeURI(FACEBOOK_REDIRECT_URI);
export const FACEBOOK_BASE_URI = 'https://www.facebook.com/dialog/oauth';
export const FACEBOOK_GRAPH_BASE_URI = 'https://graph.facebook.com';
const FACEBOOK_OAUTH_VERSION = 'v4.0';
// authorization endpoint (to get code). "GET" request
export const FACEBOOK_AUTHORIZATION_ENDPOINT_PROTOTYPE = `${FACEBOOK_BASE_URI}?client_id=CLIENT_ID&redirect_uri=URLENCODED(REDIRECT_URI)`;
export const FACEBOOK_AUTHORIZATION_ENDPOINT = `${FACEBOOK_BASE_URI}?client_id=${FACEBOOK_APP_ID}&redirect_uri=${FACEBOOK_REDIRECT_URI_ENCODED}`;
// token endpoint (to get token). "GET" request
export const FACEBOOK_TOKEN_ENDPOINT_PROTOTYPE = `${FACEBOOK_GRAPH_BASE_URI}/${FACEBOOK_OAUTH_VERSION}/oauth/access_token?redirect_uri=URIENCODED(redirectURI)&client_id=CLIEND_ID&client_secret=CLIENT_SECRET&code=CODE`;
export const FACEBOOK_TOKEN_ENDPOINT = `${FACEBOOK_GRAPH_BASE_URI}/${FACEBOOK_OAUTH_VERSION}/oauth/access_token?redirect_uri=${FACEBOOK_REDIRECT_URI_ENCODED}&client_id=${FACEBOOK_APP_ID}&client_secret=${FACEBOOK_APP_SECRET}&code=`;

// ------------------------------------------------- LINKED IN -------------------------------------
const LINKEDIN_CLIEND_ID = '78p5a1sgadk8cj';
const LINKEDIN_CLIENT_SECRET = '8oxI5tMPZKglxl7m';
const LINKEDIN_REDIRECT_URI = 'http://localhost:8080/linkedin';
const LINKEDIN_REDIRECT_URI_ENCODED = encodeURI(LINKEDIN_REDIRECT_URI);
// second version of api endpoint
// legacy documentation and endpoint description: https://developer.linkedin.com/docs/oauth2-legacy
// modern one: https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context
export const LINKEDIN_BASE_URI = 'https://www.linkedin.com/oauth/v2';
export const LINKEDIN_AUTHORIZATION_ENDPOINT = `${LINKEDIN_BASE_URI}/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=${LINKEDIN_CLIEND_ID}&redirect_uri=${LINKEDIN_REDIRECT_URI_ENCODED}`;
export const LINKEDIN_TOKEN_ENDPOINT = `${LINKEDIN_BASE_URI}/accessToken`;
export const LINKEDIN_TOKEN_ENDPOINT_DATA = `grant_type=authorization_code&redirect_uri=${LINKEDIN_REDIRECT_URI_ENCODED}&client_id=${LINKEDIN_CLIEND_ID}&client_secret=${LINKEDIN_CLIENT_SECRET}&code=`;

// ------------------------------------------------- PAYPAL ----------------------------------------

