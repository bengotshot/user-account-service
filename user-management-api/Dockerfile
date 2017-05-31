FROM node:7.3.0
RUN mkdir -p /project/src
WORKDIR /project
COPY .babelrc /project
COPY package.json /project
RUN npm install --silent
COPY src/ /project/src
COPY test/ project/test

EXPOSE 8082

CMD [ "npm", "start" ]