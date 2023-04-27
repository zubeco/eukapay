# EukaPay Assessment Project
### This is a project that consists of an Express API and a Next.js app.

## Prerequisites
Make sure you have Docker installed on your machine. If you don't have it installed, you can download and install it from the official website.

## Getting Started
1. Open your terminal and navigate to the project folder.
2. Navigate to the todoapi folder using the command __cd todoapi__.
3. Build and install the dependencies for the Express API by running the command __docker build -t my-express-app .__
4. Start the Express API by running the command __docker run -p 4545:4545 my-express-app__.
5. Open a new terminal window/tab.
6. Navigate to the todoui folder using the __command cd todoui__.
7. Build and install the dependencies for the Next.js app by running the command __docker build -t todo-app-nextjs .__
8. Start the Next.js app by running the command __docker run -p 3000:3000 todo-app-nextjs__.
9. Access the Todo app by opening your browser and going to http://localhost:3000.
That's it! You should now be able to run the Express API and the Next.js app using Docker.
