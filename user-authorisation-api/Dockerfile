FROM node:7.3.0
RUN mkdir -p /project/src
WORKDIR /project
COPY src/ /project/src
COPY test/ project/test
COPY package.json /project
RUN npm install --silent

EXPOSE 8081

CMD [ "npm", "start" ]