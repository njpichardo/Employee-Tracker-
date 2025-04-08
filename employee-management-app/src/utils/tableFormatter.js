function formatTable(data, headers) {
    if (!data || data.length === 0) {
        return 'No data available.';
    }
    
    const columnWidths = headers.map(header => header.length);
    
    data.forEach(row => {
        Object.values(row).forEach((cell, index) => {
            const cellStr = cell === null ? 'NULL' : String(cell);
            columnWidths[index] = Math.max(columnWidths[index], cellStr.length);
        });
    });

    const formatRow = row => {
        return Object.values(row).map((cell, index) => {
            const cellStr = cell === null ? 'NULL' : String(cell);
            return cellStr.padEnd(columnWidths[index]);
        }).join(' | ');
    };

    const headerRow = headers.map((header, index) => header.padEnd(columnWidths[index])).join(' | ');
    const separatorRow = columnWidths.map(width => '-'.repeat(width)).join('-|-');

    const formattedRows = data.map(formatRow);
    return [headerRow, separatorRow, ...formattedRows].join('\n');
}

// Department formatter for department table display
function formatDepartments(departments) {
    if (!departments || departments.length === 0) {
        return 'No departments available.';
    }
    
    const headers = ['ID', 'Department Name'];
    
    // Transform the data for formatting
    const formattedData = departments.map(dept => ({
        id: dept.id,
        name: dept.name
    }));
    
    return formatTable(formattedData, headers);
}

// Role formatter for role table display
function formatRoles(roles) {
    if (!roles || roles.length === 0) {
        return 'No roles available.';
    }
    
    const headers = ['ID', 'Title', 'Department', 'Salary'];
    
    // Transform the data for formatting
    const formattedData = roles.map(role => ({
        id: role.id,
        title: role.title,
        department: role.department,
        salary: `$${role.salary}`
    }));
    
    return formatTable(formattedData, headers);
}

// Employee formatter for employee table display
function formatEmployees(employees) {
    if (!employees || employees.length === 0) {
        return 'No employees available.';
    }
    
    const headers = ['ID', 'First Name', 'Last Name', 'Title', 'Department', 'Salary', 'Manager'];
    
    // Transform the data for formatting
    const formattedData = employees.map(emp => ({
        id: emp.id,
        firstName: emp.first_name,
        lastName: emp.last_name,
        title: emp.title,
        department: emp.department,
        salary: emp.salary ? `$${emp.salary}` : 'N/A',
        manager: emp.manager || 'None'
    }));
    
    return formatTable(formattedData, headers);
}

module.exports = {
    formatTable,
    formatDepartments,
    formatRoles,
    formatEmployees
};