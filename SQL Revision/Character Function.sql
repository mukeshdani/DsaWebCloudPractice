CREATE TABLE Employee (
    id INT,
    name VARCHAR(20)
);

INSERT INTO Employee VALUES (1, 'Mukesh Dani');
INSERT INTO Employee VALUES (2, 'Suraj Dani');

select * from Employee;

-- case function manipulation 
Select lower(name) from Employee;
Select upper(name) from Employee;
select initcap(name) from Employee;

-- Charcater Manipulation functions
select concat(id,name) from Employee;
SELECT SUBSTR(name, 2, 5), INSTR(name, 2, 0, 'T') FROM Employee;
select length(name) from Employee;
select lpad(name,15,'*') from Employee;
select rpad(name,15,'*') from Employee;
select trim('v' from name) from Employee;
select replace(name , 'D', 't') from Employee; 



DESC Employee;

