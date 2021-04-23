# Module 09 Instructor Overview: Node.js

## Overview

This week, students will begin writing JavaScript on the server side using Node.js. Students will also learn how to use Node.js and third-party modules to extend their code’s functionality.

In this week's virtual classes, you'll review the `fs` and `inquirer` packages, as well as ES6 features, like arrow functions, functional loops, and object destructuring. 

| Day  | Topic                  | Location |
| ---  | ---                    | ---      |
| 1    | File System            | 9.2      |
| 1    | Inquirer Users         | 9.3      |
| 2    | Arrow Functions        | 9.1, 9.2 |
| 2    | Functional Loops       | 9.4      |
| 2    | Object Destructuring   | 9.4      |

## Overview of Asynchronous Material 

Why are students learning Node.js?

* Node.js is well suited for building interactive web applications 

* Node.js uses JavaScript Javascript on both client-side and server-side

* Node.js offers a rich package ecosystem and easy access to a multitude of libraries and tools, including Express.js. 

* Node.js is a sought-after skill for developers and is widely used at companies large and small. 

Throughout the async module this week, students will use Node.js to do the following:

* Build interactive command-line applications that process user input

* Explain modularization and how it relates to npm and the Node.js standard library

* Initialize new Node.js projects with npm, and install and import dependencies

* Explain the importance and usefulness of ES6+ concepts such as `let`, `const`, and arrow functions

* Handle asynchronicity with callbacks and Promises

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                    | Key Points                                                                                    |
| ---              | ---                            | ---                                                                                           |
| 1                | Introduction to Node.js        | Executing an application build with Node.js, JavaScript ES6                                   |
| 2                | Generate a Webpage             | ES6 arrow functions, Assignment destructuring, Requiring and exporting modules                |
| 3                | Node Package Manager           | Install packages from NPM, Chain promises and validate user answers with Inquirer NPM package |
| 4                | Finish Portfolio HTML Output   | Object destructuring, Array Methods                                                           |
| 5                | Handle Node.js Asynchronicity  | Copy files with `fs` module, JavaScript Promises                                              |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 09.1](./09.1-REQUIRED.md)

* [Virtual Class 09.2](./09.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 09.1](./09.1-RECOMMENDED.md)

* [Virtual Class (Required) 09.2](./09.2-REQUIRED.md)

## Instructor Notes

* The transition from client-side development to Node.js can be challenging for students. 

* If students question why they are learning Node.js, emphasize its role in the client-server model. Full-stack developers must be able to build applications using the client-server model, and they will likely face interview questions about the difference between the client and the server and how they relate to each other.

* Ensure that students have already installed Node.js on their computers before coming to class.

  * Direct students to the [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).

* Students will use the `fs` package. Refer to [the Node.js `fs` documentation](https://nodejs.org/api/fs.html) for more information about the methods and their usage. 

* This module also introduces the Inquirer npm package. Refer to [npm documentation on Inquirer](https://www.npmjs.com/package/inquirer) for installation, examples, and more information on the methods used. 

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                          | Recommendation       |
| ---                                 | ---                  |
| Arrow Functions                     | Refer to Lesson 1 and 2 or [MDN documentation on arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  |
| Object Destructuring                | Refer to Lesson 4 or [MDN documentation on destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

This wee, the students will create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Refer students to the [Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md) as a reminder of everything that a high-quality, professional README should contain. 

[Module 09 Challenge](../../01-Class-Content/09-Node/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Modularize your code into multiple files

* Write your code using ES6+ concepts, such as `let`, `const`, and arrow functions

* Use npm (Node Package Manager) to initialize a project and install and import Node.js modules

* Build an interactive command-line application that processes user input using a third-party Node.js module

* Use string literals to dynamically generate markdown from the command line

## Heads-Up

* Next week you will introduce object-oriented programming. You will cover Test Driven Development(TDD), ES6 Classes, and [Jest](https://jestjs.io/) for mocking and testing.

* Let your students know that this next module is very concept-heavy! Object-oriented programming can be very difficult to understand at first, but it is crucial in making them employer-competitive. In addition, the idea of writing tests before code may also feel counterintuitive but it is important to help students learn to plan and break down their apps into more manageable chunks.  So reassure them that they are not alone in struggling with this topic and that it is perfectly normal to feel a little lost at first. 

* At the same time, do not feel discouraged if your students aren't understanding the concept after you've tried explaining it to them. It takes time to fully grasp object-oriented programming, so keep encouraging your students and reassuring them that with time and practice, they will understand this! If you are comfortable doing so, share your own struggle and/or personal experiences learning and working with OOP.

## Resources

* [fs documentation](https://nodejs.org/api/fs.html)

* [inquirer.js documentation](https://www.npmjs.com/package/inquirer)

* [MDN documentation on arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

* [MDN documentation for .map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

* [MDN documentation for .filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* [MDN documentation on destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Algorithms

* [01-character-count](../../01-Class-Content/09-NodeJS/03-Algorithms/01-character-count)

* [02-product-of-largest-two](../../01-Class-Content/09-NodeJS/03-Algorithms/02-product-of-largest-two)

* [03-camel-case](../../01-Class-Content/09-NodeJS/03-Algorithms/03-camel-case)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.