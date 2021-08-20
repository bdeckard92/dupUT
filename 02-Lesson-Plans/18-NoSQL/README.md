# Module 18 Instructor Overview: NoSQL

## Overview

This week, students will learn about NoSQL databases. They'll use the popular NoSQL database MongoDB to store data using documents in the BSON format, and they'll use Mongoose to map MongoDB document representations of data to a virtual object database. To begin creating a progressive web application (PWA), students will also use IndexedDB, a NoSQL client-side storage API in the browser, to save data locally to the browser when there’s no internet connection.

In this week's virtual classes, you'll cover Mongoose virtuals, subdocuments, schema, CRUD operations, and the `populate()` method.

| Day  | Topic              | Location          |
| ---  | ---                | ---               |
| 1    | Mongoose Virtuals  | 18.2, 18.3        |
| 1    | Subdocuments       | 18.3              |
| 2    | Mongoose Schema    | 18.1, 18.2, 18.5  | 
| 2    | Mongoose CRUD      | 18.1, 18.2        |
| 2    | Mongoose Populate  | 18.1, 18.2        |

## Overview of Asynchronous Material 

Why are students learning NoSQL?

* Understanding the key differences between relational and non-relational databases allows students to make an informed decision on how to best store data for their needs.

* MongoDB is a widely used database built for internet and business applications that allows us to store and manipulate data quickly and easily.

* Mongoose is an **object-document mapping (ODM)** library for MongoDB that provides schema validation and gives us more control over data.

* IndexedDB introduces the students to persistent offline storage and will help prepare them to build progressive web applications.

Throughout the async module this week, students will use NoSQL to do the following:

* Explain the difference between SQL and NoSQL.

* Configure Heroku for the deployment of a Node.js application using MongoDB.

* Explain and execute CRUD methods with MongoDB.

* Integrate Mongoose in a full-stack web application.

* Create query builders to populate documents using refs.

* Implement client-side NoSQL using IndexedDB.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson    | Description                        | Key Points                                          |
| ---       | ---                                | ---                                                 |
| 1         | Set Up the User Model              | Mongoose middleware, models, Mongoose CRUD methods  |
| 2         | Add Comments                       | Models, Mongoose CRUD implementation                |
| 3         | Set Up Replies                     | Subdocuments, custom id models, virtuals            |
| 4         | Offline Persistence with IndexedDB | Data persistance, IndexedDB                         |
| 5         | Mongoose Validation                | Validation, deploying to Heroku, MongoDB Atlas      |

## Virtual Classes

* [Virtual Class 18.1](./18.1-REQUIRED.md)

* [Virtual Class 18.2](./18.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* Ensure that students have installed MongoDB and Mongoose before starting their lessons. The installation instructions are provided in the Up and Running section of this module.

* In this week's virtual classes, students will use Insomnia to test their API routes instead of relying on a front end. For more information, refer to the [Insomnia documentation](https://support.insomnia.rest/).

* Students will learn in their asynchronous lessons how to deploy MongoDB applications to Heroku using MongoDB Atlas. But for more information, refer them to the [Full-Stack Blog on setting up MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas) and the [Full-Stack blog on deploying with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas).

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                    | Recommendation       |
| ---                                           | ---                  |
| Implementing CRUD operations with Mongoose    | Refer to Lesson 1, 2, or the [Mongoose documentation on queries](https://mongoosejs.com/docs/queries.html) |
| IndexedDB                                       | Refer to Lesson 4 or the [MDN Web Docs on the IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) |
| Deploying to Heroku                           | Refer to Lesson 5 or the [supplemental guide on deploying with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

In this week's Challenge, students will build an API for a social networking web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. They'll use Express.js, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, students can optionally use a JavaScript date library of their choice or the native JavaScript `Date` object to format timestamps.

[Module 18 Challenge](../../01-Class-Content/18-NoSQL/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Execute CRUD methods with MongoDB.

* Integrate Mongoose in an API.

* Create query builders to populate documents using refs.

## Heads-Up

* Next week, students will learn about measuring and optimizing the performance of web applications, as well as creating **progressive web applications (PWAs)**. For more information, refer to the [MDN Web Docs on progressive web applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

## Resources

* [Mongoose documentation on virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)

* [Mongoose documentation on subdocuments](https://mongoosejs.com/docs/subdocs.html)

* [Mongoose documentation on validation](https://mongoosejs.com/docs/validation.html)

* [Mongoose documentation on string validators](https://mongoosejs.com/docs/schematypes.html#string-validators)

* [Mongoose documentation on queries](https://mongoosejs.com/docs/queries.html)

* [Mongoose documentation on populate](https://mongoosejs.com/docs/populate.html)

* [MDN Web Docs on IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

## Algorithms

* [01-is-armstrong](../../01-Class-Content/18-NoSQL/03-Algorithms/01-is-armstrong)

* [02-max-profit](../../01-Class-Content/18-NoSQL/03-Algorithms/02-max-profit)

* [03-smallest-difference](../../01-Class-Content/18-NoSQL/03-Algorithms/03-smallest-difference)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
