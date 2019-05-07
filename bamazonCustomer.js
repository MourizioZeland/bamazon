var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon",

});
connection.connect(function (err) {
    if (err) throw err;
 
    console.log("connected as id " + connection.threadId);
    
   
    searchSystem();
    
});

function afterConnection(response) {
    var update = "UPDATE bamazon.productlist SET stock_quantity = '?' Where item_id = '?' ";
    var hello = response.stock_quantity;
    let data = []
    connection.query(update, data, (err, res) => {
        if (err) throw err;
        console.log(res);
        
        connection.end();

    });

}
function searchSystem() {
    inquirer
        .prompt({
            name: "idMessage",
            type: "list",
            message: "Would you like to purchase an item ? ",
            choices: ["YES", "NO"]
        })
        .then(function (answer) {
            if (answer.idMessage === "YES") {
                displaySale();

            } else {
                connection.end("Thank You Come Again ! ");
            }
        });

}

function displaySale() {
    connection.query("SELECT * FROM bamazon.productlist", function (err, res) {
        for (var i = 0; i < res.length; i++) {

            console.log("ItemID: " + res[i].item_id + " | " + "Name: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
        }
        enterId();
    })


}
// pass in users selected amount
function selectSingleProduct(productId, amount) {
    connection.query("SELECT * FROM bamazon.productlist WHERE item_id = ? ", [productId], function (err, res) {
      console.log("This is the product you've ordered");
        console.log(res);
      // subtract the users amount from the stock_quantity
      for (var i = 0; i < res.length; i++) {
        var output = res[i].stock_quantity - amount;
        var price = res[i].price + res[i].stock_quantity;
      if(output>1){
        console.log("You have " + output + " products left in stock");
        console.log("Your total is: " + "$ " + price);
      }else{
        console.log("Insufficient quantity !");
      }
      // update the stock_quantity in the database with the updated value
     
    
      //afterConnection();
        // so if 40 items are in the db, and wants 5, save 35 items in the db for this productId
    }  
    });

}

function enterId() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "Enter ID# of item you wish to purchase ? ",
            choices: ["201", "202", "203", "204", "205", "206", "207", "208", "209", "210"]
        })
        .then(function (response) {
            var productId = response.id;
            inquirer
                .prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase ? "
                }).then(function(response) {
                    var amount = response.quantity;
                    selectSingleProduct(productId, amount);
                });
        
        })


}

