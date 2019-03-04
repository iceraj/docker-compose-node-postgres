FROM node:10.15.2-alpine
RUN apk update
RUN apk upgrade
RUN apk add ca-certificates && update-ca-certificates
RUN apk add --update tzdata
ENV TZ=UTC
RUN rm -rf /var/cache/apk/*
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app
RUN npm install
CMD ./scripts/start.sh
