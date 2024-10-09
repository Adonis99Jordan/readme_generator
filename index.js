// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guideline:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instruction:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your Github License',
        choices: ['None', 'MIT', 'Apache', 'GNL 2.0', 'GNL 3.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (error) => {
        if (error) {
            console.error('Error writing file:', error);
        } else {
            console.log('README.md has been generated successfully!');
        }
    });
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    // Prompt the user to either create a README file or exit

     // If they choose to create the file, then you prompt them with all of the related questions
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Create README file', 'Exit'],
        },
    ]). then((initialAnswer) => {
        if (initialAnswer.action === 'Create README file') {
            inquirer.prompt(questions).then((answerObj) => {
    
    // Once you have the answerOBJ, you pass it to your generateMarkdown function
                const markdown = generateMarkdown(answerObj);
                writeToFile('README.md', markdown);
            });
        } else {
            console.log('Exiting Page...');
        }
    })
}
// Function call to initialize app
init();
