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
    type: "input",
    name: "License",
    message: "Provide license info if you have one.",
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
