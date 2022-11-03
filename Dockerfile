FROM node:16.15.0
COPY . ./
RUN npm install
RUN npm run build
CMD ["node", "server.js"]
