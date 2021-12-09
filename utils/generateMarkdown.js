// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ''
    }
    else if (license === 'MIT') {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    else if (license === 'BSD') {
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
    }
    else if (license === 'GPL') {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {
  if (!license) {
    return ''
  }
  if (license === 'MIT') {
    return `## License
    ### https://opensource.org/licenses/MIT`
}
  else if (license === 'BSD') {
    return `## License
    ### https://opensource.org/licenses/BSD-3-Clause`
  }
  else if (license === 'GPL') {
    return ` ## License
    ### https://www.gnu.org/licenses/gpl-3.0`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else if (license) {
  return '- <a href="#license">License</a>'
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = readMeInfo => {
  return `# ${readMeInfo.title}
  ${renderLicenseBadge(readMeInfo.license)}
  ## Description
  ### ${readMeInfo.description}
  ## Table of Contents
  - <a href="#installation">Installation</a>
  - <a href="#usage">Usage</a>
  ${renderLicenseSection(readMeInfo.license)}
  - <a href="#contributing">Contributing</a>
  - <a href="#tests">Tests</a>
  - <a href="#questions">Questions</a>
  ## Installation
  ### ${readMeInfo.installationInstructions}
  ## Usage
  ### ${readMeInfo.usageInfo}
  ## Contributing
  ### ${readMeInfo.authors}
  ## Tests
  ### ${readMeInfo.tests}
  ## Questions
  ### <a href="https://www.github.com/${readMeInfo.github}">${readMeInfo.github}</a>
`;
}

module.exports = { 
  renderLicenseBadge, 
  generateMarkdown, 
  renderLicenseLink,
  renderLicenseSection
 };
