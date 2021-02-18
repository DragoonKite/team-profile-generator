const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

function Generator(){
    this.team = [];
};

Generator.prototype.initializePage = function() {
    console.log('Please follow the prompts and enter the information for the Team Manager.');

    inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: "What is the Team Manager's name?",
      validate: nameInput => {
          if(nameInput){
              return true;
          }
          else{
              console.log('Please enter a name for the Team Manager')
              return false;
          }
        }  
    },
    {
        type: 'number',
        name: 'idNum',
        message: "Please enter the Team Manager's ID number.",
        validate: idNumInput => {
            if(idNumInput && Number.isInteger(idNumInput) && idNumInput > 0){
                return true;
            }
            else{
                console.log("Please enter a number greater than 0")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter an email address for the Team Manager.',
        validate: emailInput => {
            if(emailInput){
                return true;
            }
            else{
                console.log("Please enter an email address.")
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the Team Manager's office number",
        validate: officeNumberInput => {
            if(officeNumberInput && Number.isInteger(officeNumberInput) && officeNumberInput > 0){
                return true;
            }
            else{
                console.log("\nPlease enter a number greater than 0")
                return false;
            }
        }
    }])
    .then(({name, idNum , email, officeNumber}) => {
        this.team.push(new Manager(name, idNum, email, officeNumber));

        console.table(this.team)
    });
}

module.exports = Generator;