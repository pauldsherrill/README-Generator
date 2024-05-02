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
    return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`;
  } else if (answers.license == 'APACHE') {
    return `[APACHE](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
  } else if (answers.license == 'GPL 3.0') {
    return `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text)`;
  } else if (answers.license == 'BSD 3') {
    return `[BSD 3](https://opensource.org/license/bsd-3-clause)`;
  } else if (answers.license == 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  return `Copyright © 2024 ${answers.name}. <br />
This project is ${renderLicenseLink(answers)} licensed.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return (
`# ${answers.title} ${renderLicenseBadge(answers)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
${renderLicenseSection(answers)}

## Questions
${answers.name} <br />
https://github.com/${answers.github}`
)
}

module.exports = { generateMarkdown };
