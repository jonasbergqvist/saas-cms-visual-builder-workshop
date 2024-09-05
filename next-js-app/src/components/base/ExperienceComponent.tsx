import { graphql } from "@/graphql/gql";
import { optiGraphClient } from "@/optiGraphClient";
import { FC } from "react";
import SimpleElementComponent from "../elements/SimpleElementComponent";

export const ExperienceQuery = graphql(/* GraphQL */ `
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