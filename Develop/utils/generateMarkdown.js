const inquirer = require('inquirer');
const fs = require('fs');


const path = require('path');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != null) {
    if (license == "GNU_AGPLv3") {
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license == "GNU_GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license == "GNU_LGPLv3") {
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (license == "Mozilla_Public_License_2.0") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license == "Apache_License_2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license == "MIT_License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == "Boost_Software_License_1.0") {
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license == "The_Unlicense") {
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
  } else {
    return "";
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != null) {
    if (license == "GNU_AGPLv3") {
      return "https://www.gnu.org/licenses/agpl-3.0";
    } else if (license == "GNU_GPLv3") {
      return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license == "GNU_LGPLv3") {
      return "https://www.gnu.org/licenses/lgpl-3.0";
    } else if (license == "Mozilla_Public_License_2.0") {
      return "https://opensource.org/licenses/MPL-2.0";
    } else if (license == "Apache_License_2.0") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else if (license == "MIT_License") {
      return "https://opensource.org/licenses/MIT";
    } else if (license == "Boost_Software_License_1.0") {
      return "https://www.boost.org/LICENSE_1_0.txt";
    } else if (license == "The_Unlicense") {
      return "http://unlicense.org/";
    }
  } else {
    return "";
  }


}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'null') {
    var liscense_section_test = `## License\n\n`
  }
  if (license == "GNU_AGPLv3") {
    liscense_section_test += "#### GNU Affero General Public License v3.0"
    return liscense_section_test;
  } else if (license == "GNU_GPLv3") {
    liscense_section_test += "#### GNU General Public License v3.0"
    return liscense_section_test;
  } else if (license == "GNU_LGPLv3") {
    liscense_section_test += "#### GNU Lesser General Public License v3.0"
    return liscense_section_test;
  } else if (license == "Mozilla_Public_License_2.0") {
    liscense_section_test += "#### Mozilla Public License 2.0"
    return liscense_section_test;
  } else if (license == "Apache_License_2.0") {
    liscense_section_test += "#### Apache License 2.0"
    return liscense_section_test;
  } else if (license == "MIT_License") {
    liscense_section_test += "#### MIT License"
    return liscense_section_test;
  } else if (license == "Boost_Software_License_1.0") {
    liscense_section_test += "#### Boost Software License 1.0"
    return liscense_section_test;
  } else if (license == "The_Unlicense") {
    liscense_section_test += "#### The Unlicense"
    return liscense_section_test;
  }
  return "";
}










// Function to generate markdown for README


function generateMarkdown(data) {
  
  // Add title
  let markdown_string = `# ${data.title}`



  // Add description
  markdown_string += `\n\n## Description\n\n${data.description}`

  // Add table of contents if desired
  if (data.table_boolean == 1) {
    markdown_string += '\n\n## Table of Contents'
    markdown_string += `\n\n- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)`
  }

  // Add Installation Steps
  markdown_string += `\n\n## Installation\n\n${data.installation_steps}`

  // Add Usage instructions
  markdown_string += `\n\n## Usage\n\n${data.usage_instructions}\n`
  
  var files = fs.readdirSync('./assets/images/');
  files.forEach (file => {
    if ((path.extname(file) == ".png") || (path.extname(file) == ".jpg")) {
      markdown_string +=   "\n![" + file + "](assets/images/"+ file +")\n";
    }
  });

  // Add Credits
  if (((data.collaborators) && (data.third_party_assets) && (data.tutorials)) != "") {
    markdown_string += "\n## Credits"
  }

  // Add collaborators, third-party assets and tutorials if they are provided
  if (data.collaborators != "") {
    markdown_string += `\n\nCollaborators: ${data.collaborators}`
  }
  if (data.third_party_assets != "") {
    markdown_string += `\n\nThird-Party Assets: ${data.third_party_assets}`
  }
  if (data.tutorials != "") {
    markdown_string += `\n\nTutorials: ${data.tutorials}`
  }

  // Add license selection
  markdown_string += "\n\n" + renderLicenseSection(data.license);

  // Add license badge
  markdown_string += "\n\n" + renderLicenseBadge(data.license);

  // Add license link
  markdown_string += "\n\n" + renderLicenseLink(data.license);


  // Add questions section
  markdown_string += "\n\n## Questions";

  // Add github username to README
  markdown_string += "\n\ngithub.com/" + data.github_username;

  // Add email address
  markdown_string += "\n\n Contact me: " + data.email;
  return markdown_string;

}

module.exports = generateMarkdown;
