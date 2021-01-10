# Poutinify 🍟 🧀 🇨🇦

> what's better than fries, cheese, and gravy?


 This app shows the current top poutine places in Montreal on Yelp, with a Leaflet map and some Yelp data for each restaurant: average reviews, top review, photo and top review. Served by a Netlify lambda function that sends query to Yelp on page load, with some localStorage caching.

## Demo

https://poutinify.netlify.app/

## Screenshot

![poutinify v1](https://res.cloudinary.com/dvfhgkkpe/image/upload/v1606081485/lennythedev/poutinify.png)


## Tech used

- React
- Node + Express
- Webpack, Babel
- Netlify + serverless functions

## API, Libraries used

- Yelp API
- Leaflet + OpenStreetMap (open-source alternative to Google Maps)

# Getting started
## Dev

Watch both UI (webpack) and server (nodemon) changes
```
$ npm install
$ npm start
```

## Live dev server

Netlify Dev creates a server that mimics Netlify prod environment

```
netlify login
netlify link
netlify dev --live
```

## Build

Builds and deploys are triggered per commit.
To manually build:

```
$ npm run build
```

# License

[Unlicense](https://choosealicense.com/licenses/unlicense/)

# Contributing

Pull requests are welcome for any improvements or issues. 
For major changes, please open an issue first to discuss what you would like to change.
