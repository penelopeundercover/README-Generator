//TODO: Create a function to write README file
const fs = require("fs");

const content = "input".questions;

function writeFile(path, content) {
  fs.writeFile("questions.js", content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Ta-da! Your README is ready!");
  });
}

module.exports = generateFile;
