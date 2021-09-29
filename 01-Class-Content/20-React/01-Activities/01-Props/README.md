# 🏗️ Pass Data Using Props 

Initializing a React application by using the `create-react-app` command-line utility can take some time. To save time throughout this unit, we will create one React application and only replace the `/src` files for each subsequent activity as we work on them. Before you add comments to the code, you will practice the workflow for creating a React app and updating your practice app for subsequent activities.

  To do this, follow these steps:

  1. In the command line, navigate to `20-React/01-Activities`.

  2. Run the command `npx create-react-app 00-practice-app`.

  3. After `create-react-app` has completed (which can take a few minutes), run the command `npm i bootstrap dotenv --save` to add dependencies that we will need in later activities.

  4. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  5. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

  6. This project uses Bootstrap, so don't forget to import it inside `index.js`:

  `import 'bootstrap/dist/css/bootstrap.min.css'`

## Activity

Work with a partner to implement the following user story:

* As a developer, I want to render multiple cards for different animals by passing props to each one.

## Acceptance Criteria

The activity is done when it meets the following criteria:

* It's done when I have updated the return method in `src/components/Display.js` to render a `Card` for each dog.

* It's done when I have passed data for each dog's `name` and `description` as props to the `Card`.

* It's done when I have added a unique `key` property to each `Card` that gets rendered.  

## 💡 Hints

* How can we use the [React Docs on components and props](https://facebook.github.io/react/docs/components-and-props.html) to understand props better?

* What is the term **props** short for?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we use the [style tag](https://facebook.github.io/react/docs/dom-elements.html#style) to add additional style to our React components?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.