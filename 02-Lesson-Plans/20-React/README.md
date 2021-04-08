# Module 20 Instructor Overview: React

## Overview

In this module, students will:

* Become introduced to what React is and what problems it solves.
* Understand what the virtual DOM is and how it helps make React so performant
* Be introduced to the concept of (reusable) component-based development
* Be introduced to JSX and what it does 
* Learn about two absolutely critical aspects of React development: props and state 
* Be introduced to React hooks and what they offer 
* Learn about conditional rendering 

In this week's virtual classes, you will:

* Help students understand what React is, and they key improvements it makes to web development over older methods
* Help students learn to think of development via reusable components, rather than via monolithic pages
* Help students become familiar with JSX and facilitate their introduction to it 
* Emphasize the need to understand both props and state, which are two pillars of being a successful react developer 

 

## Virtual Classes

* [https://github.com/coding-boot-camp/fullstack-online/blob/master/02-Lesson-Plans/20-React/20.1-REQUIRED.md](https://github.com/coding-boot-camp/fullstack-online/blob/master/02-Lesson-Plans/20-React/20.1-REQUIRED.md)

* [https://github.com/coding-boot-camp/fullstack-online/blob/master/02-Lesson-Plans/20-React/20.2-REQUIRED.md](https://github.com/coding-boot-camp/fullstack-online/blob/master/02-Lesson-Plans/20-React/20.2-REQUIRED.md)


## Course Topics and Async Material
Here are the key topics you will cover in class each day, and where students are accessing this material in the asyn curriculum.

| Class Topic | Async Material |
| --- |--- |
Setup w/ create-react-app | 20.1.3 |
Component mapping (.map()) | 20.1.6 |
useState() | 20.3.4 |
useEffect() | 20.3.4 |
Conditional Rendering | 20.3.4 |


## Overview of Asynchronous Material 

### Why are students learning React?
React was developed by engineers at Facebook in 2013 to solve an increasingly-common problem: web pages needed to be able to deal with large amounts of data, frequent changes to that data, and the need to update the presentation of that data quickly, without slowing down the user experience. There were other solutions around before React, but they were either incomplete in what they could do, or too hard to adopt and/or use at scale.

(To help students better understand this, take them to a typical Facebook user's page and show them all the elements that are being updated in real time. This simply couldn't have been possible before React -- and of course React was written to solve this specific use case!)

### Why is React so important for students' careers?
Because React is so powerful and enables development of websites that truly look and perform like "real" applications, it is in high demand in the workplace. It also has a tough initial learning curve (there's no sense denying it), and as such developers who can write good React code can earn highly-competitive salaries and work on extremely interesting and challenging projects.

Because React is written entirely in pure Javascript and requires only pure Javascript, it requires users to have a higher level of coding capability. In short, learning React will make students better at Javascript in general.

Throughout the async module this week, students will do the following:

* Compose a React application with components (building a sample portfolio site).
* Learn how React components are basically just functions.
* Construct the elements of a webpage using JSX.
* Debug errors in React.
* Use the map() function to build a Nav component.
* Set up a test environment, write and run unit tests
* Use conditional rendering in a React template
* Manage state in controlled component(s)
* Write functions for syncing form entry data with state, and for submitting form data
* Validate form data
* Validate form data

**Reminder:** If students need help with an async activity, encourage them to attend Office Hours for help! If you can’t get through all of it, remind them that they can lean on Learning Assistants with the AskBCS bot for more help.


### Async Lessons:

20.1	Project Setup and create-react-app
20.2	Setup of About and Nav components
20.3 	Setup of Gallery component
20.4 	Setup of Contact Form component
20.5 	Create a modal component and final deploy to GitHub Pages


## Common Pain Points
According to our class data, students might experience some of the following pain points throughout the week:

**Pain Point**: Using "class" instead of "className"
**Recommendation**: Students will sometimes encounter unexpected rendering if they use the word "class" as an element attribute. Emphasize that the word "class" is a reserved word in JS. Since components are JS functions under the hood, a JSX element can not have an attribute that's a reserved word. Use "className" instead.

**Pain Point**: Trying to return more than one JSX element in a component.
**Recommendation**: Students often get an error reading "Adjacent JSX elements must be wrapped in an enclosing tag" when rendering their first components. Stress that components are basically dressed-up functions. Functions can only return one value, so components can only return one JSX element. The key is to make a parent JSX element that contains all the other "sub-elements" needed. Also, make sure students close all tags, otherwise nothing will render.

**Pain Point**: Including a key on elements being mapped
**Recommendation**: Anytime you are rendering items via an array map(), React needs to be able to (internally) keep track of those items in the DOM. Students often forget to include the "key" attribute. The key value should be a unique identifier for each element being rendered.

**Pain Point**: Managing state within forms
**Recommendation**: It's key that students understand that, in most cases, forms REFLECT state, they don't determine it (for controlled components anyway). The form elements get their initial/default values from state. When the user enters data into a form element, the user is actually modifying state, and React is then updating the element to reflect that new state. Similarly, when the form is submitted, the data being submitted is all contained in state. The form, like most UI elements, is a reflection of the state, not the state itself.

## Module Challenge: Build a React Portfolio
[https://github.com/coding-boot-camp/fullstack-online/tree/master/01-Class-Content/20-React/02-Challenge](https://github.com/coding-boot-camp/fullstack-online/tree/master/01-Class-Content/20-React/02-Challenge)

An animated GIF mockup of the final result is here: [https://github.com/coding-boot-camp/fullstack-online/blob/master/01-Class-Content/20-React/02-Challenge/Assets/20-react-homework-demo-01.gif](https://github.com/coding-boot-camp/fullstack-online/blob/master/01-Class-Content/20-React/02-Challenge/Assets/20-react-homework-demo-01.gif)

Students will build a single-page portfolio page in React using skills and techniques covered in the async material. The portfolio page will feature a header area with navigation, a content area, and a footer. The areas of the portfolio will be: About Me, Portfolio, Contact, and Resume.


## Skills Needed for Success
Specific skills students will need to implement in order to be successful (and where these skills are taught in the async material):

Skill Needed | Async Lesson |
| --- |--- |
Use create-react-app to build the project skeleton | 20.1.3 |
Create a functional component to contain the rendered content | 20.1.5, 20.1.6 |
Use JSX to render out the visual display | 20.1.5, 20.1.6 |
Use array.map() and array.filter() strategically within the components | 20.1.6, 20.3.5(filter) |
Use React Hooks (especially useState()) to encapsulate specific functionality | 20.3.4, 20.5.4 |
Use conditional rendering within a template | 20.3.4, 20.4.6 |
Understand the difference between controlled vs uncontrolled components | 20.4.4 |
Understand how state drives the UI | 20.4.4, 20.4.5 |
Write and run unit tests on the components | 20.2.3 - 20.2.5 |


## Heads-Up
Be familiar with and ready to answer questions on:

* React Hooks
* Controlled vs Uncontrolled components
* Conditional Rendering
* Unit Testing of React Components

Next week, students will learn about GraphQL. Familiarize yourself with GraphQL, as well as Apollo and the GraphQL Playground.


## Career Connection

During each lesson that students work through, they will also view a Career Connection section that will tie together the academic content with Career Services and how this material will be applicable to them in their future career.

Remind students that they should reach out to their Career Director and meet with them often throughout the boot camp to help prepare their professional materials. Students can also [sign up for workshops](https://careerservicesonlineevents.splashthat.com/).

If you'd like more information on Career Services, visit the [Career Services resources page](https://mycareerspot.org/).


## Resources

* [React Docs on Hooks](https://reactjs.org/docs/hooks-overview.html)

* [React Docs on Using the State Hook](https://reactjs.org/docs/hooks-state.html)

* [React Docs on Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

* [React Docs on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html) 

* [React documentation on controlled versus uncontrolled components](https://reactjs.org/docs/forms.html#controlled-components)

* [React Docs on Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html) 


## Algorithms

* [01-roman-to-int](../../01-Class-Content/20-React/03-Algorithms/01-roman-to-int)

* [02-rotation-point](../../01-Class-Content/20-React/03-Algorithms/02-rotation-point)

* [03-simplify-path](../../01-Class-Content/20-React/03-Algorithms/03-simplify-path)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.




