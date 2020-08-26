This project developed as test task for Innoscripta.

## THE PIZZA TASK
#### Task description
Let’s imagine you want to start a new pizza delivery business. Please create a small web application for online pizza ordering. The idea is to make a non-existing service where assumed clients can choose a pizza, put it into a cart and make an order.
#### Requirements
- The menu page should contain at least 8 pizzas
- A login should be made available for checking the history of orders. Please make sure that the login option is not mandatory for users (in other words, a user should be able to make an order without logging in)
- Your clients should be able to choose pizzas directly from the menu
- You can decide what else you want in the menu
- Adding a description for each pizza would be a nice decision
- Don’t proceed to the payment page. The last action from a client will be filling in the order form (address, name, surname, etc.) to get a confirmation that the order has been received
- A client should be able to put several pizzas into cart, and the quantity must be displayed on the cart icon
- Total price of each order must be calculated and shown in euros and in dollars. For instance, you can make a switch both in the menu and in the cart.
- Don’t forget to add delivery costs to the final bill. It can be a static figure
#### Technologies
- You are free to use any frameworks or libraries, but keep in mind that we primarily evaluate interface, functionality and workflow
- Less is more
#### Delivery format
- Please provide a link to your repository and a direct link to the deployed version of your application (e.g. on Heroku)
- The solution must be testable by a non-technical person
#### Resources
- Deployment of the application: any free hosting platform (e.g. Heroku) or your own server
- Use Git as code source management tool (following Git Flow will be assessed)
- The estimated duration for the task completion is 7 days

## MERN Stack
- Mongo
- Express
- React (Redux)
- Node

## Tests
- `src/store/**/__tests__`

## Require set env variables
Create .env file in project directory with follow vars:

```
MONGO_URI=
SERVER_PORT=5000
JWT_SECRET=secret
```

## Available Scripts

In the project directory, you can run:

`yarn install`

`yarn server:start`

`yarn test`

