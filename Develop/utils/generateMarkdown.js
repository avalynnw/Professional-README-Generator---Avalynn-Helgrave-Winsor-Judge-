const inquirer = require('inquirer');
var fs = require('fs');
const moment = require('moment'); //require
var year = moment().format('YYYY');

const path = require('path');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  

}









  // if (name != "") {
  //   return `\n\n#License\n\nMIT License

  //   Copyright (c) ` + year + ` ` + name + `
    
  //   Permission is hereby granted, free of charge, to any person obtaining a copy
  //   of this software and associated documentation files (the "Software"), to deal
  //   in the Software without restriction, including without limitation the rights
  //   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  //   copies of the Software, and to permit persons to whom the Software is
  //   furnished to do so, subject to the following conditions:
    
  //   The above copyright notice and this permission notice shall be included in all
  //   copies or substantial portions of the Software.
    
  //   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  //   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  //   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  //   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  //   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  //   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  //   SOFTWARE.`
  // } else {
  //   return "";
  // }










// TODO: Create a function to generate markdown for README


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
    markdown_string += `\n\nTutortials: ${data.tutorials}`
  }

  markdown_string += renderLicenseSection(data.full_name);

  return markdown_string;

}

module.exports = generateMarkdown;
