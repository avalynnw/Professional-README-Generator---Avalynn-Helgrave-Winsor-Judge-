// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user input
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
        message: "What is your email address?\n",
        name: 'email',
        default: 'avalynnjudge@gmail.com',
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
        name: 'description',
        default: 'This program is desinged to quickly and easily generate quality README files for GitHub projects.'
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
        name: 'installation_steps',
        default: 'Clone this project your personal computer using the command: \n\n\tgit clone git@github.com:avalynnw/README-Generator.git \n\nThen, use: \n\n\tnpm install {package-name}\n\n to install inquirer, fs, and path in the "Develop" directory.'
    }
    ,
    {
        type: 'input',
        message: "Provide instructions and examples for use. To add a screenshot, add all images to the folder ./assets/images/ in .png or .jpg format and they will be added to the README file automatically. \n",
        name: 'usage_instructions',
        default: 'Run the program from the "Develop" directory using \n\n\tnode index.js\n\n and fill out the prompts to generate the README file one directory up.'
    }
    ,
    {
        type: 'input',
        message: "List your collaborators, if any, with links to their GitHub profiles:\n",
        name: 'collaborators',
        default: 'Avalynn Helgrave, https://github.com/avalynnw'
    }
    ,
    {
        type: 'input',
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:\n",
        name: 'third_party_assets',
        default: 'Modules: inquirer, fs, path'
    }
    ,
    {
        type: 'input',
        message: "If you followed any tutorials, include links to those here:\n",
        name: 'tutorials',
        default: 'README guide: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide'
    }
    ,
    {
        type: 'input',
        message: "List any tests for your application and describe how to run them.\n",
        name: 'test',
        default: 'No tests have been written for this application at this time.'
    }
    ,
    {
        type: 'list',
        message: "Choose a license from the list:\n",
        name: 'license',
        choices: [  "GNU_AGPLv3",
                    "GNU_GPLv3",
                    "GNU_LGPLv3",
                    "Mozilla_Public_License_2.0",
                    "Apache_License_2.0",
                    "MIT_License",
                    "Boost_Software_License_1.0",
                    "The_Unlicense"
        ],
    }
    ];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
}

// Function to initialize app
function init() {

    const responses = inquirer.prompt(questions)
    .then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile("./assets/generated_readme/README.md", markdown);
    });
}

// Function call to initialize app
init();


