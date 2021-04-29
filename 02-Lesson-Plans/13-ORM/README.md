# Module 13 Instructor Overview: ORM

## Overview

In this week's module, students learn about object-relational mapping (ORM), a technique that allows developers to convert data between incompatible type systems using object-oriented programming principles.

In this week's virtual classes, you'll review Sequelize query methods, CRUD methods, associations, and eager loading.

| Day | Topic             | Location   |
| --- | ----------------- | ---------- |
| 1   | Sequelize Library | 13.1       |
| 1   | Sequelize CRUD    | 13.1       |
| 2   | Blog CRUD         | 13.1       |
| 2   | Blog Association  | 13.3       |
| 2   | Blog Joins        | 13.4, 13.5 |

## Overview of Asynchronous Material

Why are students learning ORM?

* Students are learning ORM to interact with databases using their language of choice.
* Learning ORM will allow students to create relationships between data with relative ease.
* Learning ORM allows students to interface with different kinds of databases with a single interface.
* By learning ORM students can write lots of complex CRUD operations that would otherwise be tedious with plain SQL.
* ORMs allow students to work with data in plain JavaScript objects.
* ORMs allow students to translate code into database schemas and queries using SQL.

Throughout the async module this week, students will use ORM to do the following:

* Implement the Sequelize ORM in a Node.js application
* Define models that use datatype validations
* Implement CRUD methods using Sequelize
* Implement Sequelize associations to join one or more tables
* Configure Heroku for the deployment of an application using Sequelize & MySQL
* Use the `bcrypt` package to hash password information and use environment variables to protect sensitive data

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                   | Key Points                                                                                 |
| ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1      | Set Up a User Model                           | Sequelize set up, environmental variables, creating models, CRUD API routes                |
| 2      | Create the Login Route                        | Hashing passwords, Sequelize hooks, `async` `await`, user authentication                   |
| 3      | Create a Post Model                           | Model associations, `include` statements, creating API endpoints for CRUD                  |
| 4      | Implement a Voting System                     | Creating the `Vote` model, many-to-many relationships, `POST` route for voting, refactoring      |
| 5      | Create the Comment Model and Deploy to Heroku | Creating the `Comment` model, double `belongsTo` associations, comment routes, Heroku deployment |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 13.1](./13.1-REQUIRED.md)

* [Virtual Class 13.2](./13.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 13.1](./13.1-RECOMMENDED.md)

* [Virtual Class (Required) 13.2](./13.2-REQUIRED.md)

## Instructor Notes

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

* If you don't want to do it live in class, create the databases required for the activities before class.

* BE VERY CAREFUL NOT TO GO TOO IN DEPTH. There are a ton of components that make Sequelize work, but much of it is boilerplate that doesn't need much explanation.

* THIS IS TOUGH STUFF! This week, tell your class to not feel discouraged if there are concepts that they can't nail down completely. Tell them to try their best, but to speak with you or a TA if they're unsure of anything.

* Remind students to complete the Midpoint Survey that covers their journey thus far. Clarify that this survey is **not** about the current Module, but is about the entire course up until this point! It’s important that they are aware of this in advance and that they take their time to complete the survey. This will ultimately help us understand how the program, the curriculum, the instruction, and our support can be improved!

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                 | Recommendation                                                                                                                          |
| -------------------------- | --- |
| Connecting to Databases    | Refer students to the [Sequelize Docs on Connecting](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database) |
| Understanding Associations | Refer students to the [Sequelize Docs on Associations](https://sequelize.org/master/manual/assocs.html)                                 |
| Data Types with Models     | Refer students to the [Sequelize Docs on Model Basics](https://sequelize.org/master/manual/model-basics.html)                           |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will build the back end for an e-commerce site starting with a working Express.js API and configuring it to use Sequelize to interact with a MySQL database.

[Module 13 Challenge](../../01-Class-Content/13-ORM/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Initializing environmental variables
* Connecting to databases using Sequelize
* Seeding Databases
* Creating models in Sequelize and syncing them to a MySQL database
* Building API endpoints and returning JSON data to the client
* Testing GET, POST, PUT, and DELETE routes using Insomnia Core
* Implementing logic in route handlers to execute CRUD operations

## Heads-Up

Next week you will divide students into groups for their second project. Groups of three are ideal. Create one or two groups of four if the class cannot be divided by three. Structure groups so that their team members consist of students all at the same skill level.

Next week you will review Handlebars, a template engine, as well as authentication.

## Resources

* [Sequelize Manual on Model Querying](https://sequelize.org/v5/manual/querying.html)

* [Sequelize Model docs](https://sequelize.org/v5/class/lib/model.js~Model.html)

* [Sequelize Validations & Constraints docs](https://sequelize.org/master/manual/validations-and-constraints.html)

* [Sequelize Manual on Associations](https://sequelize.org/v5/manual/associations.html)

* [Sequelize Manual on Eager Loading](https://sequelize.org/master/manual/eager-loading.html)

## Algorithms

* [01-common-element](../../01-Class-Content/13-ORM/03-Algorithms/01-common-element)

* [02-permutation-substring](../../01-Class-Content/13-ORM/03-Algorithms/02-permutation-substring)

* [03-string-map](../../01-Class-Content/13-ORM/03-Algorithms/03-string-map)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
