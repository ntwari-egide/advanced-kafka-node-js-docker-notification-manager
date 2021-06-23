FROM node:12

WORKDIR /app

# Copying all dependency to our docker
COPY package*.json ./

RUN npm install

# copying all local files

COPY . .

