
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your Project:',
    },
    {
        type: 'input',
        name: 'Motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instructions for installation:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List of other contributors:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is your github?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL','none'],
        message: 'Which License Would you Like?',
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'gitLink',
        message: 'What is the link to your github repository?',
    },
    {
        type: 'input',
        name:'email',
        message:  'What is your email?',
    },
    {
        type: 'input',
        name:'name',
        message:  'What is your name?',
    },

])
    .then((answers) => {
        const {title, description, Motivation, installation, usage, contributors, tests, license, gitUser, gitLink, email, name} = answers;
        const date = new Date()
        if (license == 'MIT'){
            var licenseinfo = `Copyright (c) ${date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear()} ${name}

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`;
        } else if (license == 'Apache'){
            licenseinfo = `Copyright (C) ${date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear()} ${name}

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
            
                http://www.apache.org/licenses/LICENSE-2.0
            
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.`
        } else if (license == 'GPL'){
            licenseinfo = `    Copyright (C) ${date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear()} ${name}

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`
        } else if (license == 'none') {
            licenseinfo = ``
        }
        if(contributors == 'null'){
            var contrinput = ''
        } else if (contributors == undefined){
             contrinput = ''
        }else{
             contrinput = contributors;
        }
        const generateReadme = 
(
`
# ${title}

# Table of Contents
1. [Description](##Description)
2. [Installation](##Installation)
3. [Usage](##Usage)
4. [Contributing](##Contributors)
5. [Tests](##Tests)
6. [License](##License)
7. [Questions](###Questions)

## Description:
- ${description}
### Why This Project Was Made:
- ${Motivation}
        
## Installation:
- ${installation}
        
## Usage:
- ${usage}
        
## Contributors:
- ${name}
${'- '+contrinput}
        
## Tests:
- ${tests}
        
## License:
- ${licenseinfo}
        
### Questions:
- GitHub username:${gitUser}
- GitHub link: ${gitLink}
- You can contact us at: ${email}`
);

        fs.writeFile('README.md', generateReadme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });