to start backend and frontend

backend node-express serves React files

 React is in src folder
built by webpack before being served by node

npm run start-server        # starts node server that serves compiled files
npm start       # starts webpack and watches file changes

before:

npm start


finished scss template for responsive

side-top-bottom



TODO:

[/] make a node server, so that the yelp request
is not blocked because of CORS

[ ] fix webpack + node/nodemon to have both
reflect React and Node changes


NOTES on webpack + node

>>> "start-server": "webpack && node server.js"

-> this starts server but only serves the current "snapshot" build of the
src folder
-> have to be restarted to reflect changes

-> this is good for final build (PRODUCTION MODE)

>>> "start": "webpack-dev-server"

-> this watches files for webpack frontend compiles, but the one served by node
is not updated



SOLUTION:  FAILED MISERABLY, reverted to old one

for DEV mode, have 2 processes running

$ npm run dev       # "webpack-dev-server --hot"

$ npm run start-server    # "nodemon"



HEROKU

  232  heroku login
  234  git push heroku master
  235  heroku ps:scale web=1
  236  heroku open
  237  heroku logs --tail
  238  heroku ps:scale web=2
  239  heroku local web
  240  git add .
  242  git commit -m "heroku"
  243  git push origin master
  244  git push heroku master
  245  heroku open
  246  heroku logs -t
  247  heroku restart
