# Module 12 Instructor Overview: SQL

## Overview

In this module, students will learn to use MySQL, the most popular SQL database. Students will also learn to store and retrieve data using databases and expand their knowledge of how to build a full-stack application with persistent storage.

In this week's virtual classes, you will cover MySQL schemas, creating databases and tables, and populating tables with data. You will also review `JOIN` statements, the `mysql2` npm package, and prepared statements.

| Day | Topic               | Location         |
| --- | ------------------- | ---------------- |
| 1   | Schemas             | 12.1, 12.3       |
| 1   | Seeds               | 12.1, 12.3, 12.4 |
| 1   | Git Guide           | N/A              |
| 2   | Constraints         | 12.1, 12.2, 12.3 |
| 2   | Joins               | 12.3             |
| 2   | Prepared Statements | 12.4             |

## Overview of Asynchronous Material

Why are students learning SQL?

* Data is the foundation of all modern applications. Knowing how to use relational databases is one of the most sought-after skills by employers.

* SQL is one of the cornerstone technologies used in all of web development.

* SQL is still used by some of the biggest tech companies in the world, like Uber, Netflix, Airbnb, and many more.

* SQL gives students the ability to join similar sets of data in a meaningful way.

* SQL makes students employer-ready by opening them up to more than just front-end positions.

* SQL allows students to see the connection between the front end and the back end easier.

Throughout the async module this week, students will use SQL to do the following:

* Configure a Node.js application to connect to a SQL instance.

* Create and drop databases and tables.

* Explain and execute CRUD methods.

* Create schema and seed files for development and production.

* Write join statements to establish relations between data in one or more tables using primary and foreign keys.

* Explain the use and importance of prepared statements.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                   | Key Points                                                                                       |
| ------ | ----------------------------- | --- |
| 1      | Introduction to SQL           | Creating databases, creating and populating tables, creating schemas                             |
| 2      | Create Candidate Routes       | Using `mysql2` to connect MySQL to a Node.js server, execute queries, test routes with Insomnia    |
| 3      | Join with Parties Table       | Updating schemas, adding new fields, combining two data from two tables, introducing constraints |
| 4      | Create Voter Table and Routes | Modularizing routes, adding timestamps to new data, sorting data                                 |
| 5      | Populate and Tally Votes      | Using SQL commands to count values, implementing constraints to avoid duplicate or `null` values |

## Virtual Classes

* [Virtual Class 12.1](./12.1-REQUIRED.md)

* [Virtual Class 12.2](./12.2-REQUIRED.md)

## Instructor Notes

* Be sure to install the [MySQL server](https://dev.mysql.com/downloads/mysql/) before this week's classes, and run the server to initialize MySQL Shell.

* Be sure to review the activities before class. Try to anticipate any questions that students might have.

* Make sure that students have installed MySQL. Detailed instructions are provided in the Up and Running section of this module.

* Remind students to complete the Midpoint Survey coming up. Clarify that this survey is NOT about the current module but is about the entire course until this point! It’s important that they're aware of this in advance and that they take their time to complete the survey. This will ultimately help us understand how we can improve the program, curriculum, instruction, and support!

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                       | Recommendation                                                                                                                  |
| -------------------------------- | --- |
| How MySQL deals with constraints | Refer students to the [MySQL documentation on how MySQL deals with constraints](https://dev.mysql.com/doc/refman/8.0/en/constraints.html)                     |
| Inability to access MySQL shell  | Refer students to the [MySQL documentation on resetting permissions](https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

The Challenge this week is to build a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. Doing so will allow students to demonstrate their knowledge of not only MySQL and relational databases but also Node.js and Javascript.

[Module 12 Challenge](../../01-Class-Content/12-SQL/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Configure a Node.js application to connect to a MySQL database.

* Create and drop databases and tables.

* Work with persistent data using **CRUD (create, read, update, delete)** methods.

* Create schema and seed files for the development of an application.

* Write join statements to establish relations between data in three separate tables using primary and foreign keys.

## Heads-Up

* Next week you'll introduce ORMs, specifically Sequelize. It is crucial that you do NOT go too in depth. Although many components make Sequelize work, much of it is boilerplate that doesn't need detailed explanation.

* This is tough stuff! Tell students not to feel discouraged if they struggle to fully comprehend some concepts. Encourage them to try their best but to speak with you or a TA if they're unsure of anything.

## Resources

* [MySQL documentation on getting information about databases and tables](https://dev.mysql.com/doc/refman/8.0/en/getting-information.html)

* [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

* [npm documentation on using prepared statements](https://www.npmjs.com/package/mysql2#using-prepared-statements)

## Algorithms

* [01-multiply-into-20](../../01-Class-Content/12-SQL/03-Algorithms/01-multiply-into-20)

* [02-zeroes-and-ones](../../01-Class-Content/12-SQL/03-Algorithms/02-zeroes-and-ones)

* [03-merge-sorted](../../01-Class-Content/12-SQL/03-Algorithms/03-merge-sorted)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
