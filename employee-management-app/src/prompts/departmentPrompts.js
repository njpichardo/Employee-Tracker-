const inquirer = require('inquirer');

const departmentPrompts = {
    addDepartmentPrompt: async () => {
        const { departmentName } = await inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
                validate: input => input ? true : 'Department name cannot be empty!'
            },
        ]);
        return departmentName;
    }
};

module.exports = departmentPrompts;