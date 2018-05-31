to start backend and frontend
# backend node-express serves React files
# React is in src folder
# built by webpack before being served by node

npm run start-server        # starts node server that serves compiled files
npm start       # starts webpack and watches file changes

before:

npm start


finished scss template for responsive

side-top-bottom



TODO:

1. make a node server, so that the yelp request
is not blocked because of CORS




NOTES on webpack + node

"start-server": "webpack && node server.js"

-> this starts server but only serves the current "snapshot" build of the
src folder
-> this is good for final build (PRODUCTION MODE)

"start": "webpack-dev-server"

-> this watches files for webpack frontend compiles, but the one served by node
is not updated


SOLUTION:
for DEV mode, have 2 processes running

$ npm run dev       # "webpack-dev-server --hot"

$ npm run start-server    # "nodemon"
