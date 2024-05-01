// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (answers.license == 'APACHE') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (answers.license == 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (answers.license == 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (answers.license == 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if (answers.license == 'MIT') {

  } else if (answers.license == 'APACHE') {

  } else if (answers.license == 'GPL 3.0') {
    
  } else if (answers.license == 'BSD 3') {
    
  } else if (answers.license == 'None') {
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  renderLicenseBadge(answers);
  renderLicenseLink(answers);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `# ${answers.title}
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Contributing
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## License
  ${answers.license}
  ## Author
  ${answers.author}`;
}

module.exports = { generateMarkdown };
