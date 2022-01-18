# Module 13 Instructor Overview: Object-Relational Mapping (ORM)

## Overview

In this module, students learn about **object-relational mapping (ORM)**, a technique that allows developers to convert data between incompatible type systems using object-oriented programming principles.

In this week's virtual classes, you'll review Sequelize query methods, CRUD methods, and associations.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic                        | Location   |
| --- | ---------------------------- | ---------- |
| 1   | Sequelize Models             | 13.1       |
| 1   | Create/Read Methods          | 13.1       |
| 1   | Git Guide                    | N/A        |
| 2   | Update/Delete Methods        | 13.1       |
| 2   | One-to-One Associations      | 13.3       |
| 2   | Many-to-Many Associations    | 13.4, 13.5 |

## Overview of Asynchronous Material

This week in the asynchronous content, students are introduced to object-relational mapping. These skills are important for the following reasons:

* ORM allows us to interact with databases using a preferred language.

* It also enables us to create relationships between data with relative ease.

* ORM allows students to interface with different kinds of databases using a single interface.

* It enables us to write lots of complex CRUD operations that would be tedious using plain SQL.

* ORM allows students to work with data in plain JavaScript objects.

* ORM allows students to translate code into database schemas and queries using SQL.

Throughout the async module this week, students will use ORM to do the following:

* Implement the Sequelize ORM in a Node.js application.

* Define models that use data type validations.

* Implement CRUD methods using Sequelize.

* Implement Sequelize associations to join one or more tables.

* Configure Heroku for the deployment of an application using Sequelize and MySQL.

* Use the `bcrypt` package to hash password information and use environment variables to protect sensitive data.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description                                   | Key Points |
| ------ | --- | --- |
| 1      | Set up a user model                           | Sequelize setup, environment variables, creating models, CRUD API routes                           |
| 2      | Create the login route                        | Hashing passwords, Sequelize hooks, `async/await`, user authentication                            |
| 3      | Create a POST model                           | Model associations, `include` statements, creating API endpoints for CRUD                           |
| 4      | Implement a voting system                     | Creating models, many-to-many relationships, POST routes, refactoring                             |
| 5      | Create the comment model and deploy to Heroku | Double `belongsTo` associations, `hasMany` associations, creating route handlers, Heroku deployment |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [13.1 Virtual Class](./13.1-REQUIRED.md)

* [13.2 Virtual Class](./13.2-REQUIRED.md)

## Instructor Notes

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* You will use MySQL in all of the activities for this module, so be sure to have your MySQL server up and running. You can create the databases listed in each activity ahead of time, or you can prepare to demonstrate it live in class.

* The `02-Create-Read` and `03-Update-Delete` activities include a `/seed` POST route simply to make it easier to quickly populate the database with books. For the other activities, don't forget to run `node seeds/seed.js` before each demo or activity review, to seed the database. Remind students of the seed file too.

* Instead of relying on a front end, all of the activities will use Insomnia to test the routes. Be sure to have it installed and set up for class.

* It is crucial that you do NOT go too in depth. Although many components make Sequelize work, much of it is boilerplate that doesn't need detailed explanation.

* This is tough stuff! Tell students not to feel discouraged if they struggle to fully comprehend some concepts. Encourage them to try their best but to speak with you or a TA if they're unsure of anything.

* Remind students to complete the Midpoint Survey coming up. Clarify that this survey is NOT about the current module but is about the entire course until this point! It’s important that they're aware of this in advance and that they take their time to complete the survey. This will ultimately help us understand how we can improve the program, curriculum, instruction, and support!

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                   | Recommendation |
| --- | --- |
| Navigating technical documentation | Encourage students to leverage external resources like Stack Overflow or Google for information regarding Sequelize.                     |
| Connecting to databases      | Refer students to the [Sequelize documentation on connecting to a database](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database). |
| Understanding associations   | Refer students to the [Sequelize documentation on associations](https://sequelize.org/master/manual/assocs.html).                                 |
| Data types with models       | Refer students to the [Sequelize documentation on model basics](https://sequelize.org/master/manual/model-basics.html).                           |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information about career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 13 Challenge](../../01-Class-Content/13-ORM/02-Challenge/README.md), students will build the back end for an e-commerce site, starting with a working Express.js API. They will also configure the application to use Sequelize to interact with a MySQL database.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Initialize environment variables.

* Connect to databases using Sequelize.

* Seed databases.

* Create models in Sequelize and sync them to a MySQL database.

* Build API endpoints and return JSON data to the client.

* Test GET, POST, PUT, and DELETE routes using Insomnia.

* Implement logic in route handlers to execute CRUD operations.

## Heads-Up

Next week, students will combine everything they've learned so far to create their first full-stack application&mdash;with Handlebars.js, MVC architecture, and front-end authentication.

At the end of next week, you'll divide students into groups for their second group project. Groups of three are ideal. Create one or two groups of four if the class cannot be divided by three. Structure groups so that they include students all at the same skill level.

## Resources

The following resources can help you prepare for this week's classes:

* [Sequelize documentation on model basics](https://sequelize.org/master/manual/model-basics.html)

* [Sequelize documentation on model querying basics](https://sequelize.org/master/manual/model-querying-basics.html)

* [Sequelize documentation on associations](https://sequelize.org/master/manual/assocs.html)

* [Sequelize documentation on one-to-one relationships](https://sequelize.org/master/manual/assocs.html#one-to-one-relationships)

* [Sequelize documentation on one-to-many relationships](https://sequelize.org/master/manual/assocs.html#one-to-many-relationships)

## Algorithms

Here are the algorithms for this week:

* [01-double-triple-map](../../01-Class-Content/13-ORM/03-Algorithms/01-double-triple-map)

* [02-array-intersection](../../01-Class-Content/13-ORM/03-Algorithms/02-array-intersection)

* [03-squares-of-a-sorted-array](../../01-Class-Content/13-ORM/03-Algorithms/03-squares-of-a-sorted-array)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
