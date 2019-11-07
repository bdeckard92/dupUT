# Module 05 Lesson Plan: Third-party APIs

## Overview 

@TODO
Two to four sentences describing what’s in this lesson and its relevance both to the preceding asynchronous content and to the upcoming challenge. Outline the 3-4  key topics that will be drawn from the asynchronous content and reinforced in this lesson for use in the upcoming challenge so that instructors understand how the pieces fit together. 


## Learning Objectives

By the end of class, students will be able to:

@TODO
* Explain the difference between jQuery and JavaScript

* Explain the difference between CSS and Bootstrap

* Explain and implement libraries with content delivery networks and static files 

* Perform DOM traversals and manipulations with jQuery

* Explain how to resolve issues related to dynamically generated HTML using jQuery

* Explain and implement the Bootstrap grid layout in HTML

* Integrate Bootstrap components in HTML files to quickly build user interfaces


## Preparing For Class/Instructor Notes 

* If you are comfortable doing so, live code the solutions to the activities. If not, no worries. Use the prompts and talking points for review. 

* If you are comfortable doing so, share your struggle and/or personal experiences learning and working with the concepts covered in this lesson.

* @TODO heads up?

* Ensure that you are using the correct versions of jQuery and Bootstrap.

* @TODO pain points?

* @TODO resources?

* @TODO reference to async


## Pre-Class Activity/Warm-Up 

@TODO algorithms


## Time Tracker 

[]()]


---

### 1. Icebreaker Activity: [Catchy Title] (10 min)

* Welcome students to class.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ What did we learn this week? How would you explain it to your friends and family?

    * 🙋 We learned how to use third-party APIs, such as Bootstrap and jQuery.

    * ☝️ Did anyone have an 'ah-ha' moment this week? When and why did it click? 

    * 🙋 @TODO .

    * ☝️ Did anyone feel stuck this week? How did you get unstuck?

    * 🙋 @TODO .

    * ☝️ @TODO ?

    * 🙋 @TODO We are moving fast compared to traditional learners. It’s ok to feel overwhelmed as long as you don’t give up.


### 2. Instructor Do: [Challenge Intro] (5 min)

* Open `/02-Challenge/Master/index.html` in your brower and explain the following:

    * This weeks challenge is a "Work Day Scheduler". It allows us to enter tasks in hour-long increments over a 9AM to 5PM day. It also presents the user with the date and highlights the hour based on the users location.

    * If we enter a task in one of the hour rows, we can edit it later.

    * If we click the corresponding "save" button, the task will be stored in `localStorage`. 

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ What recently acquired skills will help us build this challenge?

    * 🙋 We can use Bootstrap for the layout and style; jQuery for the functionality; and Moment.js for the time stamp and highlights.

    * ☝️ How are these skills relevant to a career in web development?

    * 🙋 Libraries and frameworks are widely used in both legacy and greenfield projects to leverage the work of others to quickly build, deploy and maintain our applications. 

    * ☝️ How will this challenge improve your portfolio?

    * 🙋 This challenge will demonstrate knowledge of Bootstrap, jQuery, and Moment.js, three commonly used third-party APIs.

* Answer any questions before proceeding to the next activity.


### 3. Instructor Demo: Bootstrap Card Layout (5 min) 

* Use the prompts and talking points below to demonstrate the following key point(s):

    * ✔️ Bootstrap components

    * ✔️ Responsive grid layout

* Open `/01-CardLayout/Solved/index.html` in your brower and explain the following:

    * This simple site uses the Bootstrap grid layout and several common components. 

    @TODO insert image

    * If we resize the browser, or `Toggle device toolbar` in Devtools, we see that the grid layout responds accordingly.

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ Where have we used this before?

    * 🙋 @TODO We used this to accomplish { x, y, z }, in { corresponding asynchronous lesson plan }.

    * ☝️ How does this activity equip us for the challenge?

    * 🙋 It provides practice in reading documentation, designing a layout, and quickly building user interfaces with Bootstrap. 

    * ☝️ How would we build this?

    * 🙋 We could start by making a sketch of the grid layout, then consult the Bootstrap documentation for components. 

* Answer any questions before proceeding to the next activity.


### 4. Student Do: Bootstrap Card Layout Activity (10 or 15 min) 

* Divide students into breakout rooms.

* Direct students to the activity instructions found in `/01-Bootstrap-Card-Layout`.

