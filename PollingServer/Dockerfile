FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g nodemon \
    && npm install

COPY . .

CMD ["npm", "run", "dev"]