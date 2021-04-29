# Module 18 Instructor Overview: NoSQL

## Overview

This week, students will learn about NoSQL databases. Students will use MongoDB, a popular NoSQL database, to store data using documents in the BSON format and Mongoose to map MongoDB’s document representations of data to a virtual object database. As a first step towards creating a Progressive Web Application (PWA), students will also use IndexedDB, a NoSQL client-side storage API in the browser, to save data locally to the browser when there’s no internet connection.

In this week's virtual classes, you'll go over Mongoose virtuals, subdocuments, schema, CRUD operations, and the `.populate()` method.

| Day  | Topic              | Location          |
| ---  | ---                | ---               |
| 1    | Mongoose Virtuals  | 18.2, 18.3        |
| 1    | Subdocuments       | 18.3              |
| 2    | Mongoose Schema    | 18.1, 18.2, 18.5  | 
| 2    | Mongoose CRUD      | 18.1, 18.2        |
| 2    | Mongoose Populate  | 18.1, 18.2        |

## Overview of Asynchronous Material 

Why are students learning NoSQL?

* Understanding the key differences between relational and non-relational databases allows students to make an informed decision on how to best store data for their app's needs.

* MongoDB is a widely used database built for internet and business applications that allows students to store and manipulate data quickly and easily.

* Mongoose is an Object Document Mapping (ODM) library for MongoDB that provides schema validation and allows students to have more control over their data. 

* IndexDB introduces the students to persistent offline storage and is a first step to prepare them for Progressive Web Applications.

Throughout the async module this week, students will use NoSQL to do the following:

* Explain the difference between SQL and NoSQL

* Configure Heroku for the deployment of a Node.js application using MongoDB

* Explain and execute CRUD methods with MongoDB

* Integrate Mongoose in a full-stack web application

* Create query builders to populate documents using refs

* Implement client-side NoSQL using IndexedDB

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson    | Description                        | Key Points                                          |
| ---       | ---                                | ---                                                 |
| 1         | Set Up the User Model              | Mongoose middleware, Models, Mongoose CRUD methods  |
| 2         | Add Comments                       | Models, Mongoose CRUD implementation                |
| 3         | Set Up Replies                     | Subdocuments, Custom id models, Virtuals            |
| 4         | Offline Persistence with IndexedDB | Data persistance, IndexedDB                         |
| 5         | Mongoose Validation                | Validation, Deploying to Heroku, MongoDB Atlas      |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 18.1](./18.1-REQUIRED.md)

* [Virtual Class 18.2](./18.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 18.1](./18.1-RECOMMENDED.md)

* [Virtual Class (Required) 18.2](./18.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp is more about being employer-ready, improving the skills they have already learned, and making their web applications more performant and efficient. Basically, students will focus on "Life after Boot Camp". 

* Be sure students have installed MongoDB and Mongoose before starting their lessons. The install instructions are provided in the `Up and Running` section in Canvas. 

* Students will use [Insomnia](https://support.insomnia.rest/) to test their API routes instead of relying on a front end in this week's virtual classes.

* Although students will learn how to deploy MongoDB applications to Heroku using MongoDB Atlas in their asynchronous lessons, ensure that they have the supplemental guides on [Setting Up MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas) and [Deploying with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas).

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                    | Recommendation       |
| ---                                           | ---                  |
| Implementing CRUD Operations with Mongoose    | Refer to Lesson 1, 2 or the [Mongoose Docs on Queries](https://mongoosejs.com/docs/queries.html) |
| IndexDB                                       | Refer to Lesson 4 or the [MDN Web Docs on the IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) |
| Deploying to Heroku                           | Refer to Lesson 5 or supplemental guide on [Deploying with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

In this week's Challenge, students will build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. They will use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, students may also optionally use a JavaScript date library of their choice or the native JavaScript Date object to format timestamps.

[Module 18 Challenge](../../01-Class-Content/18-NoSQL/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Execute CRUD methods with MongoDB.

* Integrate Mongoose in an API.

* Create query builders to populate documents using refs.

## Heads-Up

Next week, students will learn about measuring and optimizing the performance of web applications, as well as learning how to create [Progressive Web Applications (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

## Resources

* [Mongoose Docs on Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)

* [Mongoose Docs on Subdocuments](https://mongoosejs.com/docs/subdocs.html)

* [Mongoose Docs on Validations](https://mongoosejs.com/docs/validation.html) and [String Validators](https://mongoosejs.com/docs/schematypes.html#string-validators)

* [Mongoose Docs on Queries](https://mongoosejs.com/docs/queries.html)

* [Mongoose Docs on Populate](https://mongoosejs.com/docs/populate.html)

* [MDN Web Docs on IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Algorithms

* [01-is-armstrong](../../01-Class-Content/18-NoSQL/03-Algorithms/01-is-armstrong)

* [02-max-profit](../../01-Class-Content/18-NoSQL/03-Algorithms/02-max-profit)

* [03-smallest-difference](../../01-Class-Content/18-NoSQL/03-Algorithms/03-smallest-difference)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
