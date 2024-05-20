FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install --network-timeout 1000000
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]