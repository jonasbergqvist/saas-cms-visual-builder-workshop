import { GraphQLClient } from "graphql-request"

export const optiGraphClient = new GraphQLClient(
    process.env.GRAPH_API_URL as string
)