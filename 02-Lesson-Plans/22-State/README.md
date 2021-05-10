# Module 22 Instructor Overview: State

## Overview

In this module, students will be working with State Management in React, specifically with the Reacxt Context API. Students will create actions and reducers, test the reducers, implement global state, and also be exposed to Redux.

In this week's virtual classes, you will help students understand how to implement actions and reducers, test reducers, and then how to reactor global state from the React Context API to Redux.

| Day | Topic                                           | Location         |
| --- | ------------------------------------------------| ---------------- |
| 1   | Actions and Reducers                            | 22.1             |
| 1   | `useReducers` hook                              | 22.1             |
| 1   | Test Reducers                                   | 22.2             |
| 2   | Global State                                    | 22.3, 22.4, 20.5 |
| 2   | `createContext` and `useContext` hooks          | 22.3             |
| 2   | Global State refactor                           | 22.6             |
| 2   | Redux Docs                                      | 22.9             |

## Overview of Asynchronous Material

Why are students learning State Management?

* State Management is critical to effectively managing the flow of data through a large application. Other solutions, such as prop-drilling, are extremely limited when applied to larger-scope projects and can introduce errors. 

* When working on larger-scale or enterprise-level React projects, managing global state -- either with the React Context API or a third-party solution like Redux -- is a critical part of the application's success.

Throughout the async module this week, students will use React to do the following:

* Use the React Context API to implement a Redux-like store to manage state globally.
* Write Redux-like actions and reducers with the necessary tests in place.
* Use global state across multiple React components.
* Write reducers that update and delete array items.
* Use IndexedDB within a React component
* Generate a checkout session with the Stripe API.
* Use the `useLazyQuery` Hook to handle delayed requests.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                    | Key Points                                                                   |
| ------ | ---------------------------------------------- | --- |
| 1      | Use Reducers and Context API to refactor state | Create actions and reducers; implement Context API                           |
| 2      | Global state; advanced reducers                | Implement state globally; update & delete arrays w/ reducers                 |
| 3      | Use IndexedDB within a React component         | Use IndexedDB for caching within a component                                 |
| 4      | Handling checkout and payment processing       | Generate checkout session via Stripe API, handle delayed requests            |


## Virtual Classes

If your class started AFTER January 1, 2021, use these lesson plans:

* [Virtual Class 22.1](./22.1-REQUIRED.md)

* [Virtual Class 22.2](./22.2-REQUIRED.md)

If your class started BEFORE January 1, 2021, use these lesson plans:

* [Virtual Class (Recommended) 22.1](./22.1-RECOMMENDED.md)

* [Virtual Class (Required) 22.2](./22.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp is more about being employer-ready, improving the skills they have already learned, and making their web applications more performant and efficient. Students will focus on "Life after Boot Camp".

* Be sure to prepare and read over the activities before your class begins. Try to anticipate any questions students may have. 

* **Important**: In order to avoid continuous npm installs, all of this week's activities' Solved and Unsolved folders include only a `src` folder. Similar to Module 20, use the given web application [00-React-App](../../01-Class-Content/22-State/01-Activities/00-React-App) and swap out the `src` folder for each activity. It's recommended that you completely restart the dev server between activities.

* The `05-Redux-Docs` activity is unique in that it isn't only a coding activity. In order to prepare the students for the Challenge and also their career, the activity is about examining the official Redux Documentation. Emphasize to the students how important it is for them to be able to sift through documentation to find the right information that addresses the specific problem they're trying to solve at their jobs.

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                                | Recommendation                                                                                                      |
| ----------------------------------------- | --- |
| What is the Context API?                   | Explain that the Context API is React's built-in method of providing global state management. |
| What is a reducer?                          | Explain that a reducer is a function that acceptw two arguments: the current state, and an action. It then returns a new state based on the action specified.                 |
| What is a pure function?         | Explain that pure functions do not mutate the data passed into them; instead they make a copy, change that, and return a new set of data |
| What is Redux? | Explain that Redux is a third-party library that uses reducers as a mechanism for managing state. We pass state into Redux along with am action we want to dispatch, and Redux returns a new state for our app  |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).

## Module Challenge

Students will refactor the e-commerce platform they created in this module, replacing the way it handles complex state management using the Context API with Redux, the open-source JavaScript library that it’s emulating. They won’t have to change too much to refactor the application, but they will need to read through the Redux documentation to find the right information.

[Module 22 Challenge](../../01-Class-Content/22-State/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Refactor a Context API site to one using Redux
* Create actions and reducers
* Use reducers to update state

## Heads-Up

Make sure students understand that, in the Module Challenge, they are not refactoring the core functionality; just the state management.

## Resources

* [Project requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md)

* [React Docs on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

* [Create React App Docs on Running Tests](https://create-react-app.dev/docs/running-tests/)

* [React Docs on Context](https://reactjs.org/docs/context.html)

* [React Docs on useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

* [Redux Documentation](https://redux.js.org/)

## Algorithms

* Students will be busy with their final project, so there are no algorithms for this week.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
