# 13 Object Relational Mapping (ORM): E-commerce Back End

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated US$29 trillion in 2019. E-commerce platforms, such as Shopify and WooCommerce, provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, it's a good idea for developers to understand the fundamental architecture of e-commerce sites.

Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria below being met. You’ll need to submit a link to the video and add it to the README of your project.

Before you start, clone the [starter code](https://github.com/coding-boot-camp/fantastic-umbrella).


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I open API GET routes in Insomnia for a single category, product, or tag
THEN the data for that category, product, or tag is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

Create the configuration to connect a database using Sequelize. Use environment variables to store sensitive data, like your MySQL username and password.

## Mock-Up

The following animations show examples of the application's API routes being tested in Insomnia.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:

![Insomnia Demo](./Assets/13-orm-homework-demo-01.gif)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![Insomnia Demo](./Assets/13-orm-homework-demo-02.gif)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:

![Insomnia Demo](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.


## Getting Started

You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [Dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`
    * Integer
    * Doesn't allow null values
    * Set as primary key
    * Use auto increment

  * `category_name`
    * String
    * Doesn't allow null values

* `Product`

  * `id`
    * Integer
    * Don't allow null values
    * Set as primary key
    * Use auto increment

  * `product_name`
    * String
    * Doesn't allow null values

  * `price`
    * Decimal
    * Doesn't allow null values
    * Validate that the value is a decimal

  * `stock`
    * Integer
    * Doesn't allow null values
    * Set a default value of 10
    * Validate that the value is numeric

  * `category_id`
    * Integer
    * Reference the `category` model's `id` 

* `Tag`

  * `id`
    * Integer
    * Don't allow null values
    * Set as primary key
    * Use auto increment

  * `tag_name`
    * String

* `ProductTag`

  * `id`
    * Integer
    * Don't allow null values
    * Set as primary key
    * Use auto increment

  * `product_id`
    * Integer
    * Reference the `product` model's `id`

  * `tag_id`
    * Integer
    * Reference the `tag` model's `id`

### Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, as a Category can have multiple Products but a Product can only belong to one Category

* `Category` has many `Product`

* `Product` belongs to many `Tag`, using the `ProductTag` through model, allow Products to have multiple Tags and Tags have many Products

* `Tag` belongs to many `Product`

> **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

### Fill out the API Routes to Perform RESTful CRUD Operations

Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform Create, Read, Update, and Delete operations using your Sequelize models.

> **Note:** The functionality for creating the many-to-many relationship for products is already done for you.

> **Hint:** Be sure to look at your module project's code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync our Sequelize models to our MySQL database on server start.


## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
