// Require mysql to use it as a database, inquirer so a user can interact with that database however he/she chooses
var mysql = require("mysql");
var inquirer = require("inquirer");

// We're going to manage our nominees in style with this awesome package
var Table = require('cli-table');

// configure our connection with mysql and a local server
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "emmysDB"
});

connection.connect(function (err) {
    if (err) throw err;
});


function review() {
    // Let's grab a list of all the nominees
    connection.query("SELECT * FROM nominees", function (err, res) {

        var table = new Table({
            //You can name these table heads chicken if you'd like. They are simply the headers for a table we're putting our data in
            head: ["ID", "Nominee", "Seasons", "Genre", "Rating"],
            //These are just the width of the columns. Only mess with these if you want to change the cosmetics of our response
            colWidths: [10, 20, 15, 10, 10]
        });
    
        // table is an Array, so you can `push`, `unshift`, `splice`
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].nominee_id, res[i].show_name, res[i].num_seasons, res[i].genre, res[i].rating],
            );
        }
        console.log(table.toString());
        restart()
    });
}


function manageNominees() {
    inquirer.prompt([
        {
            type: "list",
            name: "userOptions",
            message: "What would you like to do",
            choices: ["Review the nominees", "Add Nominees", "Change a nominee's rating", "Delete a nominee :("]
        }
    ]).then(function (answer) {
        switch (answer.userOptions) {
            case "Review the nominees":
                review();
                break;

            case "Add Nominees":
                add();
                break;

            case "Change a nominee's rating":
               populateNominees(updateRating);
                break;

            case "Delete a nominee :(":
                populateNominees(remove);
                break;

            // case "Exit":
            //     exit();
            //     break;
        }
    })
}


function add() {
    inquirer.prompt([{
        name: "nomiName",
        message: "\nEnter the name of the show\n"
    }, {
        name: "seasons",
        message: "How many seasons has the show run\n"
    }, {
        name: "genre",
        message: "Enter the genre.\n"
    }, {
        name: "rating",
        message: "Give it a rating out of 10.\n"

    }]).then(function(answers){
        connection.query("INSERT INTO nominees SET ?", {
            show_name: answers.nomiName,
            num_seasons: answers.seasons,
            genre: answers.genre,
            rating: parseFloat(answers.rating)
        })
        review()
    })
}

function populateNominees(crud){
    options = []
    connection.query("SELECT * FROM nominees", function (err, res) {
        
        for (var i = 0 ; i < res.length ; i++) {
            options.push(res[i].show_name)
        }
        crud(options)
    })


}

function updateRating(list) {

    inquirer.prompt([{
       name: "nominee",
       type: "list",
       message: "Which show do you want to change the rating for",
       choices: list
    }, {
        name: "rating",
        message: "Enter the new rating out of 10 (decimals up to two places are accepted)"
    }]).then(function(answers){
        connection.query("UPDATE nominees SET ? WHERE?",[{
            rating: parseFloat(answers.rating)
        },{
            show_name: answers.nominee
        }], 
        function(err, res) {
            console.log("Here is an updated list of the nominees:")
            review()
           
        }
    )
    })

    
}

function remove(list) {
    inquirer.prompt([{
        name: "delete",
        type: "list",
        choices: options,
        message: "Who is getting booted from the nominees?"
    }]).then(function(answer){
        connection.query("DELETE FROM nominees WHERE ?",{
            show_name: answer.delete
        })
        review()
       
    })

}

function restart() {
    inquirer.prompt([{
        type: "list",
        name: "continue",
        choices: ["Yes", "No"],
        message: "Would you like to do more?\n"
    }]).then(function(answers) {
        if (answers.continue === "Yes") {
            manageNominees();
        } else {
           exit()
        }

    });
}

function exit() {
    console.log("Thanks for making the all time Emmy's special! Goodbye.")
    connection.end()
}

manageNominees()
