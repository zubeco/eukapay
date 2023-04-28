FROM node:18-buster-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile --no-cache

# Copy app files
COPY . .

# Build the app
RUN yarn run build

# Copy the .next folder to the image
COPY .next .next

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
