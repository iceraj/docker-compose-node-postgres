PORT=3000 DBURL=postgres://postgres:postgres_password@`docker-machine ip`:5432/postgres_db ./node_modules/.bin/nodemon --inspect=0.0.0.0:9229 src/start.js
