# Step 1: Use the official Node.js 14 base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install --production

# Step 5: Copy the rest of the application code
COPY . .

# Set an environment variable-Internal container port
ENV PORT=3000

#hardcoded 3000 in EXPOSE is just what Docker is aware of, not necessarily what your app must run on externally.
# Step 6: Expose the port the app will run on (port 3000)
EXPOSE 3000

# Step 7: Define any non-sensitive  environment variables (optional)
# ENV SOME_THING="something"

# Step 8: Command to run the application
CMD ["npm", "start"]
