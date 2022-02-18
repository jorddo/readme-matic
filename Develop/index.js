// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/readmeTemplate.js');
const generateMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'author',
    message: 'What is your name? (Required)',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
      }
    },
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: (usernameInput) => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your username!');
      }
    },
  },
  {
    type: 'input',
    name: 'githubLink',
    message: 'What is the link to your GitHub? (Required)',
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log('Please enter a name for your project!');
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter a name for your project!');
      }
    },
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log('Please enter a name for your project!');
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter test instructions for your project',
  },
  {
    type: 'checkbox',
    name: 'licenses',
    message: 'Which license would you like to use with this project?',
    choices: [
      'MIT',
      'GNU General Public 2.0',
      'Apache 2.0',
      'GNU General Public 3.0',
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
return inquirer.prompt(questions).then((readmeData) => {
  console.log(readmeData);
});
// Function call to initialize app
init();
