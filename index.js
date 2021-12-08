// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdownFunctions = require('./utils/generateMarkdown.js');
const writeToFile = require('./utils/generate-page.js');

// TODO: Create a function to initialize app and create questions
const init = projectData => {
    if (!projectData) {
        projectData = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project. (Required)',
            validate: readMeTitle => {
                if (readMeTitle) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for you project. (Required)',
            validate: readMeDescription => {
                if (readMeDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Please provide information on how to install your program.',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please provide information on how to use your program.',
        },
        {
            type: 'input',
            name: 'authors',
            message: 'Please credit each person(s) that worked on this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please provide a link to the program in test."
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub user name.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project from the list of options below.',
            choices: ['BSD', 'MIT', 'GPL']
        }
    ])
    .then(readMeInfo => {
        projectData.push(readMeInfo) 
            return readMeInfo
            ;
    })
};

// Function call to initialize app
init()
    .then(readMeInfo => {
        return markdownFunctions.generateMarkdown(readMeInfo);
    })
    .then(readMeText => {
        return writeToFile(readMeText),
        console.log("Check the ./dist folder in the root directory for your README!");
    })
    .catch(err => {
        console.log(err);
    })
  