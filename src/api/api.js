export let API_KEY_1 = "MY_API_KEY_1";
export let API_KEY_2 = "MY_API_KEY_2";

How to get Youtube API Key:
1. You need a Google Account to access the Google API Console, request an API key, and register your application.
2. Create a project in the Google Developers Console and obtain authorization credentials so your application can submit API requests.
3. After creating your project, make sure the YouTube Data API is one of the services that your application is registered to use:
- Go to the API Console and select the project that you just registered.
- Visit the Enabled APIs page. In the list of APIs, make sure the status is ON for the YouTube Data API v3.
4. If your application will use any API methods that require user authorization, read the authentication guide to learn how to implement OAuth 2.0 authorization.
5. Select a client library to simplify your API implementation.
6. Familiarize yourself with the core concepts of the JSON (JavaScript Object Notation) data format. JSON is a common, language-independent data format that provides a simple text representation of arbitrary data structures. For more information, see json.org.

Source: https://developers.google.com/youtube/v3/getting-started/
