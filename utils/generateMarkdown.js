const licenseText = require("./utils/licenseText.js");

const licenseArray = [
  "MIT License",
  "The Unlicense",
  "Apache License 2.0",
  "Mozilla Public License 2.0",
  "GNU AGPL v3",
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return;
    ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else if (license === licenseArray[1]) {
    return;
    ("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
  } else if (license === licenseArray[2]) {
    return;
    ("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
  } else if (license === licenseArray[3]) {
    return;
    ("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
  } else if (license === licenseArray[4]) {
    return;
    ("[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)");
  } else {
    console.log("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return `[("https://choosealicense.com/licenses/mit/")]`;
  } else if (license === licenseArray[1]) {
    return `[("https://choosealicense.com/licenses/unlicense/"]`;
  } else if (license === licenseArray[2]) {
    return `[("https://choosealicense.com/licenses/apache-2.0/")]`;
  } else if (license === licenseArray[3]) {
    return `[("https://choosealicense.com/licenses/mpl-2.0/")]`;
  } else if (license === licenseArray[4]) {
    return `[("https://choosealicense.com/licenses/agpl-3.0/")]`;
  } else {
    console.log("");
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let licenseText = "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ${renderLicenseBadge(data.license)}
  ##Description
  ${data.description}
  ##Table of Contents
  ${table - of - contents}
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
   ##License
   ${renderLicenseLink}
  ${renderLicenseSection(data.license)}
  ##Contributors
  ${data.contributors}
  ##Tests
  ${data.tests}
  ##Contact Info
  [${data.github}](https://github.com/${data.github})
  ${data.email}`;
}

module.exports = generateMarkdown;
