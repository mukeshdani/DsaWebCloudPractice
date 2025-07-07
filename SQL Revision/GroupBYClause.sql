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

-- Write a query to display all the dept names along with no of emps working in that?

SELECT Dept, COUNT(Dept)
FROM EmployeeTable
GROUP BY Dept;

SELECT Dept, COUNT(*)
FROM EmployeeTable
GROUP BY Dept;



