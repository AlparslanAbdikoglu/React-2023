# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose a port (e.g., 80) to run the React app
EXPOSE 80

# Define the command to start the app when the container is run
CMD ["npm", "start"]
