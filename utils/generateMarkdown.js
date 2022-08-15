const licenseArray = [
  "MIT License",
  "The Unlicense",
  "Apache License 2.0",
  "Mozilla Public License 2.0",
  "GNU AGPL v3",
];
// const licenseText = "";

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
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// let licenseText = "";
//   if (license === licenseArray[0]) {
//    licenseText === "MIT License

// Copyright (c) [year] [fullname]

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE."
//  }

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
  // ${renderLicenseSection(data.license)}
  ##Contributors
  ${data.contributors}
  ##Tests
  ${data.tests}
  ##Contact Info
  [${data.github}](https://github.com/${data.github})
  ${data.email}`;
}

module.exports = generateMarkdown;
