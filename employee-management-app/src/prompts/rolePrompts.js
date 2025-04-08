const inquirer = require('inquirer');

const rolePrompts = {
    viewAllRoles: () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'viewRoles',
                message: 'Would you like to view all roles?',
                default: false
            }
        ]);
    },
    addRole: () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'Enter the name of the role:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:'
            },
            {
                type: 'input',
                name: 'department',
                message: 'Enter the department for the role:'
            }
        ]);
    }
};

module.exports = rolePrompts;