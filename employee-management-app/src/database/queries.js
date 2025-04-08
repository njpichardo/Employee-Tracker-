const db = require('./connection');

// Function to retrieve all departments
const getAllDepartments = async () => {
    try {
        const query = 'SELECT id, name FROM departments';
        const [rows] = await db.execute(query);
        return rows;
    } catch (error) {
        console.error('Error retrieving departments:', error.message);
        throw error;
    }
};

// Function to retrieve all roles
const getAllRoles = async () => {
    try {
        const query = `
            SELECT roles.id, roles.title, departments.name AS department, roles.salary 
            FROM roles 
            JOIN departments ON roles.department_id = departments.id`;
        const [rows] = await db.execute(query);
        return rows;
    } catch (error) {
        console.error('Error retrieving roles:', error.message);
        throw error;
    }
};

// Function to retrieve all employees
const getAllEmployees = async () => {
    try {
        const query = `
            SELECT employees.id, employees.first_name, employees.last_name, roles.title, 
                   departments.name AS department, roles.salary, 
                   CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM employees
            LEFT JOIN roles ON employees.role_id = roles.id
            LEFT JOIN departments ON roles.department_id = departments.id
            LEFT JOIN employees AS manager ON employees.manager_id = manager.id`;
        const [rows] = await db.execute(query);
        return rows;
    } catch (error) {
        console.error('Error retrieving employees:', error.message);
        throw error;
    }
};

// Function to add a department
const addDepartment = async (departmentName) => {
    try {
        const query = 'INSERT INTO departments (name) VALUES (?)';
        await db.execute(query, [departmentName]);
    } catch (error) {
        console.error('Error adding department:', error.message);
        throw error;
    }
};

// Function to add a role
const addRole = async (roleTitle, roleSalary, departmentId) => {
    try {
        const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
        await db.execute(query, [roleTitle, roleSalary, departmentId]);
    } catch (error) {
        console.error('Error adding role:', error.message);
        throw error;
    }
};

// Function to add an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        const query = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        await db.execute(query, [firstName, lastName, roleId, managerId]);
    } catch (error) {
        console.error('Error adding employee:', error.message);
        throw error;
    }
};

// Function to update an employee's role
const updateEmployeeRole = async (employeeId, newRoleId) => {
    try {
        const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
        await db.execute(query, [newRoleId, employeeId]);
    } catch (error) {
        console.error('Error updating employee role:', error.message);
        throw error;
    }
};

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};