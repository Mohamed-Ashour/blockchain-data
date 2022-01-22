<h2 align="center">
  Blockchain API
</h2>

## Description
This is an api for providing blockchain data, using [Nest](https://nestjs.com/), TypeScript, GraphQL, Apollo Server.

I chose Nest as it have a well defined structure, and provide production ready features out of the box like dependency injection, TypeScript support, and many others.

Using [code first](https://docs.nestjs.com/graphql/quick-start#code-first) approach, enabled me to generate graphql schema automatically using Typescript class and decorators.

## Installation

```bash
$ mv .env-example .env

$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
you can find graphql playground at `http://localhost:4000/graphql`

## Test
- As nest provide dependency injection we can easily use jest or mocha and chai to implement unit testing for the following:
  - resolvers: by mocking the dependency services and making sure that they are getting called with the expected input.
  - services: by mocking it's dependencies and making sure that it return the expected output.
- We can implement integration testing by making api calls using a library like supertest and assert on the response.
- We can use a tool to provide code coverage.

## Suggestions
- we can save blockchain data in a db like mongodb for caching, server side pagination and filtering.
- we can add a logging for monitoring and alerting using a service like AWS Cloudwatch or Logstash.
- we can containerize the api for easier development and deployment setup.
- we can use a CI/CD service like github action.
- we can use a service like AWS ECS or AWS Elastic Beanstalk to deploy the API.
