# Module 04 Instructor Overview: Web APIs

## Overview

In this module, students learn about application programming interfaces, or APIs. The term "API" can refer to an interface that allows students to fetch data from a third party, such as GitHub or IMDB. "API" can also refer to the web interface that is exposed via modern web browsers (i.e., the Web API). For this module, students will use Web APIs to create dynamic, interactive web applications by taking advantage of objects included with modern web browsers. Students will also learn about the Document Object Model, or DOM, and how to traverse it using built-in methods and objects.

In this week's virtual classes, you'll review creating and appending to the DOM using JavaScript, initializing event listeners, timers, data attributes, and `localStorage`.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic                                   | Location |
| --- | --------------------------------------- | -------- |
| 1   | Create and append to the DOM            | 4.1 - 4.3|
| 1   | `addEventListener()`                    | 4.1 - 4.3|
| 2   | Timers                                  | n/a      |
| 2   | Data attributes                         | 4.3      |
| 2   | `localStorage`                          | 4.4      |

## Overview of Asynchronous Material

Why are students learning Web APIs?

* Web APIs allow students to create dynamic web apps that respond to user input.

* APIs allow students to interact with the DOM easier.

* Using Web APIs encourages students to acquaint themselves with reading documentation, which is an important skill for all developers.

* Learning Web APIs will help students differentiate between APIs that are built into the web browser and those that are provided by other libraries or third-party services.

Throughout the async module this week, students will use Web APIs to do the following:

* Explain and identify the `document` object and its relationship to HTML.

* Use the `window` object for local and session storage.

* Use DOM API methods to select and dynamically generate HTML elements and content.

* Use DOM API methods to handle events, such as key presses and mouse clicks.

* Set time-based events using time functions.

* Write event-driven functions.

* Research Web API documentation to implement new and unfamiliar interfaces.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description           | Key Points                                                                                       |
| ------ | --------------------- | ------------------------------------------------------------------------------------------------ |
| 1      | The DOM               | HTML and CSS, DOM as it relates to HTML, DOM API methods to handle clicks                        |
| 2      | Work with forms       | Creating forms with select inputs, handling form submission, overriding default browser behavior |
| 3      | Edit and delete tasks | DOM methods, creating and selecting HTML elements, DOM traversal                                 |
| 4      | Add task persistence  | `localStorage`, data persistence, deploying to GitHub Pages                                      |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [Virtual Class 04.1](./04.1-REQUIRED.md)

* [Virtual Class 04.2](./04.2-REQUIRED.md)

## Instructor Notes

* This week's content will help students understand the purpose of JavaScript in front-end web development. The DOM can be a challenging concept to immediately understand. Emphasize the role of objects in both the DOM and JavaScript to reinforce the connection, and feel free to modify and improvise activities to demonstrate the dozens of methods and approaches available.

* Students do not use timers in the module project, but they do need to use timers for the Challenge. Therefore, they might need extra guidance during the virtual classes on this topic. Be prepared to help the students if they have questions when they do the activity on timers.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point            | Recommendation                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Timers                | Refer students to the [MDN Docs for setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout). |
| DOM as an object      | Advise students that the DOM simultaneously refers to the structure of page elements and an object that they can interact with.             |
| Objects as interfaces | Demonstrate to the students that logging the `window` object in the developer console will help them visualize the available methods.       |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 04 Challenge](../../01-Class-Content/04-Web-APIs/02-Challenge/README.md), students will build a multiple-choice quiz that runs in the browser and features dynamically updated HTML. The quiz uses CSS for styling and is powered by JavaScript code. Students will ensure that the app features a polished user interface that adapts to multiple screen sizes.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Selecting elements on the page using the methods available on the `document` object

* Creating timers using `setInterval()`

* Clearing interval timers

* Creating content using JavaScript with `createElement()`

* Dynamically updating the content on the pages

* Storing data in the browser's `localStorage`

## Heads-Up

Next week, you will cover Bootstrap, jQuery, and Moment.js. If these are new to you or it's been a while since you've used them, be sure to review the activities in advance.

## Resources

The following resources can help you prepare for this week's classes:

* [MDN Web Docs on the Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

* [MDN Web Docs on createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

* [MDN Web Docs on appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

* [MDN Web Docs on addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

* [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

* [MDN Web Docs on clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

* [MDN Web Docs on using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

* [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Algorithms

Here are the algorithms for this week:

* [01-log-even-nums](../../01-Class-Content/04-Web-APIs/03-Algorithms/01-log-even-nums)

* [02-countdown](../../01-Class-Content/04-Web-APIs/03-Algorithms/02-countdown)

* [03-sum-array](../../01-Class-Content/04-Web-APIs/03-Algorithms/03-sum-array)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
