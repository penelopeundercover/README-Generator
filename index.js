// TODO: Create an array of questions for user input
const questions = require("./utils/questions.js");
const markdown = require("./utils/generateMarkdown.js");
const generateFile = require("./generateFile.js");
const fs = require("fs");
const inquirer = require("inquirer");
console.log("Let's make your README!");

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeFile(markdown, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
}

// Function call to initialize app
init();
