import { graphql } from "@/graphql/gql";
import { optiGraphClient } from "@/optiGraphClient";
import { FC } from "react";

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
    )
}
 
export default ExperienceComponent