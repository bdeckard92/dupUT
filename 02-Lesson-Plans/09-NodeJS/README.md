# Module 09 Instructor Overview: Node.js

## Overview

In this module, students will learn how to use the Node.js platform to use JavaScript outside of the browser. Students will use the `fs` module to read and write files and gather input using the `inquirer` npm package.

In this week's virtual classes, you'll review the `fs` and `inquirer` packages, as well as ES6 features, like arrow functions, functional loops, and object destructuring.

| Day | Topic                    | Location      |
| --- | ------------------------ | ------------- |
| 1   | Arrow Functions          | 9.1, 9.2      |
| 1   | Inquirer                 | 9.3. 9.4, 9.5 |
| 2   | `fs` Module              | 9.2           |
| 2   | Functional Loops         | 9.1           |
| 2   | Destructuring Assignment | 9.4           |

## Overview of Asynchronous Material

Why are students learning Node.js?

* To use JavaScript outside of the browser
* To manipulate the file system using the `fs` module
* To make use of open source `npm` packages in their projects
* To set them up for success when creating web servers in the future

Throughout the async module this week, students will use Node.js to do the following:

* Identify the purpose Node.js serves in modern web development and when to use it.
* Create and execute a Node.js application from the command line.
* Outline the differences between the JavaScript syntax we've used and the new ES6 syntax.
* Execute a Node.js application that accepts arguments from the command line.
* Understand the purpose of `npm` and navigate its ecosystem.
* Learn npm commands to initiate projects and install packages using the command-line utility.
* Learn how to use new JavaScript features and array methods.
* Use code modularity to keep the functionality clean and easy to read.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                   | Key Points   |
| ------ | ----------------------------- | ---          |
| 1      | Introduction to Node.js       | Purpose of Node.js, Setting up a project, Capturing user input               |
| 2      | Generate Webpage              | ES6, Template literals, Generating HTML files, Modularizing code             |
| 3      | Node Package Manager          | Installing packages, npm ecosystem, package.json, .gitignore                 |
| 4      | Finish Portfolio HTML Output  | Refactoring template functions, Promise chaining, Destructuring, Spread/Rest |
| 5      | Handle Node.js Asynchronicity | Writing files using `fs`, Creating promises, Copying files, Resolve/Reject   |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 09.1](./09.1-REQUIRED.md)

* [Virtual Class 09.2](./09.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 09.1](./09.1-RECOMMENDED.md)

* [Virtual Class (Required) 09.2](./09.2-REQUIRED.md)

## Instructor Notes

* Be sure to have students ensure that they have Node.js installed on their machines before the class starts. This can be done by installing Node.js using the LTS version from [nodejs.org](https://nodejs.org/en/), or for macOS users, by running `brew install node`.

* This week's challenge introduces Node.js and newer ES6 syntax. Encourage students to ask questions about the syntax they are using if they are confused about it.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                          | Recommendation       |
| ----------------------------------- | -------------------- |
| Quitting a Node.js CLI application | Advise students to the the `control + c` command |
| Code modularity | Use VSCode's "Go to definition" feature to help mentally map how files are linked |
| `fs.writeFile()` options | Refer to the nodejs.org documentation for the `fs` module for more information: [fs](https://nodejs.org/api/fs.html) |
| Understanding promises | Refer to the MDN documentation for [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| How to configure `package.json` | Refer to the [npm documentation](https://docs.npmjs.com/files/package.json) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). This CLI application will be something that students can use with their own projects.

[Module 09 Challenge](../../01-Class-Content/09-NodeJS/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Using the `fs` module to read and write files
* Using the `inquirer` package to gather user input
* Ability to implement ES6 arrow functions and array methods
* Ability to use the `.then()` method to chain promises together
* Modularize your code into multiple files
* Ability to use `npm` (Node Package Manager) to initialize a project and install and import Node.js modules
* Ability to use template literals to dynamically generate markdown from the command line

## Heads Up

* Next week you will introduce object-oriented programming. You will cover constructor functions, the `this` keyword, prototypes, ES6 Classes, and `jest` for testing.

* Let your students know that this next module is very concept-heavy! Object-oriented programming can be very difficult to understand at first, but it is crucial in making them employer-competitive. So reassure them that they are not alone in struggling with this topic and that it is perfectly normal to feel a little lost at first.

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
