CREATE TABLE employeeDetails (
    id INT,
    name VARCHAR(20),
    email VARCHAR(20),
    salary NUMBER(10)
);

desc employeeDetails;

Alter table employeeDetails add (address VARCHAR(10))

ALTER table employeeDetails drop column address;

ALTER table employeeDetails modify id VARCHAR(10);

ALTER table employeeDetails modify id VARCHAR(20);

alter table employeeDetails rename column id to roleNumebr;

alter table employeeDetails rename column name to newName;

alter table employeeDetails add primary key (roleNumebr);

desc employeeDetails;

-- Diffrence between Alter and Update Command
-- ALTER vs UPDATE Command in SQL
-- ALTER is a DDL (Data Definition Language) command.
-- → It is used to change the structure of a table.

-- UPDATE is a DML (Data Manipulation Language) command.
-- → It is used to modify the data inside a table.

-- Use ALTER when you want to change something in an already created table.
-- → Example: adding, deleting, or modifying a column.

-- Use UPDATE when you want to change the values of existing data.
-- → Example: UPDATE employee SET salary = salary * 2 WHERE id = 1;

-- ALTER affects the table’s design or schema.
-- → It does not touch the actual data.

-- UPDATE affects the data stored in the table.
-- → It does not change the table’s structure.
