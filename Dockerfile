FROM node:carbon

ENV PORT=8080

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package.json .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "prod" ]
