EukaPay Assessment Project
This is a project that consists of an Express API and a Next.js app.

Prerequisites
Make sure you have Docker installed on your machine. If you don't have it installed, you can download and install it from the official website.

Getting Started
Open your terminal and navigate to the project folder.
Navigate to the todoapi folder using the command cd todoapi.
Build and install the dependencies for the Express API by running the command docker build -t my-express-app ..
Start the Express API by running the command docker run -p 4545:4545 my-express-app.
Open a new terminal window/tab.
Navigate to the todoui folder using the command cd ../todoui.
Build and install the dependencies for the Next.js app by running the command docker build -t todo-app-nextjs ..
Start the Next.js app by running the command docker run -p 3000:3000 todo-app-nextjs.
Access the Todo app by opening your browser and going to http://localhost:3000.
That's it! You should now be able to run the Express API and the Next.js app using Docker.
