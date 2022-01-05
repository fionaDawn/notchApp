# notchApp

# Problem
Goal:
Create a simple marketplace webpage satisfying the following requirements:
Frontend:
- Login page
- Display list of items with prices via an endpoint
- Ability to search this list of items
- Shopping cart functionality to add/remove items
- Checkout shopping cart (this view should allow you to add/remove items as well)
- Checkout should calculate taxes (assume HST)
- Checkout should present cart total

Backend:
- Create a simple backend API using any framework (REST, GraphQL) that the FE will
communicate with

# Solution

#### Pre-requisites:
- node
- yarn


### How to run?
#### Ports 3000 and 3002 should be available for use
- Clone this repo
- Then we make sure to install dependencies so make sure tp run `yarn install` on both ui and backend folders
- On the ui folder, run `yarn dev`
- After that may access the ui app by typing in  http://localhost:3000/ on your browser then can call backend successfully in http://localhost:3002/


### How to test?
#### Prerequisite: App should be running 
- Run `yarn test` in both ui and backend directories


### What are the highlights of your logic/code writing style?
I used React with Redux Toolkit and Material UI for the frontend then Node with Express for the backend.
I also used Cypress for integration testing and Jest for unit tests.

### What could you do better in your next iteration?
- better UI
- add more test cases
- use of localStorage for cartItems or use library to retain redux store during refresh
- support for Login and actual order functionality


### What were the questions you asked and your own answers/assumptions.
1. What would be the HST rate?
Assumption: 7%.
   
2. What should be the format for the mock data?
Assumption: JSON

3. What can be searchable?
Assumption: Product names only

4. How do we match based on the search text?
Assumption: Product names should start with search text pattern, case insensitive

5. How do we know a user is logged in?
Assumption: Since we don't have user data for now, let's just assume when successfully logged in it would generate a notchToken. So for now when you click sign in button it'll only check if notchToken is available for it to allow access to private routes.

