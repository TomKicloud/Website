FROM node:lts-alpine
WORKDIR /App

COPY package*.json ./
RUN npm install
EXPOSE 8081
RUN npm run serve -- --port 8081