# 2. Create API Client and access token
An API Client is needed for creating content-types using REST, as well as creating styles using REST.

## 2.1. Open "API Clients" view
Got to "API Clients" in the SaaS CMS UI

Click on "admin" and look for "API Clients" under "Settings".

![image](https://github.com/user-attachments/assets/cdc3ea48-5547-4b05-b843-db013f28dc34)

## 2.2. Create API Client
Add a value in "Client ID" and click "Create".

A value will now be shown in the "Client secret" textbox. Copy both the "Client ID" and "Client secret" so you can store the values temporarily, for example in notepad.

![image](https://github.com/user-attachments/assets/973ccf35-2f5e-403e-8031-9337e3a62b94)

## 2.3. Create access token
Create access token using Client ID and secret.

We are going to use [Postman](https://www.postman.com/downloads/) in this example, but you can use any tool of choose.

Use POST with url 

    {your-cms-path}/_cms/preview2/oauth/token

for example

    https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/oauth/token.

![image](https://github.com/user-attachments/assets/8bb19a51-67b2-4ecd-a9e6-efd7056702c5)

Open tab "Body" and select "raw" and then "JSON"

![image](https://github.com/user-attachments/assets/51392bf5-1ac0-4e1c-852a-686f78eadc9b)

Add the following into the text area, where you need to change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client".

      {
        "grant_type": "client_credentials",
        "client_id": "{your client_id}",
        "client_secret": "{your client_secret}"
      }

Push "Send" to execute the request, and look at the response in the bottom. Copy the value for "access_token" and paste it somewhere temporary, for example in notepad.

![image](https://github.com/user-attachments/assets/0b330405-c164-4655-987c-6c09a1882111)

We can create new content-types in CMS when we have an access token. The access token will only be valid for 300 seconds, so you must create a new token after 300 seconds to continue using the REST API (see "Create access token using Client ID and secret")
