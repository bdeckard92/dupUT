# Module 04 Instructor Overview: Web APIs

## Overview

In this module, students will learn about application programming interfaces (APIs). The term API can be used to refer to an interface that allows students to fetch data from a third-party like GitHub and IMDB, but it can also refer to the interface that is exposed via modern web browsers. For this unit, we refer to the latter as Web APIs. Students will use Web APIs to create dynamic, interactive web applications by taking advantage of Objects included with modern web browsers. Students will also learn about the document object model, or DOM, and how to traverse through it using built-in methods and Objects.

In this week's virtual classes, you'll review DOM manipulation and traversal, event handling, timers, and `localStorage`.

| Day | Topic            | Location |
| --- | ---------------- | -------- |
| 1   | DOM Manipulation | 4.1, 4.3 |
| 1   | addEventListener | 4.1, 4.2 |
| 2   | Timers           | 4.1      |
| 2   | localStorage     | 4.4      |

## Overview of Asynchronous Material

Why are students learning Web APIs?

* Web APIs allow students to create dynamic web apps
* APIs allow students to interact with the DOM easier
* Using Web APIs encourages students to acquaint themselves with reading documentation, which by itself is an important skill for a developer
* The term API is used to describe different things depending on the context, and it is important to understand the difference

Throughout the async module this week, students will use Web APIs to do the following:

* Explain and identify the document object and its relationship to HTML
* Use the window object for local and session storage
* Use DOM API methods to select and dynamically generate HTML elements and content
* Use DOM API methods to handle events such as key presses and mouse clicks
* Set time-based events using time functions
* Write event-driven functions
* Research Web API documentation to implement new and unfamiliar interfaces

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description   | Key Points                                                                                   |
| ------ | ------------- | -------------------------------------------------------------------------------------------- |
| 1.     | DOM           | HTML and CSS, DOM as it relates to HTML, DOM API methods to handle clicks                    |
| 2.     | Forms         | Create forms with select inputs, handle form submission, overriding default browser behavior |
| 3.     | Update/Delete | DOM methods create and select HTML elements, DOM traversal                                   |
| 4.     | Persistence   | `localStorage`, data persistence, deployment to GitHub pages                                 |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 04.1](./04.1-REQUIRED.md)

* [Virtual Class 04.2](./04.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 04.1](./04.1-RECOMMENDED.md)

* [Virtual Class (Required) 04.2](./04.2-REQUIRED.md)

## Instructor Notes

* This week's content will help students understand the purpose of JavaScript in front-end web development. But the DOM can be a challenging concept to immediately understand. Emphasize the role of objects in both the DOM and JavaScript to reinforce the connection and feel free to modify and improvise activities to demonstrate the dozens of methods and approaches available.

* Students do not use timers in the module project, but they will need to use timers for the module Challenge. Be prepared to help the students if they have questions as they do the activity on timers.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point            | Recommendation                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Timers                | Refer students to [MDN Web API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout). |
| DOM as an object      | Advise students that the DOM simultaneously refers to the structure of page elements and an Object that we can interact with.         |
| Objects as interfaces | Demonstrate to the students that logging the `window` object in the developer console will help them visualize the available methods. |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will apply to them in their future careers.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will build a multiple-choice quiz that runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. Students will ensure that the app features a polished user interface that adapts to multiple screen sizes.

[Module 04 Challenge](../../01-Class-Content/04-Web-APIs/02-Challenge/README.md)

Specific skills students will need to implement to be successful:

* Selecting elements on the page using the `document` object
* Creating timers using `setInterval()`
* Clearing interval timers
* Creating content using JavaScript with `createElement()`
* Dynamically updating the content on the pages
* Storing data in the browser's local storage

## Heads-Up

Next week, you will review Bootstrap, jQuery, and Moment.js. If these are new or it's been a while, you will want to find time to review and/or brush up before class.

## Resources

* [MDN Web Docs on the Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

* [MDN Web Docs on addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

* MDN Web Docs on [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) and [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

* [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Algorithms

* [01-log-even-nums](../../01-Class-Content/04-Web-APIs/03-Algorithms/01-log-even-nums)

* [02-countdown](../../01-Class-Content/04-Web-APIs/03-Algorithms/02-countdown)

* [03-sum-array](../../01-Class-Content/04-Web-APIs/03-Algorithms/03-sum-array)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
