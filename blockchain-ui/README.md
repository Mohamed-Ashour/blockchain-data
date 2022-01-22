<h2 align="center">
  Blockchain UI
</h2>

## Description
This is a front end for the blockchain api, built using [Next.js](https://nextjs.org/), [ant design](https://ant.design/), TypeScript, and Apollo Client.

I chose Next.js because of the SEO benefits, and chose server side rendering as pages need to always use the latest data from the API, assuming data gets updated frequently. 

## Installation
```bash
$ npm install
```

## Running the app
```bash
# development
$ npm run dev

# build
$ npm run build

# production mode
$ npm run start
```

## Test
- we can use a tool like cypress for end to end testing

## Suggestions
- we can statically generate pages that their data don't change frequently.
- we can use apollo client for caching api calls with infrequent changed response. 
- we can use web sockets for getting data that get updated frequently.
- we can move any configuration variable to an .env file.
- we can containerize the app for easier development and deployment setup.
- we can use a service like AWS Amplify or Vercel to deploy this app.
