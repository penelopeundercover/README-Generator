const questions = require("./utils/questions.js");
const markdown = require("./utils/generateMarkdown.js");
const writeFile = require("./utils/generateFile.js");
const fs = require("fs");
const inquirer = require("inquirer");
console.log("Let's make your README!");

const content = "input".questions;

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeFile("README.md", markdown(content));
  });
}

// Function call to initialize app
init();
