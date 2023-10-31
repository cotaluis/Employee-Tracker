import { prompt } from 'inquirer';

function mainMenu() {
    prompt([
            {
                type: 'module',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    // Implement view all departments functionality
                    break;
                case 'View all roles':
                    // Implement view all roles functionality
                    break;
                case 'View all employees':
                    // Implement view all employees functionality
                    break;
                case 'Add a department':
                    // Implement add a department functionality
                    break;
                case 'Add a role':
                    // Implement add a role functionality
                    break;
                case 'Add an employee':
                    // Implement add an employee functionality
                    break;
                case 'Update an employee role':
                    // Implement update an employee role functionality
                    break;
                case 'Exit':
                    // Gracefully exit the application
                    process.exit(0);
            }
        });
}

// Call the main menu function to start the application
mainMenu();
