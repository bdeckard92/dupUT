# 🏗️ Implement Global State with React Context API

Initializing a React application by using the `create-react-app` command-line utility can take some time. To save time throughout this unit, we will create one React application and only replace the `/src` files for each subsequent activity as we work on them. Before you add comments to the code, you will practice the workflow for creating a React app and updating your practice app for subsequent activities.

To do this, follow these steps:

  1. In the command line, navigate to `22-State/01-Activities`.

  2. Run the command `npx create-react-app 00-practice-app`.

  3. After `create-react-app` has completed (which can take a few minutes), copy the `/src` folder from each activity and paste it into [00-practice-app](../00-practice-app/).

## Activity

Work with a partner to implement the following user story:

* As a developer, I want to consume data/values from a single, global source across my entire React application.

## Acceptance Criteria

* It's done when a global state object has been defined with the following properties: an array of students with `name` and `major` properties.

* It's done when the provider is made available to child components.

* It's done when the associated test suite passes with zero failures when `npm run test` is run.

---

## 💡 Hints

When defining global state, which properties should be present? Should we care what type they are initialized with?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Can an app have multiple providers? If so, are they allowed to be nested?

Use [Google](https://google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
