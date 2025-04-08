const inquirer = require('inquirer');
const db = require('./database/queries');
const tableFormatter = require('./utils/tableFormatter');

const mainMenu = async () => {
    const choices = [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
    ];

    const { option } = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Please choose an option:',
            choices: choices,
        },
    ]);

    switch (option) {
        case 'View all departments':
            const departments = await db.getAllDepartments();
            console.log(tableFormatter.formatDepartments(departments));
            break;
        case 'View all roles':
            const roles = await db.getAllRoles();
            console.log(tableFormatter.formatRoles(roles));
            break;
        case 'View all employees':
            const employees = await db.getAllEmployees();
            console.log(tableFormatter.formatEmployees(employees));
            break;
        case 'Add a department':
            const newDepartment = await require('./prompts/departmentPrompts').addDepartmentPrompt();
            await db.addDepartment(newDepartment);
            console.log('Department added successfully.');
            break;
        case 'Add a role':
            const newRole = await require('./prompts/rolePrompts').addRolePrompt();
            await db.addRole(newRole);
            console.log('Role added successfully.');
            break;
        case 'Add an employee':
            const newEmployee = await require('./prompts/employeePrompts').addEmployeePrompt();
            await db.addEmployee(newEmployee);
            console.log('Employee added successfully.');
            break;
        case 'Update an employee role':
            const updatedEmployee = await require('./prompts/employeePrompts').updateEmployeeRolePrompt();
            await db.updateEmployeeRole(updatedEmployee);
            console.log('Employee role updated successfully.');
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    // Restart the menu
    mainMenu();
};

// Initialize the application
mainMenu();