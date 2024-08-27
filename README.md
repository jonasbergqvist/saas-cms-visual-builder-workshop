# saas-cms-visual-builder-workshop
This tutorial will guide you in creating a NextJs app, where Visual Builder in Optimizely SaaS CMS will be used

## Get a SaaS CMS Instance from Optimizely
Visual Builder is part of CMS 13, which only exist for SaaS CMS at the moment. CMS 13 will be released later for PaaS CMS. You will have to reach out to Optimizely to get a SaaS CMS instance to be able to use Visual Builder in this guide.

## Create an Experience using Visual Builder in Optimizely CMS
We will start with creating an experience in the SaaS CMS.

### Create API Client in SaaS CMS
1. Got to "API Clients" in the SaaS CMS UI: /ui/Optimizely.Cms.Service.Security.Turnstile.UI/Clients/
![image](https://github.com/user-attachments/assets/e11ca5be-f6e9-43f9-b297-f37169996206)

2. Add a value in "Client ID" and click "Create".
![image](https://github.com/user-attachments/assets/0bfc8c67-1d5a-4f7e-9ffb-d688077099d7)
A value will now be shown in the "Client secret" textbox. Copy both the "Client ID" and "Client secret" so you can store the values temporarily, for example in notepad.

### Create 'Element' content-type using REST API
Content-types can be created using REST APIs. We will create a content-type of type "element". Element is similar to a block, but used in Visual Builder.

#### 1. Create access token using Client ID and secret
![image](https://github.com/user-attachments/assets/aab7f009-aa4d-447a-a242-bdd4687de883)
/_cms/preview2/contenttypes

#### 2. Create element using access token
##### Authentication: Use Barer Token with Token
![image](https://github.com/user-attachments/assets/385c3988-69a4-402e-b921-c7ac840924a6)

##### Headers: Use Content-Type: application/json
![image](https://github.com/user-attachments/assets/9e029390-78b5-4004-9419-753b4e481312)

#### Body: Use raw / json
![image](https://github.com/user-attachments/assets/7081f17d-6d97-4d3e-b4de-49d9f20cdfc9)

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
                
### Create style using REST API
Styles can be created using REST APIs, which editors can select in Visual Builder when creating experiances. We will create a simple style on section level.

##### Authentication: Use Barer Token with Token
![image](https://github.com/user-attachments/assets/990e1bf2-0c24-46e5-be1d-0d5f5770ac0e)

##### Headers: Use Content-Type: application/json
![image](https://github.com/user-attachments/assets/2a250130-ac2a-49dd-b6ef-b5ab0882afc5)

#### Body: Use raw / json
![image](https://github.com/user-attachments/assets/6e77e6ca-c1ec-4d28-b893-3c5fa51b5c89)

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

### Create Experience in CMS UI
-

## Create GraphQL query for the experience
-

## Create a NextJs application that uses the Experience created in SaaS CMS
-

## Enable 'Preview mode'
-

## Setup webhooks
-
