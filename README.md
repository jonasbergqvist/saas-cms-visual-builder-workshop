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

![image](https://github.com/user-attachments/assets/6d68dfaf-6370-4114-8a72-fda5679600d7)

![image](https://github.com/user-attachments/assets/2b85c394-fa27-42c1-8ad5-8400c045030e)

![image](https://github.com/user-attachments/assets/4a926845-15c5-48ef-ab5f-4bca79a88f1b)

![image](https://github.com/user-attachments/assets/226d3ae0-af92-491b-aba1-4317c6dbce6b)

![image](https://github.com/user-attachments/assets/74d57f60-28cf-4a26-bd71-147471fde147)

![image](https://github.com/user-attachments/assets/e14e1faf-bb20-4885-b7d9-9afb661b5969)

![image](https://github.com/user-attachments/assets/a5d9a548-27d5-403e-9717-163c9b83230e)

![image](https://github.com/user-attachments/assets/da8b1501-f893-4e42-995b-d6272c45cd54)

![image](https://github.com/user-attachments/assets/f0ab7818-ca90-4837-bf35-5f1083c1efc5)

![image](https://github.com/user-attachments/assets/126e07cb-9b50-439a-ae5d-d4922e30bf2f)

![image](https://github.com/user-attachments/assets/02488699-246a-4542-8aff-cc1358b2dba2)


## Create GraphQL query for the experience


![image](https://github.com/user-attachments/assets/5868659e-9ee2-4a4c-b436-8170cb4036ce)

![image](https://github.com/user-attachments/assets/698f81e1-85d1-4a5d-80f7-fa4d1eab5316)

![image](https://github.com/user-attachments/assets/a9469cc4-ceed-455e-bc58-4e5bb2fee3fa)

![image](https://github.com/user-attachments/assets/aebd25b0-e4ea-4f32-ac91-dc9b91ffb4ac)

![image](https://github.com/user-attachments/assets/0f408582-343d-4087-a88f-4fdd52c4c220)

![image](https://github.com/user-attachments/assets/2cf118d0-322f-49a7-a284-5ec10a46b33d)

![image](https://github.com/user-attachments/assets/9aa19b45-26f4-4af7-8c79-a222371f9aa4)

![image](https://github.com/user-attachments/assets/2e73c059-5c12-4e2a-a42f-ccfc7b2ccce2)

![image](https://github.com/user-attachments/assets/a0f1e046-a847-4e22-9014-a5e2b6739610)

![image](https://github.com/user-attachments/assets/29a73ae1-b802-497c-9db0-fb7bc6514f1b)

![image](https://github.com/user-attachments/assets/f7c130aa-348e-4204-967e-90388a3c73ec)

![image](https://github.com/user-attachments/assets/6dc77480-a5ee-45c3-86d0-c3a770c4dc40)

![image](https://github.com/user-attachments/assets/1ed08c1d-c22f-4cc0-83e5-37bffb846ecf)

![image](https://github.com/user-attachments/assets/b81ab3b9-927e-40a2-aaf1-6b40b754bb42)

![image](https://github.com/user-attachments/assets/91f0845f-2a51-4f8d-8d3f-251e13eedfef)

![image](https://github.com/user-attachments/assets/d1abd531-0813-43d3-9c0e-fb0ec13158bd)

![image](https://github.com/user-attachments/assets/4f0e1ac1-ff3a-4127-8be0-38ecc86cde5e)

![image](https://github.com/user-attachments/assets/3f63af0c-61ed-4f94-a8e5-5cb9f12484b5)

![image](https://github.com/user-attachments/assets/39e7a1a9-6bce-41a0-bfdd-8329ae6c0551)

![image](https://github.com/user-attachments/assets/55ee5008-901a-4b6f-b598-e99c092863bb)

## Create a NextJs application that uses the Experience created in SaaS CMS
-

## Enable 'Preview mode'
-

## Setup webhooks
-
