# Module 22 Instructor Overview: State

## Overview

In this module, students will expand their knowledge of state by using the React Context API to implement a Redux-like store to manage state globally. Students will create actions and reducers to manipulate the global state, and finally learn how to dispatch actions to update state.

In this week's virtual classes, you'll cover state management, particularly using the React Context API. You'll review how to use providers, consumers, reducers, and actions.

| Day | Topic                                                | Location   |
| --- | ---------------------------------------------------- | ---------- |
| 1   | Providers                                            | 22.1       |
| 1   | Consumers                                            | 22.1       |
| 1   | Git Guide                                            | N/A        |
| 2   | Reducers                                             | 22.1       |
| 2   | Actions                                              | 22.1       |
| 2   | `useReducer` Hook                                    | 22.1       |

## Overview of Asynchronous Material

Why are students learning state management?

* State management is critical to effectively managing the flow of data through a large application, to reduce errors when using other solutions like prop drilling.

* When working on larger-scale or enterprise-level React projects, managing global state using the React Context API or a third-party solution like Redux is a critical part of the application's success.

* The larger an application becomes, the initial time investment in setting up global state management pays dividends.

* State management expands on the students' existing knowledge of state within React applications.

* Having the ability to implement a global state management framework or API allows students to go from employer-ready to employer-competitive.

Throughout the async module this week, students will use state management to do the following:

* Implement a Redux-like store to manage state globally using the React Context API.

* Write Redux-like actions and reducers with the necessary tests in place.

* Use global state across multiple React components.

* Write reducers that update and delete array items.

* Use IndexedDB within a React component.

* Generate a checkout session with the Stripe API.

* Handle delayed requests using the `useLazyQuery` Hook.

**Reminder**: If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.

| Lesson | Description                                  | Key Points                                                        |
| ------ | -------------------------------------------- | ----------------------------------------------------------------- |
| 1      | Create a Global Store                        | Create actions and reducers, implement Context API                |
| 2      | Build the Shopping Cart UI                   | Implement state globally; update and delete arrays with reducers  |
| 3      | Add Shopping Cart Persistence with IndexedDB | Use IndexedDB for caching within a component                      |
| 4      | Add Checkout with Stripe                     | Generate checkout session via Stripe API, handle delayed requests |

## Virtual Classes

* [Virtual Class 22.1](./22.1-REQUIRED.md)

* [Virtual Class 22.2](./22.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. Basically, students will focus on life after boot camp. Think about the questions you had when preparing for your job search, and try to anticipate any questions that students might have.

* **Important**: React Router recently [upgraded to version 6](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6) which includes breaking changes with `<Switch>`, `<Redirect> ` and other elements. The content of this week's in-class and module activities uses React Router version 5. To make sure that students can follow along with activities -- as currently written -- please instruct students to use this npm command to install React Router version 5: `npm install react-router-dom@5`.

* The first activity for this week will use `npx create-react-app` to create a practice React application `00-practice-app` that will be used for all the activities this week.

* **Important**: In order to avoid continuous NPM installs, all of this week's activities' Solved and Unsolved folders include only a `src` folder. Swap out the `src` folder for each activity in `00-practice-app`. It's recommended that you completely restart the dev server between activities.

* To avoid errors due to conflicting versions of ESLint in the repo, navigate to `00-practice-app` in the command line and run the following command:

  ```sh
  echo "SKIP_PREFLIGHT_CHECK=true" > .env
  ```

* In the state management activities, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documention to find information on specific issues and then apply that information to their own code.

* Information about the final group project, Project 03, must go out during this week's second virtual class!

  * This time, students will self-assign themselves into groups of 3. Be ready to step in and help out with making groups as necessary.

  * Review the [project requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md).

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                             | Recommendation                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | ---                                                                                                                                                                                                                                                                                                                                            |
| Understanding which React Hook to use  | Refer students to the [React documentation on Hooks](https://reactjs.org/docs/hooks-intro.html).                                                                                                                                                                                                                                               |
| Knowing when to use global state       | Advise students that not all applications call for the use of global state management. Refer students to the [React documentation on Context](https://reactjs.org/docs/context.html#before-you-use-context).                                                                                                                                   |
| Pure vs. Impure functions              | Advise students that pure functions do not mutate the data that is passed to them, while impure functions do. Refer students to the [Wikipedia page on pure functions](https://en.wikipedia.org/wiki/Pure_function).                                                                                                                           |
| Choosing between Redux and Context API | Advise students that while Redux and the Context API have some similarities, they are different tools with different capabilities. If the only thing you need to do is avoid prop drilling, then the Context API is probably your best choice. When you need to track changes in state over a long period of time, Redux is the better choice. |

## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with career services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

Students will refactor the e-commerce platform they created in this module, updating the way it handles complex state management using the Context API and changing it to Redux, the open source JavaScript library that it’s emulating. They won’t have to change too much to refactor the application, but they'll need to read through the Redux documentation to find the right information.

[Module 22 Challenge](../../01-Class-Content/22-State/02-Challenge/README.md)

Specific skills students will need to implement in order to be successful:

* Read and understand third-party documentation to understand how to use a new technology.

* Refactor an existing application to use Redux.

* Refactor components that use the React Context API, to instead use Redux.

* Implement actions and reducers to update state.

## Heads-Up

* Next week, students will begin work on their final projects. These projects are student-driven; they will be responsible for forming their own teams, brainstorming app ideas, and developing a full-stack app. Encourage students to start forming groups and brainstorming ideas for their apps, and be prepared to help anyone who is struggling to find a group or project idea.

* There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

## Resources

* [Project requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md)

* [React documentation on Context.Provider](https://reactjs.org/docs/context.html#contextprovider)

* [React documentation on useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

* [Redux Docs on reducers](https://redux.js.org/faq/reducers/)

* [Redux Docs on actions](https://redux.js.org/faq/actions/)

* [React documentation on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

* [Redux documentation](https://redux.js.org/)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
