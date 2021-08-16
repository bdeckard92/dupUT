# Module 13 Instructor Overview: Object-Relational Mapping (ORM)

## Overview

In this week's module, students will learn about **object-relational mapping (ORM)**, a technique that allows developers to convert data between incompatible type systems using object-oriented programming principles.

In this week's virtual classes, you'll review Sequelize query methods, CRUD methods, associations, and eager loading.

| Day | Topic                        | Location   |
| --- | ---------------------------- | ---------- |
| 1   | Sequelize Query Methods      | 13.1       |
| 1   | Sequelize CRUD Methods       | 13.1       |
| 2   | Validation and Constraints   | 13.1       |
| 2   | Sequelize Associations       | 13.3       |
| 2   | Sequelize include Property | 13.4, 13.5 |

## Overview of Asynchronous Material

Why are students learning object-relational mapping?

* ORM allows us to interact with databases using a preferred language.

* It also enables us to create relationships between data with relative ease.

* ORM allows students to interface with different kinds of databases using a single interface.

* It enables us to write lots of complex CRUD operations that would otherwise be tedious with plain SQL.

* ORM allows students to work with data in plain JavaScript objects.

* ORM allows students to translate code into database schemas and queries using SQL.

Throughout the async module this week, students will use ORM to do the following:

* Implement the Sequelize ORM in a Node.js application.

* Define models that use data type validations.

* Implement CRUD methods using Sequelize.

* Implement Sequelize associations to join one or more tables.

* Configure Heroku for the deployment of an application using Sequelize and MySQL.

* Use the `bcrypt` package to hash password information and use environment variables to protect sensitive data.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                   | Key Points |
| ------ | --- | --- |
| 1      | Set Up a User Model                           | Sequelize setup, environment variables, creating models, CRUD API routes                           |
| 2      | Create the Login Route                        | Hashing passwords, Sequelize hooks, `async/await`, user authentication                            |
| 3      | Create a POST Model                           | Model associations, `include` statements, creating API endpoints for CRUD                           |
| 4      | Implement a Voting System                     | Creating models, many-to-many relationships, POST routes, refactoring                             |
| 5      | Create the Comment Model and Deploy to Heroku | Double `belongsTo` associations, `hasMany` associations, creating route handlers, Heroku deployment |

## Virtual Classes

* [Virtual Class 13.1](./13.1-REQUIRED.md)

* [Virtual Class 13.2](./13.2-REQUIRED.md)

## Instructor Notes

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* Also before class, create the databases required for the activities (if you don't want to do it live in class).

* It is crucial that you do NOT go too in depth. Although many components make Sequelize work, much of it is boilerplate that doesn't need detailed explanation.

* This is tough stuff! Tell students not to feel discouraged if they struggle to fully comprehend some concepts. Encourage them to try their best but to speak with you or a TA if they're unsure of anything.

* Remind students to complete the Midpoint Survey coming up. Clarify that this survey is NOT about the current module but is about the entire course until this point! It’s important that they're aware of this in advance and that they take their time to complete the survey. This will ultimately help us understand how we can improve the program, curriculum, instruction, and support!

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                   | Recommendation |
| --- | --- |
| Navigating technical documentation | Encourage students to leverage external resources like Stack Overflow or Google for information regarding Sequelize                     |
| Connecting to databases      | Refer students to the [Sequelize documentation on connecting to a database](https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database) |
| Understanding associations   | Refer students to the [Sequelize documentation on associations](https://sequelize.org/master/manual/assocs.html)                                 |
| Data types with models       | Refer students to the [Sequelize documentation on model basics](https://sequelize.org/master/manual/model-basics.html)                           |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

In this Challenge, students will build the back end for an e-commerce site, starting with a working Express.js API. They will also configure the application to use Sequelize to interact with a MySQL database.

[Module 13 Challenge](../../01-Class-Content/13-ORM/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Initialize environment variables.

* Connect to databases using Sequelize.

* Seed databases.

* Create models in Sequelize and sync them to a MySQL database.

* Build API endpoints and return JSON data to the client.

* Test GET, POST, PUT, and DELETE routes using Insomnia.

* Implement logic in route handlers to execute CRUD operations.

## Heads-Up

* Next week you'll divide students into groups for their second project. Groups of three are ideal. Create one or two groups of four if the class cannot be divided by three. Structure groups so that they include students all at the same skill level.

* Next week you'll review the template engine Handlebars.js, as well as authentication.

## Resources

* [Sequelize documentation on querying](https://sequelize.org/v5/manual/querying.html)

* [Sequelize documentation on models](https://sequelize.org/v5/class/lib/model.js~Model.html)

* [Sequelize documentation on validations & constraints](https://sequelize.org/master/manual/validations-and-constraints.html)

* [Sequelize documentation on associations](https://sequelize.org/v5/manual/associations.html)

* [Sequelize documentation on eager loading](https://sequelize.org/master/manual/eager-loading.html)

## Algorithms

* [01-common-element](../../01-Class-Content/13-ORM/03-Algorithms/01-common-element)

* [02-permutation-substring](../../01-Class-Content/13-ORM/03-Algorithms/02-permutation-substring)

* [03-string-map](../../01-Class-Content/13-ORM/03-Algorithms/03-string-map)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
