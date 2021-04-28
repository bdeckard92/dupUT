# Module 11 Instructor Overview: Express.js

## Overview

In this week's module, students learn how to create their server-side APIs using the Express.js framework. As the most widely used Node.js server framework, Express allows students to quickly and easily establish API routes and associated HTTP request methods.

In this week's virtual classes, you'll review setting up an Express application using standard GET routes and GET routes with parameters, as well as review Express server basics.

| Day | Topic                | Location   |
| --- | -------------------- | ---------- |
| 1   | Express Routes       | 11.1       |
| 1   | Express Parameters   | 11.1       |
| 2   | POST Requests        | 11.2, 11.3 |
| 2   | Serving Static Files | 11.3       |
| 2   | Post Client          | 11.3       |

## Overview of Asynchronous Material

Why are students learning Express.js?

* Express.js is the most widely used Node.js server framework.
* Express.js allows students to quickly create routes for static assets and API endpoints.
* Express.js allows students to respond to requests using different `HTTP` methods and response codes.
* Modular routes using Express.js reinforce the concept of separation of concerns, an important concept in object-oriented programming.
* Express.js allows students to fully realize how client-side requests relate to server-side responses.

Throughout the async module this week, students will use Express.js to do the following:

* Serve static HTML files.
* Create an API to handle `GET` and `POST` requests.
* Parse parameters in server-side routes.
* Submit form data to a server.
* Implement separation of concerns for routing.
* Deploy a server-side application to the Heroku platform.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                     | Key Points                                                   |
| ------ | ----------------------------------------------- | ------------------------------------------------------------ |
| 1      | Set Up Express.js Server and GET Routes         | Server setup, `GET` requests, parameters, Heroku deployment  |
| 2      | Create Data Using POST Routes                   | API `POST` endpoints, middleware, testing with Insomnia      |
| 3      | Serving a Front End                             | Static HTML routes, static middleware, fetch `POST` requests |
| 4      | Add Zookeeper Endpoints and Modularize the Code | Modular routes, Express router, creating endpoints           |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 11.1](./11.1-REQUIRED.md)

* [Virtual Class 11.2](./11.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 11.1](./11.1-RECOMMENDED.md)

* [Virtual Class (Required) 11.2](./11.2-REQUIRED.md)

## Instructor Notes

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

* Install Insomnia on your machine before class starts with the following link: [insomnia.rest/download](https://insomnia.rest/download)

* Ensure that you are using the most recent version of Express (^4) by running `npm show express version`.

* Be sure to have Insomnia Core installed on your machine and that you are familiar with using it.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                          | Recommendation                                                                                                                                                 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Routing terminology (parameters, routes, endpoints) | Advise students to review the [Express Docs on Routing](https://expressjs.com/en/guide/routing.html)                                                           |
| `express.static` and the idea of sending HTML       | Refer students to [Express Docs on Static Middleware](https://expressjs.com/en/starter/static-files.html)                                                      |
| Organization of Routes                              | Refer students to the [MDN Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#create_the_catalog_route_module) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will add features to an existing Note Taker app that uses an Express.js back end. Students will implement the ability to save and retrieve note data from a JSON file using Express routes. Finally, students will deploy their finished product to Heroku.

[Module 11 Challenge](../../01-Class-Content/11-Express/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Create new routes and route handlers for an Express.js back end.
* Parse parameters in server-side routes.
* Submit form data to a server.
* Implement separation of concerns for routing.
* Deploy a server-side application to the Heroku platform.

## Heads-Up

* Next week, you will introduce SQL. Let the students know that they will need to install both MySQL server and the MySQL Shell before they begin Module 12.

* Be sure to install MySQL server and the MySQL Shell on your machine.

## Resources

* [Express.js Docs](https://expressjs.com/en/api.html)

* [Heroku Deployment Blog Post](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

## Algorithms

* [01-most-songs-in-playlist](../../01-Class-Content/11-Express/03-Algorithms/01-most-songs-in-playlist)

* [02-is-perfect-square](../../01-Class-Content/11-Express/03-Algorithms/02-is-perfect-square)

* [03-array-search-2d](../../01-Class-Content/11-Express/03-Algorithms/03-array-search-2d)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
