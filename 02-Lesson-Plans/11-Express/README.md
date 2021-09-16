# Module 11 Instructor Overview: Express.js

## Overview

In this week's module, students will learn how to create server-side APIs using the Express.js framework. As the most widely used Node.js server framework, Express.js allows us to quickly and easily establish API routes and associated HTTP request methods.

In this week's virtual classes, you'll review setting up an Express.js application using both standard GET routes and GET routes with parameters, as well as review Express.js server basics.

| Day | Topic                                | Location   |
| --- | --------------------                 | ---------- |
| 1   | API Endpoints and HTML Routes        | 11.1, 11.3 |
| 1   | GET Fetch Requests                   | 11.3, 11.4 |
| 2   | POST Requests                        | 11.2, 11.3 |
| 2   | POST Fetch Requests                  | 11.3       |
| 2   | Data Persistence                     | 11.4       |

## Overview of Asynchronous Material

Why are students learning Express.js?

* Express.js is the most widely used Node.js server framework.

* Express.js allows us to quickly create routes for static assets and API endpoints.

* Express.js allows students to respond to requests using different `HTTP` methods and response codes.

* Modular routes using Express.js reinforce separation of concerns, an important concept in the Model-View-Controller (MVC) paradigm.

* Express.js allows students to fully realize how client-side requests relate to server-side responses.

Throughout the async module this week, students will use Express.js to do the following:

* Serve static HTML files.

* Create an API to handle GET and POST requests.

* Parse parameters in server-side routes.

* Submit form data to a server.

* Implement separation of concerns for routing.

* Deploy a server-side application to the Heroku platform.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                     | Key Points                                                   |
| ------ | ----------------------------------------------- | ------------------------------------------------------------ |
| 1      | Set Up Express.js Server and GET Routes         | Server setup, GET requests, parameters, Heroku deployment  |
| 2      | Create Data Using POST Routes                   | API POST endpoints, middleware, testing with Insomnia      |
| 3      | Serving a Front End                             | Static HTML routes, static middleware, fetch POST requests |
| 4      | Add Zookeeper Endpoints and Modularize the Code | Modular routes, Express.js Router, creating endpoints           |

## Virtual Classes

* [Virtual Class 11.1](./11.1-REQUIRED.md)

* [Virtual Class 11.2](./11.2-REQUIRED.md)

## Instructor Notes

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* Install Insomnia on your machine before class. For more information, visit the [Insomnia download page](https://insomnia.rest/download).

* Ensure that you're using the most recent version of Express.js (version 4) by running `npm show express version`.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                                 |
| --- | --- |
| Routing terminology                       | Refer students to the [Express.js documentation on routing](https://expressjs.com/en/guide/routing.html)                                   |
| `express.static` and hosting static files | Refer students to the [Express.js documentation on serving static files](https://expressjs.com/en/starter/static-files.html)                  |
| Organization of routes                    | Refer students to the [MDN Web Docs tutorial on Express.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

Students will add features to an existing Note Taker app that uses an Express.js back end. Students will implement the ability to save and retrieve note data from a JSON file using Express.js routes. Finally, students will deploy their finished product to Heroku.

[Module 11 Challenge](../../01-Class-Content/11-Express/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Create new routes and route handlers for an Express.js back end.

* Parse parameters in server-side routes.

* Submit form data to a server.

* Implement separation of concerns for routing.

* Deploy a server-side application to the Heroku platform.

## Heads-Up

Next week, you'll introduce SQL. Tell students that they'll need to install both the MySQL server and MySQL Shell before they begin Module 12.

Be sure to install the MySQL server and MySQL Shell on your machine.

## Resources

* [Express.js documentation](https://expressjs.com/en/api.html)

* [Full-Stack Blog guide to Heroku deployment](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

## Algorithms

* [01-most-songs-in-playlist](../../01-Class-Content/11-Express/03-Algorithms/01-most-songs-in-playlist)

* [02-is-perfect-square](../../01-Class-Content/11-Express/03-Algorithms/02-is-perfect-square)

* [03-array-search-2d](../../01-Class-Content/11-Express/03-Algorithms/03-array-search-2d)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
