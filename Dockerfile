FROM --platform=linux/amd64 node:16.15.0
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]
