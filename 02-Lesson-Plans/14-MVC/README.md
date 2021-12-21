# Module 14 Instructor Overview: Model-View-Controller (MVC)

## Overview

In this module, students will modularize their code using the Model-View-Controller (MVC) paradigm. Students will learn to dynamically generate HTML using Handlebars.js as the View layer, create the Controller using Express.js, and create the Model using the Sequelize ORM.

In this week's virtual classes, you'll cover Handlebars.js, including helper functions and partials, and review implementing sessions using `express-session`.

Additionally, you'll announce the upcoming group project and assign the groups during the second virtual class.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic               | Location         |
| --- | ------------------- | ---------------- |
| 1   | Rendering Content   | 14.1             |
| 1   | Helper Methods      | 14.1             |
| 1   | Git Guide           | N/A              |
| 2   | Partials            | 14.3, 14.4       |
| 2   | `express-session`   | 14.5             |
| 2   | Middleware for Authentication | 14.5 |

## Overview of Asynchronous Material

This week in the asynchronous content, students are introduced to the MVC paradigm. These skills are important for the following reasons:

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

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description                 | Key Points                                                                |
| ------ | --------------------------- | ------------------------------------------------------------------------- |
| 1      | Create the homepage view.    | Code organization, template engines                                       |
| 2      | Create the user login.       | Building views, fetch requests, leveraging existing Sequelize queries     |
| 3      | Create the single-post view. | Using session data in templates, conditional rendering                    |
| 4      | Use partials and helpers.        | Helper functions in Handlebars.js, using partials to avoid duplicate HTML |
| 5      | Create the dashboard view.   | Authenticated routes, custom middleware, templates and partials           |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [Virtual Class 14.1](./14.1-REQUIRED.md)

* [Virtual Class 14.2](./14.2-REQUIRED.md)

## Instructor Notes

* Information about the upcoming group project must be distributed during this week's second virtual class!

  * Start thinking about project groups. Assign three students per group, all around the SAME skill level.

  * Review the [project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md).

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* This unit introduces students to the template engine **Handlebars.js**. Students might not use Handlebars.js in their careers, but learning this tool will help introduce them to template engines, prepare them to work with React.js, and demonstrate the MVC framework.

* The activities for the first virtual class include hardcoded data in the `dish-routes.js` file to ease the students into using Handlebars.js. The next class will actually use Sequelize and MySQL to handle data logic on the back end. Be sure to have your MySQL server up and running, and modify the `.env.EXAMPLE` file to include your MySQL user and password information before demonstrating each activity.

* The Sessions activity is aimed at providing an **introduction** to sessions as students might encounter them in the workplace. Aim to keep your explanations simple to fit in the alloted timeframe, and remind students that on the job when they encounter similarly challenging codebases they will often have to refer to the documentation and do more research on their own.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                        | Recommendation                                                                                                                           |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Understanding why they should learn Handlebars.js | Remind students that the point of this unit is to learn the MVC pattern and template engines as a concept, not necessarily learn Handlebars.js. |
| Understanding the MVC architecture                | Refer students to the [Wikipedia page on MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller).                    |
| Passing data from the Controller to the View          | Refer students to the [Express.js documentation on template engines](http://expressjs.com/en/guide/using-template-engines.html).                   |
| Handlebars.js syntax                              | Refer students to the [npm documentation on Handlebars.js](https://www.npmjs.com/package/express-handlebars).                                             |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 14 Challenge](../../01-Class-Content/14-MVC/02-Challenge/README.md), students will build a CMS-style blog similar to a WordPress site, where developers can publish blog posts and comment on other developers’ posts as well. Students will build this site completely from scratch and deploy it to Heroku.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Structure applications using the Model-View-Controller (MVC) paradigm.

* Modularize code into separate folders for Models, View, and Controllers to enforce separation of concerns.

* Render dynamic HTML for Views using the Handlebars.js template engine.

* Implement user authentication.

* Configure Heroku to deploy an application using a MySQL database.

* Deploy a full-stack application to Heroku.

## Heads-Up

Next week, students will start working on their group projects. Before this weekend, students must be assigned into groups and be talking about project ideas within their groups.

* There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

## Resources

The following resources can help you prepare for this week's classes:

* [Project requirements](../../01-Class-Content/14-MVC/04-Supplemental/Project-Requirements.md)

* [npm documentation on Handlebars.js usage](https://www.npmjs.com/package/express-handlebars#usage)

* [npm documentation on Handlebars.js helpers](https://www.npmjs.com/package/express-handlebars#helpers)

* [Handlebars.js documentation on partials](https://handlebarsjs.com/guide/partials.html#basic-partials)

* [npm documentation on express-session](https://www.npmjs.com/package/express-session)

* [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)

## Algorithms

Here are the algorithms for this week:

* [01-common-element](../../01-Class-Content/14-MVC/03-Algorithms/01-common-element)

* [02-permutation-substring](../../01-Class-Content/14-MVC/03-Algorithms/02-permutation-substring)

* [03-concert-flyer](../../01-Class-Content/14-MVC/03-Algorithms/03-concert-flyer)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
