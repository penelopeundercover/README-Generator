//TODO: Create a function to write README file
const fs = require("fs");

function writeFile(path, content) {
  fs.writeFile("./docs/README.md", content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Ta-da! Your README is ready!");
  });
}

module.exports = writeFile;
