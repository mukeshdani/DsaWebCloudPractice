From
|
JOIN
|
Where 
|
Group By
|
Having
|
Select
|
Distinct
|
Order by
|
LIMIT

## 🧠 SQL Query

```sql
SELECT dept_name, COUNT(dept_name)
FROM emp
WHERE city = "Delhi"
GROUP BY dept_name
HAVING COUNT(dept_name) < 5
ORDER BY COUNT(dept_name) DESC
LIMIT 1;
```

---

## 🔄 SQL Execution Order (How SQL Actually Works)

Even though we write SQL in a certain order, the database engine processes it in this logical sequence:

| Step | Clause       | What It Does |
|------|--------------|--------------|
| 1️⃣   | `FROM`        | Identifies the table to query (`emp`). |
| 2️⃣   | `WHERE`       | Filters rows where `city = "Delhi"`. |
| 3️⃣   | `GROUP BY`    | Groups the filtered rows by `dept_name`. |
| 4️⃣   | `HAVING`      | Filters groups where the count is less than 5. |
| 5️⃣   | `SELECT`      | Chooses columns to display (`dept_name`, `COUNT`). |
| 6️⃣   | `ORDER BY`    | Sorts the result by count in descending order. |
| 7️⃣   | `LIMIT`       | Returns only the top 1 result. |

---

## 📘 Purpose of Each SQL Clause

| Clause      | Purpose |
|-------------|---------|
| `SELECT`    | Specifies which columns to show in the result. |
| `DISTINCT`  | Removes duplicate rows from the result. |
| `FROM`      | Indicates the table to query. |
| `JOIN`      | Combines rows from two or more tables based on a related column. |
| `WHERE`     | Filters rows before grouping. |
| `GROUP BY`  | Groups rows that have the same values in specified columns. |
| `HAVING`    | Filters groups after aggregation (like `COUNT`, `SUM`). |
| `ORDER BY`  | Sorts the result set by one or more columns. |
| `LIMIT`     | Restricts the number of rows returned. |

---

## 🧪 What This Query Does

- Looks into the `emp` table.
- Filters employees who are in **Delhi**.
- Groups them by their department name.
- Keeps only those departments that have **less than 5 employees** in Delhi.
- Sorts these departments by the number of employees in **descending order**.
- Returns **only the top department** with the highest count (but still less than 5).
