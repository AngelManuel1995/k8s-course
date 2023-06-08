FROM --platform=linux/amd64 node:16
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]