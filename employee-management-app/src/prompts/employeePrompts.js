const inquirer = require('inquirer');

const employeePrompts = {
    viewAllEmployees: () => {
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'viewEmployees',
                message: 'Would you like to view all employees?',
                default: false
            }
        ]);
    },
    addEmployee: () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the employee’s first name:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the employee’s last name:'
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter the employee’s role:'
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Enter the employee’s manager (if any):'
            }
        ]);
    },
    updateEmployeeRole: (employees, roles) => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Select an employee to update their role:',
                choices: employees
            },
            {
                type: 'list',
                name: 'newRole',
                message: 'Select the new role for the employee:',
                choices: roles
            }
        ]);
    }
};

module.exports = employeePrompts;