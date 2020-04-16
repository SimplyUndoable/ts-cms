FROM node:12

WORKDIR /api

COPY ./api/build ./api

EXPOSE 4000
CMD [ "node", "index.js" ]
