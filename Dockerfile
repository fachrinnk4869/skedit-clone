# Use a base image that includes Node.js
FROM node:18-slim

# Install expo-cli globally
# RUN npm install -g expo-cli

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN yarn add expo
RUN yarn add nativewind
RUN yarn add --dev tailwindcss@3.3.2
RUN apt-get update -y && \
    apt-get install android-tools-adb -y

# Copy the entire project into the container
COPY . .

# Expose the port Expo uses
EXPOSE 19000