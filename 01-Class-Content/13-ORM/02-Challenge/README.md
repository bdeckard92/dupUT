# 13 Object Relational Mapping (ORM): eCommerce Back End

Take this working Express API and have it use Sequelize to interact with a SQL database. Create the configuration to connect a database using Sequelize. Use environment variables to store sensitive data, like your MySQL username and password.

Before you start, clone the [starter code](https://github.com/coding-boot-camp/fantastic-umbrella).

dotenv
express
mysql2
sequelize

## User Story

```md
AS A
I WANT to 
SO THAT I can
```

## Acceptance Criteria

```md
GIVEN a 
WHEN I 
THEN I 
```

## Mock-Up

The following animation/image shows an example of the application being used from the command line:

IMAGE 

## Getting Started

## Create database Models

- `Category`

  - `category_name`
    - String
    - Don't allow null values

- `Product`

  - `product_name`
    - String
    - Don't allow null values
  - `price`
    - Decimal
    - Don't allow null values
    - Validate that the value is a decimal
  - `stock`
    - Integer
    - Don't allow null values
    - Set a default value of 10
    - Validate that the value is numeric

- `Tag`

  - String

- `ProductTag`
  - Just create this with no fields, it is going to be the "Through" table that connects the `Product` and `Tag` models

### Associations

> Execute association methods on our Sequelize models to create the following relationships between them.

- `Product` belongs to `Category`, as a Category can have multiple Products but a Product can only belong to one Category

- `Category` has many `Product`

- `Product` belongs to many `Tag`, using the `ProductTag` through model, allow Products to have multiple Tags and Tags have many Products

- `Tag` belongs to many `Product`

## Fill out API routes to perform RESTful CRUD operations

- Interact with your models by filling out the proper code in each API endpoint using proper RESTful commands for each endpoint's method (GET, POST, PUT, DELETE)

## Sync Sequelize to database on server start.

- Create the code needed in server.js to sync our Sequelize models to our SQL database on server start.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and passing tests.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
