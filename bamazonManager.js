var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require("console.table");

cTable;

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    if (err) throw err;
    startSession();
});

function startSession() {

    inquirer.prompt([
        {
            type: "list",
            message: "Please select an option below:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            name: 'action'
        },

    ]).then(function (answer) {
        if (answer.action === "View Products for Sale") {
            connection.query("SELECT id, product_name, price, quantity  FROM products", function (err, res) {
                if (err) throw err;
                console.log("Items for sale:  \n");
                console.table(res);
                startSession();
            });
        }
        if (answer.action === "View Low Inventory") {
            connection.query("SELECT * FROM products WHERE quantity<=5", function (err, res) {
                if (err) throw err;
                console.log("Current Low Inventory:  \n");
                console.table(res);
                startSession();
            });
        }
        if (answer.action === "Add to Inventory") {
            connection.query("SELECT * FROM products", function (err, res){
                if (err) throw err;
                console.table(res);
            });
            inquirer.prompt([
                {
                    message: 'Type the id number of the product you would like to add more of at this time',
                    name: 'item'
                },
                {
                    message: "How many units of this product would you like to add?",
                    name: 'units'
                }

            ]).then(function (answer) {
                connection.query("SELECT quantity FROM products WHERE id=?", [answer.item], function (err, res) {
                    if (err) throw err;
                    var newQuan = (res[0].quantity + parseFloat(answer.units));
                    connection.query("UPDATE products SET quantity=? WHERE id=?", [newQuan, answer.item], function (err, res) {
                        if (err) throw err;
                        console.log("You have successfully added " + answer.units + " to your inventory.")
                        startSession();
                    });
                });
            });
        }
        if (answer.action === "Add New Product") {
            inquirer.prompt([
                {
                    message: 'What is the product you would like to add?',
                    name: 'name',
                }, {
                    message: 'What department is your product in?',
                    name: 'department',
                }, {
                    message: 'How much is this product?',
                    name: 'price',
                },
                {
                    message: 'How many units would you like to add?',
                    name: 'units',

                }
            ]).then(function (answer) {

                connection.query("INSERT INTO products (product_name, department_name, price, quantity) VALUES ('" + answer.name + "', '" + answer.department + "', '" + answer.price + "', '" + answer.units + "');", function (err, res) {
                    if (err) throw err;
                    connection.query("SELECT * FROM products", function (err, res) {
                        console.log("You have successfully added " + answer.item + " to your inventory.");
                    console.table(res);
                    
                    });
                });

            });
        }
    });
} 