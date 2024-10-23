# build stage
FROM node:16
WORKDIR /app

COPY ./ /app
RUN npm install --frozen-lockfile
RUN npm run build

# production stage
FROM nginx:stable-alpine

COPY --from=0 /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
