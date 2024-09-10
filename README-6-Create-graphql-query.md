# 6. Create GraphQL query for the experience
We will create the GraphQL query to deliver the experience. The query could be used by any programming language, targeting any platform (web, native mobile, kiosk etz)

## 6.1. Open GraphiQL
Click on CMS in the top menu, and select "Optimizely Graph". 

![image](https://github.com/user-attachments/assets/fdf60ff8-9a0d-4a13-93db-1ae26acc3d30)

You can also browse to

    https://cg.optimizely.com/app/graphiql?auth={singleKey}
    
to get the same GraphiQL UI. We have an example site that can be used if you don't have your own SaaS CMS with key

    uoEeuKqiLQst3PVLfopLFkqESLlgXERvm0uvAVYSjjNMJPqi
    
Browse to url [https://cg.optimizely.com/app/graphiql?auth=uoEeuKqiLQst3PVLfopLFkqESLlgXERvm0uvAVYSjjNMJPqi](https://cg.optimizely.com/app/graphiql?auth=uoEeuKqiLQst3PVLfopLFkqESLlgXERvm0uvAVYSjjNMJPqi) to use that account.

![image](https://github.com/user-attachments/assets/4d8bc380-59d2-4b77-bc16-e6fb84fe8221)

## 6.2. Open Explorer view
Click on the folder icon to open "Explorer" view

![image](https://github.com/user-attachments/assets/19242384-0fa8-4e53-a3d9-ec55d05a037a)

## 6.3. Inspect types
Check the types in the schema. There are more types in this screenshot than you will have. Make sure you have one type named "_Experience".

![image](https://github.com/user-attachments/assets/a9469cc4-ceed-455e-bc58-4e5bb2fee3fa)

## 6.4. Query for _Experience
Click on "_Experience"

![image](https://github.com/user-attachments/assets/eeb89d0a-03bc-4095-a30a-c59d669c4867)

## 6.5. Select items
Click on "items" under "_Experience"

![image](https://github.com/user-attachments/assets/768b3ecb-b7bd-43fa-892e-a7631a29ecae)

## 6.6. Select compositions
Click on "composition" under "items"

![image](https://github.com/user-attachments/assets/50457502-c4f9-4694-b268-6f5badbcff68)

## 6.7. Select key and node type
Click on "key" and "nodeType" under "composition"

![image](https://github.com/user-attachments/assets/60e035ce-88a5-4af3-a42c-1d76d9b7c5b5)

## 6.8. Execute query
Click on the red play button to execute the query you just have created

![image](https://github.com/user-attachments/assets/535d58b5-eb26-40a1-9e3f-d3cf4396d6a3)

## 6.9. Select nodes in composition
Click on "nodes" under "composition"

![image](https://github.com/user-attachments/assets/03e9b148-72f3-45f6-9eda-d75f59c98f33)

## 6.10. Select key and node type
Click on "key" and "nodeType" under "nodes"

Execute the query

![image](https://github.com/user-attachments/assets/a7b6be06-02e3-4f53-b2b1-70f7b32900fe)

## 6.11. Select 'rows'
Click "compositionStructureNode" under "nodes" and select "nodes" followed by "key" and "nodeType" under "nodes".

Execute the query

![image](https://github.com/user-attachments/assets/4fc6dd17-94bb-40f6-a5f2-4662a1931e43)

## 6.12. Select 'columns'
Once again click on "compositionStructureNode" under "nodes", and select "nodes" followed by "key" and "nodeType" 

![image](https://github.com/user-attachments/assets/d6b2f789-b603-4a9c-a3e4-d3d48c459ce1)

## 6.13. Select elements
Once again click on "compositionStructureNode" under "nodes", and select "nodes" followed by "key" and "nodeType" 

![image](https://github.com/user-attachments/assets/481315aa-f978-4c43-98ba-77f652a855d1)

## 6.14. Execute the query
Execute the query using the red play button

![image](https://github.com/user-attachments/assets/11e9edba-fbdc-4156-8dc0-531457e34d66)

## 6.15. Select meta data for elements
Select "CompositionElement" followed by "element" and "_metadata". Finally select "key" and "types"

![image](https://github.com/user-attachments/assets/866ebb5a-f99a-49f6-b728-c2ca4349140b)

## 6.16. Execute the query
Execute the query using the red play button

![image](https://github.com/user-attachments/assets/d4660d15-e4e5-43f9-82c5-121e9d0ec8de)

## 6.17. Select simple element
Select "SimpleElement" and field "TestProperty" followed by "json".

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

![image](https://github.com/user-attachments/assets/07cbdc71-baab-4dc2-b890-538f37e24525)

## 6.18. Execute the query
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

![image](https://github.com/user-attachments/assets/90d25457-978f-4a38-b20b-51898ec542e9)

## 6.19. Add styling
Add styling information on all levels.

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

## 6.20. Execute the query
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

## 6.21. Create variables
We are going to create two variables, "url" and "version".

Our query will currently return all experiences that we create in the CMS. We can make it possible to get a specific experience by adding an identifier. The identifier could be the key, or in our case the url. We will also add a variable for "version", which will make it possible for us to get "preview" in CMS to work.

### 6.21.1 Filter content
Create where-clause using the Explorer view

Click on "where" under "_Experience" and then "_metadata", followed by "url" and then "default". Select "eq". Also select "eq" for "version" under "_metadata".

![image](https://github.com/user-attachments/assets/d58492a5-897d-45eb-9752-8d9b1cc2ba9d)

Executing the query will give us empty result, because we will try to get an experience with url equals "". We will have to go into the query textbox and do some modifications.

### 6.21.2 Add variables
Start the query modification by setting paranteses after "MyQuery"

![image](https://github.com/user-attachments/assets/2a043e52-927f-49e6-b8df-7558f1e6d426)

Then write the following inside the paranteses
      $url: String, $version: String

![image](https://github.com/user-attachments/assets/c17f17c2-4b00-43cc-ad76-408f1640a54a)

We have now created two variables, one for "url" and one for "version". Next thing is to use them in the query.

### 6.21.3 Update filter
Update where-clause to use variables

Change the values for "eq" to instead use the variables

      where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }

![image](https://github.com/user-attachments/assets/04e166c6-b81e-4f67-ba57-639560364e49)

### 6.21.4 Execute
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

### 6.21.5 Execute with values
Try executing query with variable value

Click on "Variables" to open the variables view

![image](https://github.com/user-attachments/assets/a8858b86-e501-44d2-bf03-8650f2de6244)

Add the following variable value

      {
        "url": "/en/demoexperience/"
      }

Try executing the query to see if you get result. You will only get result if you named your experience "demoexperience" and created it with english language. Try to modify the url value to match the name of your experience in CMS and execute again

![image](https://github.com/user-attachments/assets/fada88b9-948c-445b-bf26-be06e0e2ec41)

![image](https://github.com/user-attachments/assets/67d17479-fd35-4777-9858-b01f523b8174)

## 6.22. Add __typename
Its good practise to add __typename to each level in the query. Update the query to include __typename

    query MyQuery($url: String, $version: String) {
    _Experience(
      where: { _metadata: { url: { default: { eq: $url } }, version: { eq: $version } } }
    ) {
      items {
        composition {
          __typename
          key
          nodeType
          nodes {
            __typename
            key
            nodeType
            ... on CompositionStructureNode {
              nodes {
                __typename
                key
                nodeType
                ... on CompositionStructureNode {
                  nodes {
                    __typename
                    key
                    nodeType
                    ... on CompositionStructureNode {
                      nodes {
                        __typename
                        key
                        nodeType
                        ... on CompositionElementNode {
                          element {
                            __typename
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
    }}


![image](https://github.com/user-attachments/assets/000c8fa5-057e-416b-af16-b14fd4a43312)



