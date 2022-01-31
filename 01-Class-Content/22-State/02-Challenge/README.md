# 22 State: Redux Store (Extra Credit)

Throughout this module, you learned how to manage global state using React’s Context API. The Context API is quickly gaining traction in the development world as a worthy alternative or perhaps even successor to other libraries that have been used to manage global state in tandem with React, such as Flux or MobX. In spite of this, Redux remains the industry standard for managing complex state in a large-scale React application, and it’s very likely that you’ll encounter it while working as a developer.

Your challenge this week is to refactor the e-commerce platform that you created in this module, replacing the way it handles complex state management using the Context API with [Redux](https://redux.js.org/), the open-source JavaScript library that it emulates. You won’t have to change too much to refactor the application, but you will need to read through the Redux documentation to find the information you need. We’ve provided some guidelines to point you in the right direction in the Getting Started section below.

> **On the Job:** Web developers are frequently asked to dive into a new technology, and must sift through documentation to find the information that matches the specific problem they’re trying to solve. As you get ready to enter into a new development role, use this Challenge to practice a skill that you’ll use repeatedly over the course of your career.

Remember, this module's Challenge is **extra credit**. It is not required for submission, nor will it count towards one of the two assignments that you can skip. If you choose to submit this Challenge, you will receive extra credit points on your final grade. However, if you choose not to submit it, your final grade will not be affected in any way. This Challenge is an opportunity for you to further practice your skills and get feedback on it, with the added incentive of receiving extra credit for the work.

## User Story

```md
AS a senior engineer on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Mock-Up

The following animations show the web application's appearance and functionality:

![Demo #1](./Assets/22-state-homework-demo-01.gif)

![Demo #2](./Assets/22-state-homework-demo-02.gif)

![Demo #3](./Assets/22-state-homework-demo-03.gif)

### Getting Started

Read through the [Redux basic tutorial](https://redux.js.org/basics/basic-tutorial) to learn how to add Redux to your application. Note that the documentation will refer to additional packages that you'll need in order to complete this implementation.

> **Important:** Make sure you look through ALL the documentation, because there are newer methods available that can make these tools much easier to implement. Remember that React has gone through several iterations, and some React + Redux tutorials that you find will assume that you aren't using Hooks.

* We'll use the Stripe API to process payments, which includes making front-end and back-end changes. Don't worry, Stripe provides test credentials, so you won't need to use a real credit card to try it out. Refer to the [Stripe Docs on testing your integration](https://stripe.com/docs/testing).

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README that describes the project.

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
