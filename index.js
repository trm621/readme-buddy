// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        type: 'checkbox',
        name: 'languages',
        message: 'What languages did you use to build this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
        name: 'link',
        message: 'Please provide a link to the deployed website.',
    },
    {
        type: 'input',
        name: 'preview-link',
        message: 'Please provide a link to a preview screenshot of your project.',
        validate: previewLink => {
            if (previewLink) {
                return true;
            } else {
                console.log('Please provide a link to a preview screenshot of the project!');
            }
        }
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Please credit each person(s) that worked on this project.'
    }
];

// TODO: Create a function to write README file
const writeToFile = (title, data) => {
    return `
    # ${title}
    ## ${description}
    ## ${languages}
    ## ${link}
    ## ${preview-link}
    ## ${authors}
    `
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readMeData)
};

// Function call to initialize app
init();
