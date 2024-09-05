# 4. Create style using REST API
Styles can be created using REST APIs, which editors can select in Visual Builder when creating experiances. We will create a simple style on section level.

Use POST with url

    {your-cms-path}/_cms/preview2/displaytemplates
    
for example

    https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/displaytemplates

![image](https://github.com/user-attachments/assets/feb6d228-f1f4-4acc-976b-dd8d707dbd63)
    
## 4.1. Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.

![image](https://github.com/user-attachments/assets/b5a365fc-ee71-40a9-949f-c68f40511cc9)

## 4.2. Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value

![image](https://github.com/user-attachments/assets/07815867-ed45-48ea-b839-0ac5b849cebe)

## 4.3. Body
Use "raw" with "JSON"

![image](https://github.com/user-attachments/assets/5c7f59e0-e475-4032-bd4a-5c1484210224)

Paste the following into the text area

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

![image](https://github.com/user-attachments/assets/4b44fe49-d0db-4a46-8d5c-f5c045d4f9e5)

