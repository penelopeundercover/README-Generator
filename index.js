// TODO: Create an array of questions for user input
const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");
const fs = require("fs");
const { default: inquirer } = require("inquirer")
console.log("Let's make your README!")

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt[questions];
  console.error(questions), writeFile()
}

// Function call to initialize app
function init()
