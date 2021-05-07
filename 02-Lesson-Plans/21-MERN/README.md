# Module 21 Instructor Overview: MERN

## Overview

In this module, students will use the built-in GraphQL Playground to work with GraphQL queries and mutations and implement GraphQL on both the client and server. Students will also work with JSON Web Tokens (JWT) as a means of handling user authentication. Finally, students will bring together all four technologies of the MERN (Mongo, Express.js, React, Node.js) stack to build a full-stack application.

In this week's virtual classes, you'll cover GraphQL, including using the Apollo Server to set up `typeDefs` and `resolvers`, making queries and mutations, and utilizing GraphQL Playground. You will also go over JSON Web Tokens and the `useEffect` Hook.

| Day  | Topic              | Location   |
| ---  | ---                | ---        |
| 1    | GraphQL Schema     | 21.1       |
| 1    | JSON Web Token     | 21.2       |
| 2    | GraphQL Mutations  | 21.2       |
| 2    | GraphQL Client     | 21.3       |
| 2    | `useEffect` Hook     | Challenge  |

## Overview of Asynchronous Material 

Why are students learning MERN?

* Full-stack developers are in demand for their skillset and versatility. 

* MERN is a full-stack JavaScript framework ideal for developing dynamic and interactive websites.

* The MERN stack uses JavaScript for every layer of the application, allowing students to be introduced to the full-stack architecture using a language they know.

* The fundamental skills learned with MERN are easily transferable to other popular stacks including MEAN. 

* GraphQL is an up-and-coming technology. Students with experience in it will be able to offer employers expertise they likely don't already have in-house.

* JSON Web Tokens provides a user-friendly introduction to validation, data security, and securely transmitting information between parties. 

* React Router is a user-friendly routing library for React that allows students to implement simple, component-based declarative routing for their apps. 

Throughout the async module this week, students will use MERN to do the following:

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                   | Key Points                                                                                          |
| ---              | ---                           | ---                                                                                                 |
| 1                | Set Up Apollo Server          | Apollo Server GraphQL library integration, Type Definitions, Resolvers, GraphQL Playground          |
| 2                | GraphQL Mutations             | GraphQL mutations, Signing and verifying JWTs                                                       |
| 3                | Integrate the Client          | Client-side React application files, Using the Apollo Client library to consume the GraphQL API.    |
| 4                | Using React Router            | Client-side routing, URL parameters, `useQuery` Hook                                                  |
| 5                | Front-End User Authentication | Front-end authentication, Use of mutations to log in and create user, Queries to display login data |
| 6                |  Forms and Buttons            | Read and write to the Apollo Client cache, Configure a MERN app to deploy to Heroku                 |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 21.1](./21.1-REQUIRED.md)

* [Virtual Class 21.2](./21.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 21.1](./21.1-RECOMMENDED.md)

* [Virtual Class (Required) 21.2](./21.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp is more about being employer-ready, improving the skills they have already learned, and making their web applications more performant and efficient. Basically, students will focus on "Life after Boot Camp". 

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have. 

* For a refresher on how to use the GraphQL Playground, see the [Apollo Docs on GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/).

* The `useEffect` Hook was not covered in the async material, however, it is used in the Challenge. Use the class time to explain the activity and help students understand it so they can succeed in the Challenge.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                      | Recommendation       |
| ---                                             | ---                  |
| Structure of GraphQL Queries and Mutations      | Refer to Lesson 1, 2, or the [GraphQL Docs on Queries and Mutations](https://graphql.org/learn/queries/) |
| Implementing JWT Authentication                 | Refer to Lesson 2 or the [JWT Docs on Introduction to JSON Web Tokens](https://jwt.io/introduction) |
| Optional chaining                               | Refer to the [MDN Web Docs on Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)  |
| `eslint` preflight check error in Challenge app | Add an `.env` folder to the root of the project and add `SKIP_PREFLIGHT_CHECK=true` |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

This week, students will take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React frontend, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end.

[Module 21 Challenge](../../01-Class-Content/21-MERN/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Create an Apollo Server and apply it to an Express.js server as middleware

* Modify the existing authentication middleware to work in the context of a GraphQL API

* Create an Apollo Provider so that requests can communicate with an Apollo server

* Build API endpoints with GraphQL in a MERN application

* Use GraphQL queries and mutations to fetch and modify server-side data

* Successfully configure and deploy a MERN application to Heroku

## Heads-Up

Next week, students will learn about state management using the [React Context API](https://reactjs.org/docs/context.html). Students will also learn about the [Stripe payment platform](https://stripe.com/docs).

## Resources

* [Apollo Server Docs for Schemas](https://www.apollographql.com/docs/apollo-server/schema/schema/)

* [Apollo Server Docs on Mutation type](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-mutation-type)

* [Apollo Docs on Apollo Boost](https://www.apollographql.com/docs/react/get-started/#apollo-boost)

* [Introduction to JSON Web Tokens Docs](https://jwt.io/introduction/)

* [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) by Dan Abramov 

## Algorithms

* [01-plus-one](../../01-Class-Content/21-MERN/03-Algorithms/01-plus-one)

* [02-sum-array-digits](../../01-Class-Content/21-MERN/03-Algorithms/02-sum-array-digits)

* [03-one-edit-away](../../01-Class-Content/21-MERN/03-Algorithms/03-one-edit-away)

* [04-caesar-cipher](../../01-Class-Content/21-MERN/03-Algorithms/04-caesar-cipher)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
