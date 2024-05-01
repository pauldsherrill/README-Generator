// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What steps did you take to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would a user navigate and use your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'questions',
    }

];

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFileSync();
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown(userAnswers));
    })
}
// Function call to initialize app
init();
