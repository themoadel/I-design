# Use an official Node.js runtime as the base image
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Specify the command to start the app
CMD [ "npm", "start" ]