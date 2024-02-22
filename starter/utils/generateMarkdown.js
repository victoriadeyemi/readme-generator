// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}


## License
${data.license}

## Questions
${data.questions}

Email me at <a href="mailto:${data.email}">${data.email}</a>  or visit my GitHub page at [${data.username}](https://github.com/${data.username})


`;
}

module.exports = generateMarkdown;
