FROM node:18-buster-slim

WORKDIR /api

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

# Expose port 4545
EXPOSE 4545

CMD [ "npm", "run", "dev" ]
