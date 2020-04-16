# Blog Joins

In this activity, you will modify the queries in both `post-api-routes.js` and `author-api-routes.js` to use Sequelize's `include` option.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/database information.

* Open the [post-api-routes.js](Unsolved/routes/post-api-routes.js)

  * Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. 

* Open the [author-api-routes.js](Unsolved/routes/author-api-routes.js)

  * Add the "include" option to the queries specified in the comments. Here, we want to "include" the Post model.

* To test if everything is working properly, open your terminal and run `npm start` and navigate to `localhost:3001` in your browser. After creating a few Authors with a few Posts, navigate to either `localhost:8080/api/posts` or `localhost:8080/api/authors` to make sure the JSON returned for both routes includes all of the data.

## Hint(s) 

* The "include" key goes on the same options object as the "where" attribute we've been using. You may refer to the [Sequelize Manual on Eager Loading](https://sequelize.org/master/manual/eager-loading.html) for more information.