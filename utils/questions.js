const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why and how of your project.",
  },
  {
    type: "input",
    name: "table-of-contents",
    message:
      "Press enter to launch your favorite editor and insert the table of contents.",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide a step-by-step guide to installing your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How does one use this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license to use for your project.",
    choices: [
      "MIT License",
      "The Unlicense",
      "Apache License 2.0",
      "Mozilla Public License",
      "GNU AGPLv3",
      "I don't want to use a license.",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who worked on this project with you?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests on your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "bonus-question",
    message: "What is the air-speed velocity of an unladen swallow?",
  },
];

module.exports = questions;
