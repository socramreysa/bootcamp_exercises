FROM node:alpine
RUN mkdir app
WORKDIR app
ADD ./OMDB_ReduxBack/package.json package.json
RUN npm install
ADD ./OMDB_ReduxBack/index.js index.js
ADD ./OMDB_ReduxBack/crossOrigins.js crossOrigins.js

EXPOSE 3001
