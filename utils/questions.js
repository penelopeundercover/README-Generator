const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "editor",
    name: "Description",
    message:
      "Provide a short description explaining the what, why and how of your project. Press enter to launch your favorite editor.",
  },
  {
    type: "editor",
    name: "Table of Conents",
    message:
      "Press enter to launch your favorite editor and insert the table of contents.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Provide a step-by-step guide to installing your project.",
  },
  {
    type: "input",
    name: "Usage",
    message: "How does one use this project?",
  },
  {
    type: "list",
    name: "License",
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
    name: "Contributors",
    message: "Who worked on this project with you?",
  },
  {
    type: "input",
    name: "Tests",
    message: "How do you run tests on your project?",
  },
  {
    type: "input",
    name: "Contact Info",
    message:
      "How can someone get in touch with you if they have questions about your project? Email, github, linkedIn, etc.",
  },
];

module.exports = questions;
