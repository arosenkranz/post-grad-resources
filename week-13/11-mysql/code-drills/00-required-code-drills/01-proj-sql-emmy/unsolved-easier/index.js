//1.  Require mysql to use it as a database, inquirer so a user can interact with that database however he/she chooses
//Remember, you'll have to install all the packages we've required here
var mysql = require("mysql");
var inquirer = require("inquirer");

// We're going to manage our nominees in style with this awesome package
var Table = require('cli-table');


//2.  configure our connection with mysql and a local server
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


//3. Review the function below. It is the display for our nominees
//This function is already complete. It returns us a list of all the nominees and their corresponding data 
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
            //CREATE
            case "Add Nominees":
                add();
                break;

            //READ
            case "Review the nominees":
                review();
                break;

            //UPDATE    
            case "Change a nominee's rating":
            //Oooooh, look! A callback
               populateNominees(updateRating);
                break;

            //DELETE    
            case "Delete a nominee :(":
            //Oooooh, look! ANOTHER callback
                populateNominees(remove);
                break;

        }
    })
}


//Let's make it so that we can add a nominee to our prestigious list. 
//As you can see from the prompt, we'll be filling out every column for our nominees' data.
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


        //4. complete the query string:
        var queryString = "INSERT ????"
        connection.query(queryString, {


            //5. Input the appropriate info where the ?s are
            show_name: //???,
            num_seasons: //????,
            genre: //?????,
            //Don't forget... this needs to be a number that can have decimal places....
            rating: //???????


        })
        //Let's have a gander at our updated table (pulling straight from our database!!!!)
        review()
    })
}
//In our inquirer, we could have the user manually type in the name of a show... but what if they mispell?! 

//6.
//It'd probably be better if we query our db for a list of the nominees, and put those in an array so we can provide them as choices for inquirer. Otherwise, the user would have to input text that exactly matches data in our tabel... yuck
function populateNominees(crud){
    //We don't wan't this array doubling, tripling, etc.. every time we call this function. Let's empty it everytime so we can refill it with our updated data.
    options = []



    //7. Complete the query string. Remember, * means all
    var queryString = "SELECT * ?????"
    connection.query(queryString, function (err, res) {
       
    //8. LOOP through the names of the nominees, and PUSH them into our options array
       
        //Here is our callback. It will call either the update or delete functions depending on what we pass to it in our switch/case
        //Crud will act as either the update or remove function, depending on what you ask of it
        crud(options)
    })


}

//This function will allow the user to update the rating of a show.

function updateRating(list) {

    inquirer.prompt([{
       name: "nominee",
       type: "list",
       message: "Which show do you want to change the rating for",
       //Remember, list is the options array we passed to this function in our populateNominees function. It is an array containing the most up-to-date list of nominee names
       choices: list
    }, {
        name: "rating",
        message: "Enter the new rating out of 10 (decimals up to two places are accepted)"
    }]).then(function(answers){


        //9.  Complete the query string
        var queryString = "UPDATE ????"
        connection.query(queryString,[{


            //10. Input the appropriate information
            //This is the new data we will SET

            rating: //????? remeber, this needs to be a number capable of having decimal places
        },{
            //This is the row WHERE we will update the data
            show_name: //???????
        }], 
        function(err, res) {
            console.log("Here is an updated list of the nominees:")
            //Let's have a gander at our updated table (pulling straight from our database!!!!)
            review()   
        }
    )
    })

    
}

//This function will remove one show from out database
function remove(list) {
    inquirer.prompt([{
        name: "delete",
        type: "list",
        //Remember, list is the options array we passed to this function in our populateNominees function. It is an array containing the most up-to-date list of nominee names
        choices: options,
        message: "Who is getting booted from the nominees?"
    }]).then(function(answer){


        //11. Complete the query string
        var queryString = "DELETE ?????"

        connection.query(queryString,{

            
            //12. Input the appropriate information
            //This is the row WHERE we will execute our delete
            show_name: //?????
        })
        //Let's have a gander at our updated table (pulling straight from our database!!!!)
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
        //If we want to manage more nominees, we'll rerun our initial prompt
        if (answers.continue === "Yes") {
            manageNominees();
            //Otherwise, we'll terminate the process
        } else {
           exit()
        }

    });
}


function exit() {
    console.log("Thanks for making the all time Emmy's special! Goodbye.")
    //This will exit out of our command line process
    connection.end()
}

//This is where the magic begins
manageNominees()

//If you've made it here, you should be done!!!!
