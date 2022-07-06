# Dockerfile

# Build from the base image with Alpine Linux
# with Node 18 preinstalled.
FROM node:18-alpine

# Create a working directory then create a new user
# named 'node', change the ownership of the working directory
# and its files to the user 'node'
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

# Switch to the 'node' user, by default, 
# Docker uses the root user which is pretty dangerous
# since it gives privilages to whatever code we run
USER node

# Install the dependencies using Yarn
# Create a production variant
RUN yarn install --frozen-lockfile
RUN yarn build

# Expose a port and run a development version
EXPOSE 3000
CMD [ "yarn", "dev" ]