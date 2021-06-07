# Module 20 Instructor Overview: React

## Overview

In this module, students will be introduced to React and the problems that it solves. Students will learn what the virtual DOM is and how it helps make React so performant. Students are also introduced to the concept of reusable component-based development. Students will be introduced to JSX, conditional rendering, and two of the most critical aspects of React development -- props and state. Students will also be introduced to React Hooks and how to manage local state inside components. Finally, students will be introduced to the concept of single-page applications that allow for a full web app experience without ever reloading or leaving the page.

In this week's virtual classes, you will help students understand what React is, and explain the key improvements it makes to web development over older methods. You will also help students learn to create reusable components rather than monolithic pages. You will introduce students to JSX and conditional rendering. Most importantly, you will emphasize the need to understand props and state, two pillars of being a successful React developer.

| Day | Topic                    | Location         |
| --- | ------------------------ | ---------------- |
| 1   | `create-react-app`       | 20.1             |
| 1   | Lists and Keys           | 20.1, 20.3       |
| 2   | `useState` hook          | 20.3, 20.4, 20.5 |
| 2   | `useEffect` hook         | 20.3             |
| 2   | Mapping over data in JSX | 20.3             |

## Overview of Asynchronous Material

Why are students learning React?

* Learning React is important for students because of its proliferation throughout much of the modern web, being used by the likes of Netflix, Dropbox, Airbnb, and of course, Facebook.

* Students will learn React because, while it isn't the only front-end framework, it is certainly the most popular. As a result, React developers are in high demand.

* Students need to learn to React to complete the last component in the MERN stack that they have been incrementally mastering.

* Students will learn React to solve the problem of rendering lots of data without slowing down the UI.

* Learning React will allow students to build professional single-page applications that they can add to their resumes.

* Learning React will allow students to address performance issues associated with making frequent updates to the traditional DOM.

Throughout the async module this week, students will use React to do the following:

* Compose a React application with components.

* Construct the elements of a webpage using JSX.

* Map over collections of data to render multiple instances of a component.

* Set up a test environment and write and run unit tests.

* Use conditional rendering in a React template.

* Manage state in controlled components.

* Use some of the most common React hooks.

* Write functions for syncing form input values with state, submitting form data, and validating that data.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                    | Key Points                                                                   |
| ------ | ---------------------------------------------- | --- |
| 1      | Create React Components                        | Component composition, JSX, debugging errors                                 |
| 2      | Run Unit Tests Using the React Testing Library | Writing tests, formulating snapshots, querying elements, testing principals  |
| 3      | Add Conditional Rendering to the Gallery       | Conditional rendering to display pages, React hooks, managing state in React |
| 4      | Add a Contact Form                             | React forms, controlled components with state, SPA                           |
| 5      | Modal                                          | `useState` hook, state management, deployment to GitHub pages                |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 20.1](./20.1-REQUIRED.md)

* [Virtual Class 20.2](./20.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 20.1](./20.1-RECOMMENDED.md)

* [Virtual Class (Required) 20.2](./20.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp is more about being employer-ready, improving the skills they have already learned, and making their web applications more performant and efficient. Students will focus on "Life after Boot Camp".

* Let students know that we won't be able to teach them all of React in the amount of time we have. Our role is essentially to give them the high points so they understand the terms and know how to proceed.

* Students may feel a little overwhelmed with the new unusual syntax. Remind them that at the end of the day, we're still just working with JavaScript. Prioritize making sure they understand concepts, rather than worrying about them perfectly memorizing syntax. Memorization will come with practice and repetition, so work on instilling concepts early on.

* **Important**: To avoid continuous npm installs, all of this week's activities' Solved and Unsolved folders include only a `src` folder. Use the given React app [00-React-App](../../01-Class-Content/20-React/01-Activities/00-React-App) and swap out the `src` folder for each activity. It's recommended that you completely restart the dev server between activities.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                      |
| ----------------------------------------- | --- |
| Class attributes                          | Remind students to use `className` rather than `class` in JSX elements to avoid namespace conflicts                 |
| Returning more than one component         | Explain that components are just functions and that functions can only have one return value. Explain alternatives. |
| Mapped elements require a `key` attribute | Explain that React needs a unique `key` so it can keep track of similar elements.                                   |
| Managing state within forms               | Explain that in controlled components, the form reflects state. User input updates state.                           |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will build a single-page portfolio page in React using skills and techniques covered in the async material. The portfolio page will feature a header area with navigation, a content area, and a footer. The areas of the portfolio will be: About Me, Portfolio, Contact, and Resume.

[Module 20 Challenge](../../01-Class-Content/20-React/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Use `create-react-app` to make the project skeleton
* Create functional components to contain rendered content
* Use JSX to render the visual Elements
* Use `.map()` and `.filter()` strategically in components
* Use React Hooks, like `useState()` to encapsulate specific functionality
* Use conditional rendering within a template
* Understand the difference between controlled vs uncontrolled components
* Understand how state drives the UI
* Write and run unit tests on the components

## Heads-Up

Next week, students will learn about GraphQL. Familiarize yourself with GraphQL, as well as [Apollo](https://www.apollographql.com/) and the GraphQL Playground.

## Resources

* [React Docs on Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html) 

* [React Docs on Hooks](https://reactjs.org/docs/hooks-overview.html)

* [React Docs on Using the State Hook](https://reactjs.org/docs/hooks-state.html)

* [React Docs on Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [React Docs on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html)

## Algorithms

* [01-roman-to-int](../../01-Class-Content/20-React/03-Algorithms/01-roman-to-int)

* [02-rotation-point](../../01-Class-Content/20-React/03-Algorithms/02-rotation-point)

* [03-simplify-path](../../01-Class-Content/20-React/03-Algorithms/03-simplify-path)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
