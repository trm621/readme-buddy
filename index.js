// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// const readMeText = generateMarkdown(title, readMeData);


// // TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'Enter the title of your project. (Required)',
//         validate: readMeTitle => {
//             if (readMeTitle) {
//                 return true;
//             } else {
//                 console.log('Please enter a title for your project!');
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Enter a description for you project. (Required)',
//         validate: readMeDescription => {
//             if (readMeDescription) {
//                 return true;
//             } else {
//                 console.log('Please enter a description of your project!');
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'installation-instructions',
//         message: 'Please provide information on how to install your program.',
//     },
//     {
//         type: 'input',
//         name: 'usage-info',
//         message: 'Please provide information on how to use your program.',
//     },
//     {
//         type: 'input',
//         name: 'authors',
//         message: 'Please credit each person(s) that worked on this project.'
//     },
//     {
//         type: 'list',
//         name: 'license',
//         message: 'Please choose a license for your project from the list of options below.',
//         choices: []
//     }
// ];

// // TODO: Create a function to write README file
const writeToFile = () => {
    fs.writeFile('README.md', readMeText, err => {
        if (err) throw err;
    
        console.log('README complete! Check out README.md to see the output!')
    });
};

// TODO: Create a function to initialize app
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
        }
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'Please choose a license for your project from the list of options below.',
        //     choices: []
        // }
    ])
    .then(readMeInfo => {
        projectData.push(readMeInfo) 
            return readMeInfo,
            console.log(readMeInfo);
    
    })
};

// Function call to initialize app
init()
    .then(readMeInfo => {
        return generateMarkdown(readMeInfo)
    })
  