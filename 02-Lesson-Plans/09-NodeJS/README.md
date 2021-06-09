# Module 09 Instructor Overview: Node.js

## Overview

This week, students will begin writing JavaScript on the server side, using Node.js. They'll also learn how to extend their code’s functionality using Node.js and third-party modules. Additionally, students will be introduced to ES6 features like arrow functions, functional loops, and object destructuring.

In this week's virtual classes, you'll review the `fs` and `inquirer` packages, as well as ES6 features including arrow functions, functional loops, and object destructuring. 

| Day  | Topic                  | Location |
| ---  | ---                    | ---      |
| 1    | File System            | 9.2      |
| 1    | Inquirer Users         | 9.3      |
| 2    | Arrow Functions        | 9.1, 9.2 |
| 2    | Functional Loops       | 9.4      |
| 2    | Object Destructuring   | 9.4      |

## Overview of Asynchronous Material 

Why are students learning Node.js?

* Node.js helps us build interactive web applications and allows us to use JavaScript for both client-side and server-side functionality.

* Node.js offers a rich package ecosystem and easy access to a multitude of libraries and tools, including Express.js. 

* Node.js is a sought-after development skill and is widely used at both large and small companies.

Throughout the async module this week, students will use Node.js to do the following:

* Build interactive command-line applications that process user input.

* Explain modularization and how it relates to npm and the standard Node.js library.

* Initialize new Node.js projects using npm, and install and import dependencies.

* Explain the importance and usefulness of ES6+ concepts such as `let`, `const`, and arrow functions.

* Handle asynchronicity using callbacks and Promises.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                    | Key Points                                                                                     |
| ---              | ---                            | ---                                                                                            |
| 1                | Introduction to Node.js        | Executing an application build with Node.js, JavaScript ES6                                    |
| 2                | Generate a Webpage             | ES6 arrow functions, assignment destructuring, requiring and exporting modules                 |
| 3                | Node.js Package Manager        | Install packages from npm, chain Promises and validate user answers using Inquirer npm package |
| 4                | Finish Portfolio HTML Output   | Object destructuring, array methods                                                            |
| 5                | Handle Node.js Asynchronicity  | Copy files using `fs` module, JavaScript Promises                                              |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 09.1](./09.1-REQUIRED.md)

* [Virtual Class 09.2](./09.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 09.1](./09.1-RECOMMENDED.md)

* [Virtual Class (Required) 09.2](./09.2-REQUIRED.md)

## Instructor Notes

* The transition from client-side development to Node.js can be challenging for students. 

* If students question why they're learning Node.js, emphasize its role in the client-server model. Full-stack developers must be able to build applications using the client-server model. They'll likely face interview questions about the difference between the client and the server and how they relate to each other.

* Students should have already installed Node.js on their computers before coming to class. If they haven't done that yet, direct them to the Up and Running section in the async materials for details on how to install it.  

* This module also introduces the npm package Inquirer. Refer to the [npm documentation on Inquirer](https://www.npmjs.com/package/inquirer) for installation, examples, and more information on the methods used. 

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                          | Recommendation       |
| ---                                 | ---                  |
| Arrow functions                     | Refer to Lesson 1 and 2 or the [MDN Web Docs on arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  |
| Object destructuring                | Refer to Lesson 4 or the [MDN Web Docs on destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

This week, the students will use starter code to build a command-line application that dynamically generates a professional README.md file from a user's input, using the [Inquirer package](https://www.npmjs.com/package/inquirer). For more help, refer students to the [Full-Stack Blog guide to a professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide).

[Module 09 Challenge](../../01-Class-Content/09-NodeJS/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Modularize code into multiple files.

* Write code using ES6+ concepts like `let`, `const`, and arrow functions.

* Initialize a project and install and import Node.js modules using npm.

* Build an interactive command-line application that processes user input using a third-party Node.js module.

* Dynamically generate Markdown from the command line using string literals.

## Heads-Up

* Next week you'll introduce object-oriented programming. You'll cover test-driven development (TDD), ES6 classes, and [Jest](https://jestjs.io/) for mocking and testing.

* Warn your students that this next module is very concept-heavy! Object-oriented programming can be difficult at first, but understanding it is crucial in becoming employer-competitive. Although writing tests before code might feel counterintuitive, this approach can help developers plan and break down their apps into more manageable chunks. Reassure students that they aren't alone in struggling with this topic; it's perfectly normal to feel a little lost at first. 

* Likewise, don't feel discouraged if your students don't immediately understand object-oriented programming, even after you've tried to explain it. It takes time to fully grasp the concept, so keep encouraging your students and reassuring them that they'll understand it with time and practice! If you're comfortable doing so, share your own experiences or struggles learning and working with OOP.

## Resources

* [Node.js documentation on fs](https://nodejs.org/api/fs.html)

* [npm documentation on Inquirer](https://www.npmjs.com/package/inquirer)

* [MDN Web Docs on arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

* [MDN Web Docs on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

* [MDN Web Docs on filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* [MDN Web Docs on destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Algorithms

* [01-character-count](../../01-Class-Content/09-NodeJS/03-Algorithms/01-character-count)

* [02-product-of-largest-two](../../01-Class-Content/09-NodeJS/03-Algorithms/02-product-of-largest-two)

* [03-camel-case](../../01-Class-Content/09-NodeJS/03-Algorithms/03-camel-case)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
