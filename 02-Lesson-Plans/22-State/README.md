# Module 22 Instructor Overview: State

## Overview

In this module, students will expand their knowledge of state by making use of React's Context API to implement a Redux-like store to manage the state globally. Students will create actions and reducers to manipulate the global state, implement conditional rendering, use React hooks like `useEffect()`, and finally learn how to dispatch actions to update the state.

In this week's virtual classes, you'll go over state management, particularly using the React Context API. You will review how to create actions and reducers, test the reducers, implement global state, and introduce Redux.

| Day | Topic                                                | Location   |
| --- | ---------------------------------------------------- | ---------- |
| 1   | Actions, Reducers, `useReducer` hook                 | 22.1       |
| 1   | Testing Reducers                                     | 22.1, 22.2 |
| 2   | Global State, `createContext` and `useContext` hooks | 22.1, 22.2 |
| 2   | Global State Refactor                                | 22.1       |
| 2   | Redux Documentation                                  | Challenge        |

## Overview of Asynchronous Material

Why are students learning state management?

* State Management is critical to effectively managing the flow of data through a large application to reduce the number of errors encountered when using other solutions like prop-drilling.
* When working on larger-scale or enterprise-level React projects, managing global state using React Context API or a third-party solution like Redux is a critical part of the application's success.
* The initial time investment in setting up global state management pays dividends the larger an application becomes.
* State management expands on the students existing knowledge of state within React applications.
* Having the ability to implement a global state management framework or API allows students to go from employer-ready to employer-competitive.

Throughout the async module this week, students will use state management to do the following:

* Use the React Context API to implement a Redux-like store to manage state globally
* Write Redux-like actions and reducers with the necessary tests in place
* Use global state across multiple React components
* Write reducers that update and delete array items
* Use IndexedDB within a React component
* Generate a checkout session with the Stripe API
* Use the `useLazyQuery` Hook to handle delayed requests

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                  | Key Points                                                        |
| ------ | -------------------------------------------- | ----------------------------------------------------------------- |
| 1      | Create a Global Store                        | Create actions and reducers, implement Context API                |
| 2      | Build the Shopping Cart UI                   | Implement state globally; update & delete arrays w/ reducers      |
| 3      | Add Shopping Cart Persistence with IndexedDB | Use IndexedDB for caching within a component                      |
| 4      | Add Checkout with Stripe                     | Generate checkout session via Stripe API, handle delayed requests |

## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 22.1](./22.1-REQUIRED.md)

* [Virtual Class 22.2](./22.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 22.1](./22.1-RECOMMENDED.md)

* [Virtual Class (Required) 22.2](./22.2-REQUIRED.md)

## Instructor Notes

This last phase of the boot camp is more about being employer-ready, improving the skills they have already learned, and making their web applications more performant and efficient. Students will focus on "Life after the Boot Camp". Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have.

**Important**: to avoid continuous npm installs, all of this week's activities' Solved and Unsolved folders include only a `src` folder. Similar to Module 20, use the given web application [00-React-App](../../01-Class-Content/22-State/01-Activities/00-React-App) and swap out the `src` folder for each activity. It's recommended that you completely restart the dev server between activities.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                             | Recommendation |
| -------------------------------------- | --- |
| Understanding which React Hook to use   | Refer students to the [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html). |
| Knowing when to use global state       | Advise students that not all applications call for the use of global state management. Refer students to the [React Docs on Context](https://reactjs.org/docs/context.html#before-you-use-context).|
| Pure vs. Impure functions              | Advise students that pure functions do not mutate the data that is passed to them, while impure functions do. Refer students to the [Wikipedia Article on Pure Functions](https://en.wikipedia.org/wiki/Pure_function).|
| Choosing between Redux and Context API | Advise students that while Redux and the Context API have some similarities, they are different tools that have differences in their capabilities. If the only thing you need to do is avoid prop-drilling, then the Context API is probably your best choice. When you need to track changes in state over a long period of time, Redux is the better choice. |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will refactor the e-commerce platform they created in this module, replacing the way it handles complex state management using the Context API with Redux, the open-source JavaScript library that it’s emulating. They won’t have to change too much to refactor the application, but they will need to read through the Redux documentation to find the right information.

[Module 22 Challenge](../../01-Class-Content/22-State/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Read and understand third-party documentation to understand how to use a new technology
* Refactor an existing application to use Redux
* Refactor components that use React's Context API, to instead use Redux
* Implement actions and reducers to update state

## Heads-Up

Next week, students will start working on their last group project. Students will have the opportunity to form their own groups for this final project. Before this weekend, students must form project groups and brainstorm project ideas within those groups.

## Resources

* [Project 3 requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md)

* [React Docs on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

* [Create React App Docs on Running Tests](https://create-react-app.dev/docs/running-tests/)

* [React Docs on Context](https://reactjs.org/docs/context.html)

* [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

* [Redux Documentation](https://redux.js.org/)

## Algorithms

* Students will be busy with their final project, so there are no algorithms for this week.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
