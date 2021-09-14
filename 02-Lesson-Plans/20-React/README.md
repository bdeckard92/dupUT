# Module 20 Instructor Overview: React

## Overview

In this module, students will be introduced to React and the problems that it solves. Students will learn what the virtual DOM is and how it helps make React so performant. Students are also introduced to the concept of reusable component-based development. They'll be introduced to JSX, conditional rendering, and two of the most critical aspects of React development: props and state. Students will also be introduced to React Hooks and how to manage local state inside components. Finally, they'll be introduced to the concept of single-page applications that allow for a full web app experience without ever reloading or leaving the page.

In this week's virtual classes, you'll help students understand what React is and explain the key improvements that it makes to web development over older methods. You'll also help students learn to create reusable components rather than monolithic pages. You'll introduce students to JSX and conditional rendering. Most importantly, you'll emphasize the need to understand props and state, two pillars of being a successful React developer.

| Day | Topic                    | Location         |
| --- | ------------------------ | ---------------- |
| 1   | Create React App         | 20.1             |
| 1   | Lists and Keys           | 20.1, 20.3       |
| 2   | `useState` Hook          | 20.3, 20.4, 20.5 |
| 2   | `useEffect` Hook         | 20.3             |
| 2   | Mapping Over Data in JSX | 20.3             |

## Overview of Asynchronous Material

Why are students learning React?

* React is important because of its proliferation throughout much of the modern web, being used by the likes of Netflix, Dropbox, Airbnb, and of course Facebook.

* While React isn't the only front-end framework, it is certainly the most popular. As a result, React developers are in high demand.

* React is the final remaining component in the MERN stack that students have been learning.

* React helps us solve the problem of rendering lots of data without slowing down the UI.

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

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                    | Key Points                                                                   |
| ------ | ---------------------------------------------- | --- |
| 1      | Create React Components                        | Component composition, JSX, debugging errors                                 |
| 2      | Run Unit Tests Using the React Testing Library | Writing tests, formulating snapshots, querying elements, testing principals  |
| 3      | Add Conditional Rendering to the Gallery       | Conditional rendering to display pages, React Hooks, managing state in React |
| 4      | Add a Contact Form                             | React forms, controlled components with state, SPA                           |
| 5      | Modal                                          | `useState` Hook, state management, deployment to GitHub Pages                |

## Virtual Classes

* [Virtual Class 20.1](./20.1-REQUIRED.md)

* [Virtual Class 20.2](./20.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp.

* Warn students that we won't be able to teach them all of React. We'll essentially cover the highlights so that they understand the terms and know how to proceed.

* Students might feel a little overwhelmed with the new, unusual syntax. Remind them that ultimately we're still just working with JavaScript. Make sure they understand concepts rather than perfectly memorize syntax. Memorization will come with practice and repetition, so work on instilling concepts early on.

* **Important**: To avoid continuous npm installs, all of the Solved and Unsolved folders for this week's activities include only a `src` folder. Use the React app provided in [00-React-App](../../01-Class-Content/20-React/01-Activities/00-React-App) and swap out the `src` folder for each activity. It's recommended that you completely restart the dev server between activities.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                      |
| ----------------------------------------- | --- |
| Class attributes                          | Remind students to use `className` rather than `class` in JSX elements to avoid namespace conflicts                 |
| Returning more than one component         | Explain that components are just functions and that functions can only have one return value; explain alternatives |
| Mapped elements require a `key` attribute | Explain that React needs a unique `key` so that it can keep track of similar elements                                   |
| Managing state within forms               | Explain that in controlled components, the form reflects state; user input updates state                           |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

Students will build a single-page portfolio page in React using skills and techniques covered in the async material. The portfolio page will feature a header area with navigation, a content area, and a footer. The portfolio will contain sections titled About Me, Portfolio, Contact, and Resume.

[Module 20 Challenge](../../01-Class-Content/20-React/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

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

* Next week, students will learn about GraphQL. Familiarize yourself with GraphQL, as well as [Apollo](https://www.apollographql.com/) and the GraphQL Playground.

## Resources

* [React Docs on lists and keys](https://facebook.github.io/react/docs/lists-and-keys.html) 

* [React Docs on Hooks](https://reactjs.org/docs/hooks-overview.html)

* [React Docs on using the State Hook](https://reactjs.org/docs/hooks-state.html)

* [React Docs on using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [React Docs on conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)

## Algorithms

* [01-roman-to-int](../../01-Class-Content/20-React/03-Algorithms/01-roman-to-int)

* [02-rotation-point](../../01-Class-Content/20-React/03-Algorithms/02-rotation-point)

* [03-simplify-path](../../01-Class-Content/20-React/03-Algorithms/03-simplify-path)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
