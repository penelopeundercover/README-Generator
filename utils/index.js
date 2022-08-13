// TODO: Create an array of questions for user input
const questions = require("./utils/questions");
const { writeFile } = require("./utils/generateFile");

// TODO: Create a function to initialize app
function init() {
  console.error(questions), writeFile();
}

// Function call to initialize app
init();
