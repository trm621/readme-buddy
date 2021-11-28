// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = readMeInfo => {
  return `# ${readMeInfo.title}
  ## Description
  ### ${readMeInfo.description}
  ## Table of Contents
  1. <a href="#installation">Installation</a>
  2. <a href="#usage">Usage</a>
  3. <a href="#license">License</a>
  4. <a href="#contributing">Contributing</a>
  5. <a href="#tests">Tests</a>
  6. <a href="#questions">Questions</a>
  ## Installation
  ### ${readMeInfo.installationInstructions}
  ## Usage
  ### ${readMeInfo.usageInfo}
  ## License
  ### ${readMeInfo.license}
  ## Contributing
  ### ${readMeInfo.authors}
  ## Tests
  ### ${readMeInfo.tests}
  ## Questions
  ### <a href="https://www.github.com/${readMeInfo.github}">${readMeInfo.github}</a>
`;
}

module.exports = generateMarkdown;
