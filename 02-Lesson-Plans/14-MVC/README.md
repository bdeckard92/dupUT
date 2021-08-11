# Module 14 Instructor Overview: Model-View-Controller (MVC)

## Overview

In this week's module, students will modularize their code using the Model-View-Controller (MVC) paradigm. Students will learn to dynamically generate HTML using Handlebars.js as the View layer, create the Controller using Express.js, and create the Model using the Sequelize ORM.

In this week's virtual classes, you'll cover Handlebars.js, including helper functions and partials. You'll also review implementing sessions using `express-session`.

Additionally, you'll announce the upcoming group project and assign the groups during this week's second virtual class.

| Day | Topic               | Location         |
| --- | ------------------- | ---------------- |
| 1   | Rendering Content   | 14.1             |
| 1   | Helper Methods      | 14.1             |
| 2   | Handlebars.js Loops | 14.1, 14.3, 14.4 |
| 2   | Partials            | 14.3, 14.4       |
| 2   | `express-session`   | 14.5             |

## Overview of Asynchronous Material

Why are students learning MVC?

* Learning the MVC paradigm allows students to collaborate efficiently. For example, one student can work on the View while another student works on the business logic of the application.

* The MVC design pattern encourages us to embrace the separation of concerns philosophy.

* Because the MVC model is becoming increasingly popular in web development, knowing how to create user interfaces using this model will help students distinguish themselves from other candidates.

* The MVC pattern allows us to preserve the business logic for an application even if we decide to change the View or the template engine. It's important for students to understand that the MVC pattern revolves around template engines as a concept, not just a single technology like Handlebars.js.

Throughout the async module this week, students will use MVC to do the following:

* Render dynamic HTML using the Handlebars.js template engine.

* Explain and implement the MVC design pattern in a full-stack web application.

* Configure Heroku for deployment of an application using MySQL.

* Explain the interaction between the Model, View, and Controller.

* Explain separation of concerns and its benefits.

* Implement user authentication.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                 | Key Points                                                                |
| ------ | --------------------------- | ------------------------------------------------------------------------- |
| 1      | Create the Homepage View    | Code organization, template engines                                       |
| 2      | Create the User Login       | Building views, fetch requests, leveraging existing Sequelize queries     |
| 3      | Create the Single-Post View | Using session data in templates, conditional rendering                    |
| 4      | Partials and Helpers        | Helper functions in Handlebars.js, using partials to avoid duplicate HTML |
| 5      | Create the Dashboard View   | Authenticated routes, custom middleware, templates and partials           |

## Virtual Classes

* [Virtual Class 14.1](./14.1-REQUIRED.md)

* [Virtual Class 14.2](./14.2-REQUIRED.md)

## Instructor Notes

* Information about the upcoming group project must be distributed during this week's second virtual class!

  * Start thinking about project groups. Assign three students per group, all around the SAME skill level.  

  * Review the [project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md).

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* Instead of setting up a MySQL database for this week's activities, students will be given dummy data.

* Although we just finished learning Sequelize, these activities only use Express.js so that students can focus on Handlebars.js and `express-session`.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                        | Recommendation                                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Understanding why they should learn Handlebars.js | Remind students that the point of this unit is to learn the MVC pattern and template engines as a concept, not necessarily learn Handlebars.js |
| Understanding the MVC architecture                | Refer students to the [Wikipedia page on MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)                    |
| Passing data from the Controller to the View          | Refer students to the [Express.js documentation on template engines](http://expressjs.com/en/guide/using-template-engines.html)                   |
| Handlebars.js syntax                              | Refer students to the [npm documentation on Handlebars.js](https://www.npmjs.com/package/express-handlebars)                                             |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on career services, visit the [career services resources page](https://github.com/coding-boot-camp/fullstack-prework/pull/80/).

## Module Challenge

This week's Challenge is to build a CMS-style blog similar to a WordPress site, where developers can publish blog posts and comment on other developers’ posts as well. Students will build this site completely from scratch and deploy it to Heroku.

[Module 14 Challenge](../../01-Class-Content/14-MVC/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Structure applications using the Model-View-Controller (MVC) paradigm.

* Modularize code into separate folders for Models, View, and Controllers to enforce separation of concerns.

* Render dynamic HTML for Views using the Handlebars.js template engine.

* Implement user authentication.

* Configure Heroku to deploy an application using a MySQL database.

* Deploy a full-stack application to Heroku.

## Heads-Up

* Next week, students will start working on their group projects. Before this weekend, students must be assigned into groups and be talking about project ideas within their groups.

## Resources

* [Project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md)

* [npm documentation on Handlebars.js usage](https://www.npmjs.com/package/express-handlebars#usage)

* [npm documentation on Handlebars.js helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* [Handlebars.js documentation on partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

* [npm documentation on express-session](https://www.npmjs.com/package/express-session)

## Algorithms

* [01-double-triple-map](../../01-Class-Content/14-MVC/03-Algorithms/01-double-triple-map)

* [02-array-intersection](../../01-Class-Content/14-MVC/03-Algorithms/02-array-intersection)

* [03-squares-of-a-sorted-array](../../01-Class-Content/14-MVC/03-Algorithms/03-squares-of-a-sorted-array)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
