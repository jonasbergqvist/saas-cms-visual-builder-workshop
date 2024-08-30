This tutorial will guide you in creating a NextJs app, where Visual Builder in Optimizely SaaS CMS will be used

# Get a SaaS CMS Instance from Optimizely
Visual Builder is part of CMS 13, which only exist for SaaS CMS at the moment. CMS 13 will be released later for PaaS CMS. You will have to reach out to Optimizely to get a SaaS CMS instance to be able to use Visual Builder in this guide.

# Create API Client in SaaS CMS
And API Client is needed for creating content-types using REST, as well as creating styles using REST.

## 1. Got to "API Clients" in the SaaS CMS UI
Click on "admin" and look for "API Clients" under "Settings".
![image](https://github.com/user-attachments/assets/e11ca5be-f6e9-43f9-b297-f37169996206)

## 2. Add a value in "Client ID" and click "Create".
A value will now be shown in the "Client secret" textbox. Copy both the "Client ID" and "Client secret" so you can store the values temporarily, for example in notepad.
![image](https://github.com/user-attachments/assets/0bfc8c67-1d5a-4f7e-9ffb-d688077099d7)

# Create 'Element' content-type using REST API
Content-types can be created using REST APIs. We will create a content-type of type "element". Element is similar to a block, but used in Visual Builder. We are going to use [Postman](https://www.postman.com/downloads/) in this example, but you can use any tool of choose.

## 1. Create access token using Client ID and secret
Use POST with url {your-cms-path}/_cms/preview2/oauth/token for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/oauth/token. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

      {
        "grant_type": "client_credentials",
        "client_id": "{your client_id}",
        "client_secret": "{your client_secret}"
      }

Push "Send" to execute the request, and look at the response in the bottom. Copy the value for "access_token" and paste it somewhere temporarly, for example in notepad.
![image](https://github.com/user-attachments/assets/aab7f009-aa4d-447a-a242-bdd4687de883)

## 2. Create element using access token
We can create new content-types in CMS now when we have an access token. The access token will only be valid for 300 seconds, so you have to create a new token after 300 seconds to continue using the REST API (see "Create access token using Client ID and secret")

Use POST with url {your-cms-path}/_cms/preview2/contenttypes for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/contenttypes. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

### Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.
![image](https://github.com/user-attachments/assets/385c3988-69a4-402e-b921-c7ac840924a6)

### Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value
![image](https://github.com/user-attachments/assets/9e029390-78b5-4004-9419-753b4e481312)

### Body
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

# Create style using REST API
Styles can be created using REST APIs, which editors can select in Visual Builder when creating experiances. We will create a simple style on section level.

Use POST with url {your-cms-path}/_cms/preview2/displaytemplates for example https://app-ocxcjobe11znb7p003.cms.optimizely.com/_cms/preview2/displaytemplates. Add the following into the text area and change value for "client_id" and "client_secret" to the values you got in the CMS for "API Client" (see Add a value in "Client ID and click "Create")

## Authentication
Go to the "Authorization" tab. Use "Bearer Token" as Auth Type, and paste the access_token into the "Token" text area.
![image](https://github.com/user-attachments/assets/990e1bf2-0c24-46e5-be1d-0d5f5770ac0e)

## Headers
Go to "Headers" tab. Add Content-Type as Key and application/json as Value
![image](https://github.com/user-attachments/assets/2a250130-ac2a-49dd-b6ef-b5ab0882afc5)

## Body
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

# Create Experience in CMS UI
We will create an experience in the CMS UI, which uses both the new element we created, as well as the new style.

## 1. Go to "Edit" and click on "..." on the Root, and click "Create Experience"
![image](https://github.com/user-attachments/assets/6d68dfaf-6370-4114-8a72-fda5679600d7)

## 2. Select a name for the experience and select "Blank Experience" as blueprint
![image](https://github.com/user-attachments/assets/2b85c394-fa27-42c1-8ad5-8400c045030e)

## 3. Click "adding a section" to add a new section in the experience
![image](https://github.com/user-attachments/assets/4a926845-15c5-48ef-ab5f-4bca79a88f1b)

## 4.  Select "Blank Section" as blueprint
![image](https://github.com/user-attachments/assets/226d3ae0-af92-491b-aba1-4317c6dbce6b)

## 5.Click "add a row" to create a new row in the section
![image](https://github.com/user-attachments/assets/74d57f60-28cf-4a26-bd71-147471fde147)

## 6. Click "add a column" to create a new column in the row
![image](https://github.com/user-attachments/assets/e14e1faf-bb20-4885-b7d9-9afb661b5969)

## 7. Click "add an element" and select "SimpleElement" in the list
![image](https://github.com/user-attachments/assets/a5d9a548-27d5-403e-9717-163c9b83230e)

## 8. Verify that you have a text editor in the element
![image](https://github.com/user-attachments/assets/da8b1501-f893-4e42-995b-d6272c45cd54)

## 9. Write "Hello World" in the text editor.
![image](https://github.com/user-attachments/assets/f0ab7818-ca90-4837-bf35-5f1083c1efc5)

## 10. Click "..." in the "New Blank Section" and select "Style"
![image](https://github.com/user-attachments/assets/126e07cb-9b50-439a-ae5d-d4922e30bf2f)

## 11. Select "Primary" color schema and check "Higlighted"
![image](https://github.com/user-attachments/assets/02488699-246a-4542-8aff-cc1358b2dba2)

## 12. Publish the page
Click the publish button in CMS to publish the experience

# Set your experience in CMS as the start page
We will registrate an application, and set the start page to our experience

## 1. Go to Applications under "Settings"
![image](https://github.com/user-attachments/assets/680d3551-5448-469e-9931-c81850728dd4)

## 2. Click "Create Application"
Select an application name and select "From Existing" under "Choose Start Page". Select your experience
![image](https://github.com/user-attachments/assets/293cf651-1e03-4503-b1f1-d0f637cfb634)

## 3. Click "Create Application"
![image](https://github.com/user-attachments/assets/5be88ecb-b7af-4576-b8b3-2c3167b58cd8)

# Create GraphQL query for the experience

## 1. Click on CMS in the top menu, and select "Optimizely Graph"
You can also browse to https://cg.optimizely.com/app/graphiql?auth={singleKey} to get the same GraphiQL UI. We have an example site that can be used if you don't have your own SaaS CMS with key nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi. Browse to url https://cg.optimizely.com/app/graphiql?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi to use that account.

![image](https://github.com/user-attachments/assets/5868659e-9ee2-4a4c-b436-8170cb4036ce)

## 2. Click on the folder icon to open "Explorer" view
![image](https://github.com/user-attachments/assets/698f81e1-85d1-4a5d-80f7-fa4d1eab5316)

## 3. Check the types in the schema
![image](https://github.com/user-attachments/assets/a9469cc4-ceed-455e-bc58-4e5bb2fee3fa)

## 4. Click on "_Experience"
![image](https://github.com/user-attachments/assets/aebd25b0-e4ea-4f32-ac91-dc9b91ffb4ac)

## 5. Click on "items" under "_Experience"
![image](https://github.com/user-attachments/assets/0f408582-343d-4087-a88f-4fdd52c4c220)

## 6. Click on "composition" under "items"
![image](https://github.com/user-attachments/assets/2cf118d0-322f-49a7-a284-5ec10a46b33d)

## 7. Click on "key" and "nodeType" under "composition"
![image](https://github.com/user-attachments/assets/9aa19b45-26f4-4af7-8c79-a222371f9aa4)

## 8. Click on the red play button to execute the query you just have created
![image](https://github.com/user-attachments/assets/2e73c059-5c12-4e2a-a42f-ccfc7b2ccce2)

## 9. Click on "nodes" under "composition"
![image](https://github.com/user-attachments/assets/a0f1e046-a847-4e22-9014-a5e2b6739610)

## 10. Click on "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/f7c130aa-348e-4204-967e-90388a3c73ec)

## 11. Click "compositionStructureNode" under "nodes" and select "nodes" followed by "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/1ed08c1d-c22f-4cc0-83e5-37bffb846ecf)

## 12. Once again click on "compositionStructureNode" under "nodes" in (11) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/b81ab3b9-927e-40a2-aaf1-6b40b754bb42)

## 13. Once again click on "compositionStructureNode" under "nodes" in (12) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/91f0845f-2a51-4f8d-8d3f-251e13eedfef)

## 14. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/d1abd531-0813-43d3-9c0e-fb0ec13158bd)

## 15. Select "CompositionElement" followed by "element" and "_metadata". Finally select "key" and "types"
![image](https://github.com/user-attachments/assets/4f0e1ac1-ff3a-4127-8be0-38ecc86cde5e)

## 16. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/3f63af0c-61ed-4f94-a8e5-5cb9f12484b5)

## 17. Select "SimpleElement" and field "TestProperty" followed by "json"
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

## 18. Execute the query using the red play button
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

## 19. Add styling information on all levels
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

## 20. Execute the query using the red play button
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

## 21. Create variables for "url" and "version"
Our query will currently return all experiences that we create in the CMS. We can make it possible to get a specific experience by adding an identifier. The identifier could be the key, or in our case the url. We will also add a variable for "version", which will make it possible for us to get "preview" in CMS to work.

### Create where-clause using the Explorer view
Click on "where" under "_Experience" and then "_metadata", followed by "url" and then "default". Select "eq". Also select "eq" for "version" under "_metadata".
![image](https://github.com/user-attachments/assets/d58492a5-897d-45eb-9752-8d9b1cc2ba9d)

Executing the query will give us empty result, because we will try to get an experience with url equals "". We will have to go into the query textbox and do some modifications.

### Create variables
Start the query modification by setting paranteses after "MyQuery"
![image](https://github.com/user-attachments/assets/2a043e52-927f-49e6-b8df-7558f1e6d426)

Then write the following inside the paranteses
      $url: String, $version: String
![image](https://github.com/user-attachments/assets/c17f17c2-4b00-43cc-ad76-408f1640a54a)

We have now created two variables, one for "url" and one for "version". Next thing is to use them in the query.

### Update where-clause to use variables
Change the values for "eq" to instead use the variables
      where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
![image](https://github.com/user-attachments/assets/04e166c6-b81e-4f67-ba57-639560364e49)

### Verify query and execute
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

### Try executing query with variable value
Click on "Variables" to open the variables view
![image](https://github.com/user-attachments/assets/a8858b86-e501-44d2-bf03-8650f2de6244)

Add the following variable value

      {
        "url": "/en/demoexperience/"
      }

Try executing the query to see if you get result. You will only get result if you named your experience "demoexperience" and created it with english language. Try to modify the url value to match the name of your experience in CMS and execute again
![image](https://github.com/user-attachments/assets/fada88b9-948c-445b-bf26-be06e0e2ec41)

![image](https://github.com/user-attachments/assets/67d17479-fd35-4777-9858-b01f523b8174)

# Create a NextJs application with needed dependencies
We will now create a NextJs application, which will have needed dependencies for us to integrate with Optimizely Graph. We are going to use Visual Studio Code (https://code.visualstudio.com/download) in the examples, but you can also use another IDE

## 1. Open "Visual Studio Code" and open a folder, in which you will create the application 
![image](https://github.com/user-attachments/assets/899b65fa-d4a5-4d6c-8617-f93647cb9b07)

## 2. Open a terminal
![image](https://github.com/user-attachments/assets/f47cfd81-834e-4454-b203-45fc4ed4c396)

## 3. Write "npx create-next-app@latest" in the terminal and press enter
![image](https://github.com/user-attachments/assets/7fcd69ee-e3eb-40ad-9b5f-4866a950fc60)

## 4. Install any needed package
![image](https://github.com/user-attachments/assets/d6a0a9fb-b08b-489b-8da7-875d52276028)

## 5. Select a name (next-js-app), click enter, and select the default selections for all coming questions
![image](https://github.com/user-attachments/assets/614f283f-10b3-48e8-8a02-c44d79b56a0f)

## 6. Write "cd next-js-app" in the terminal to go to your application
![image](https://github.com/user-attachments/assets/ef2f2ef4-9563-4bf4-ad8a-deac691647fb)

## 7. Write "npm run dev" to start the application
![image](https://github.com/user-attachments/assets/a07a75a4-3c59-41cc-8037-b6b3ea52fc35)

## 8. Browse to your application: [http://localhost:3000](http://localhost:3000/)
![image](https://github.com/user-attachments/assets/7f2f58e1-10f8-4ff5-9054-b32cc7ec95a4)

## 9. Open file "package.json" modify it
The file should look like this

      {
        "name": "next-js-app",
        "version": "0.1.0",
        "private": true,
        "scripts": {
          "codegen": "graphql-codegen --watch",
          "dev": "next dev",
          "build": "next build",
          "start": "next start",
          "lint": "next lint"
        },
        "dependencies": {
          "graphql": "^16.9.0",
          "html-react-parser": "^5.1.12",
          "react": "^18",
          "react-dom": "^18",
          "next": "14.2.6"
        },
        "devDependencies": {
          "@graphql-codegen/cli": "^5.0.2",
          "@graphql-codegen/client-preset": "^4.3.3",
          "@parcel/watcher": "^2.4.1",
          "typescript": "^5",
          "@types/node": "^20",
          "@types/react": "^18",
          "@types/react-dom": "^18",
          "postcss": "^8",
          "tailwindcss": "^3.4.1",
          "eslint": "^8",
          "eslint-config-next": "14.2.6"
        }
      }

Save the file after update

## 10. Stop the site and install packages
Click somewhere in the terminal and press controll+c. Accept terminating batch job
![image](https://github.com/user-attachments/assets/513e0a65-c6c0-4d6a-ad0f-453855c8b0e5)

Write "npm install" and click enter to install all needed dependencies
![image](https://github.com/user-attachments/assets/ddea1530-f07b-49ce-ae8f-4e9aa7a3c7b0)

Test the application by writing "npm run build" and press enter
![image](https://github.com/user-attachments/assets/45e719c0-5932-41c1-998f-4addba2ccbec)

# Use GraphQL Codegen in NextJs app
We are going to use [GraphQL Codegen](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) to auto-generate TypeScript types and GraphQL requsts

## 1. Create "codegen.ts"
Create a new file in the root of the next-js-app named "codegen.ts"
![image](https://github.com/user-attachments/assets/511fd47a-416e-4a5f-a4b2-d4e04ae7fd8a)

![image](https://github.com/user-attachments/assets/530ecfda-6f62-4ec0-9067-2907db7c2627)

Add the following in codegen.ts

      import { CodegenConfig  } from '@graphql-codegen/cli'
      
      const config : CodegenConfig = {
          schema: "https://cg.optimizely.com/content/v2?auth=",
          documents: ["src/**/*.{ts,tsx}"],
          ignoreNoDocuments: true,
          generates: {
              './src/graphql/': {
                  preset: 'client',
                  plugins: [],
              }
          }
      }
      
      export default config

Update the value for the schema, so it contains the singleKey for your account. You can find the singleKey in the CMS dashboard.
![image](https://github.com/user-attachments/assets/3aaf7c32-ed2c-4462-8eb4-21b2ac5c2517)

The codegen.ts should look like this for the example account

      import { CodegenConfig  } from '@graphql-codegen/cli'
      
      const config : CodegenConfig = {
          schema: "https://cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi",
          documents: ["src/**/*.{ts,tsx}"],
          ignoreNoDocuments: true,
          generates: {
              './src/graphql/': {
                  preset: 'client',
                  plugins: [],
              }
          }
      }
      
      export default config

Make sure to save the file.

## 2. Run GraphQL Codegen in a new terminal

### Create new terminal and make sure you are in correct folder
Click on + in the terminal to add a new terminal
![image](https://github.com/user-attachments/assets/a1a38fa8-e77e-458a-9bc5-125285e24040)

Make sure you are in correct folder in the terminal (next-js-app). Otherwise use "cd next-js-app" to get to correct folder

      cd next-js-app
      
![image](https://github.com/user-attachments/assets/1dda598f-225c-4b10-821d-71d93872e74a)

### Start codegen
Write "npm run codegen" to start GraphQL Codegen. This works because we have created a script called "codegen" in the package.json

      npm run codegen

![image](https://github.com/user-attachments/assets/22fcff8c-1d26-47b7-917c-7628638c714b)

A new folder named "graphql" have been created, and some files have been auto-generated under it
![image](https://github.com/user-attachments/assets/7f007fe8-3482-4466-b611-aecd488b68b8)

GraphQL codegen will from now on auto-generate code in this folder whenever we create GraphQL queries in a TypeScript file (as long as the process npm run codegen is running).

## 3. Create Optimizely Graph client
We will create a small GraphQL client, which uses your Graph account

### Create an environment file
Create a new file named .env in the next-js-app
![image](https://github.com/user-attachments/assets/86e2f594-5931-4db7-a8f8-80fbfbe9b75d)

Add the following in the file

      GRAPH_API_URL="https://cg.optimizely.com/content/v2?auth="

Add the singleKey at the end of the value. This is how the example account will look like

      GRAPH_API_URL="https://cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi"

![image](https://github.com/user-attachments/assets/a0701331-11cc-4f1c-ba9f-2be14e83eb37)

Make sure to save the file

### Create a TypeScript client
Create a new file called optiGraphClient.tsx in the "src" folder
![image](https://github.com/user-attachments/assets/dc8bfea9-8e77-4c29-936a-8a3e1bc281d6)

Add the following code to the file

      import { GraphQLClient } from "graphql-request"
      
      export const optiGraphClient = new GraphQLClient(
          process.env.GRAPH_API_URL as string
      )

Make sure to save the file.

### Error when building
Open a new terminal
![image](https://github.com/user-attachments/assets/b8176bda-441c-49ee-822c-1210888cb1ae)

Make sure you are in the correct folder (next-js-app) and run the following

      npm run build

You will now get an error when trying to build the application. This is because we haven't added any GraphQL queries yet.

# Create Experience components in NextJs app
We will now create React components in the application, which will render experiences

## 1. Create a new folder under "src" called "components"
![image](https://github.com/user-attachments/assets/e9093d94-214f-4f37-be07-87eb629e8ccd)

## 2. Create a folder under "components" called "base"
![image](https://github.com/user-attachments/assets/2432903f-758d-43ee-a081-ebf1c94f1d43)

## 3. Create a new file under "base" folder called "ExperienceComponent.tsx"
![image](https://github.com/user-attachments/assets/09e264ab-7837-42df-b23e-f01b0035b3e6)

## 4. Add skeleton for ExperienceComponent.tsx
Add the following in ExperienceComponent.tsx:

      import { graphql } from "@/graphql/gql";
      import { optiGraphClient } from "@/optiGraphClient";
      import { FC } from "react";
      
      export const ExperienceQuery = graphql(/* GraphQL */ `
          
      `)
      
      interface props {
          url: string | null
          version: string | null
      }
       
      const ExperienceComponent: FC<props> = async ({ url, version }) => {
        const data = await optiGraphClient.request(ExperienceQuery, {
          url,
          version,
        });
          return (
              <></>
          )
      }
       
      export default ExperienceComponent

![image](https://github.com/user-attachments/assets/23edca7a-548e-4eed-9c76-fbf7476fd217)

This implementation is far from done. But lets go through what we have so far

### ExperienceQuery
Take the query that you created earlier (section "Create GraphQL query for the experience" and paste it into the ExperienceQuery. The ExperienceQuery should look like this

      export const ExperienceQuery = graphql(/* GraphQL */ `
          query MyQuery($url: String, $version: String) {
          _Experience(
              where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
          ) {
              items {
              _metadata { url {default hierarchical  internal base} }
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
      `)

![image](https://github.com/user-attachments/assets/f1e1b631-61df-4d29-bb5c-9ab43b64cea6)

### Verify that ExperienceQuery is working
Save the ExperienceComponent.tsx after the change, and wait a couple of seconds. GraphQL codegen is validating the query and updates the auto-generated types after verification.

It should be possible to build the project now. Verify that by runnin "npm run build" in a terminal

      npm run build

![image](https://github.com/user-attachments/assets/244be7d8-012b-4e8d-aafe-e8596d49e2fd)

### Update ExperienceComponent to loop through sections, rows, and columns
We can now use the data from Graph in our component. Lets hover over "data" constant, to see what we get from Graph
![image](https://github.com/user-attachments/assets/3a503cfe-0d42-4cdc-8b5f-526f2c6dd4b8)

The output is "MyQueryQuery", which can be confusing. This type has been auto-generated based on the query name. Lets first update the query-name in ExperienceQuery to "Experience", and save the file.

![image](https://github.com/user-attachments/assets/1b87da6f-ad80-4e75-a5f4-0275954af317)

The generated type looks much better now
![image](https://github.com/user-attachments/assets/ce3766af-df88-4cf2-814b-709d2ee9d64c)

Replace the html (<></>) with the following:

        <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
            {
            data?._Experience?.items?.map((experience) => {
              return (
                  <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                      {
                      experience?.composition?.nodes?.map((grid) => {
                          if(grid?.__typename === "CompositionStructureNode") {
                              return (
                                  <div className="relative w-full flex flex-col flex-nowrap justify-start vb:grid" data-epi-block-id={grid?.key} key={grid.key}>
                                      {
                                      grid.nodes?.map((row) => {
                                          if(row?.__typename === "CompositionStructureNode") {
                                              return (
                                                  <div className="flex-1 flex flex-row flex-nowrap justify-start vb:row" key={row.key}>
                                                      {
                                                      row.nodes?.map((column) => {
                                                          if(column?.__typename === "CompositionStructureNode") {
                                                              return (
                                                                  <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col" key={column.key}>
                                                                      {
                                                                      column.nodes?.map((node) => {
                                                                          if(node?.__typename === "CompositionElementNode") {
                                                                            switch(node?.__typename)
                                                                            {
                                                                                default:
                                                                                    return <>Not implemented exception (for {node?.__typename})</>
                                                                            }
                                                                          }
                                                                      })
                                                                      }
                                                                  </div>
                                                              )
                                                          }
                                                      })
                                                      }
                                                  </div>
                                              )
                                          }
                                      })
                                      }
                                  </div>
                              )
                          }
                          })
                      }
                  </div>
              )
            })
            }
        </div>

![image](https://github.com/user-attachments/assets/c4895e4d-7e76-4d0b-b099-57201e1d5c53)

### Replace the default NexJs HTML with the ExperienceComponent
Open page.tsx under src/app and replace all HTML with the following:

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ExperienceComponent url={null} version={null} />
    </main>

![image](https://github.com/user-attachments/assets/d1fddbcb-5462-4003-97fc-bb76c8cc1a94)

Save the file

### Try the application in a browser
The implementation is not done yet, because we are only looping through all sections, rows, and columns, to finally write a "Not implemented exception" for each element.

But lets see if we can get the "Not Implemented exception" in the website before moving on.

Write "npm run dev" in a terminal
      npm run dev

![image](https://github.com/user-attachments/assets/36286a01-f755-4679-9ceb-33e71c1ad804)

Browse to [http://localhost:3000](http://localhost:3000)

Nothing is shown, something is wrong.

### Add __typename for CompositionStructureNode:s
Open ExperienceComponent.tsx again, and go to the ExperienceQuery. Add __typename under each "CompositionStructureNode" and save the file

      export const ExperienceQuery = graphql(/* GraphQL */ `
          query Experience($url: String, $version: String) {
          _Experience(
              where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
          ) {
              items {
              _metadata { url {default hierarchical  internal base} }
              composition {
                  key
                  nodeType
                  nodes {
                  key
                  nodeType
                  ... on CompositionStructureNode {
                      __typename
                      nodes {
                      key
                      nodeType
                      ... on CompositionStructureNode {
                          __typename
                          nodes {
                          key
                          nodeType
                          ... on CompositionStructureNode {
                              __typename
                              nodes {
                              key
                              nodeType
                              ... on CompositionElementNode {
                                  __typename
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
      `)

![image](https://github.com/user-attachments/assets/0e78a960-34e8-44bb-9c7f-655f1da18c02)

Save the file, and check the browser again. It should work now
![image](https://github.com/user-attachments/assets/9cd15ac7-76e2-4453-a157-40a3088dc635)

## 5. Add SimpleElementComponent
Each element that we create should have one React component in out application. We only have one element right now, so we will only create one more component named 'SimpleElementComponent.tsx"

### Create folder 'element' under 'components'
![image](https://github.com/user-attachments/assets/6b3c248a-eef7-4765-9e3e-27ceeb0e1381)

### Create a new file named 'SimpleElementComponent.tsx' under 'element' folder
![image](https://github.com/user-attachments/assets/58fdadd4-9276-40be-a8f0-55ea6637f91c)

### Add skeleton into SimpleElementComponent.tsx

      import { FragmentType, useFragment, graphql } from '@/graphql'
       
      export const SimpleElementFragment = graphql(/* GraphQL */ `
      
      `)
       
      const SimpleElementComponent = (props: {
          element: FragmentType<typeof SimpleElementFragment>
      }) => {
          const element = useFragment(SimpleElementFragment, props.element)
          return (
              <></>
          )
      }
       
      export default SimpleElementComponent

![image](https://github.com/user-attachments/assets/a370cebe-a8f0-4829-9b4d-d87ea61045ce)

The file will contain a partial query, called fragment. We will have to do a small modification of our 'Experience' query to seperate the 'SimpleElement' part into a fragment.

### Update GraphQL query in SaaS CMS or in browser
Go to the SaaS CMS and GrapiQL, or use the direct url to [GraphiQL](https://cg.optimizely.com/app/graphiql?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi)
![image](https://github.com/user-attachments/assets/dd4805d0-edeb-4849-8cb9-a705ffae5d5b)

![image](https://github.com/user-attachments/assets/186879b8-747e-403d-9857-0740bd4ab15c)

Write the following at the top of the query window

      fragment SimpleElement on SimpleElement
      {
        TestProperty {
          json
        }
      }

![image](https://github.com/user-attachments/assets/241867f0-92b8-4097-a784-afa8db63e7c6)

Then change the main query, to reference the fragment

      fragment SimpleElement on SimpleElement
      {
        TestProperty {
          json
        }
      }
      
      query MyQuery($url: String, $version: String) {
        _Experience(
          where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
        ) {
          items {
            _metadata { url {default hierarchical  internal base} }
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
                                __typename
                                _metadata {
                                  key
                                  types
                                }
                                ... SimpleElement
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

![image](https://github.com/user-attachments/assets/21da4d82-060b-4163-8f56-ca1be1ca67c0)

Try to run the query, to see if you still get the same result
![image](https://github.com/user-attachments/assets/01ce4c99-f63d-48e9-88c2-d8638964648e)

### Add fragment to 'SimpleElementComponent.tsx'
Update 'SimpleElementFragment' in 'SimpleElementComponent.tsx' to look like this

      export const SimpleElementFragment = graphql(/* GraphQL */ `
          fragment SimpleElement on SimpleElement
          {
          TestProperty {
              json
          }
          }
      `)

![image](https://github.com/user-attachments/assets/3030fa14-3bba-460f-948e-a85b34af9cc2)

Make sure you save the file

### Update the Html in 'SimpleElementComponent'
Update the HTML to look like this

      const SimpleElementComponent = (props: {
          element: FragmentType<typeof SimpleElementFragment>
      }) => {
          const element = useFragment(SimpleElementFragment, props.element)
          return (
              <div>{element.TestProperty?.json}</div>
          )
      }

![image](https://github.com/user-attachments/assets/467e0f0f-6a9c-42f0-abb4-9075003f55d5)

Save the file

### Update 'ExperienceComponent.tsx' to reference fragment
Upen 'ExperienceComponent.tsx' and do the same change of the query that you did in 'Update GraphQL query in SaaS CMS or in browser'
     
      export const ExperienceQuery = graphql(/* GraphQL */ `
          query Experience($url: String, $version: String) {
          _Experience(
              where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
          ) {
              items {
              _metadata { url {default hierarchical  internal base} }
              composition {
                  key
                  nodeType
                  nodes {
                  key
                  nodeType
                  ... on CompositionStructureNode {
                      __typename
                      nodes {
                      key
                      nodeType
                      ... on CompositionStructureNode {
                          __typename
                          nodes {
                          key
                          nodeType
                          ... on CompositionStructureNode {
                              __typename
                              nodes {
                              key
                              nodeType
                              ... on CompositionElementNode {
                                  __typename
                                  element {
                                        __typename
                                        _metadata {
                                            key
                                            types
                                        }
                                      ... SimpleElement
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
      `)

![image](https://github.com/user-attachments/assets/41587454-7fc6-42b4-bd2a-413f4b51c34f)

### Update HTML to use 'SimpleElementComponent'
Update the switch to look like the following

    switch(node?.element?.__typename)
    {
        case "SimpleElement":
            return <SimpleElementComponent element={node.element} />
        default:
            return <>Not implemented exception (for {node?.__typename})</>
    }

![image](https://github.com/user-attachments/assets/eec57774-9cb6-4875-a7e6-eb7d2348ab55)

The 'ExperienceComponent.tsx' should now look like:

      import { graphql } from "@/graphql/gql";
      import { optiGraphClient } from "@/optiGraphClient";
      import { FC } from "react";
      import SimpleElementComponent from "../elements/SimpleElementComponent";
      
      export const ExperienceQuery = graphql(/* GraphQL */ `
          query Experience($url: String, $version: String) {
          _Experience(
              where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
          ) {
              items {
              _metadata { url {default hierarchical  internal base} }
              composition {
                  key
                  nodeType
                  nodes {
                  key
                  nodeType
                  ... on CompositionStructureNode {
                      __typename
                      nodes {
                      key
                      nodeType
                      ... on CompositionStructureNode {
                          __typename
                          nodes {
                          key
                          nodeType
                          ... on CompositionStructureNode {
                              __typename
                              nodes {
                              key
                              nodeType
                              ... on CompositionElementNode {
                                  __typename
                                  element {
                                  _metadata {
                                      key
                                      types
                                  }
                                      ... SimpleElement
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
      `)
      
      interface props {
          url: string | null
          version: string | null
      }
       
      const ExperienceComponent: FC<props> = async ({ url, version }) => {
        const data = await optiGraphClient.request(ExperienceQuery, {
          url,
          version,
        });
          return (
              <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                  {
                  data?._Experience?.items?.map((experience) => {
                    return (
                        <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                            {
                            experience?.composition?.nodes?.map((grid) => {
                                if(grid?.__typename === "CompositionStructureNode") {
                                    return (
                                        <div className="relative w-full flex flex-col flex-nowrap justify-start vb:grid" data-epi-block-id={grid?.key} key={grid.key}>
                                            {
                                            grid.nodes?.map((row) => {
                                                if(row?.__typename === "CompositionStructureNode") {
                                                    return (
                                                        <div className="flex-1 flex flex-row flex-nowrap justify-start vb:row" key={row.key}>
                                                            {
                                                            row.nodes?.map((column) => {
                                                                if(column?.__typename === "CompositionStructureNode") {
                                                                    return (
                                                                        <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col" key={column.key}>
                                                                            {
                                                                            column.nodes?.map((node) => {
                                                                                if(node?.__typename === "CompositionElementNode") {
                                                                                  switch(node?.element?.__typename)
                                                                                  {
                                                                                      case "SimpleElement":
                                                                                          return <SimpleElementComponent element={node.element} />
                                                                                      default:
                                                                                          return <>Not implemented exception (for {node?.__typename})</>
                                                                                  }
                                                                                }
                                                                            })
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                            }
                                                        </div>
                                                    )
                                                }
                                            })
                                            }
                                        </div>
                                    )
                                }
                                })
                            }
                        </div>
                    )
                  })
                  }
              </div>
          )
      }
       
      export default ExperienceComponent

Save the file.

### Try the application in a browser
Go to [http://localhost:3000/](http://localhost:3000/) and check the result

![image](https://github.com/user-attachments/assets/68c4c819-9b48-45ca-a227-e8a727d08663)

### Update 'element.TestProperty?.json' to 'element.TestProperty?.html'
The 'element.TestProperty?.json' can't be handled directly. Lets make a simple change to use html from the XhtmlString instead

      import { FragmentType, useFragment, graphql } from '@/graphql'
       
      export const SimpleElementFragment = graphql(/* GraphQL */ `
          fragment SimpleElement on SimpleElement
          {
              TestProperty {
                  html
              }
          }
      `)
       
      const SimpleElementComponent = (props: {
          element: FragmentType<typeof SimpleElementFragment>
      }) => {
          const element = useFragment(SimpleElementFragment, props.element)
          return (
              <div>{element.TestProperty?.html}</div>
          )
      }
       
      export default SimpleElementComponent

![image](https://github.com/user-attachments/assets/b1240cc1-bf5d-4e45-8685-4c6c28a99e5b)

We can also handle the HTML from the property by using the library 'html-react-parser'.

      import { FragmentType, useFragment, graphql } from '@/graphql'
      import parse from 'html-react-parser';
      
      export const SimpleElementFragment = graphql(/* GraphQL */ `
          fragment SimpleElement on SimpleElement
          {
              TestProperty {
                  html
              }
          }
      `)
       
      const SimpleElementComponent = (props: {
          element: FragmentType<typeof SimpleElementFragment>
      }) => {
          const element = useFragment(SimpleElementFragment, props.element)
          return (
              <div>{parse(element.TestProperty?.html ?? '')}</div>
          )
      }
       
      export default SimpleElementComponent

![image](https://github.com/user-attachments/assets/bb6aacfc-0c45-4622-be94-5f0146b323c6)

Save the file, and check the result

![image](https://github.com/user-attachments/assets/c769ea0d-f036-4a93-a7c4-041fe66b04a8)

### Update grid in ExperienceComponent.tsx, to handle styles
Open ExperienceComponent.tsx and add the following function

    function getGridClassName(displaySettings: CompositionDisplaySetting[]): string {
        let className = "relative w-full flex flex-col flex-nowrap justify-start vb:grid ";

        displaySettings.forEach((displaySetting) => {
            if(displaySetting.key === "colorScheme") {
                switch(displaySetting.value)
                {
                    case "primary":
                        className += "bg-sky-200 "
                        break;
                    case "secondary":
                        className += "bg-sky-800 "
                        break;
                    default:
                        className += " "
                }
            } else if(displaySetting.key === "highlight" && displaySetting.value === "true") {
                className += "text-4xl "
            }
        });
    
        return className
    }

Use the method from the HTML, to handle sections / grids

      <div className={getGridClassName(grid?.displaySettings as CompositionDisplaySetting[])} data-epi-block-id={grid?.key} key={grid.key}>

The file should look like the following after the change

      import { graphql } from "@/graphql/gql";
      import { optiGraphClient } from "@/optiGraphClient";
      import { FC } from "react";
      import SimpleElementComponent from "../elements/SimpleElementComponent";
      import { CompositionDisplaySetting } from "@/graphql/graphql";
      
      export const ExperienceQuery = graphql(/* GraphQL */ `
          query Experience($url: String, $version: String) {
          _Experience(
              where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
          ) {
              items {
              _metadata { url {default hierarchical  internal base} }
              composition {
                  key
                  nodeType
                  nodes {
                  key
                  nodeType
                  ... on CompositionStructureNode {
                      __typename
                      nodes {
                      key
                      nodeType
                      ... on CompositionStructureNode {
                          __typename
                          nodes {
                          key
                          nodeType
                          ... on CompositionStructureNode {
                              __typename
                              nodes {
                              key
                              nodeType
                              ... on CompositionElementNode {
                                  __typename
                                  element {
                                      __typename
                                      _metadata {
                                          key
                                          types
                                      }
                                      ... SimpleElement
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
      `)
      
      interface props {
          url: string | null
          version: string | null
      }
       
      const ExperienceComponent: FC<props> = async ({ url, version }) => {
      
          function getGridClassName(displaySettings: CompositionDisplaySetting[]): string {
              let className = "relative w-full flex flex-col flex-nowrap justify-start vb:grid ";
      
              displaySettings.forEach((displaySetting) => {
                  if(displaySetting.key === "colorScheme") {
                      switch(displaySetting.value)
                      {
                          case "primary":
                              className += "bg-sky-200 "
                              break;
                          case "secondary":
                              className += "bg-sky-800 "
                              break;
                          default:
                              className += " "
                      }
                  } else if(displaySetting.key === "highlight" && displaySetting.value === "true") {
                      className += "text-4xl "
                  }
              });
          
              return className
          }
      
          const data = await optiGraphClient.request(ExperienceQuery, {
          url,
          version,
          });
      
          return (
              <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                  {
                  data?._Experience?.items?.map((experience) => {
                    return (
                        <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                            {
                            experience?.composition?.nodes?.map((grid) => {
                                if(grid?.__typename === "CompositionStructureNode") {
                                    return (
                                        <div className={getGridClassName(grid?.displaySettings as CompositionDisplaySetting[])} data-epi-block-id={grid?.key} key={grid.key}>
                                            {
                                              grid.nodes?.map((row) => {
                                                if(row?.__typename === "CompositionStructureNode") {
                                                    return (
                                                        <div className="flex-1 flex flex-row flex-nowrap justify-start vb:row" key={row.key}>
                                                            {
                                                            row.nodes?.map((column) => {
                                                                if(column?.__typename === "CompositionStructureNode") {
                                                                    return (
                                                                        <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col" key={column.key}>
                                                                            {
                                                                            column.nodes?.map((node) => {
                                                                                if(node?.__typename === "CompositionElementNode") {
                                                                                  switch(node?.element?.__typename)
                                                                                  {
                                                                                      case "SimpleElement":
                                                                                          return <SimpleElementComponent element={node.element} />
                                                                                      default:
                                                                                          return <>Not implemented exception (for {node?.__typename})</>
                                                                                  }
                                                                                }
                                                                            })
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                            }
                                                        </div>
                                                    )
                                                }
                                            })
                                            }
                                        </div>
                                    )
                                }
                                })
                            }
                        </div>
                    )
                  })
                  }
              </div>
          )
      }
       
      export default ExperienceComponent

![image](https://github.com/user-attachments/assets/70bed300-13e1-470a-bd97-68ce17ce957b)

Save the file. You can now try to change the style in CMS for the section, and reload the page

![image](https://github.com/user-attachments/assets/953b516e-7eb4-4353-b9b8-bf3c0caff11e)

![image](https://github.com/user-attachments/assets/cf65fb90-c048-4894-a4dc-df1c7f683a6e)

![image](https://github.com/user-attachments/assets/e0df6d44-353e-4a83-9fb9-a3cccf48d2f3)

![image](https://github.com/user-attachments/assets/1aa1d9c6-1a6d-4ef8-b5ee-2db1bfa4a755)
