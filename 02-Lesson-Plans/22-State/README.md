# Module 22 Instructor Overview: State

## Overview

In this module, students will expand their knowledge of state by using the React Context API in order to implement a Redux-like store to manage state globally. Students will create actions and reducers to manipulate the global state, and learn how to dispatch actions to update state.

In this week's virtual classes, you'll review state management, particularly using the React Context API. You'll review how to use providers, consumers, reducers, and actions.

The following table maps the key topics covered in the virtual lessons to where they are taught in the asynchronous content:

| Day | Topic                                                | Location   |
| --- | ---------------------------------------------------- | ---------- |
| 1   | Providers                                            | 22.1       |
| 1   | Consumers                                            | 22.1       |
| 1   | Git Guide                                            | N/A        |
| 2   | Reducers                                             | 22.1       |
| 2   | Actions                                              | 22.1       |
| 2   | `useReducer` Hook                                    | 22.1       |

## Overview of Asynchronous Material

This week, students are learning about state management, which is important for the following reasons:

* State management is critical to effectively managing the flow of data through a large application, to reduce errors when using other solutions like prop drilling.

* When working on larger-scale or enterprise-level React projects, managing global state using the React Context API or a third-party solution like Redux is a critical part of the application's success.

* The larger an application becomes, the more the initial time investment in setting up global state management pays off.

* State management expands on the students' existing knowledge of state within React applications.

* Having the ability to implement a global state management framework or API allows students to go from employer-ready to employer-competitive!

Throughout the async module this week, students will use state management to do the following:

* Implement a Redux-like store to manage state globally using the React Context API.

* Write Redux-like actions and reducers with the necessary tests in place.

* Use global state across multiple React components.

* Write reducers that update and delete array items.

* Use IndexedDB within a React component.

* Generate a checkout session using the Stripe API.

* Handle delayed requests using the `useLazyQuery` Hook.

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours. If they need more help, remind them that they can use Learning Assistants via the AskBCS bot.

The following table contains a description of each lesson's portion of the module project and the corresponding key points that are taught:

| Lesson | Description                                  | Key Points                                                        |
| ------ | -------------------------------------------- | ----------------------------------------------------------------- |
| 1      | Create a Global Store                        | Create actions and reducers, implement Context API                |
| 2      | Build the Shopping Cart UI                   | Implement state globally, update and delete arrays with reducers  |
| 3      | Add Shopping Cart Persistence with IndexedDB | Use IndexedDB for caching within a component                      |
| 4      | Add Checkout with Stripe                     | Generate checkout session via Stripe API, handle delayed requests |

## Virtual Classes

Here are the lesson plans for this week's virtual classes:

* [22.1 Virtual Class](./22.1-REQUIRED.md)

* [22.2 Virtual Class](./22.2-REQUIRED.md)

## Instructor Notes

* This last phase of the boot camp focuses on being employer-ready, improving the skills that students have already learned, and making web applications more performant and efficient. The focus starts to shift to life after boot camp. Think about the questions you had when preparing for your job search as you try to anticipate any questions that students might have.

* **Important**: [React Router recently upgraded to version 6](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6), which includes important changes to `<Switch>`, `<Redirect> `, and other elements. The content of this week's in-class and module activities uses React Router version 5. To make sure that students can follow along with activities (as currently written), please instruct students to use the following npm command to install React Router version 5: `npm install react-router-dom@5`.

* The first activity for this week will use `npx create-react-app` to create a practice React application `00-practice-app` that will be used for all the activities this week.

* **Important**: In order to avoid continuous npm installs, all of this week's activities' `Solved` and `Unsolved` folders include only a `src` folder. For each activity, swap out the `src` folder in `00-practice-app`. It is recommended that you completely restart the dev server between activities.

* To avoid errors due to conflicting versions of ESLint in the repo, navigate to `00-practice-app` in the command line and run the following command:

  ```sh
  echo "SKIP_PREFLIGHT_CHECK=true" > .env
  ```

* In the state management activities, emphasis is placed on having the students refer to the documentation. Explain that on the job, it is important to be able to use documentation to find information on specific issues and then apply that information to their own code.

* You must communicate information about the final group project, Project 03, during this week's second virtual class:

  * For this project, students will self-assign themselves into groups of three. Be ready to step in and help create groups as necessary.

  * Review the [project requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md).

### Common Pain Points

According to our class data, students might experience some of the following pain points throughout the week:

| Pain Point                             | Recommendation                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------- | ---                                                                                                                                                                                                                                                                                                                                            |
| Understanding which React Hook to use  | Refer students to the [React Docs on Hooks](https://reactjs.org/docs/hooks-intro.html).                                                                                                                                                                                                                                               |
| Knowing when to use global state       | Advise students that not all applications call for the use of global state management. Refer students to the [React Docs on Context](https://reactjs.org/docs/context.html#before-you-use-context).                                                                                                                                   |
| Pure vs. impure functions              | Advise students that pure functions do not mutate the data that is passed to them, whereas impure functions do. Refer students to the [Wikipedia page on pure functions](https://en.wikipedia.org/wiki/Pure_function).                                                                                                                           |
| Choosing between Redux and Context API | Advise students that while Redux and the Context API have some similarities, they are different tools with different capabilities. If the only thing you need to do is avoid prop drilling, then the Context API is probably your best choice. When you need to track changes in state over a long period of time, Redux is the better choice. |

## Career Connection

The first virtual class of the week contains a Career Connection section, which links the current module's coursework with career services and students' future careers. During this section, it can be helpful to share examples of how you've used these skills and tools in your professional life.

Remind students that they should reach out to their Career Coach and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for career services workshops](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

If you'd like more information on career services, visit the [career services resources page](https://careernetwork.2u.com/?utm_medium=Academics&utm_source=boot_camp).

## Module Challenge

For the [Module 22 Challenge](../../01-Class-Content/22-State/02-Challenge/README.md), students will refactor the e-commerce platform that they created in this module, updating the way it handles complex state management from using the Context API to using Redux, the open source JavaScript library that it’s emulating. They won’t have to change too much code in order to refactor the application, but they'll need to read through the Redux documentation to find out how to do it.

Students must know how to implement the following skills in order to succeed in this week's Challenge:

* Read and understand third-party documentation to understand a new technology.

* Refactor an existing application to use Redux.

* Refactor components that use the React Context API to use Redux instead.

* Implement actions and reducers to update state.

## Heads-Up

* Next week, students will begin working on their final projects. These projects are student-driven; they will be responsible for forming their own teams, brainstorming app ideas, and developing a full-stack app. Encourage students to start forming groups and brainstorming ideas for their apps, and be prepared to help anyone who is struggling to find a group or project idea.

* There are occasional circumstances, such as an illness or a personal emergency, which might force a student to complete a group project on their own. In these circumstances, as the instructor, you will meet with the student and SSM to determine if completing the project independently is the best path forward. If it is, you will share adjusted project requirements and a grading rubric with the student.

## Resources

The following resources can help you prepare for this week's classes:

* [Project requirements](../../01-Class-Content/22-State/04-Supplemental/Project-Requirements.md)

* [React Docs on Context.Provider](https://reactjs.org/docs/context.html#contextprovider)

* [React Docs on useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

* [Redux documentation on reducers](https://redux.js.org/faq/reducers/)

* [Redux documentation on actions](https://redux.js.org/faq/actions/)

* [React Docs on useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

* [Redux documentation](https://redux.js.org/)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
