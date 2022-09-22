#!/bin/sh

echo "Starting application"
npm run migrate
./node_modules/.bin/nodemon -L ./dist/src/main.js
