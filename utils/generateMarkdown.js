// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GNL 2.0':
      return `https://www.gnu.org/licenses/old-license/gpl-2.0.en.html`;
    case 'GNL 3.0':
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License\nThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.\n
  `;
}
//README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents
  -[Installation](#installation)<br>
  -[Usage](#usage)<br>
  -[License](#license)<br>
  -[Contributing](#contributing)<br>
  -[Test](#test)<br>
  -[Questions](#questions)<br>

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please feel free to contact me at [${data.github}](https://github.com/${data.github}).
`;
}
module.exports = generateMarkdown;


// module.exports = {
//   renderLicenseBadge,
//   renderLicenseLink,
//   renderLicenseSection,
//   generateMarkdown
// };







// # ${answerOBJ.title}
//   License: ${renderLicenseBadge('MIT')}

//   ${renderLicenseBadge(answerOBJ.license)}
//   ${renderLicenseSection(answerOBJ.license)}