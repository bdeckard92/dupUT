# Module 19 Instructor Overview: Progressive Web Applications (PWA)

## Overview

This week, students will focus on measuring and optimizing the performance of web applications. They'll use Chrome DevTools and Google Lighthouse to measure web application performance and perform several optimizations that involve compressing assets&mdash;from minifying JavaScript and CSS files to compressing images. They'll also use a technique called **lazy loading** to defer loading certain assets until they're needed by the application. Finally, they'll learn about Webpack, a module bundler for JavaScript.

In this week's virtual classes, you'll cover PWAs, primarily focusing on Webpack and service workers.


| Day  | Topic                      | Location   |
| ---  | ---                        | ---        |
| 1    | PWA                        | 19.4, 19.5 |
| 1    | Webpack                    | 19.2       |
| 2    | Service Workers            | 19.4       |
| 2    | Caching Fetching Files     | 19.4       |
| 2    | Service Workers, Manifest  | 19.4, 19.5 |

## Overview of Asynchronous Material 

Why are students learning progressive web applications (PWAs)?

* PWAs combine the best features of web and mobile apps. While native apps require ongoing updates, reviews, and sharing profits with app stores, PWAs simplify the process with a single app that works on both web and mobile, all without requiring the user to download an app from an app store. This greatly reduces user acquisition and maintenance costs while making the app more easily available to a greater number of users.

* Performance optimization is crucial to building apps that reduce lag and provide a good experience for every user.

* Service workers ensure that applications work without an internet connection. Learning about them will introduce students to offline caching strategies.

* Chrome DevTools and Google Lighthouse will introduce students to performance-based metrics such as application bundle size, time to interaction, time to first meaningful paint, and more.

* The lazy loading technique allows students to defer loading certain assets in their apps until they're needed by the application.

* Webpack is a widely used module bundler for JavaScript that allows students to automate optimizations and build more performant apps.

Throughout the async module this week, students will use PWAs to do the following:

* Identify performance bottlenecks in web applications.

* Explain how performance can be measured in web applications.

* Explain the five main categories measured in a Lighthouse audit.

* Optimize CSS, JavaScript, and media assets for performance.

* Set up Webpack in a new front-end project.

* Cache assets for offline functionality using service workers.

* Convert an existing web application to a PWA.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson           | Description                        | Key Points                                                                        |
| ---              | ---                                | ---                                                                               |
| 1                | Auditing Application Performance   | Google Lighthouse, minifying files, lazy-loading files                     |
| 2                | Introduction to Webpack            | Bundle JavaScript files, modify the `webpack.config` file, Webpack dependency graphs  |
| 3                | Optimizing JavaScript              | Add reporting tools with plugin, split code for lazy loading, compress images     |
| 4                | Using Service Workers              | Register and activate a service worker, intercept fetch requests                  | 
| 5                | Convert the App Into a PWA         | Dynamically create and use a `manifest.json` file                                   |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 19.1](./19.1-REQUIRED.md)

* [Virtual Class 19.2](./19.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 19.1](./19.1-RECOMMENDED.md)

* [Virtual Class (Required) 19.2](./19.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* Progressive web apps aim to blend the benefits of a traditional browser experience with those of a mobile application. For an overview of the PWA design pattern, refer to the [MDN Web Docs on progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

* Warn students that we won't be able to teach them every aspect of progressive web applications in the amount of time allotted. Instead, help students understand PWAs as a valuable design pattern that emphasizes measuring and optimizing the performance of web applications, and encourage students to further explore these concepts when they develop apps on their own.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                          | Recommendation       |
| ---                                 | ---                  |
| Understanding PWAs                  | Refer to Lesson 5 or the [MDN Web Docs on progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)                 |
| Service workers                     | Refer to Lesson 4 or the [MDN Web Docs on using service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) |
| Webpack | Refer to Lesson 2 or the [Webpack documentation on getting started](https://webpack.js.org/guides/getting-started/) |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

In this week's Challenge assignment, students will convert an existing budget tracker application to allow for offline access and functionality, so that users can log expenses and deposits to their budget with or without an internet connection.

[Module 19 Challenge](../../01-Class-Content/19-PWA/02-Challenge)

Specific skills students will need to implement in order to be successful:

* Cache assets for offline functionality using service workers.

* Convert an existing web application to a PWA.

* Add a web manifest to an application.

## Heads-Up

* Next week, students will learn about [React](https://reactjs.org/), a JavaScript library for building user interfaces. Students might feel a little overwhelmed with the new, unusual syntax. Remind them that ultimately we're still just working with JavaScript. Make sure they understand concepts rather than perfectly memorize syntax.

## Resources

* [MDN Web Docs on progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

* [Webpack documentation on getting started](https://webpack.js.org/guides/getting-started/)

* [MDN Web Docs on using service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

## Algorithms

* [01-maximum-continuous-subarray](../../01-Class-Content/19-PWA/03-Algorithms/01-maximum-continuous-subarray)

* [02-merge-meeting-times](../../01-Class-Content/19-PWA/03-Algorithms/02-merge-meeting-times)

* [03-int-to-roman](../../01-Class-Content/19-PWA/03-Algorithms/03-int-to-roman)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.
