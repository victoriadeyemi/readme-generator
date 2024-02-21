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
    name: "email address",
},

{
    type: "input",
    note: "What it the title of your project?",
    name: "project title",
},

{
    type: "input",
    note: "How can you describe your project?",
    name: "description",
},

{
    type: "input",
    note: "What does your project contain?",
    name: "table of contents",
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
