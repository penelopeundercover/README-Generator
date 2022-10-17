const questions = require("./questions.js");

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
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === licenseArray[1]) {
    return `![License](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if (license === licenseArray[2]) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === licenseArray[3]) {
    return `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if (license === licenseArray[4]) {
    return `![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
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

module.exports = {
  renderLicenseBadge: renderLicenseBadge,
  renderLicenseLink: renderLicenseLink,
};
