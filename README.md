### OAuth2 Project with examples

![OAuth2-workflows](Oauth2-workflows.png)

### Code Flow Grant
<details>
<summary>Description of all steps: </summary>

Steps:
![OAuth2-code-grant](Code-Grant-Steps.png)

1: Get "code" from /auth endpoint scheme:
![OAuth2-code-flow-1](Code-flow-1.png)
* "state" - part of application where we would like to move on.
* "scope" - part of information which we would like to take from resource server.
* "redirect_url" - http address where we will be redirected after the very last oauth response step by using HTTP 304 Redirect.

2: Get Token from /token endpoint scheme:
![OAuth2-code-flow-2](Code-flow-2.png)
* "czZCaGRSa3F0MzpnWDFm" is a string consists from "clientID" + ":" + "clientSecret" and base64 encoded.
* This is the CLIENT(3rd party app) credentials. They could be validated by Oauth server.
To get clientID and Secret you need to register device first.

2: Interactions with the Resource Server:
![OAuth2-code-flow-3](Code-flow-3.png)

3: Get a new Access token:
![OAuth2-code-flow-refresh-access-token](Code-flow-Refresh-access-token.png)
* We need to send a refresh token and get a new access token.
Pay attention on refresh token in response - refresh token was also changed as well as access token.
Next time we should send a new refresh token to get a new access token. Old refresh token - will be invalid.
* grant_type should be "refresh_token"

4: Get a new Refresh token:
![OAuth2-code-flow-refresh-refresh-token](Code-flow-Refresh-refresh-token.png)
* To get a new refresh token (after unauthorized response trying to take a new access token) we need to send
grant_type "refresh_token" and old token in "refresh_token" field. 

</details>

### Implicit Grant Flow

<details>
<summary>Description of all steps: </summary>
Scheme:

![OAuth2-implicit-flow](Implicit-flow.png)
* Implicit flow doesn't require to use /token endpoint.
* It returns access token directly.

</details>

### Client Credentials Grant Flow (for machine-to-machine (M2M) applications, such as CLIs, daemons, or services)

<details>
<summary>Description of all steps: </summary>
Scheme:

![OAuth2-credentials-grant](Credentials-Grant-flow.png)
* Credentials Grant flow doesn't require to use /auth endpoint.
* Client and Owner is the same in this flow. Uses CliendID and ClientSecret to get access token.
* Doesn't require a refresh token.
* Ease explanation could be found here
https://auth0.com/docs/flows/concepts/client-credentials
or here https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow.

</details>

### Resource Owner Password Credentials Grant (Trust relationship client or device, operating system, highly privileged app)

<details>
<summary>Description of all steps: </summary>

* It stores and uses username and password directly.
* The authorization server should take special care when enabling this grant type and only allow it when other flows are not viable.
* This grant type is suitable for clients capable of obtaining the resource owner’s credentials (username and password,
typically using an interactive form). 
* It is also used to migrate existing clients using direct authentication schemes
such as HTTP Basic or Digest authentication to OAuth by converting the stored credentials to an access token.

Scheme:
![OAuth2-resource-owner-password-credentials-grant](Resource-Owner-Password-Credentials-Grant.png)
* Credentials Grant flow doesn't require to use /auth endpoint as same as Credentials Grant Flow.

</details>