INSERT INTO departments (name)
VALUES 
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales'),
  ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Software Engineer', 85000.00, 1),
  ('Lead Engineer', 120000.00, 1),
  ('Accountant', 70000.00, 2),
  ('Legal Team Lead', 125000.00, 3),
  ('Lawyer', 95000.00, 3),
  ('Sales Lead', 80000.00, 4),
  ('Salesperson', 60000.00, 4),
  ('Marketing Director', 110000.00, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 2, NULL),
  ('Jane', 'Smith', 1, 1),
  ('Mike', 'Johnson', 4, NULL),
  ('Sarah', 'Williams', 5, 3),
  ('David', 'Brown', 6, NULL),
  ('Emily', 'Davis', 7, 5),
  ('Kevin', 'Miller', 3, NULL),
  ('Lisa', 'Wilson', 8, NULL);