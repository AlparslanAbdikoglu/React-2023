# Use a base image with Node.js installed
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the app dependencies
RUN yarn install --production

# Copy the generated build files
COPY build ./build

# Expose the port your app is running on (if necessary)
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
