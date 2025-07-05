### 🔐 **SQL Constraints – Explained Line by Line**

---

#### 1. **UNIQUE Constraint**
- Ensures that all values in a column are different.
- Prevents duplicate entries.
- Example: `mobile_number` in a table should be unique.
```sql
CREATE TABLE employee (
  id INT,
  mobile_number VARCHAR(10) UNIQUE
);
```

---

#### 2. **NOT NULL Constraint**
- Ensures that a column cannot have a NULL value.
- Used when a field must always have data.
```sql
CREATE TABLE employee (
  name VARCHAR(50) NOT NULL
);
```

---

#### 3. **PRIMARY KEY Constraint**
- Combines **UNIQUE** and **NOT NULL**.
- Uniquely identifies each row in a table.
```sql
CREATE TABLE employee (
  id INT PRIMARY KEY
);
```

---

#### 4. **CHECK Constraint**
- Ensures that values meet a specific condition.
- Example: Age must be greater than 18.
```sql
CREATE TABLE employee (
  age INT CHECK (age > 18)
);
```

---

#### 5. **FOREIGN KEY Constraint**
- Maintains **referential integrity** between two tables.
- Links one table’s column to another table’s primary key.
```sql
CREATE TABLE orders (
  order_id INT,
  employee_id INT,
  FOREIGN KEY (employee_id) REFERENCES employee(id)
);
```

---

#### 6. **DEFAULT Constraint**
- Sets a default value if none is provided during insertion.
- Example: Default salary is 1000.
```sql
CREATE TABLE employee (
  salary INT DEFAULT 1000
);
```

---

### 🧠 **Extra Notes**
- **UNIQUE** allows multiple NULLs, but **PRIMARY KEY** does not.
- **FOREIGN KEY** ensures that referenced data exists in the parent table.
- **CHECK** can be used for multiple conditions.
- **DEFAULT** helps avoid NULLs when inserting data.
- Constraints can be added during table creation or later using `ALTER TABLE`.
