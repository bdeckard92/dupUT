# Git Stash

You've been using Git for some time now and adding new tools to your Git skills each week. Now you'll learn how to take advantage of the useful `git stash` feature.

Imagine that you're busy implementing a sign-up component on your team's web application when your manager asks you to stop what you're doing and add a notification to the homepage. You'll need to checkout to a different feature branch to change tasks, but you don't want to commit your half-completed work on the sign-up page. You also don't want to cause any errors by trying to checkout to a different branch with unsaved changes.

That's where `git stash` comes in! As the name suggests, this command adds your uncommited changes to a stash that you can access later. This stash is stored locally on your machine and doesn't get pushed up to GitHub or any other version control system.

## Use git stash in a Demo

**Important:** If you haven't done so already, change your default branch name to `main` by using the following command:

```sh
git config --global init.defaultBranch main
```

Let's practice using `git stash` by following these steps:

1. Create a new repository called `stashPop` by using the following commands:

   ```sh
   mkdir stashPop
   cd stashPop
   git init
   ```

2. Create and commit a new `README.md` file by using the following commands:

   ```sh
   touch README.md
   git add -A
   git commit -m "initial commit"
   ```

3. Checkout a new branch called `dev` and create a new file by using the following commands:

  ```sh
   git checkout -b dev
   touch newFile.js
   ```

4. Add and commit the new file by using the following commands:

   ```sh
   git add newFile.js
   git commit -m "newFile is tracked in dev"
   ```

5. Now that we have a `newFile.js` file that is being tracked in the `dev` branch, let's checkout to `main` and verify the files by using the following commands:

   ```sh
   git checkout main
   ls
   ```

6. Notice that we don't have a `newFile.js` file in `main`, so let's create one by using the following command:

   ```sh
   touch newFile.js
   ```

7. Let's say that we're not ready to commit this file to `main` yet, but we need to switch to the `dev` branch again. Try to do so by using the following command:

   ```sh
   git checkout dev
   ```

8. Git will prevent you from switching branches and display the following error message:

   ```text
   error: The following untracked working tree files would be overwritten by checkout: newFile.js
   Please move or remove them before you switch branches.
   Aborting
   ```

   This happens because we have a conflicting file (`newFile.js`) that would be overwritten by the checkout. If we were to commit `newFile.js`, then Git would know to swap them out, but we're not ready to commit yet.

9. We will use `git stash` to put away our changes so that we can checkout the `dev` branch. Enter the following commands to discover what happens:

   ```sh
   git stash -u
   ls
   ```

   The `-u` flag tells Git to include untracked files in our stash. 

10. `newFile.js` has now been put away, so we can safely checkout to `dev` by using the following command:

   ```sh
   git checkout dev
   ```

11. Don't worry, the stash isn't lost. We can use additional commands to bring those changes back. Enter the following commands to see this in action:

   ```sh
   git checkout main
   git stash pop
   ```

The command `git stash pop` pulls the latest stash off the stack and reapply its changes. Other useful `stash` commands include the following:

  * `git stash drop`: Delete the latest stash from the stack.

  * `git stash apply`: Apply your stashed changes, but also keep a copy in the stack.

  * `git stash clear`: Clear all stashed entries from the stack.

## Review

Nice work! You've used the `git stash` command to set aside some untracked files so that you could checkout to a different branch. The most common use case for the `stash` command will likely be when you're working with a group and performing a `git pull`. Now you're ready to use this powerful command!

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
