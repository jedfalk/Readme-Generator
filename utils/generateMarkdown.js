// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "MIT") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
if (license === "Apache 2.0") {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
if (license === "GNU GPL V2") {
  return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
}
if (license === "BSD 3-Clause") {
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
}
if (license === "WTFPL") {
  return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
}
if (license === "none") {
  return ''
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

if (license === "MIT") {
  return `[MIT Liscense](https://opensource.org/licenses/MIT)`
}
if (license === "Apache 2.0") {
  return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
}
if (license === "GNU GPL V2") {
  return `[GNU GPL V2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
}
if (license === "BSD 3-Clause") {
  return `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`
}
if (license === "WTFPL") {
  return `[WTFPL](http://www.wtfpl.net/about/)`
}
if (license === "none") {
  return ''
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ' ';
    } else {
      return `
      ### Licensing
      ${renderLicenseLink(license)}
      ${renderLicenseBadge(license)}
      `;
    }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Tests](#tests)
-[Questions](#questions)

## License
${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Questions
If you have any questions please reach out at ${data.email}. You can find more of my projects at ${data.github}.
`;
}

export default generateMarkdown;
