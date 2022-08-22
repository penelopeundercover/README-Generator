// TODO: Create an array of questions for user input
const questions = require("./utils/questions.js");
const markdown = require("./utils/generateMarkdown.js");
const generateFile = require("./utils/generateFile.js");
const fs = require("fs");
const inquirer = require("inquirer");
console.log("Let's make your README!");

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
