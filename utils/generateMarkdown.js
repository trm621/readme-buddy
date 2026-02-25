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

function renderLicenseLink (license) {
  if (!license) {
    return ''
  }
  if (license === 'MIT') {
    return `## License
    ## <a href="https://opensource.org/licenses/MIT">MIT</a>`
}
  else if (license === 'BSD') {
    return `## License
    ## <a href="https://opensource.org/licenses/BSD-3-Clause">BSD</a>`
  }
  else if (license === 'GPL') {
    return ` ## License
    ## <a href="https://www.gnu.org/licenses/gpl-3.0">GPL</a>`
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else if (license) {
  return '- <a href="#license">License</a>'
  }
}

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
  ${renderLicenseLink(readMeInfo.license)}
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
