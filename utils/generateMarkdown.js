const renderLicenseText = require("./licenseText.js");
const renderLicenseSection = require("./licenseSection.js");
const questions = require("./questions.js");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(renderLicenseSection.renderLicenseBadge(data.license));
  return `${renderLicenseSection.renderLicenseBadge(data.license)}

  # ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  1. Description
  2. Table of Contents
  3. Installation
  4. Usage
  5. License
  6. Contributors
  7. Tests
  8. Contact

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
