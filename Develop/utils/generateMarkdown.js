// TODO: Create a function that returns a license badge based on which license is passed in
const copy = require('./readmeCopy');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
    ? `![${license}](https://img.shields.io/badge/license-${license}-blue)`
    : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'GNU_General_Public_License_3.0') {
    return 'https://opensource.org/licenses/GPL-3.0';
  } else if (license === 'Apache_2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else {
    return 'https://opensource.org/licenses/GPL-2.0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? copy[license] : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)


  ## Installation

      ${data.installation}



  ## Usage

  ${data.usage}



  ## How to Contribute

  ${data.contribution}



  ## Tests

  ${data.test}



  ## Questions

  GitHub Username: [${data.github}](${data.githubLink})

  Email: ${data.email}



  ## License

  [${renderLicenseBadge(data.licenses)}](${renderLicenseLink(data.licenses)})

  ${renderLicenseSection(data.licenses)}
`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
