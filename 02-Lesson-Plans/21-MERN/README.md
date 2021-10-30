# Module 21 Instructor Overview: MERN

## Overview

In this module, students will use the built-in GraphQL Playground to work with GraphQL queries and mutations and implement GraphQL on both the client and server. Students will also work with **JSON Web Tokens (JWT)** as a means of handling user authentication. Finally, they'll bring together all four technologies of the MERN stack (Mongo, Express.js, React, Node.js) to build a full-stack application.

In this week's virtual classes, you'll cover GraphQL, including making queries arguments and mutations. These activities will also give students an opportunity to practice using the GraphQL Playground. You'll also review react Router, JSON Web Tokens, and the `useEffect` Hook.

| Day  | Topic              | Location   |
| ---  | ---                | ---        |
| 1    | Query Arguments    | 21.1       |
| 1    | Mutations          | 21.2       |
| 2    | React Router       | 21.4       |
| 2    | JWT Signing        | 21.2       |
| 2    | `useEffect` Hook   | Challenge  |

## Overview of Asynchronous Material

Why are students learning MERN?

* Full-stack developers are in demand for their skill set and versatility.

* MERN is a full JavaScript tech stack ideal for developing dynamic and interactive websites.

* The MERN stack uses JavaScript for every layer of the application, allowing students to be introduced to the full-stack architecture using a language they know.

* The fundamental skills learned with MERN are easily transferable to other popular stacks, including MEAN.

* GraphQL is an up-and-coming technology that solves one of the fundamental problems of REST, which is the overfetching and underfetching of data at scale.

* JSON Web Tokens provide a user-friendly introduction to validation, data security, and securely transmitting information between parties.

* React Router is a user-friendly routing library for React that allows students to implement simple, component-based declarative routing for their single-page apps.

Throughout the async module this week, students will use MERN to do the following:

* Explain the difference between GraphQL and RESTful APIs.

* Configure a proxy server for local development of a MERN application.

* Implement client-side routing using React Router.

* Build API endpoints with GraphQL in a MERN application.

* Successfully configure and deploy a MERN application to Heroku.

* Implement authentication using JWT.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                   | Key Points                                                                                          |
| ---              | ---                           | ---                                                                                                 |
| 1                | Set Up Apollo Server          | Apollo Server GraphQL library integration, type definitions, resolvers, GraphQL Playground          |
| 2                | GraphQL Mutations             | GraphQL mutations, signing and verifying JWTs                                                       |
| 3                | Integrate the Client          | Client-side React application files, using the Apollo Client library to consume the GraphQL API     |
| 4                | Using React Router            | Client-side routing, URL parameters, `useQuery` Hook                                                |
| 5                | Front-End User Authentication | Front-end authentication, use of mutations to log in and create user, queries to display login data |
| 6                |  Forms and Buttons            | Reading and writing to the Apollo Client cache, configuring a MERN app to deploy to Heroku          |

## Virtual Classes

* [Virtual Class 21.1](./21.1-REQUIRED.md)

* [Virtual Class 21.2](./21.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* It is highly recommended that prior to class, you go through each demo and activity so that you are familiar with the code and can anticipate issues that students new to GraphQL and the MERN framework may face.

* Some activities rely on the GraphQL Playground. Students do not need to install a separate tool to access this technology. To use the GraphQL Playground, simply start the app using `npm install`, `npm run seed`, and `npm start`and point to `localhost:3001/graphql` in the browser.

* Apollo Server recently migrated to Apollo Server 3. This major-version release impacts how Apollo Server interacts in an Express environment. Apollo Server 2 is currently used in the activities. For the Homework, students must **MUST** use the following script `npm install apollo-server-express@2.15.0` to follow the implementation used in class.  Alternately, students can complete the Homework using the latest version of Apollo Server. Please refer them to the [Apollo Server Docs on Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/#nodejs) and [Apollo Server Docs on Implementing Apollo Server Express with v3](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express). Note that Apollo Server 3 requires the use of `await server.start()` before calling `server.applyMiddleware`.

* The GraphQL activities and instructor demonstrations require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version.](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* For a refresher on how to use the GraphQL Playground, see the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

* The `useEffect` Hook wasn't covered in the async material; however, it's used in the Challenge. Use the class time to explain the activity and help students understand it so that they can succeed in the Challenge.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                      | Recommendation                                                                                                                                      |
| ---                                             | ---                                                                                                                                                 |
| Structure of GraphQL queries and mutations      | Refer to Lesson 1, 2, or the [GraphQL Docs on queries and mutations](https://graphql.org/learn/queries/)                                            |
| Implementing JWT authentication                 | Refer to Lesson 2 or the [JSON Web Tokens documentation introduction](https://jwt.io/introduction)                                                  |
| Optional chaining                               | Refer to the [MDN Web Docs on optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)     |
| `eslint` preflight check error in Challenge app | Add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`                                                                 |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

This week, students will take a fully functioning Google Books API search engine that was built with a RESTful API, and they'll refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

If you get an `eslint` preflight check error when running the Challenge, add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true`. The error can also be avoided by running the Challenge from the class repo to avoid conflicting `eslint` installations.

[Module 21 Challenge](../../01-Class-Content/21-MERN/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Create an Apollo Server and apply it to an Express.js server as middleware.

* Modify the existing authentication middleware to work in the context of a GraphQL API.

* Create an Apollo Provider so that requests can communicate with an Apollo server.

* Build API endpoints with GraphQL in a MERN application.

* Fetch and modify server-side data using GraphQL queries and mutations.

* Successfully configure and deploy a MERN application to Heroku.

## Heads-Up

* Next week, students will learn about state management using the React Context API. They'll also learn about the Stripe payment platform. For more information, refer to the [React documentation on the Context API](https://reactjs.org/docs/context.html) and the [Stripe Docs](https://stripe.com/docs).

## Resources

* [Apollo docs on handling arguments](https://www.apollographql.com/docs/apollo-server/data/resolvers/#handling-arguments)

* [Apollo Docs on schemas](https://www.apollographql.com/docs/apollo-server/schema/schema/)

* [GraphQL docs on mutations](https://graphql.org/learn/queries/#mutations)

* [Apollo Docs on mutation type](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-mutation-type)

* [Apollo Docs on Apollo Client](https://www.apollographql.com/docs/react/)

* [React Router Docs on Getting Started](https://reactrouter.com/web/guides/quick-start)

* [JSON Web Tokens documentation introduction](https://jwt.io/introduction/)

* [Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

* [React documentation on using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [Overreacted guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

## Algorithms

* [01-plus-one](../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02-sum-array-digits](../../01-Class-Content/21-MERN/03-Algorithms/02-sum-array-digits)

* [03-one-edit-away](../../01-Class-Content/21-MERN/03-Algorithms/03-one-edit-away)

* [04-caesar-cipher](../../01-Class-Content/21-MERN/03-Algorithms/04-caesar-cipher)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
