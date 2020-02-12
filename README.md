# fullstack-online

Welcome to the Full-Stack Online Coding Bootcamp! This repository houses the Online curriculum and is divided into two pillars:

* student-facing **Class Content**

* instructor-facing **Lesson Plans**. 


## How To Use This Repository

### Class Content

You will find the following in [01-Class-Content](./01-Class-Content):

* Module overviews

* In-class activities

* Challenge instructions, starter code, and solutions

* Weekly algorithms (where applicable)

* Supplemental content such as installation guides and learning resources

Use these materials to build your class repository.


### Lesson Plans

In addition to lesson plans, you will find the following in [02-lesson-plans](./02-lesson-plans):

* Grading rubrics

* Links to slide decks (where applicable)


📝 These materials are _not_ to be shared with students. 

`02-Lesson-Plans/README.md` contains tips, alerts, and resoures for all modules. 

Each module contains a README.md overview containing tips, alerts, and resources specific to that module. 


## Need Help?

For information regarding onboarding and training, consult the [Instructor Onboarding Guide](https://coding-bootcamp-instructor-onboarding-prework.readthedocs-hosted.com/en/latest/).

Have a suggestion or feedback? Please submit it through our [FullStack-Ground Feedback & Suggestions Survey](@TODO)

Found a bug? [Log an Issue](https://github.com/coding-boot-camp/fullstack-online/issues).

In case of emergency, message the Full Stack Online Program Support Specialist, `@TODO`, in [#05-web-dev-course](https://trilogyed-instruction.slack.com/messages/C1073F9N0/).


## FAQs

### What's the Difference between a Class and a Cohort?

A Class is defined as one group of learners led by one Instructor and supported by assigned Instructional Staff Members. Classes are held on either a Monday/Wednesday or Tuesday/Thursday schedule on video calls where they meet for direct instruction. Learners from one class cannot attend scheduled class time for a different class. Your Program Support Manager can clarify to which class any Instructional Staff or learners are assigned.

A Cohort is a group of 2 or more classes that begin during the same week. A cohort shares a Slack workspace to increase the networking ability of learners, the availability of Instructional Staff to support each other, and the overall community feeling of the program.

Office Hours, which are held outside of standard class times throughout the week by Teaching Assistants, are available for learners from all classes in the cohort.


### What's the Difference between GitHub and GitLab?
As you may have noticed, we use a couple of different systems to deliver information to both our Instructional Staff and our learners. Let's go through what they are and what the differences are!

Our Instructional Staff facing repository lives on GitHub. It's where we house all the lesson plans and activities for the Virtual Class (Recommended/Required) sessions held on video calls.

Learner-Facing GitLab Repository

NOTE: Rutgers, UCF, and UT Austin use GitHub instead of GitLab for their learner-facing repositories.

Each cohort will have its own learner-facing repository on GitLab that will be where you can share the unsolved and solved versions of your in-class activities. Be mindful of when you update things because each repo is shared across a cohort that completes classes on different days.

If you have questions about how to update your learner-facing repository, be sure to check out the guide on Updating Learner-Facing Repo


## Updating Learner-Facing Repository

Each cohort shares a Learner-Facing repository on GitLab ([select universities](./github-gitlab.md) use GitHub). 

### When to Update

Because each class holds sessions on opposing schedules, everyone should be mindful of when solutions for activities are posted. For a cohort that has classes running on a M/W and T/TH schedule, one instructional staff member from each class should take the responsibility of updating the learner-facing repository as follows: 

**Monday**: Before video class, post `Unsolved` activities for that module. 

**Thursday**: After video class, post `Solved` activities for that module. 


### How to Update

Use regular git workflow to update the repository. Ensure that you have pulled the latest updates from the `master` branch of the main GitHub [Data Online Curriculum Repo](https://github.com/coding-boot-camp/DataViz-Online). 

1. `git pull` the `master` branch of your learner-facing repository to ensure you have all changes another instructional staff member may have made. 
2. Add the files/folders that need to be added. 
3. `git add .` to stage your additions. 
4. `git commit -m "Adds x, y, z"` to commit your changes with an appropriate message. 
5. `git push origin master` to push to the `master` branch. (Note: You may use feature branching if you would prefer.)
6. Verify that your updates went through by accessing the repo GUI. 



---
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand.  Confidential and Proprietary.  All Rights Reserved.


