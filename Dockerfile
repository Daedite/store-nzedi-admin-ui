#https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e
FROM node:14-alpine AS development

ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .

RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3004
# Start the app
CMD [ "yarn", "start" ]