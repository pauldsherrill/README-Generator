// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { generateMarkdown } = require('./utils/generateMarkdown');

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
        message: 'Explain what steps you took to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How would a user navigate and use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others help contribute to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests were used for this project?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers), (err) => {
            err ? console.error(err) : console.log('Generated README.md');
        });
    });
}
// Function call to initialize app
init();