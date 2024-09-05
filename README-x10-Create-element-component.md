# 10. Add SimpleElementComponent
Each element that we create should have one React component in out application. We only have one element right now, so we will only create one more component named 'SimpleElementComponent.tsx"

You can use the branch the branch "step-3-create-experience-component" as a starting point for this part, if you haven't completed part 9.

The branch "step-4-create-simple-element-component" contains the solution for this part (10).


## 10.1 Create 'element' folder
Create folder 'element' under 'components'

![image](https://github.com/user-attachments/assets/6b3c248a-eef7-4765-9e3e-27ceeb0e1381)

## 10.2 Create 'SimpleElementComponent.tsx'
Create a new file named 'SimpleElementComponent.tsx' under 'element' folder

![image](https://github.com/user-attachments/assets/58fdadd4-9276-40be-a8f0-55ea6637f91c)

## 10.3 Add skeleton for SimpleElementComponent.tsx

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

## 10.4 Update GraphQL query
Update GraphQL query in SaaS CMS or in browser

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

## 10.5 Add fragment
Add fragment to 'SimpleElementComponent.tsx'

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

## 10.6 Update the Html
Update the Html in 'SimpleElementComponent'

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

## 10.7 Update 'ExperienceComponent.tsx'
Update 'ExperienceComponent.tsx' to reference fragment

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

## 10.8 Update HTML
Update HTML to use 'SimpleElementComponent'

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

## 10.9 Try the application
Try the application in a browser

Go to [http://localhost:3000/](http://localhost:3000/) and check the result

![image](https://github.com/user-attachments/assets/68c4c819-9b48-45ca-a227-e8a727d08663)

## 10.10 Update TestProperty
Update 'element.TestProperty?.json' to 'element.TestProperty?.html'

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

## 10.11 Handle styles
Update grid in ExperienceComponent.tsx, to handle styles

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
