// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');

// const readMeText = generateMarkdown(title, readMeData);

// fs.writeFile('README.md', readMeText, err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!')
// });

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'installation-instructions',
        message: 'Please provide information on how to install your program.',
    },
    {
        type: 'input',
        name: 'usage-info',
        message: 'Please provide information on how to use your program.',
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Please credit each person(s) that worked on this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project from the list of options below.',
        choices: []
    }
];

// // TODO: Create a function to write README file
// function writeToFile();

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
};

// Function call to initialize app
init();
