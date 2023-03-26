FROM node:18.14.2

RUN npm install -g @vue/cli@4.5.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN chown -R node:node .
USER node

CMD npm ci && npm run dev --hos