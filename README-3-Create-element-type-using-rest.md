# 3. Create 'Element' content-type using REST API
Content-types can be created using REST APIs. We will create a content-type of type "element". Element is similar to a block, but used in Visual Builder. We are going to use [Postman](https://www.postman.com/downloads/) in this example, but you can use any tool of choose.

Use POST with url

    {your-cms-path}/_cms/preview2/contenttypes
    
for example

    https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/contenttypes

## 3.1. Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.

![image](https://github.com/user-attachments/assets/385c3988-69a4-402e-b921-c7ac840924a6)

## 3.2. Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value

![image](https://github.com/user-attachments/assets/9e029390-78b5-4004-9419-753b4e481312)

## 3.3. Body
Use "raw" with "JSON" and paste the following into the text area

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

![image](https://github.com/user-attachments/assets/7081f17d-6d97-4d3e-b4de-49d9f20cdfc9)
