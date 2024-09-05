# 7. Create a NextJs application with needed dependencies
We will now create a NextJs application, which will have needed dependencies for us to integrate with Optimizely Graph. We are going to use Visual Studio Code, which can be downloaded for free here: [https://code.visualstudio.com/download](https://code.visualstudio.com/download).

You will have to install Node.js to complete this section. You can download Node.js here: [https://nodejs.org/en/download/prebuilt-installer](https://nodejs.org/en/download/prebuilt-installer). Make sure to install Node.Js before continuing.

The branch "step-1-nextjs-app-with-dependencies" contains the solution for this part (7).

## 7.1. Start VS Code
Open "Visual Studio Code" and open a folder, in which you will create the application 

![image](https://github.com/user-attachments/assets/899b65fa-d4a5-4d6c-8617-f93647cb9b07)

## 7.2. Open a terminal
![image](https://github.com/user-attachments/assets/f47cfd81-834e-4454-b203-45fc4ed4c396)

## 7.3. Create new NextJs app
Write 

  `npx create-next-app@latest`
  
in the terminal and press enter

![image](https://github.com/user-attachments/assets/7fcd69ee-e3eb-40ad-9b5f-4866a950fc60)

### 7.3.1. Install packages
Install any needed package

![image](https://github.com/user-attachments/assets/d6a0a9fb-b08b-489b-8da7-875d52276028)

### 7.3.2. Select name
Select a name (next-js-app), click enter, and select the default selections for all coming questions

![image](https://github.com/user-attachments/assets/6daaabba-5f6c-4014-9201-af9769f8d539)

![image](https://github.com/user-attachments/assets/bbdfb5f4-641c-46c5-9d32-4fd471130947)

## 7.4. Go to correct folder
Write

  `cd next-js-app`
  
in the terminal to go to your application

![image](https://github.com/user-attachments/assets/1fc14c40-4c83-4228-85ac-6ca426d0e960)

## 7.5. Start the application
Write

  `npm run dev`
  
to start the application

![image](https://github.com/user-attachments/assets/0f975e5a-17e6-4fee-b093-9c86d197f6ce)

## 7.6. Browse to the site
Browse to your application: [http://localhost:3000](http://localhost:3000/)
![image](https://github.com/user-attachments/assets/7f2f58e1-10f8-4ff5-9054-b32cc7ec95a4)

## 7.7. Modify package.json
Open file "package.json" do the following modifications. 

### 7.7.1. Update devDependencies
Add the following packages under "devDependencies":

  `
      "@graphql-codegen/cli": "^5.0.2",
      "@graphql-codegen/client-preset": "^4.3.3",
      "@parcel/watcher": "^2.4.1",
  `

### 7.7.2. Update dependencies
Add the following packages under "dependencies":

  `
      "graphql": "^16.9.0",
      "html-react-parser": "^5.1.12",
  `

### 7.7.3. Update scripts
Add the following packages under "scripts":

  `
      "codegen": "graphql-codegen --watch",
  `

### 7.7.4. Final package.json
The file should look similar to this (versions might differ)

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

![image](https://github.com/user-attachments/assets/03f197cc-3bf2-4e4b-a4a8-d4dd70298f96)

Save the file after update.

## 7.8. Install dependencies
Stop the site and install packages

Click somewhere in the terminal and press

  `controll+c`
  
Accept terminating batch job

![image](https://github.com/user-attachments/assets/513e0a65-c6c0-4d6a-ad0f-453855c8b0e5)

Write

  `npm install`
  
and click enter to install all needed dependencies

![image](https://github.com/user-attachments/assets/f3faa899-9bfd-4255-b02e-39fc14b0de70)

Test the application by writing

  `npm run build`
  
and press enter

![image](https://github.com/user-attachments/assets/be4dace9-9da8-4fa3-9cd5-7700f46b399f)

