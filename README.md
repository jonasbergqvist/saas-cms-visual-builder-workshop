# saas-cms-visual-builder-workshop
This tutorial will guide you in creating a NextJs app, where Visual Builder in Optimizely SaaS CMS will be used

## Get a SaaS CMS Instance from Optimizely
Visual Builder is part of CMS 13, which only exist for SaaS CMS at the moment. CMS 13 will be released later for PaaS CMS. You will have to reach out to Optimizely to get a SaaS CMS instance to be able to use Visual Builder in this guide.

## Create API Client in SaaS CMS
And API Client is needed for creating content-types using REST, as well as creating styles using REST.

### 1. Got to "API Clients" in the SaaS CMS UI
Click on "admin" and look for "API Clients" under "Settings".
![image](https://github.com/user-attachments/assets/e11ca5be-f6e9-43f9-b297-f37169996206)

### 2. Add a value in "Client ID" and click "Create".
A value will now be shown in the "Client secret" textbox. Copy both the "Client ID" and "Client secret" so you can store the values temporarily, for example in notepad.
![image](https://github.com/user-attachments/assets/0bfc8c67-1d5a-4f7e-9ffb-d688077099d7)

## Create 'Element' content-type using REST API
Content-types can be created using REST APIs. We will create a content-type of type "element". Element is similar to a block, but used in Visual Builder. We are going to use [Postman](https://www.postman.com/downloads/) in this example, but you can use any tool of choose.

### 1. Create access token using Client ID and secret
Use POST with url {your-cms-path}/_cms/preview2/oauth/token for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/oauth/token. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

      {
        "grant_type": "client_credentials",
        "client_id": "{your client_id}",
        "client_secret": "{your client_secret}"
      }

Push "Send" to execute the request, and look at the response in the bottom. Copy the value for "access_token" and paste it somewhere temporarly, for example in notepad.
![image](https://github.com/user-attachments/assets/aab7f009-aa4d-447a-a242-bdd4687de883)

### 2. Create element using access token
We can create new content-types in CMS now when we have an access token. The access token will only be valid for 300 seconds, so you have to create a new token after 300 seconds to continue using the REST API (see "Create access token using Client ID and secret")

Use POST with url {your-cms-path}/_cms/preview2/contenttypes for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/contenttypes. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

#### Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.
![image](https://github.com/user-attachments/assets/385c3988-69a4-402e-b921-c7ac840924a6)

#### Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value
![image](https://github.com/user-attachments/assets/9e029390-78b5-4004-9419-753b4e481312)

#### Body
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

## Create style using REST API
Styles can be created using REST APIs, which editors can select in Visual Builder when creating experiances. We will create a simple style on section level.

Use POST with url {your-cms-path}/_cms/preview2/displaytemplates for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/displaytemplates. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

#### Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.
![image](https://github.com/user-attachments/assets/990e1bf2-0c24-46e5-be1d-0d5f5770ac0e)

#### Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value
![image](https://github.com/user-attachments/assets/2a250130-ac2a-49dd-b6ef-b5ab0882afc5)

#### Body
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

## Create Experience in CMS UI
We will create an experience in the CMS UI, which uses both the new element we created, as well as the new style.

### 1. Go to "Edit" and click on "..." on the Root, and click "Create Experience"
![image](https://github.com/user-attachments/assets/6d68dfaf-6370-4114-8a72-fda5679600d7)

### 2. Select a name for the experience and select "Blank Experience" as blueprint
![image](https://github.com/user-attachments/assets/2b85c394-fa27-42c1-8ad5-8400c045030e)

### 3. Click "adding a section" to add a new section in the experience
![image](https://github.com/user-attachments/assets/4a926845-15c5-48ef-ab5f-4bca79a88f1b)

### 4.  Select "Blank Section" as blueprint
![image](https://github.com/user-attachments/assets/226d3ae0-af92-491b-aba1-4317c6dbce6b)

### 5.Click "add a row" to create a new row in the section
![image](https://github.com/user-attachments/assets/74d57f60-28cf-4a26-bd71-147471fde147)

### 6. Click "add a column" to create a new column in the row
![image](https://github.com/user-attachments/assets/e14e1faf-bb20-4885-b7d9-9afb661b5969)

### 7. Click "add an element" and select "SimpleElement" in the list
![image](https://github.com/user-attachments/assets/a5d9a548-27d5-403e-9717-163c9b83230e)

### 8. Verify that you have a text editor in the element
![image](https://github.com/user-attachments/assets/da8b1501-f893-4e42-995b-d6272c45cd54)

### 9. Write "Hello World" in the text editor.
![image](https://github.com/user-attachments/assets/f0ab7818-ca90-4837-bf35-5f1083c1efc5)

### 10. Click "..." in the "New Blank Section" and select "Style"
![image](https://github.com/user-attachments/assets/126e07cb-9b50-439a-ae5d-d4922e30bf2f)

### 11. Select "Primary" color schema and check "Higlighted"
![image](https://github.com/user-attachments/assets/02488699-246a-4542-8aff-cc1358b2dba2)

### 12. Publish the page
Click the publish button in CMS to publish the experience

## Set your experience in CMS as the start page
We will registrate an application, and set the start page to our experience

### 1. Go to Applications under "Settings"
![image](https://github.com/user-attachments/assets/680d3551-5448-469e-9931-c81850728dd4)

### 2. Click "Create Application"
Select an application name and select "From Existing" under "Choose Start Page". Select your experience
![image](https://github.com/user-attachments/assets/293cf651-1e03-4503-b1f1-d0f637cfb634)

### 3. Click "Create Application"
![image](https://github.com/user-attachments/assets/5be88ecb-b7af-4576-b8b3-2c3167b58cd8)

## Create GraphQL query for the experience

### 1. Click on CMS in the top menu, and select "Optimizely Graph"
You can also browse to https://cg.optimizely.com/app/graphiql?auth={singleKey} to get the same GraphiQL UI. We have an example site that can be used if you don't have your own SaaS CMS with key nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi. Browse to url https://cg.optimizely.com/app/graphiql?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi to use that account.

![image](https://github.com/user-attachments/assets/5868659e-9ee2-4a4c-b436-8170cb4036ce)

### 2. Click on the folder icon to open "Explorer" view
![image](https://github.com/user-attachments/assets/698f81e1-85d1-4a5d-80f7-fa4d1eab5316)

### 3. Check the types in the schema
![image](https://github.com/user-attachments/assets/a9469cc4-ceed-455e-bc58-4e5bb2fee3fa)

### 4. Click on "_Experience"
![image](https://github.com/user-attachments/assets/aebd25b0-e4ea-4f32-ac91-dc9b91ffb4ac)

### 5. Click on "items" under "_Experience"
![image](https://github.com/user-attachments/assets/0f408582-343d-4087-a88f-4fdd52c4c220)

### 6. Click on "composition" under "items"
![image](https://github.com/user-attachments/assets/2cf118d0-322f-49a7-a284-5ec10a46b33d)

### 7. Click on "key" and "nodeType" under "composition"
![image](https://github.com/user-attachments/assets/9aa19b45-26f4-4af7-8c79-a222371f9aa4)

### 8. Click on the red play button to execute the query you just have created
![image](https://github.com/user-attachments/assets/2e73c059-5c12-4e2a-a42f-ccfc7b2ccce2)

### 9. Click on "nodes" under "composition"
![image](https://github.com/user-attachments/assets/a0f1e046-a847-4e22-9014-a5e2b6739610)

### 10. Click on "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/f7c130aa-348e-4204-967e-90388a3c73ec)

### 11. Click "compositionStructureNode" under "nodes" and select "nodes" followed by "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/1ed08c1d-c22f-4cc0-83e5-37bffb846ecf)

### 12. Once again click on "compositionStructureNode" under "nodes" in (11) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/b81ab3b9-927e-40a2-aaf1-6b40b754bb42)

### 13. Once again click on "compositionStructureNode" under "nodes" in (12) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/91f0845f-2a51-4f8d-8d3f-251e13eedfef)

### 14. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/d1abd531-0813-43d3-9c0e-fb0ec13158bd)

### 15. Select "CompositionElement" followed by "element" and "_metadata". Finally select "key" and "types"
![image](https://github.com/user-attachments/assets/4f0e1ac1-ff3a-4127-8be0-38ecc86cde5e)

### 16. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/3f63af0c-61ed-4f94-a8e5-5cb9f12484b5)

### 17. Select "SimpleElement" and field "TestProperty" followed by "json"
The following query should have been generated

      query MyQuery {
        _Experience {
          items {
            composition {
              key
              nodeType
              nodes {
                key
                nodeType
                ... on CompositionStructureNode {
                  nodes {
                    key
                    nodeType
                    ... on CompositionStructureNode {
                      nodes {
                        key
                        nodeType
                        ... on CompositionStructureNode {
                          nodes {
                            key
                            nodeType
                            ... on CompositionElementNode {
                              element {
                                _metadata {
                                  key
                                  types
                                }
                                ... on SimpleElement {
                                  TestProperty {
                                    json
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

![image](https://github.com/user-attachments/assets/39e7a1a9-6bce-41a0-bfdd-8329ae6c0551)

### 18. Execute the query using the red play button
The following result should be shown (correlationId will be different)

      {
        "data": {
          "_Experience": {
            "items": [
              {
                "composition": {
                  "key": "93a8be60a2414076806fc8b57f072c4a",
                  "nodeType": "experience",
                  "nodes": [
                    {
                      "key": "bf4f8dbd-47d3-4512-a1e1-896d36e0fe78",
                      "nodeType": "section",
                      "nodes": [
                        {
                          "key": "c34cef1b-003b-443d-8ddd-94d1210ee167",
                          "nodeType": "row",
                          "nodes": [
                            {
                              "key": "c20b21d4-42f1-422a-bb7b-72cf946efe37",
                              "nodeType": "column",
                              "nodes": [
                                {
                                  "key": "e2415ece-69c4-4ec4-b3fa-b1bbe0c89f9e",
                                  "nodeType": "element",
                                  "element": {
                                    "_metadata": {
                                      "key": null,
                                      "types": [
                                        "SimpleElement",
                                        "_Element",
                                        "_Component",
                                        "_Content"
                                      ]
                                    },
                                    "TestProperty": {
                                      "json": {
                                        "type": "richText",
                                        "children": [
                                          {
                                            "type": "paragraph",
                                            "children": [
                                              {
                                                "text": "Hello World!"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "extensions": {
          "correlationId": "8baacf2adb2682c1",
          "cost": 33,
          "costSummary": [
            "_Experience(33) = limit(20) + fields(13)"
          ]
        }
      }

![image](https://github.com/user-attachments/assets/55ee5008-901a-4b6f-b598-e99c092863bb)

### 19. Add styling information on all levels
Click on "displaySettings" and select "key" and "value" under the 3 "CompositionStructureNode"s that was added previously

The generated query should look like the following:

      query MyQuery {
        _Experience {
          items {
            composition {
              key
              nodeType
              nodes {
                key
                nodeType
                ... on CompositionStructureNode {
                  nodes {
                    key
                    nodeType
                    ... on CompositionStructureNode {
                      nodes {
                        key
                        nodeType
                        ... on CompositionStructureNode {
                          nodes {
                            key
                            nodeType
                            ... on CompositionElementNode {
                              element {
                                _metadata {
                                  key
                                  types
                                }
                                ... on SimpleElement {
                                  TestProperty {
                                    json
                                  }
                                }
                              }
                            }
                          }
                          displaySettings {
                            key
                            value
                          }
                        }
                      }
                      displaySettings {
                        key
                        value
                      }
                    }
                  }
                  displaySettings {
                    key
                    value
                  }
                }
              }
            }
          }
        }
      }

![image](https://github.com/user-attachments/assets/5517254e-cf36-40fe-8cc6-d4d2337a6b56)

### 20. Execute the query using the red play button
The following result should be shown (correlationId will be different)

      {
        "data": {
          "_Experience": {
            "items": [
              {
                "composition": {
                  "key": "93a8be60a2414076806fc8b57f072c4a",
                  "nodeType": "experience",
                  "nodes": [
                    {
                      "key": "bf4f8dbd-47d3-4512-a1e1-896d36e0fe78",
                      "nodeType": "section",
                      "nodes": [
                        {
                          "key": "c34cef1b-003b-443d-8ddd-94d1210ee167",
                          "nodeType": "row",
                          "nodes": [
                            {
                              "key": "c20b21d4-42f1-422a-bb7b-72cf946efe37",
                              "nodeType": "column",
                              "nodes": [
                                {
                                  "key": "e2415ece-69c4-4ec4-b3fa-b1bbe0c89f9e",
                                  "nodeType": "element",
                                  "element": {
                                    "_metadata": {
                                      "key": null,
                                      "types": [
                                        "SimpleElement",
                                        "_Element",
                                        "_Component",
                                        "_Content"
                                      ]
                                    },
                                    "TestProperty": {
                                      "json": {
                                        "type": "richText",
                                        "children": [
                                          {
                                            "type": "paragraph",
                                            "children": [
                                              {
                                                "text": "Hello World!"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              ],
                              "displaySettings": []
                            }
                          ],
                          "displaySettings": []
                        }
                      ],
                      "displaySettings": [
                        {
                          "key": "colorScheme",
                          "value": "primary"
                        },
                        {
                          "key": "highlight",
                          "value": "true"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "extensions": {
          "correlationId": "8bab2d7bfc335f10",
          "cost": 39,
          "costSummary": [
            "_Experience(39) = limit(20) + fields(19)"
          ]
        }
      }

![image](https://github.com/user-attachments/assets/f801640f-c448-4387-9ab2-925e43f618a4)

### 21. Create variables for "url" and "version"
Our query will currently return all experiences that we create in the CMS. We can make it possible to get a specific experience by adding an identifier. The identifier could be the key, or in our case the url. We will also add a variable for "version", which will make it possible for us to get "preview" in CMS to work.

#### Create where-clause using the Explorer view
Click on "where" under "_Experience" and then "_metadata", followed by "url" and then "default". Select "eq". Also select "eq" for "version" under "_metadata".
![image](https://github.com/user-attachments/assets/d58492a5-897d-45eb-9752-8d9b1cc2ba9d)

Executing the query will give us empty result, because we will try to get an experience with url equals "". We will have to go into the query textbox and do some modifications.

#### Create variables
Start the query modification by setting paranteses after "MyQuery"
![image](https://github.com/user-attachments/assets/2a043e52-927f-49e6-b8df-7558f1e6d426)

Then write the following inside the paranteses
      $url: String, $version: String
![image](https://github.com/user-attachments/assets/c17f17c2-4b00-43cc-ad76-408f1640a54a)

We have now created two variables, one for "url" and one for "version". Next thing is to use them in the query.

#### Update where-clause to use variables
Change the values for "eq" to instead use the variables
      where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
![image](https://github.com/user-attachments/assets/04e166c6-b81e-4f67-ba57-639560364e49)

#### Verify query and execute
The query should now look like the following

      query MyQuery($url: String, $version: String) {
        _Experience(
          where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
        ) {
          items {
            composition {
              key
              nodeType
              nodes {
                key
                nodeType
                ... on CompositionStructureNode {
                  nodes {
                    key
                    nodeType
                    ... on CompositionStructureNode {
                      nodes {
                        key
                        nodeType
                        ... on CompositionStructureNode {
                          nodes {
                            key
                            nodeType
                            ... on CompositionElementNode {
                              element {
                                _metadata {
                                  key
                                  types
                                }
                                ... on SimpleElement {
                                  TestProperty {
                                    json
                                  }
                                }
                              }
                            }
                          }
                          displaySettings {
                            key
                            value
                          }
                        }
                      }
                      displaySettings {
                        key
                        value
                      }
                    }
                  }
                  displaySettings {
                    key
                    value
                  }
                }
              }
            }
          }
        }
      }

Executing the query should give us all existing experiences in CMS, because we haven't used any values for the variables (the variables are null).

      {
        "data": {
          "_Experience": {
            "items": [
              {
                "composition": {
                  "key": "93a8be60a2414076806fc8b57f072c4a",
                  "nodeType": "experience",
                  "nodes": [
                    {
                      "key": "bf4f8dbd-47d3-4512-a1e1-896d36e0fe78",
                      "nodeType": "section",
                      "nodes": [
                        {
                          "key": "c34cef1b-003b-443d-8ddd-94d1210ee167",
                          "nodeType": "row",
                          "nodes": [
                            {
                              "key": "c20b21d4-42f1-422a-bb7b-72cf946efe37",
                              "nodeType": "column",
                              "nodes": [
                                {
                                  "key": "e2415ece-69c4-4ec4-b3fa-b1bbe0c89f9e",
                                  "nodeType": "element",
                                  "element": {
                                    "_metadata": {
                                      "key": null,
                                      "types": [
                                        "SimpleElement",
                                        "_Element",
                                        "_Component",
                                        "_Content"
                                      ]
                                    },
                                    "TestProperty": {
                                      "json": {
                                        "type": "richText",
                                        "children": [
                                          {
                                            "type": "paragraph",
                                            "children": [
                                              {
                                                "text": "Hello World!"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              ],
                              "displaySettings": []
                            }
                          ],
                          "displaySettings": []
                        }
                      ],
                      "displaySettings": [
                        {
                          "key": "colorScheme",
                          "value": "primary"
                        },
                        {
                          "key": "highlight",
                          "value": "true"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        },
        "extensions": {
          "correlationId": "8bab899429fe7724",
          "cost": 39,
          "costSummary": [
            "_Experience(39) = limit(20) + fields(19)"
          ]
        }
      }
![image](https://github.com/user-attachments/assets/f45689b0-044f-49c8-91d0-62bc852e4ebe)

#### Try executing query with variable value
Click on "Variables" to open the variables view
![image](https://github.com/user-attachments/assets/a8858b86-e501-44d2-bf03-8650f2de6244)

Add the following variable value

      {
        "url": "/en/demoexperience/"
      }

Try executing the query to see if you get result. You will only get result if you named your experience "demoexperience" and created it with english language. Try to modify the url value to match the name of your experience in CMS and execute again
![image](https://github.com/user-attachments/assets/fada88b9-948c-445b-bf26-be06e0e2ec41)

![image](https://github.com/user-attachments/assets/67d17479-fd35-4777-9858-b01f523b8174)

## Create a NextJs application that uses the Experience created in SaaS CMS
-

## Enable 'Preview mode'
-

## Setup webhooks
-
