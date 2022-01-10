// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [ 
    { 
        type: 'input',
        message: "What is your GitHub username?\n",
        name: 'github_username',
        default: 'avalynnw',
    }
    ,
    { 
        type: 'input',
        message: "What is the name of the Project's GitHub repository?\n",
        name: 'repository_name',
        default: 'README-Generator'
    }
    ,
    { 
        type: 'input',
        message: "What is the Project title?\n",
        name: 'title',
        default: 'Professional README Generator'
    }
    ,
    {
        type: 'input',
        message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n- What was your motivation?\n- Why did you build this project?)\n- What problem does it solve?\n- What did you learn?\n",
        name: 'description'
    }
    ,
    {
        type: 'confirm',
        message: "Add a table of contents?\n",
        name: 'table_boolean',
        default: 'y'
    }
    ,
    {
        type: 'input',
        message: "Provide a step-by-step description of how to get the development environment running for the Installation section.\n",
        name: 'installation_steps'
    }
    ,
    {
        type: 'input',
        message: "Provide instructions and examples for use. To add a screenshot, add all images to the folder ./assets/images/ in .png or .jpg format and they will be added to the README file automatically. \n",
        name: 'usage_instructions'
    }
    ,
    {
        type: 'input',
        message: "List your collaborators, if any, with links to their GitHub profiles:\n",
        name: 'collaborators'
    }
    ,
    {
        type: 'input',
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:\n",
        name: 'third_party_assets'
    }
    ,
    {
        type: 'input',
        message: "If you followed tutorials, include links to those here:\n",
        name: 'tutorials'
    }
    ,
    {
        type: 'list',
        message: "If you want an MIT open source license, enter your full name: \n",
        name: 'full_name',
        choices: []
    }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app


function init() {

    const responses = inquirer.prompt(questions)
    .then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile("README.md", markdown);
    }
        // response.table_boolean == 1
        // ? console.log('add a table')
        // : console.log('dont add a table')
    );
}

// Function call to initialize app
init();
