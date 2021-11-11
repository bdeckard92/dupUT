# Module 11 Instructor Overview: Express.js

## Overview

In this module, students will learn how to create server-side APIs using the Express.js framework. As the most widely used Node.js server framework, Express.js allows us to quickly and easily establish API routes and associated HTTP request methods.

In this week's virtual classes, you'll review setting up an Express.js application using both standard GET routes and GET routes with parameters, as well as review Express.js server basics.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic                                | Location   |
| --- | --------------------                 | ---------- |
| 1   | API endpoints and HTML routes        | 11.1, 11.3 |
| 1   | GET fetch requests                   | 11.3, 11.4 |
| 1   | Git Guide                            | N/A        |
| 2   | POST requests                        | 11.2, 11.3 |
| 2   | POST fetch requests                  | 11.3       |
| 2   | Data persistence                     | 11.4       |

## Overview of Asynchronous Material

This week in the asynchronous content, students are introduced to Express.js, which is important for the following reasons:

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

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description                                     | Key Points                                                   |
| ------ | ----------------------------------------------- | ------------------------------------------------------------ |
| 1      | Set Up Express.js Server and GET routes         | Server setup, GET requests, parameters, Heroku deployment    |
| 2      | Create data using POST routes                   | API POST endpoints, middleware, testing with Insomnia        |
| 3      | Serving a front end                             | Static HTML routes, static middleware, fetch POST requests   |
| 4      | Add Zookeeper endpoints and modularize the code | Modular routes, Express.js router, creating endpoints        |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [11.1 Virtual Class](./11.1-REQUIRED.md)

* [11.2 Virtual Class](./11.2-REQUIRED.md)

## Instructor Notes

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* Install Insomnia on your machine before class. For more information, visit the [Insomnia download page](https://insomnia.rest/download).

* Ensure that you're using the most recent version of Express.js (version 4) by running `npm show express version`.

* Each activity require that students create a new Express.js server. Students might encounter a common error with the code `EADDRINUSE`, due to the port being used. They can easily resolve this by running one of the following commands depending on their operating system:

  * macOS:

    ```bash
    killall node
    ```

  * Windows:

    ```bash
    taskkill /im node.exe
    ```

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                                 |
| --- | --- |
| Routing terminology                       | Refer students to the [Express.js documentation on routing](https://expressjs.com/en/guide/routing.html).                                   |
| `express.static` and hosting static files | Refer students to the [Express.js documentation on serving static files](https://expressjs.com/en/starter/static-files.html).                  |
| Organization of routes                    | Refer students to the [MDN Web Docs tutorial on Express.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes). |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 11 Challenge](../../01-Class-Content/11-Express/02-Challenge/README.md), students will add features to an existing Note Taker app that uses an Express.js back end. Students will implement the ability to save and retrieve note data from a JSON file using Express.js routes. Finally, students will deploy their finished product to Heroku.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Create new routes and route handlers for an Express.js back end.

* Parse parameters in server-side routes.

* Submit form data to a server.

* Implement separation of concerns for routing.

* Deploy a server-side application to the Heroku platform.

## Heads-Up

In the next module, students will work with MySQL databases. They must install MySQL Server on their machine prior to class. Be sure to provide students with the [MySQL installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) by the end of this module to minimize installation time next module.

## Resources

The following resources can help you prepare for this week's classes:

* [Express.js documentation](https://expressjs.com/en/api.html)

* [MDN Web Docs on using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

* [Node.js documentation on fs](https://nodejs.org/api/fs.html)

* [Insomnia download page](https://insomnia.rest/download)

* [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

## Algorithms

Here are the algorithms for this week:

* [01-most-songs-in-playlist](../../01-Class-Content/11-Express/03-Algorithms/01-most-songs-in-playlist)

* [02-is-perfect-square](../../01-Class-Content/11-Express/03-Algorithms/02-is-perfect-square)

* [03-array-search-2d](../../01-Class-Content/11-Express/03-Algorithms/03-array-search-2d)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
