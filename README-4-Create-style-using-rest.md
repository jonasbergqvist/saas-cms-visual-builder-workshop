# 4. Create style using REST API
Styles can be created using REST APIs, which editors can select in Visual Builder when creating experiances. We will create a simple style on section level.

Use POST with url {your-cms-path}/_cms/preview2/displaytemplates for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/displaytemplates. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

## 4.1. Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.
![image](https://github.com/user-attachments/assets/990e1bf2-0c24-46e5-be1d-0d5f5770ac0e)

## 4.2. Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value
![image](https://github.com/user-attachments/assets/2a250130-ac2a-49dd-b6ef-b5ab0882afc5)

## 4.3. Body
Use "raw" with "JSON" and paste the following into the text area

      {
        "key": "defaultSection",
        "displayName": "Default Section",
        "baseType": "section",
        "isDefault": true,
        "settings": {
            "colorScheme": {
                "displayName": "Color scheme",
                "editor": "select",
                "sortOrder": 10,
                "choices": {
                    "default": {
                    "displayName": "Default",
                    "sortOrder": 10
                    },
                    "primary": {
                    "displayName": "Primary",
                    "sortOrder": 20
                    },
                    "secondary": {
                    "displayName": "Secondary",
                    "sortOrder": 30
                    }
                }
            },
            "highlight": {
                "displayName": "Highlighted",
                "editor": "checkbox",
                "sortOrder": 10
            }
        }
      }

![image](https://github.com/user-attachments/assets/6e77e6ca-c1ec-4d28-b893-3c5fa51b5c89)