FROM node:18-slim

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

COPY ["package.json", "yarn.lock",  "./"]

RUN yarn install

COPY . .

RUN yarn generate

EXPOSE 3003

CMD ["yarn", "dev"]