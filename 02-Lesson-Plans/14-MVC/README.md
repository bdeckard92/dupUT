# Module 14 Instructor Overview: MVC

## Overview

In this week's module, students will modularize their code using the Model-View-Controller (MVC) paradigm. Students will learn to dynamically generate HTML using Handlebars.js as the View layer. Students will use Express.js to create the Controller and use an ORM to create the Model.

In this week's virtual classes, you'll mainly review Handlebars.js, including helper functions and partials. You will also review implementing sessions using `express-session`.

You will also announce the upcoming group project and the group members during this week's second virtual class.

| Day | Topic           | Location         |
| --- | --------------- | ---------------- |
| 1   | Ben and Jerry's | 14.1             |
| 1   | Pets or Animals | 14.1             |
| 2   | Library Books   | 14.1, 14.3, 14.4 |
| 2   | Read Books      | 14.3, 14.4       |
| 2   | Count Visits    | 14.5             |

## Overview of Asynchronous Material

Why are students learning MVC?

* Learning the MVC paradigm allows students to collaborate efficiently. One student can work on the view, while another student can work on the business logic of the application.
* The MVC design pattern encourages students to embrace the separation of concerns philosophy.
* Knowing how to create user interfaces using the MVC pattern will make students a prime candidate for employers, as the MVC model is becoming increasingly popular for web development.
* The MVC pattern will allow students to keep their business logic for the applications intact if they decide to change the view or tempesting engine.

Throughout the async module this week, students will use MVC to do the following:

* Render dynamic HTML using the Handlebars.js template engine
* Explain and implement MVC design pattern in a full-stack web application
* Configure Heroku for deployment of an application using MySQL
* Explain the interaction between the Model, View, and Controller
* Explain separation of concerns and its benefits
* Implement user authentication

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                 | Key Points                                                                |
| ------ | --- | --- |
| 1      | Create the Homepage View    | Code organization, template engines                                       |
| 2      | Create the User Login       | Building views, fetch requests, leveraging existing Sequelize queries     |
| 3      | Create the Single-Post View | Utilizing session data in templates, conditional rendering                |
| 4      | Partials and Helpers        | Helper functions in Handlebars.js, using partials to avoid duplicate HTML |
| 5      | Create the Dashboard View   | Authenticated routes, custom middleware, templates and partials           |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 14.1](./14.1-REQUIRED.md)

* [Virtual Class 14.2](./14.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 14.1](./14.1-RECOMMENDED.md)

* [Virtual Class (Required) 14.2](./14.2-REQUIRED.md)

## Instructor Notes

* Information about the upcoming group project must go out during this week's second virtual class!

  * Start thinking about project groups. This time, assign 3 students per group, all around the **same** skill level.  

  * Look over the [project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md).

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

* Instead of setting up a MySQL database for this week's activities, students will be given dummy data to use.

* Although we just finished learning Sequelize, these activities only use Express so students can focus simply on Handlebars.js and `express-session`.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                               | Recommendation                                                                                                        |
| --- | --- |
| Understanding the MVC architecture       | Refer students to the [Wikipedia article on MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) |
| Passing data from controller to the view | Refer students to the [Express Docs on Template Engines](http://expressjs.com/en/guide/using-template-engines.html)   |
| Handlebars syntax                        | Refer students to the [Handlebars.js Docs](https://www.npmjs.com/package/express-handlebars)                          |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

The student Challenge this week is to build a CMS-style blog site similar to a WordPress site, where developers can publish their blog posts and comment on other developers’ posts as well. Students build this site completely from scratch and deploy it to Heroku.

[Module 14 Challenge](../../01-Class-Content/14-mvc/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Structuring applications using the Model-View-Controller (MVC) paradigm.
* Modularizing code into separate folders for Models, View, and Controllers to enforce separation of concerns.
* Rendering dynamic HTML for views using the Handlebars.js template engine.
* Implementing user authentication.
* Configuring Heroku so that you can deploy your application using a MySQL database.
* Deploying a full-stack application to Heroku.

## Heads-Up

Next week, students will start working on their group projects. Before this weekend, students must be assigned into groups and be talking about project ideas within their groups.

## Resources

* [Project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md)

* [Express Handlebars.js docs](https://www.npmjs.com/package/express-handlebars#usage)

* [Express Handlebars.js Helpers docs](https://www.npmjs.com/package/express-handlebars#helpers)

* [Express Handlebars.js Partials docs](https://handlebarsjs.com/guide/partials.html#basic-partials)

* [Express-Session docs](https://www.npmjs.com/package/express-session)

## Algorithms

* [01-double-triple-map](../../01-Class-Content/14-MVC/03-Algorithms/01-double-triple-map)

* [02-array-intersection](../../01-Class-Content/14-MVC/03-Algorithms/02-array-intersection)

* [03-squares-of-a-sorted-array](../../01-Class-Content/14-MVC/03-Algorithms/03-squares-of-a-sorted-array)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
