# Module 21 Instructor Overview: MERN

## Overview

In this module, students will use the built-in GraphQL Playground to work with GraphQL queries and mutations and implement GraphQL on both the client and server. Students will also work with **JSON Web Tokens (JWT)** as a means of handling user authentication. Finally, they'll bring together all four technologies of the MERN stack (Mongo, Express.js, React, Node.js) to build a full-stack application.

In this week's virtual classes, you'll cover GraphQL, including using the Apollo Server to set up `typeDefs` and `resolvers`, making queries and mutations, and using GraphQL Playground. You'll also review JSON Web Tokens and the `useEffect` Hook.

| Day  | Topic              | Location   |
| ---  | ---                | ---        |
| 1    | GraphQL Schema     | 21.1       |
| 1    | JSON Web Tokens    | 21.2       |
| 2    | GraphQL Mutations  | 21.2       |
| 2    | GraphQL Client     | 21.3       |
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

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                   | Key Points                                                                                          |
| ---              | ---                           | ---                                                                                                 |
| 1                | Set Up Apollo Server          | Apollo Server GraphQL library integration, type definitions, resolvers, GraphQL Playground          |
| 2                | GraphQL Mutations             | GraphQL mutations, signing and verifying JWTs                                                       |
| 3                | Integrate the Client          | Client-side React application files, using the Apollo Client library to consume the GraphQL API     |
| 4                | Using React Router            | Client-side routing, URL parameters, `useQuery` Hook                                                |
| 5                | Front-End User Authentication | Front-end authentication, use of mutations to log in and create user, queries to display login data |
| 6                |  Forms and Buttons            | Reading and writing to the Apollo Client cache, configuring a MERN app to deploy to Heroku          |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 21.1](./21.1-REQUIRED.md)

* [Virtual Class 21.2](./21.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 21.1](./21.1-RECOMMENDED.md)

* [Virtual Class (Required) 21.2](./21.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* Be sure to review the activities before class. Try to anticipate any questions that students might have. 

* For a refresher on how to use the GraphQL Playground, refer to the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

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

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

This week, students will take a fully functioning Google Books API search engine that was built with a RESTful API, and they'll refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

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

* [Apollo Docs on schemas](https://www.apollographql.com/docs/apollo-server/schema/schema/)

* [Apollo Docs on mutation type](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-mutation-type)

* [Apollo Docs on Apollo Boost](https://www.apollographql.com/docs/react/get-started/#apollo-boost)

* [JSON Web Tokens documentation introduction](https://jwt.io/introduction/)

* [React documentation on using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [Overreacted guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

## Algorithms

* [01-plus-one](../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02-sum-array-digits](../../01-Class-Content/21-MERN/03-Algorithms/02-sum-array-digits)

* [03-one-edit-away](../../01-Class-Content/21-MERN/03-Algorithms/03-one-edit-away)

* [04-caesar-cipher](../../01-Class-Content/21-MERN/03-Algorithms/04-caesar-cipher)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