```md
    # Bootstrap Card Layout

    In this activity, you will use the Bootstrap grid layout and components to quickly build a user interface.


    ## Instructions

    * Using Bootstrap, build a page from scratch according to the design in the image below.

    ![Card-layout design](card-layout.png)


    ## Hint(s)

    * Refer to the [Bootstrap 4 documentation](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
```


### 5. Instructor Review: Bootstrap Card Layout (5 or 10 min) 

* Bring students back from breakout rooms. 

* Use the prompts and talking points below to demonstrate the following key point(s):

    * ✔️ Adding Bootstrap to HTML with a CDN

    * ✔️ Implementing a row / column layout with Bootstrap

    * ✔️ Consulting the Bootstrap documentation for components

* Open `/01-Bootstrap-Card-Layout/index.html` in your brower and explain the following:

    * 🔑 We import Bootstrap using the CDN in the `<head>` of our `index.html` file. 

    ```html
    <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bootstrap Card Layout Activity</title>

    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    </head>
    ```

    * 🔑 We then add a **nav** component in the `<body>` of our document. 

    ```html
    <body>
    <!-- Start Nav -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand mb-1 h1">Navbar</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
    <!-- End Nav -->
    ```

    * ☝️ Did we write this component?

    * 🙋 We could, but we can also copy/paste it from the [Bootstrap documentation](https://getbootstrap.com/docs/4.3/components/navs/)

    * We next create a `<div>` element with a `container` class.

    ```html
    <div class="container">
    ```

    * ☝️ Why did we place this below the `<nav>` element and not at the top of our `<body>`?

    * 🙋 We want our nav to span the width of the page. The container class will "contain" our content to a fixed width.

    * 🔑 Within our container div, we create our first row, and within that a column with a width of 8.

    ```html
    <div class="row">
        <div class="col-md-8">
          ...
        </div>
    ```

    * Within our first column, we add our `<h1>` element and another row.

    ```html
    <h1>About Me</h1>
        <div class="row">
    ```

     * ☝️ Why did we place this new row below our `<h1>`?

    * 🙋 We want our header to span the width of our container.

    * 🔑 Within this new row, we add two columns with widths of 3 and 9, respectively. 

    ```html
    <div class="col-md-3">
        <img src="http://placehold.it/150x150" alt="Placeholder" class="img-thumbnail">
    </div>
    <div class="col-md-9">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique,
            nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae
            felis vulputate pretium. Nullam commodo, est ac auctor ornare, eros nisi fringilla sem,
            non pulvinar tortor lorem sit amet sem. Aenean quis erat facilisis, porttitor ex cursus,
            luctus enim. Curabitur et metus in lacus tristique sagittis et in lorem. Nunc id nisi et
            neque fringilla ultricies. Aenean at feugiat elit, a posuere justo. Pellentesque egestas
            dolor et nisi venenatis, nec fermentum urna fringilla. Etiam efficitur porta purus, id
            posuere sem congue a.
        </p>
    </div>
    ```

     * ☝️ Why did we choose widths of 3 and 9?

    * 🙋 The Bootstrap grid layout is based on 12 units. 

    * To finish our layout, we add a new column with a width of 4.

    ```html
    <div class="col-md-4">
        ...
    </div>
      ```

    * ☝️ Why did we choose a width of 4?

    * 🙋 We assigned our first column a width of 8.

    * 🔑 Within our new column, we add a card component. 

    ```html
    <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
    </div>
    ```

    * ☝️ Did we write this component?

    * 🙋 We could, but we can also copy/paste it from the [Bootstrap documentation](https://getbootstrap.com/docs/4.3/components/card/) 

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ When is it okay to copy / paste code?

    * 🙋 When it is publicly available in the official documentation for a library or framework and/or the license allows you to do so.

    * ☝️ When is it not okay to copy / paste code?

    * 🙋 When it is under copyright or a restrictive license. It's also not okay to copypasta code from someone elses project and submit it as your own for grading!

    * ☝️ What can we do if we don't completely understanding this?

    * 🙋 We can refer to the lesson plan, read the [Introduction to Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.


### 6. Instructor Demo: jQuery Sandwich Click (5 or 10 min) 

* Use the prompts and talking points below to demonstrate the following key point(s):

    * ✔️ Using state variables

    * ✔️ Handling events with jQuery `.on()`

    * ✔️ Setting HTML contents with jQuery `.html()`
    

* Open `/02-JQuery-Sandwich-Click/Solved/index.html` in your brower and explain the following:

    * When we click one of the sandwich buttons, we are presented with two alerts: the first with a witty comment about the sandwich; the second a count of the number of sandiwches eaten. 

    * When we resolve the alerts, an image of the sandwich is rendered in the browser. 

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ Where have we used this before?

    * 🙋 @TODO We used this to accomplish { x, y, z }, in { corresponding asynchronous lesson plan }.

    * ☝️ How does this activity equip us for the challenge?

    * 🙋 We are reviewing how to handle events, work with state variables and dynamically render HTML.

    * ☝️ How would we build this?

    * 🙋 We first need to scaffold our application with HTML, including three buttons and an element to hold dynamically generated content. We then need to set up event handlers to listen for clicks and respond to those clicks with alert messages and an image.

* Answer any questions before proceeding to the next activity.


### 7. Student Do: jQuery Sandwich Click (10 or 15 min) 

* Divide students into breakout rooms.

* Direct students to the activity instructions found in `/`.

```md
    # jQuery Sandwich Click

    In this activity, you will build an interactive application that tracks state and handles events.

    ## Instructions

    * From scratch, create a simple jQuery application with the following functionality:

        * Renders three buttons, each referencing a different type of sandwich. 

        * When a button is clicked, a first alert displays a witty statement about the specific sandwich.
        
        * When the first alert is resolved, a second alert message displays the number of that specific sandwich the user has eaten.

    ## Hint(s)

    You will need to use global variables to track state.

    ## BONUS

    Render an image for each click event.
```


### 8. Instructor Review: jQuery Sandwich Click (5 or 10 min) 

* Bring students back from breakout rooms. 

* Use the prompts and talking points below to review the following key point(s):

    * ✔️ Using state variables

    * ✔️ Handling events with jQuery `.on()`

    * ✔️ Setting HTML contents with jQuery `.html()`

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ @TODO ?

    * 🙋 @TODO .

    * ☝️ What can we do if we don't completely understanding this?

    * 🙋 We can refer to the lesson plan, read the [](), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.


### 9. Instructor Do: Demo (5 or 10 min) 

* Use the prompts and talking points below to demonstrate the following key point(s):

    * ✔️ 

    * ✔️ 

* Open `/` in your brower and explain the following:

    * 

    * 

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ Where have we used this before?

    * 🙋 @TODO We used this to accomplish { x, y, z }, in { corresponding asynchronous lesson plan }.

    * ☝️ How does this activity equip us for the challenge?

    * 🙋 @TODO . 

    * ☝️ How would we build this?

    * 🙋 @TODO . 

* Answer any questions before proceeding to the next activity.


### 10. Student Do: [Activity Name] (10 or 15 min) 

* Divide students into breakout rooms.

* Direct students to the activity instructions found in `/`.

```md
    @TODO add instructions; tabbed
```


### 11. Instructor Review: [Activity Name] (5 or 10 min) 

* Bring students back from breakout rooms. 

* Use the prompts and talking points below to demonstrate the following key point(s):

    * ✔️ @TODO

    * ✔️ @TODO

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ @TODO ?

    * 🙋 @TODO .

    * ☝️ What can we do if we don't completely understanding this?

    * 🙋 We can refer to the lesson plan, read the [](), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.


@TODO add [ demo | activity | review ] blocks as needed


### XX. Recap (5 min)

* Ask the class the following question(s) and call on students for the corresponding answer(s):

    * ☝️ What do you think you absolutely need to know to succeed at the challenge?

    * 🙋 

    * ☝️ What do you think is okay to not completely understand?

    * 🙋 All of it! The field of web development is very wide and rapidly evolving. Unless you choose to specialize, it's unnecessary to know anything completely to be successful. 

    * ☝️ Why is it important to do as much of the lesson material as possible?

    * 🙋 @TODO The Recap contains a reminder about how important async content is to success


### XX. Promote Additional Resources (5 min)

* Direct students to the additional resources available to them:

    * Reference pages

    * Career Services content

    * Reflection + Retrieval


### XX. Transition to Challenge Study Hall/Office Hours (1 min)

* Announce 'office hours' and invite students to stay on the Zoom and ‘start the challenge’ while they have live support from instructional staff. 
