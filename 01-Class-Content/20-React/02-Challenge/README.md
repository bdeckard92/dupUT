# 20 React: React Portfolio

Part of being a web developer means being a part of a community. Having a place to share your projects is necessary if you're applying for jobs or if you’re working as a freelancer, but it’s also a critical step on your journey as a developer so that you can share your work with fellow developers and work collaboratively on future projects.

Now that you have multiple projects to share, your task is to create a portfolio using your new React skills to help set you apart from other developers whose portfolios do not use the latest technologies.

Just as you did in the module project, you’ll need to deploy this application to GitHub Pages. Follow the same instructions you did for the project to create a build that you can deploy.


## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About me title and section are selected by default
WHEN I am presented with the About me section
THEN I see a recent photo of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![Demo](./Assets/20-react-homework-demo-01.gif)

## Getting Started

The application that you built for this module will give you a good idea for where to start when building your portfolio. You’ll want to use Create React App just as you did with your module project, but there will be a few structural differences in your component hierarchy that you’ll want to be aware of. Your portfolio should include the following:

* a single `Header` component that appears on multiple pages

* a single `Navigation` component within your header that will be used to conditionally render the different sections of your portfolio

* a single `Project` component that will be used multiple times on a single page

* a single `Footer` component that appears on multiple pages

> **Note:** The contact form should be similar to the form you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set this functionality up the same way you did in the project and add in back-end functionality once you’ve covered this in the next few weeks.
> 
> In the meantime, consider adding your email address and phone number on the Contact page. 

### Projects

For each project you feature in your portfolio, you should include the following:

* an image of the deployed application (this can be a GIF or a screenshot)

* the title of the project

* a link to the deployed application

* a link to the corresponding GitHub repository

### Design

As with the previous portfolio homework, "good" design is subjective. Your site should look "polished." Here are a few guidelines on what that means:

* mobile-first design

* choose a color palette for your site so it doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out

* make sure the font size is large enough to read and that the colors don't cause eye strain.

* consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
