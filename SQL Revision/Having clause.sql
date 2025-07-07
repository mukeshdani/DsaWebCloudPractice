CREATE TABLE EmployeeTable (
    E_Id INT,
    E_Name VARCHAR(50),
    Dept VARCHAR(50),
    Salary NUMBER(60)
);

INSERT INTO EmployeeTable VALUES (1, 'Mukesh Dani', 'IT' ,100000000 );
INSERT INTO EmployeeTable VALUES (2, 'Suraj Dani', 'Civil', 300000000);
INSERT INTO EmployeeTable VALUES (2, 'Amit', 'HR', 1000000);
INSERT INTO EmployeeTable VALUES (2, 'Nitin', 'MRKT', 20000000);
INSERT INTO EmployeeTable VALUES (2, 'Varun', 'IT', 300000);

select * from EmployeeTable;


-- Write a query to display all the dept names where no of emps are less than 2

select Dept from EmployeeTable GROUP BY  Dept having COUNT(*) < 2

-- If we want to write name
select E_Name from EmployeeTable where Dept In (select Dept from EmployeeTable GROUP BY  Dept having COUNT(*) < 2)