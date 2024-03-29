const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    note: "What is your Github username?",
    name: "username",
},

{
    type: "input",
    note: "What is your email address?",
    name: "email",
},

{
    type: "input",
    note: "What it the title of your project?",
    name: "title",
},

{
    type: "input",
    note: "How can you describe your project?",
    name: "description",
},

{
    type: "input",
    note: "What are the installation instructions?",
    name: "installation",
    default: "npm install",
},

{
    type: "input",
    note: "What is the information usage?",
    name: "usage",
},

{
    type: "input",
    note: "What is the contribution guide?",
    name: "contribution",
},

{
    type: "input",
    note: "What are the test instructions?",
    name: "tests",
    default: "npm test",
},

{
    type: "input",
    note: "What questions do you have?",
    name: "questions",
},

{
    type: "input",
    note: "What license is in use?",
    name: "license",
    default: "MIT",
},

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("README Generated!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    });

}

// function call to initialize program
init();
