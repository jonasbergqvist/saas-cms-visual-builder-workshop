# 8. Use GraphQL Codegen in NextJs app
We are going to use [GraphQL Codegen](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) to auto-generate TypeScript types and GraphQL requsts

You can use the branch the branch "step-1-nextjs-app-with-dependencies" as a starting point for this part, if you haven't completed part 7.

The branch "step-2-graphql-codegen" contains the solution for this part (8).

## 8.1. Create "codegen.ts"
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

## 8.2. Run GraphQL Codegen
Run GraphQL Codegen in a new terminal

### 8.2.1 Create new terminal
Create new terminal and make sure you are in correct folder

Click on + in the terminal to add a new terminal
![image](https://github.com/user-attachments/assets/a1a38fa8-e77e-458a-9bc5-125285e24040)

Make sure you are in correct folder in the terminal (next-js-app). Otherwise use "cd next-js-app" to get to correct folder

      cd next-js-app
      
![image](https://github.com/user-attachments/assets/1dda598f-225c-4b10-821d-71d93872e74a)

### 8.2.2 Start codegen
Write "npm run codegen" to start GraphQL Codegen. This works because we have created a script called "codegen" in the package.json

      npm run codegen

![image](https://github.com/user-attachments/assets/22fcff8c-1d26-47b7-917c-7628638c714b)

A new folder named "graphql" have been created, and some files have been auto-generated under it
![image](https://github.com/user-attachments/assets/7f007fe8-3482-4466-b611-aecd488b68b8)

GraphQL codegen will from now on auto-generate code in this folder whenever we create GraphQL queries in a TypeScript file (as long as the process npm run codegen is running).

## 8.3. Create Optimizely Graph client
We will create a small GraphQL client, which uses your Graph account

### 8.3.1 Create an environment file
Create a new file named .env in the next-js-app
![image](https://github.com/user-attachments/assets/86e2f594-5931-4db7-a8f8-80fbfbe9b75d)

Add the following in the file

      GRAPH_API_URL="https://cg.optimizely.com/content/v2?auth="

Add the singleKey at the end of the value. This is how the example account will look like

      GRAPH_API_URL="https://cg.optimizely.com/content/v2?auth=nSabkbOsWUA55R2YBSYvuGCOgfAnEqE5Zah5fTHsaKlm1kQi"

![image](https://github.com/user-attachments/assets/a0701331-11cc-4f1c-ba9f-2be14e83eb37)

Make sure to save the file

### 8.3.2 Create a TypeScript client
Create a new file called optiGraphClient.tsx in the "src" folder

![image](https://github.com/user-attachments/assets/dc8bfea9-8e77-4c29-936a-8a3e1bc281d6)

Add the following code to the file

      import { GraphQLClient } from "graphql-request"
      
      export const optiGraphClient = new GraphQLClient(
          process.env.GRAPH_API_URL as string
      )

Make sure to save the file.

### 8.3.3 Error when building
Open a new terminal
![image](https://github.com/user-attachments/assets/b8176bda-441c-49ee-822c-1210888cb1ae)

Make sure you are in the correct folder (next-js-app) and run the following

      npm run build

You will now get an error when trying to build the application. This is because we haven't added any GraphQL queries yet.
