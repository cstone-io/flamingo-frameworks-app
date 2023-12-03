FROM node:18.15.0-alpine3.17

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN chown -R node:node /home/node
USER node
RUN npm i
COPY . .
CMD [ "npm", "run","dev" ]
