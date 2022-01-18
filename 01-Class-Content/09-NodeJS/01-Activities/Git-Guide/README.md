# Git Fork

Now that you have become familiar with Git and Github, you may find that you want to contribute to an open source project. You may also want to use an existing project on GitHub as a starting point for your own, in the case of something like a boilerplate application. Luckily, there is a feature in GitHub and many other version control systems that allows you to do this: forking.

Forking a repository makes an exact copy of an existing project and stores it on your personal account. Forking allows a connection to remain between the project in your own repo and the original one in the owner's repo. Forking also allows the owner to allow other developers to contribute to their project in a non-intrusive way while protecting the original project code. Forking is very common in open-source software development.

In this activity, you will use a test repository to help you understand the fork and pull-request workflow.

Before you get started, take a minute to review the [GitHub forking tutorial](https://github.com/coding-boot-camp/forking-tutorial).

## Fork and Clone

The first step is to fork and clone a project by following these steps:

1. To fork this project, click the "fork" button at the top of the repository.

2. Choose your personal account when asked "Where should we fork?"

3. After a few seconds, you will be taken to your copy of the repository.

4. Visit the fork that you just created on GitHub and copy the URL of your fork.

5. Clone your fork of the repository to your local machine and move into that directory by typing the following command:

    ```sh
    git clone git@github.com:<YOUR_GITHUB_USERNAME>/forking-tutorial.git && cd forking-tutorial
    ```

6. Type the following command to see that the remote URL for the repository is set to your own personal GitHub:

    ```sh
    git remote -v
    ```

## Contribute and Pull Request

Next, you will create a branch, contribute to the project, and create a pull request by following these steps:

1. Create a branch of your own:

    ```sh
    git checkout -b <branch name>
    ```

2. Make some additions or changes to the README file, and stage and commit your work:

    ```sh
    git add readme.md
    git commit -m "make it better"
    ```

3. Push your changes to the remote branch:

    ```sh
    git push origin <branch name>
    ```

4. On the forked repository page, you should see a yellow bar at the top with a button to "Compare and Pull Request". Click that button.

   * After clicking that button, enter a description to help the owner of the project understand what you want to contribute.

   * You will see a list of commit messages and that your branch is "ahead" of the master branch.

5. Click "Create Pull Request". The owner of the project will get an email notification that some changes have been made and that a pull request is ready for their review.

6. The owner can approve or reject the pull request, and optionally add some additional comments for your review. While this was a simple edit to the `README.md` file, you can imagine a situation where your code would require some additional review and back-and-forth with the project owner.

## Review

You have successfully created your own fork, cloned it to your local machine, made some changes, and created a pull request to the owner's repository. This is a workflow that you will become familiar with as you get deeper into your experience as a software engineer. It may seem a little confusing at first, but now you can move forward with confidence knowing that you have forked and contributed to a repository yourself.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
