const inquirer = require('inquirer')
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Ilovegod10!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    showProduct();
});

const showProduct = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.table(res)
        customerPurchase()
    })
}
const customerPurchase = () => {


    inquirer.prompt([
        {
            name: 'productId',
            type: 'input',
            message: 'Which product ID would you like to buy?'

        },
        {
            name: 'product',
            type: 'input',
            message: 'Which product name would you like to buy?'

        }
    ]).then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers)
        console.log(answers.productId)
    })
}