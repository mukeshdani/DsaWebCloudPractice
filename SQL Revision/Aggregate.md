### 📊 **SQL Aggregate Functions**

Aggregate functions perform calculations on a set of values and return a single value. They are commonly used with `GROUP BY`, `HAVING`, and in **correlated queries**.

---


### 📋 Sample Table: `Employee`

| e_id | e_name | dept  | salary |
|------|--------|-------|--------|
| 1    | Ram    | HR    | 1000   |
| 2    | Amrit  | MRKT  | 2000   |
| 3    | Ram    | HR    | 9000   |
| 4    | Amrit  | MRKT  | 5000   |
| 5    | Amrit  | MRKT  | NULL   |

---

#### 1. **MAX()** – Maximum Value  
Finds the highest value in a column.  
```sql
SELECT MAX(Salary) FROM Employee;
-- Output: 9000
```

---


#### 2. **MIN()** – Minimum Value  
Finds the lowest value in a column.  
```sql
SELECT MIN(Salary) FROM Employee;
-- Output: 1000
```

---

#### 3. **COUNT()** – Count Rows  
- `COUNT(*)` counts all rows including NULLs.  
- `COUNT(column)` counts only non-NULL values.  
```sql
SELECT COUNT(*) FROM Employee;
-- Output: 5

SELECT COUNT(Salary) FROM Employee;
-- Output: 4
```

> `DISTINCT COUNT(Salary)` is not valid syntax. You can use:
```sql
SELECT COUNT(DISTINCT Salary) FROM Employee;
-- Output: 3 (if salaries are 1000, 2000, 9000, 5000)
```

---

#### 4. **SUM()** – Total of Values  
Adds up all non-NULL values in a column.  
```sql
SELECT SUM(Salary) FROM Employee;
-- Output: 17000

SELECT SUM(DISTINCT Salary) FROM Employee;
-- Output: 17000 (if all salaries are unique)
```

---

#### 5. **AVG()** – Average Value  
Calculates the average of non-NULL values.  
```sql
SELECT AVG(Salary) FROM Employee;
-- Output: 4250 (17000 / 4)

SELECT AVG(DISTINCT Salary) FROM Employee;
-- Output: Depends on distinct salaries
```

---

### 🧠 **Important Notes**
- Aggregate functions **ignore NULLs** except `COUNT(*)`.
- Use `GROUP BY` to apply aggregate functions per group (e.g., per department).
- Use `HAVING` to filter groups based on aggregate results.
