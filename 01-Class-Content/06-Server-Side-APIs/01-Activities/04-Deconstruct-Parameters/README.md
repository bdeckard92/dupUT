# 🐛  Fetch request lacks query parameters

Work with a partner to resolve the following issue:

* As a user, I want to be able to customize the parameters of a fetch request.

## Expected Behavior

When a user names a request, a list of 10 open issues is returned in descending order by creation date.

## Actual Behavior

When a user makes a request, a list of issues is returned regardless of the issue status, creation date, or number of items per page.

## Steps to Reproduce the Problem

Follow these steps to reproduce the problem:

1. Open `index.html` in a browser.

2. Open the developer console.

3. Notice that the array in the develop console does not contain the expected number or order of items.

---

## 💡 Hints

* How can we use the GitHub Issues API documentation to help us refine our query parameters?

* What other parameters can you add to the fetch request when using the GitHub Issues API?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What do the `&` and `=` characters mean in a query string?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
