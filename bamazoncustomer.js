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
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("Items for sale:  \n");
        console.table(res);
        startSession();
    });
});

    function startSession() {
        inquirer.prompt([
            {
                message: 'Type the id number of the product you would like to purchase',
                name: 'item'
            },
            {
                message: "How many units of this product would you like to buy?",
                name: 'units'
            }

        ]).then(function (answer) {
            connection.query("SELECT quantity FROM products WHERE id=?", [answer.item], function (err, res) {
                var quantity= res[0].quantity;
                if (answer.units > quantity) {
                    console.log("Insufficient quantity!")
                    startSession();
                } else {
                    var newQuan = (quantity - parseFloat(answer.units));
                    connection.query("UPDATE products SET quantity=? WHERE id=?", [newQuan, answer.item], function (err, res) {
                        if (err) throw err;
                        connection.query("SELECT price FROM products WHERE id=?", [answer.item], function (err, res) {
                            if (err) {
                                console.log(err);}
                            else{
                                console.log("Your purchase order has been submitted! Your total is " + "$" + (res[0].price * answer.units));
                                startSession();
                            }
                        }); //query 3
                    });//query2
                }//else
            });//query 1
        });//.then
    }//start sess

