# 3. Create 'Element' content-type using REST API
Content-types can be created using REST APIs. We will create a content-type of type "element". Element is similar to a block, but used in Visual Builder. We are going to use [Postman](https://www.postman.com/downloads/) in this example, but you can use any tool of choose.

Use POST with url

    {your-cms-path}/_cms/preview2/contenttypes
    
for example

    https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/contenttypes

![image](https://github.com/user-attachments/assets/2bc6d0f8-06d6-4d8a-8209-12c39ca5e642)

## 3.1. Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.

![image](https://github.com/user-attachments/assets/8c6eff67-b750-436f-88b3-2bddac5cbeb8)

## 3.2. Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value

![image](https://github.com/user-attachments/assets/da474dad-9834-41f5-8493-f47fdfd1575b)

## 3.3. Body
Use "raw" with "JSON" in body

![image](https://github.com/user-attachments/assets/788de5b2-2ee1-4ea8-bd72-1a0f407d9104)

Paste the following into the text area

      {
          "key": "SimpleElement",
          "displayName": "SimpleElement",
          "description": "",
          "baseType": "element",
          "source": "",
          "sortOrder": 0,
          "features": [
              "localization",
              "versioning",
              "publishPeriod"
          ],
          "usage": [
              "property",
              "instance"
          ],
          "mayContainTypes": [],
          "mediaFileExtensions": [],
          "created": "2024-09-10T13:58:42.6533333+00:00",
          "lastModified": "2024-09-10T14:19:13.41+00:00",
          "lastModifiedBy": "jonas.bergqvist@optimizely.com",
          "properties": {
              "TestProperty": {
                  "type": "string",
                  "format": "html",
                  "displayName": "TestProperty",
                  "description": "",
                  "localized": false,
                  "required": false,
                  "group": "Categories",
                  "sortOrder": 0,
                  "indexingType": "searchable",
                  "editorSettings": {}
              }
          }
      }

Push "Send" to execute the query. This will create the content-type in CMS.

![image](https://github.com/user-attachments/assets/77bd3187-6dd3-437f-b9eb-3782196b4d28)

## 3.4. Verify the element in CMS
Go to 'Settings' -> 'Content Types' in CMS, and verify that a new element called 'SimpleElement' has been created. Check if you missed to set the request to "POST" in Postman, in case no element exist in CMS.

