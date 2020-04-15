# Blog Joins

In this activity, you will modify our find queries in both post-api-routes.js and author-api-routes.js to use Sequelize's "include" option. We can use "include" to say that we want to return associated data.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* Open the [post-api-routes.js](Unsolved/routes/post-api-routes.js)

  * Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. Examples can be found here:
  <https://sequelize.org/master/manual/eager-loading.html>

* Open the [author-api-routes.js](Unsolved/routes/author-api-routes.js)

  * Add the "include" option to the queries specified in the comments. Here we want to "include" the Post model.

* If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either `localhost:8080/api/posts` or `localhost:8080/api/authors` to make sure the JSON returned for both routes includes all of the data.

## Hint(s) 

* The "include" key goes on the same options object as the "where" attribute we've been using. Examples can be found at the link supplied.
