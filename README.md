# Bamazon App

## What do we have here?
Bamazon is a command line node app that creates an Amazon-like storefront with MySQL. The app takes in orders from customers and depletes stock from the store's inventory with bamazonCustomer.js. With bamazonManager.js the app can view all products, view products with low inventory (less than 5), add quantities to existing products, and add new products entirely.

You will need to install the mySQL and inquirer npm packages.

## Customer Demo:

<img src="https://cdn.rawgit.com/Jenniferbazelak/bamazon/6d86ea87/bamazon.svg">

## How To
Go to the command line and enter the following to play as the customer:
```
node bamazoncustomer.js
```

## Manager Demo:

<img src="https://cdn.rawgit.com/Jenniferbazelak/bamazon/6d86ea87/bamazonManager.svg">

## How To
Enter the following to play as the manager:
```
node bamazonManager.js
```
