### OAuth2 Project with examples

![OAuth2-workflows](Oauth2-workflows.png)

### Code Flow Grant
<details>
<summary>Description of all steps: </summary>

* Steps:
![OAuth2-code-grant](Code-Grant-Steps.png)

* Get "code" from /auth endpoint scheme:
![OAuth2-code-flow-1](Code-flow-1.png)
"state" - part of application where we would like to move on.

* Get Token from /token endpoint scheme:
![OAuth2-code-flow-2](Code-flow-2.png)
Explanation of "Authorization Basic" here: 
"czZCaGRSa3F0MzpnWDFm" is a string consists from "clientID" + ":" + "clientSecret" and base64 encoded.
This is the CLIENT(3rd party app) credentials. They could be validated by Oauth server.
To get clientID and Secret you need to register device first.

* Interactions with Resource Server:
![OAuth2-code-flow-3](Code-flow-3.png)

* Get a new Access token:
![OAuth2-code-flow-refresh-access-token](Code-flow-Refresh-access-token.png)
We need to send refresh token and get a new access token.
Pay attention on refresh token in response - refresh token is also changed as well as access token.
Next time we should send a new refresh token.

* Get a new Refresh token:
![OAuth2-code-flow-refresh-refresh-token](Code-flow-Refresh-refresh-token.png)

</details>
