# Module 05 Instructor Overview: Third-Party APIs

## Overview

In this module, students will learn how to use third-party APIs, which are libraries or frameworks that allow us to incorporate additional functionality into our web applications. Students will learn how to use three popular APIs: Bootstrap, jQuery, and Moment.js.

In this week's virtual classes, you'll review click events, event delegation, Bootstrap, and jQuery UI.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day  | Topic                  | Location |
| ---  | ---                    | ---      |
| 1    | Click events           | 5.1      |
| 1    | Event delegation       | 5.1      |
| 2    | Bootstrap layout       | 5.2      |
| 2    | Bootstrap utilities    | 5.2      |
| 2    | jQuery UI              | 5.3      |

## Overview of Asynchronous Material

This week in the asynchronous content, students are introduced to third-party APIs, including Bootstrap, jQuery, and Moment.js. These tools are important for the following reasons:

* **Third-party APIs** are libraries or frameworks that allow developers to easily incorporate additional functionality into their web applications. Students will practice implementing these popular APIs and learn how to read third-party documentation.

* **Bootstrap** is a CSS framework that allows us to easily build responsive and functional mobile-first user interfaces using an extensive list of prebuilt components and classes.

* **jQuery** is a lightweight JavaScript library that simplifies routine JavaScript tasks such as event handling, HTML document manipulation, and animation.

* **Moment.js** is a JavaScript library with easy-to-use documentation and a simple set of methods to parse, manipulate, and display date data. Even though Moment.js is no longer actively maintained, using it allows students to practice using a third-party API to manipulate data and to learn about the complexities of handling date and time data in their code.

Throughout the async module this week, students will use third-party APIs to do the following:

* Learn what third-party libraries are and what purposes they serve.

* Implement third-party libraries into an application via a CDN.

* Implement new features using library documentation.

* Implement jQuery methods to easily manipulate the DOM.

* Create a UI using Bootstrap's prebuilt CSS styles.

* Learn about the complexities of date and time functionality in JavaScript, and implement a Web API to make date handling and manipulation easier.

* Implement timed events in JavaScript and use callback functions in `setTimeout()` and `setInterval()`.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson      | Description                    | Key Points                                                                      |
| ---         | ---                            | ---                                                                             |
| 1           | Updating tasks with jQuery     | jQuery methods for DOM manipulation and event handling, `this` keyword          |
| 2           | Bootstrap                      | Responsive layouts using the Bootstrap grid, Bootstrap UI components and classes|
| 3           | Drag-and-drop with jQuery UI   | Draggable elements using jQuery extensions, using third-party documentation     |
| 4           | Working with date and time     | jQuery UI's Datepicker widget, Moment.js, implementing third-party API with CDN |
| 5           | Final UI/UX improvements       | Customizing styles, deploying to GitHub Pages                                   |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [05.1 Virtual Class](./05.1-REQUIRED.md)

* [05.2 Virtual Class](./05.2-REQUIRED.md)

## Instructor Notes

* Take a few minutes before class to get familiar with the [jQuery API documentation](https://api.jquery.com/), [Bootstrap documentation](https://getbootstrap.com/), and [jQuery UI documentation](https://jqueryui.com/), as students will rely heavily on these in class and might need help finding answers. Emphasize that whenever we use a new library, framework, or technology, it's best that we familiarize ourselves with the official documentation as much as possible.

* If students question why they are learning jQuery when they have already learned how to manipulate the DOM using plain JavaScript, tell them that it is due to the longstanding prevalence and popularity of jQuery on the web. Also, knowing how to learn new libraries and measure their benefits is an important skill to have as a developer.

* It's important that students understand that Bootstrap is simply a large stylesheet, and that they already have a lot of the skills needed to use it. If they struggle with certain concepts, jog their memory of learning CSS and suggest that they use Chrome DevTools to decipher the styles being used.

* Make sure you're using the correct versions of jQuery and Bootstrap (v4).

* The module project and weekly Challenge both use Moment.js, which is now considered a legacy project. Tell students that they can still use it, and also suggest alternatives for their date and time needs. You can direct them to the [date-fns website](https://date-fns.org/) or the [MDN Web Docs on Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). The [Moment.js documentation on project status](https://momentjs.com/docs/#/-project-status/) also provides other solutions.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                          | Recommendation                                                          |
| ---                                 | ---                  |
| Using the `this` keyword            | Refer to Lesson 1 or the [MDN Web Docs on this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this). |
| Deploying to GitHub Pages           | Refer to Lesson 5 or the [GitHub Docs on getting started with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages). |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information about career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp/).

## Module Challenge

For the [Module 05 Challenge](../../01-Class-Content/05-Third-Party-APIs/02-Challenge), students will use starter code to build a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the [Moment.js](https://momentjs.com/) library to handle date and time. However, because Moment.js is considered a legacy project, feel free to encourage students to use a different JavaScript solution.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Implement third-party libraries such as Bootstrap, jQuery, and Moment.js.

* Perform DOM traversals and manipulations with jQuery.

* Save user input in local storage using jQuery.

* Work with the Bootstrap grid layout in HTML.

* Work with Bootstrap components.

* Add custom color styles to an existing CSS framework.

* Work with custom fonts and icons via a **content delivery network (CDN)**.

## Heads-Up

* Next week, you'll divide students into groups for their first project. Groups of three are ideal. Create one or two groups of four if the class cannot be divided evenly by three. 

Structure groups so that they include the following mix of students:

  * One advanced student

  * One average student

  * One struggling student

* Next week, you'll introduce server-side APIs using `fetch()`. If you're unfamiliar with `fetch()`, review it before class.

## Resources

The following resources can help you prepare for this week's classes:

* [jQuery documentation on mouse events](https://api.jquery.com/category/events/mouse-events/)

* [jQuery documentation on event delegation](https://learn.jquery.com/events/event-delegation/)

* [Bootstrap documentation on the grid](https://getbootstrap.com/docs/4.5/layout/grid/)

* [Bootstrap documentation on utilities](https://getbootstrap.com/docs/4.5/utilities)

* [jQuery UI documentation on autocomplete](https://jqueryui.com/autocomplete/)

* [jQuery UI documentation on datepicker](https://jqueryui.com/datepicker/)

* [jQuery UI documentation on sortable](https://jqueryui.com/sortable)

## Algorithms

Here are the algorithms for this week:

* [01-fizz-buzz](../../01-Class-Content/05-Third-Party-APIs/03-Algorithms/01-fizz-buzz)

* [02-max-num](../../01-Class-Content/05-Third-Party-APIs/03-Algorithms/02-max-num)

* [03-vowel-count](../../01-Class-Content/05-Third-Party-APIs/03-Algorithms/03-vowel-count)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
