# 7. Create a NextJs application with needed dependencies
We will now create a NextJs application, which will have needed dependencies for us to integrate with Optimizely Graph. We are going to use Visual Studio Code (https://code.visualstudio.com/download) in the examples, but you can also use another IDE

The branch "step-1-nextjs-app-with-dependencies" contains the solution for this part (7).

## 7.1. Start VS Code
Open "Visual Studio Code" and open a folder, in which you will create the application 
![image](https://github.com/user-attachments/assets/899b65fa-d4a5-4d6c-8617-f93647cb9b07)

## 7.2. Open a terminal
![image](https://github.com/user-attachments/assets/f47cfd81-834e-4454-b203-45fc4ed4c396)

## 7.3. Create new NextJs app
Write "npx create-next-app@latest" in the terminal and press enter
![image](https://github.com/user-attachments/assets/7fcd69ee-e3eb-40ad-9b5f-4866a950fc60)

## 7.4. Install packages
Install any needed package
![image](https://github.com/user-attachments/assets/d6a0a9fb-b08b-489b-8da7-875d52276028)

## 7.5. Select name
Select a name (next-js-app), click enter, and select the default selections for all coming questions
![image](https://github.com/user-attachments/assets/614f283f-10b3-48e8-8a02-c44d79b56a0f)

## 7.6. Go to correct folder
Write "cd next-js-app" in the terminal to go to your application
![image](https://github.com/user-attachments/assets/ef2f2ef4-9563-4bf4-ad8a-deac691647fb)

## 7.7. Start the application
Write "npm run dev" to start the application
![image](https://github.com/user-attachments/assets/a07a75a4-3c59-41cc-8037-b6b3ea52fc35)

## 7.8. Browse to the site
Browse to your application: [http://localhost:3000](http://localhost:3000/)
![image](https://github.com/user-attachments/assets/7f2f58e1-10f8-4ff5-9054-b32cc7ec95a4)

## 7.9. Modify package.json
Open file "package.json" and modify it. The file should look like this

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

Save the file after update.

## 7.10. Install dependencies
Stop the site and install packages

Click somewhere in the terminal and press controll+c. Accept terminating batch job
![image](https://github.com/user-attachments/assets/513e0a65-c6c0-4d6a-ad0f-453855c8b0e5)

Write "npm install" and click enter to install all needed dependencies
![image](https://github.com/user-attachments/assets/ddea1530-f07b-49ce-ae8f-4e9aa7a3c7b0)

Test the application by writing "npm run build" and press enter
![image](https://github.com/user-attachments/assets/45e719c0-5932-41c1-998f-4addba2ccbec)
