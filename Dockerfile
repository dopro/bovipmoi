# build
FROM node:16
WORKDIR /app

COPY ./ /app
RUN npm install --no-audit
RUN npm run build
RUN rm -rf node_modules
RUN rm -rf package-lock.json

# run
FROM node:16
WORKDIR /app

COPY --from=0 /app /app
RUN npm install --no-audit --production --prefer-offline
RUN npm i serve -g

CMD ["npm", "start"]
