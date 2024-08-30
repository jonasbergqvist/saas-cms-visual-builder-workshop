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