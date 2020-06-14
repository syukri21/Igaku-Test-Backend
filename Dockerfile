FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .
RUN npm i -g rimraf
RUN npm i -g glob
RUN npm i -g typescript
RUN npm install -g @nestjs/cli
RUN npm run build

CMD ["node", "dist/main"]

# FROM node:12.13-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]