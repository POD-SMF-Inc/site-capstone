# Project Plan

Pod Members: Samara Augustin, Marisleysis De La Cruz, Flor Hernandez Rodriguez

## Problem Statement and Description

When a student enters college there are several financial responsibilities that are imposed upon them, such as tuition costs, dorming fees, meal plans, and common lifestyle costs. As these costs increase, the need for budgeting becomes more essential and beneficial. During these moments, college students may prioritize allocating their money towards saving for their tuition costs and textbook fees, rather than purchasing/investing in foods that properly nourish them. Therefore, it has become a common occurrence for students to purchase unhealthy food options for low costs of money.

The main purpose of our website is to introduce healthy and affordable meal options/recipes to college students. The key features that our site has to offer to its users are a platform that allows college students to search for recipes based on their budget. With our implementation of the search bar, college students will be able to look up recipes based on the ingredients they have in their refrigerator. The application will also make it accessible for college students to search recipes within their diet restrictions. The user will receive a full recipe with ingredients, nutrient information, and price. Once the user creates an account they will be able to create their own meal plan.

## User Roles and Personas

User Role: College Student - a user who is seeking recipes for a filling meal

Personas: 
- Bob is a 19 year old originally from New Jersey but is going to college in Massachusetts. Alongside his tuition, Bob is responsible for purchasing textbooks for his classes,     handling dorming costs and purchasing living necessities. As a computer science major, Bob is constantly using his laptop which also requires him to purchase various software   subscriptions. In order to pay his bills, Bob has to budget less money towards his meals, which causes him to consistently purchase fast food and processed meals. Due to his     lack of healthy eating habits Bob finds himself to be tired and the victim of several migraines. After a visit to the doctor, Bob is informed that in order for his health to     improve he would have to improve his diet. Therefore, Bob is searching for meal options that are both affordable and healthy.

- Maya is a rising sophomore from New York and has had difficulty maintaining her vegan diet ever since she got to Boston College. When she was at home, her mother made her       vegan meals but at college she had limited vegan options at the dining center. Unfortunately college students aren’t allowed to skip meal plans their first year, so she         struggled with consuming the right amount of calories each day and lost some weight. Now that she’s able to live in her own apartment off campus, she can buy groceries that     satisfy her vegan diet and explore new recipes for vegan meals. It’s important that she maintains a healthy diet to excel in her med classes.



## User Stories

User Stories (In Order) :
As a college student, I want to be able to see recipes on the homepage, so I can explore new recipe ideas. (ID: 1)
As a user, I want to be able to create an account, because I want to save my favorite recipes and my preferences for meals. (ID: 5)
As a user, I want to be able to use a search bar to look up recipes so that I don’t have to scroll through endless pages to find my desired meal choice. (ID: 3)
As a user, I want to be able to click on one of the recipes displayed in the homepage/search page and be taken to a new page that gives me the recipe information so that I can view a detailed description of the meal along with additional information I may want. (ID: 2)
As a user, I want to be able to save my favorite recipes to a database because I want to access and cook from them whenever I want without having to search for the recipe. (ID: 6)
As a user, I want to be able to see meals categorized by dietary restrictions ( vegan, vegetarian, keto, pescetarian, etc.), so that I can comfortably scroll through the recipes without worrying about whether they fit into my dietary restrictions and needing to replace ingredients. (ID: 9)
As a user, I want to be able to filter the meals by price because I want to cook a meal that I can afford and that is in my budget. (ID: 4)
As a user, I want to be able to filter the meals by ingredients, so that I can make a healthy meal with the items I have readily available to me at home. (ID: 8)
As a user, I want to be able to have a function where I can plan my meals for the day and week, so I can save myself time and have an organized meal plan. (ID: 7)
As a user, I want to be able to navigate through the site smoothly and be able to understand the functionality of it, so I can have a good user experience and be compelled to keep returning to the application for recipes. (ID: 10)
As a user, I want to be able to view the website on my phone, so I can use the application in any scenario and environment I find myself in. (ID: 11)


## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.

## Data Model

 | Attribute      | Type     | Description |
   | ------------- | -------- | ------------|
   | id    | integer   | Primary user key |
   | first_name     | text   | Name of user|
   | last_name       |text| Last name of user |
   | email         | text not null unique     | User email |
   | username       | text not null unique   | Unique username |
   | password | text not null   | User’s password |
   | created_at    | timestamp   | time the user was created at |
   | favorites     | text[] | user’s favorite recipes |



## Endpoints

List the API endpoints you will need to implement.




