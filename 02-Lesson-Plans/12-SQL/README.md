# Module 12 Instructor Overview: SQL

## Overview

In this module, students learn to use MySQL, the most popular SQL database. Students learn to store and retrieve data using databases and expand their knowledge of how to build a full -tack application with persistent storage.

In this week's virtual classes, you'll teach students MySQL schemas, creating databases and tables, and populating tables with data. You will also review `JOIN` statements, the `mysql2` npm package, and prepared statements.

| Day | Topic               | Location         |
| --- | ------------------- | ---------------- |
| 1   | Schemas             | 12.1, 12.3       |
| 1   | Seeds               | 12.1, 12.3, 12.4 |
| 2   | Constraints         | 12.1, 12.2, 12.3 |
| 2   | Joins               | 12.3             |
| 2   | Prepared Statements | 12.4             |

## Overview of Asynchronous Material

Why are students learning SQL?

* Understanding that data is the foundation of modern applications and knowing how to use data from relational databases is one of the most sought-after skills by employers.
* SQL is still the top language for
* SQL makes students employer-ready by opening them up to more than just front-end positions.
* SQL allows students to see the connection between front-end and back-end easier.
* SQL gives students the ability to join similar sets of data in a meaningful way.

Throughout the async module this week, students will use SQL to do the following:

* Configure a Node.js application to connect to a SQL instance
* Create and drop databases and tables
* Explain and execute CRUD methods
* Create schema and seed files for development and production
* Write join statements to establish relations between data in one or more tables using primary and foreign keys
* Explain the use and importance of prepared statements

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                   | Key Points                                                                                    |
| ------ | ----------------------------- | --------------------------------------------------------------------------------------------- |
| 1      | Introduction to SQL           | Create db, create and populate tables, creating schemas                                       |
| 2      | Create Candidate Routes       | Use `mysql2` to connect MySQL to a Node.js server, execute queries, test routes with Insomnia |
| 3      | Join with Parties Table       | Updating schemas, adding new fields, combining two data from two tables, constraints          |
| 4      | Create Voter Table and Routes | Modularize routes, adding timestamps to new data, sorting data                                |
| 5      | Populate and Tally Votes      | SQL commands to count values, implementing constraints to avoid duplicate or null values      |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 12.1](./12.1-REQUIRED.md)

* [Virtual Class 12.2](./12.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 12.1](./12.1-RECOMMENDED.md)

* [Virtual Class (Required) 12.2](./12.2-REQUIRED.md)

## Instructor Notes

* Be sure to install the [MySQL server](https://dev.mysql.com/downloads/mysql/) before this week's classes and run the server to be able to initialize the MySQL Shell.

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

* Make sure the students install MySQL for this module. Detailed instructions are provided in the `Up and Running` for this module.

* Remind students to complete the Midpoint Survey coming up that covers their journey thus far. Clarify that this survey is **not** about the current Module, but is about the entire course up until this point! It’s important that they are aware of this in advance and that they take their time to complete the survey. This will ultimately help us understand how the program, the curriculum, the instruction, and our support can be improved!

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                       | Recommendation                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| How MySQL deals with constraints | Refer students to the [MySQL Docs on Constraints](https://dev.mysql.com/doc/refman/8.0/en/constraints.html)              |
| Inability to access MySQL shell  | Refer students to the [MySQL Docs on Password Reset](https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Your challenge this week is to build a command-line application to manage a company's database of employees using Node.js, Inquirer, and MySQL. This challenge asks students to demonstrate their knowledge of MySQL and relational databases, while also exercising their knowledge of Node.js and Javascript.

[Module 12 Challenge](../../01-Class-Content/12-SQL/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Configure your Node.js application to connect to a MySQL database
* Create and drop databases and tables
* Use CRUD (create, read, update, and delete) methods to work with persistent data
* Create schema and seed files for the development of your application
* Write join statements to establish relations between data in three separate tables using primary and foreign keys

## Heads-Up

Next week you will introduce ORMs, more specifically Sequelize. BE VERY CAREFUL NOT TO GO TOO IN DEPTH. There are a ton of components that make Sequelize work, but much of it is boilerplate that doesn't need much explanation.

THIS IS TOUGH STUFF! Tell your class to not feel discouraged if there are concepts that they can't nail down completely. Tell them to try their best, but to speak with you or a TA if they're unsure of anything.

## Resources

* [MySQL documentation on schemas](https://dev.mysql.com/doc/refman/8.0/en/getting-information.html)

* [mysql2 package](https://www.npmjs.com/package/mysql2)

* [Prepared statements](https://www.npmjs.com/package/mysql2#using-prepared-statements)

## Algorithms

* [01-multiply-into-20](../../01-Class-Content/12-SQL/03-Algorithms/01-multiply-into-20)

* [02-zeroes-and-ones](../../01-Class-Content/12-SQL/03-Algorithms/02-zeroes-and-ones)

* [03-merge-sorted](../../01-Class-Content/12-SQL/03-Algorithms/03-merge-sorted)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
