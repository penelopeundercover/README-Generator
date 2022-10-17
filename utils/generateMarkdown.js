const renderLicenseText = require("./licenseText.js");
const renderLicenseSection = require("./licenseSection.js");
const questions = require("./questions.js");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection.renderLicenseBadge(data.license)}

  # ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [License] (#license)
  5. [Contributors] (#contributors)
  6. [Tests] (#tests)
  7. [Contact] (#contact)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

   ##License
   ${renderLicenseSection.renderLicenseLink(data.license)};
  ${renderLicenseText(data.license)}

  ##Contributors
  ${data.contributors}

  ##Tests
  ${data.tests}

  ##Contact Info
  https://github.com/${data.github}
  ${data.email}`;
}

module.exports = generateMarkdown;
