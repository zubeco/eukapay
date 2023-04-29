# EukaPay Assessment Project
### This is a project that consists of an Express API and a Next.js app.

## Prerequisites
Make sure you have Docker installed on your machine. If you don't have it installed, you can download and install it from the official website

## Getting Started
1. Open your terminal and navigate to the project folder.
2. Build and install the dependencies for the Next.js app by running the command `docker build -t todo-app-nextjs .`
3. Start the Next.js app by running the command `docker run -d -p 3000:3000 todo-app-nextjs`
4. Access the Todo app by opening your browser and going to http://localhost:3000.

## Here are step-by-step instructions to kill a Docker container/server 

- Open a terminal window or command prompt on your local machine.
- Use the `docker ps` command to list all the running containers. This will display a list of all the containers that are currently running on your machine.
- Identify the container ID or name of the container that you want to kill from the output of the previous command
- Use the `docker kill <container ID or name>` command to kill the container. Replace `<container ID or name>` with the actual ID or name of the container that you want to kill.
- You can verify that the container has been stopped by running the `docker ps` command again. The container should no longer be listed

That's it! You should now be able to run the TODO app using Docker.

