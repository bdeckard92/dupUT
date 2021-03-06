# Module 20 Instructor Overview: React

## Overview

In this module, students are introduced to React and the problems that it solves. Students learn what the virtual DOM is and how it helps make React so performant. Students are also introduced to the concept of reusable component-based development. They learn JSX, conditional rendering, and two of the most critical aspects of React development: props and state. 

Students are also introduced to React Hooks and how to manage local state inside components. Finally, they learn the concept of single-page applications that allow for a full web app experience without ever reloading or leaving the page.

In this week's virtual classes, you'll help students understand what React is and explain the key improvements that it makes to web development compared to older methods. You'll also help students learn to create reusable components rather than monolithic pages. You'll introduce students to JSX and conditional rendering. Most importantly, you'll emphasize the need to understand props and state, two pillars of being a successful React developer.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic                    | Location         |
| --- | ------------------------ | ---------------- |
| 1   | Props                    | 20.3             |
| 1   | State                    | 20.3 - 20.5      |
| 1   | Git Guide                | N/A              |
| 2   | `useEffect` Hook         | 20.3             |
| 2   | Conditional rendering    | 20.3             |
| 2   | React forms              | 20.4             |

## Overview of Asynchronous Material

This week in the asynchronous content, students are learning React, which is important for the following reasons:

* React is important because of its proliferation throughout much of the modern web, being used by the likes of Netflix, Dropbox, Airbnb, and of course Facebook.

* While React isn't the only front-end framework, it is certainly the most popular. As a result, React developers are in high demand.

* React is the final remaining component in the MERN stack that students have been learning.

* React helps us solve the problem of rendering a large amount of data without slowing down the UI.

* React will allow students to build professional single-page applications that they can add to their resumes.

* React allows us to address performance issues associated with making frequent updates to the traditional DOM.

Throughout the async module this week, students will use React to do the following:

* Compose a React application with components.

* Construct the elements of a webpage using JSX.

* Map over collections of data to render multiple instances of a component.

* Set up a test environment and write and run unit tests.

* Use conditional rendering in a React template.

* Manage state in controlled components.

* Use some of the most common React Hooks.

* Write functions for syncing form input values with state, submitting form data, and validating that data.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description                                    | Key Points                                                                   |
| ------ | ---------------------------------------------- | --- |
| 1      | Create React Components                        | Component composition, JSX, debugging errors                                 |
| 2      | Run Unit Tests Using the React Testing Library | Writing tests, formulating snapshots, querying elements, testing principals  |
| 3      | Add Conditional Rendering to the Gallery       | Conditional rendering to display pages, React Hooks, managing state in React |
| 4      | Add a Contact Form                             | React forms, controlled components with state, SPA                           |
| 5      | Modal                                          | `useState` Hook, state management, deployment to GitHub Pages                |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [20.1 Virtual Class](./20.1-REQUIRED.md)

* [20.2 Virtual Class](./20.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* Warn students that we won't be able to teach them all of React. We'll essentially cover the highlights so that they understand the terms and know how to proceed.

* Students might feel a little overwhelmed with the new, unusual syntax. Remind them that ultimately we're still just working with JavaScript. Make sure they understand concepts rather than perfectly memorize syntax. Memorization will come with practice and repetition, so work on instilling concepts early on.

* The first activity for this week will use `npx create-react-app` to create a practice React application `00-practice-app` which will be used for all the activities this week.

* **Important**: In order to avoid continuous npm installs, all of this week's activities' `Solved` `and` Unsolved folders include only a `src` folder. Swap out the `src` folder for each activity in `00-practice-app`. It's recommended that you completely restart the dev server between activities.

* To avoid errors due to conflicting versions of ESLint in the repo, navigate to `00-practice-app` in the command line and run the following command:

  ```sh
  echo "SKIP_PREFLIGHT_CHECK=true" > .env
  ```

* Several activities in this unit require students to import Bootstrap into the `/src/index.js` file. If students ask why their activities do not match the solution, check whether they've done this.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                      |
| ----------------------------------------- | --- |
| Class attributes                          | Remind students to use `className` rather than `class` in JSX elements to avoid namespace conflicts                 |
| Returning more than one component         | Explain that components are just functions and that functions can only have one return value; explain alternatives |
| Mapped elements require a `key` attribute | Explain that React needs a unique `key` so that it can keep track of similar elements                                   |
| Managing state within forms               | Explain that in controlled components, the form reflects state; user input updates state                           |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 20 Challenge](../../01-Class-Content/20-React/02-Challenge/README.md), students will build a single-page portfolio page in React using the skills and techniques covered in the async material. The portfolio page will feature a header area with navigation, a content area, and a footer. The portfolio will contain sections titled "About Me", "Portfolio", "Contact", and "Resume".

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Use Create React App to make the project skeleton.

* Create functional components to contain rendered content.

* Render the visual elements using JSX.

* Use `map()` and `filter()` strategically in components.

* Encapsulate specific functionality using React Hooks like `useState()`

* Use conditional rendering within a template.

* Understand the difference between controlled vs. uncontrolled components.

* Understand how state drives the UI.

* Write and run unit tests on the components.

## Heads-Up

* During the next unit, you will build on React foundations, and guide students through application development using three-layer MERN architecture. You will also introduce students to the GraphQL Playground and Apollo Server. If you are new to the GraphQL and the GraphQL Playground or Apollo Server, please refer to the Apollo docs on GraphQL Playground and the [Apollo docs on introduction to Apollo Server](https://www.apollographql.com/docs/apollo-server/).

* The GraphQL activities require a minimum npm version of 7.0.0 or greater. Prior to class, please be sure to check your npm version and update if needed. Refer to the [NPM docs on updating to latest stable version](https://docs.npmjs.com/try-the-latest-stable-version-of-npm).

* [React Router recently upgraded to version 6](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6) which includes breaking changes with `<Switch>`, `<Redirect>`, and other elements. The content of Module 21 uses React Router version 5. To make sure that students can follow along with activities -- as currently written -- please instruct students to use this npm command to install React Router version 5: `npm install react-router-dom@5`.

* Apollo Server recently migrated to Apollo Server 3. This major-version release impacts how Apollo Server interacts in an Express environment. Apollo Server 2 is currently used in the activities. For the Challenge, students **MUST** use the following script `npm install apollo-server-express@2.15.0` to follow the implementation used in class. Alternately, students can complete the Challenge using the latest version of Apollo Server. Please refer them to the [Apollo Server Docs on Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration/#nodejs) and [Apollo Server Docs on Implementing Apollo Server Express with v3](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express). Note that Apollo Server 3 requires the use of `await server.start()` before calling `server.applyMiddleware`.

## Resources

The following resources can help you prepare for this week's classes:

* [React docs on props](https://reactjs.org/docs/components-and-props.html)

* [React docs on using the State Hook](https://reactjs.org/docs/hooks-state.html)

* [React docs on using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [React docs on conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

* [React docs on forms](https://reactjs.org/docs/forms.html)

## Algorithms

Here are the algorithms for this week:

* [01-maximum-continuous-subarray](../../01-Class-Content/20-React/03-Algorithms/01-maximum-continuous-subarray)

* [02-merge-meeting-times](../../01-Class-Content/20-React/03-Algorithms/02-merge-meeting-times)

* [03-int-to-roman](../../01-Class-Content/20-React/03-Algorithms/03-int-to-roman)

---
?? 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
