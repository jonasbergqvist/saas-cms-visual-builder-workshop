# 6. Create GraphQL query for the experience

## 6.1. Click on CMS in the top menu, and select "Optimizely Graph"
You can also browse to https://cg.optimizely.com/app/graphiql?auth={singleKey} to get the same GraphiQL UI. We have an example site that can be used if you don't have your own SaaS CMS with key nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi. Browse to url https://cg.optimizely.com/app/graphiql?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi to use that account.

![image](https://github.com/user-attachments/assets/5868659e-9ee2-4a4c-b436-8170cb4036ce)

## 6.2. Click on the folder icon to open "Explorer" view
![image](https://github.com/user-attachments/assets/698f81e1-85d1-4a5d-80f7-fa4d1eab5316)

## 6.3. Check the types in the schema
![image](https://github.com/user-attachments/assets/a9469cc4-ceed-455e-bc58-4e5bb2fee3fa)

## 6.4. Click on "_Experience"
![image](https://github.com/user-attachments/assets/aebd25b0-e4ea-4f32-ac91-dc9b91ffb4ac)

## 6.5. Click on "items" under "_Experience"
![image](https://github.com/user-attachments/assets/0f408582-343d-4087-a88f-4fdd52c4c220)

## 6.6. Click on "composition" under "items"
![image](https://github.com/user-attachments/assets/2cf118d0-322f-49a7-a284-5ec10a46b33d)

## 6.7. Click on "key" and "nodeType" under "composition"
![image](https://github.com/user-attachments/assets/9aa19b45-26f4-4af7-8c79-a222371f9aa4)

## 6.8. Click on the red play button to execute the query you just have created
![image](https://github.com/user-attachments/assets/2e73c059-5c12-4e2a-a42f-ccfc7b2ccce2)

## 6.9. Click on "nodes" under "composition"
![image](https://github.com/user-attachments/assets/a0f1e046-a847-4e22-9014-a5e2b6739610)

## 6.10. Click on "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/f7c130aa-348e-4204-967e-90388a3c73ec)

## 6.11. Click "compositionStructureNode" under "nodes" and select "nodes" followed by "key" and "nodeType" under "nodes"
![image](https://github.com/user-attachments/assets/1ed08c1d-c22f-4cc0-83e5-37bffb846ecf)

## 6.12. Once again click on "compositionStructureNode" under "nodes" in (11) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/b81ab3b9-927e-40a2-aaf1-6b40b754bb42)

## 6.13. Once again click on "compositionStructureNode" under "nodes" in (12) and select "nodes" followed by "key" and "nodeType" 
![image](https://github.com/user-attachments/assets/91f0845f-2a51-4f8d-8d3f-251e13eedfef)

## 6.14. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/d1abd531-0813-43d3-9c0e-fb0ec13158bd)

## 6.15. Select "CompositionElement" followed by "element" and "_metadata". Finally select "key" and "types"
![image](https://github.com/user-attachments/assets/4f0e1ac1-ff3a-4127-8be0-38ecc86cde5e)

## 6.16. Execute the query using the red play button
![image](https://github.com/user-attachments/assets/3f63af0c-61ed-4f94-a8e5-5cb9f12484b5)

## 6.17. Select "SimpleElement" and field "TestProperty" followed by "json"
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

## 6.18. Execute the query using the red play button
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

## 6.19. Add styling information on all levels
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

## 6.20. Execute the query using the red play button
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

## 6.21. Create variables for "url" and "version"
Our query will currently return all experiences that we create in the CMS. We can make it possible to get a specific experience by adding an identifier. The identifier could be the key, or in our case the url. We will also add a variable for "version", which will make it possible for us to get "preview" in CMS to work.

### 6.21.1 Create where-clause using the Explorer view
Click on "where" under "_Experience" and then "_metadata", followed by "url" and then "default". Select "eq". Also select "eq" for "version" under "_metadata".
![image](https://github.com/user-attachments/assets/d58492a5-897d-45eb-9752-8d9b1cc2ba9d)

Executing the query will give us empty result, because we will try to get an experience with url equals "". We will have to go into the query textbox and do some modifications.

### 6.21.2 Create variables
Start the query modification by setting paranteses after "MyQuery"
![image](https://github.com/user-attachments/assets/2a043e52-927f-49e6-b8df-7558f1e6d426)

Then write the following inside the paranteses
      $url: String, $version: String
![image](https://github.com/user-attachments/assets/c17f17c2-4b00-43cc-ad76-408f1640a54a)

We have now created two variables, one for "url" and one for "version". Next thing is to use them in the query.

### 6.21.3 Update where-clause to use variables
Change the values for "eq" to instead use the variables
      where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
![image](https://github.com/user-attachments/assets/04e166c6-b81e-4f67-ba57-639560364e49)

### 6.21.4 Verify query and execute
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

### 6.21.5 Try executing query with variable value
Click on "Variables" to open the variables view
![image](https://github.com/user-attachments/assets/a8858b86-e501-44d2-bf03-8650f2de6244)

Add the following variable value

      {
        "url": "/en/demoexperience/"
      }

Try executing the query to see if you get result. You will only get result if you named your experience "demoexperience" and created it with english language. Try to modify the url value to match the name of your experience in CMS and execute again
![image](https://github.com/user-attachments/assets/fada88b9-948c-445b-bf26-be06e0e2ec41)

![image](https://github.com/user-attachments/assets/67d17479-fd35-4777-9858-b01f523b8174)
