// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs'
import generateMarkdown from "./utils/generateMarkdown.js";

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'Please give a general but thorough description of your project:',
        name:'description'

    },
    {
        type: 'input',
        message:'Please give detailed instructions on how to install your project:',
        name:'installation'

    },
    {
        type: 'input',
        message:'Please give the usage of your project',
        name:'usage'

    },
    {
        type: 'list',
        message:'license',
        name:'license',
        choices: ['MIT','Apache 2.0','GNU GPL v2','BSD 3-Clause','WTFPL','none']
        
    },
    {
        type: 'input',
        message:'Please give instructions on how to contribute:',
        name:'contributing'

    },
    {
        type: 'input',
        message:'What is your email address?',
        name:'email'

    },
    {
        type: 'input',
        message:'What is your github username?',
        name:'github'

    },
    

])

.then(data => {
    fs.writeFile('README.md', makereadme(data), (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Success!")
        }
    })
})

function makereadme(data) {
 return generateMarkdown(data);
}