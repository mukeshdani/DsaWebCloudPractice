

### 📋 Sample Table: `Employee`

| ID | NAME    |
|----|---------|
| 1  | Varun   |
| 2  | Mukesh  |
| 3  | Suraj   |
| 4  | Amit    |
| 5  | Ranjeet |

---

### 🔍 **Using `LIKE` for Pattern Matching**

#### 🔸 Wildcards:
- `%` → Matches **zero or more characters**
- `_` → Matches **exactly one character**

---

### ✅ Examples with Explanation and Output

| Query | Description | Output |
|-------|-------------|--------|
| `SELECT * FROM Employee WHERE NAME LIKE 'A%';` | Names starting with 'A' | Amit |
| `SELECT * FROM Employee WHERE NAME LIKE '%n';` | Names ending with 'n' | Varun |
| `SELECT * FROM Employee WHERE NAME LIKE '%ee%';` | Names containing 'ee' | Ranjeet |
| `SELECT * FROM Employee WHERE NAME LIKE '_a%';` | 'a' in second position | Varun, Ranjeet |
| `SELECT * FROM Employee WHERE NAME LIKE '_a___';` | 'a' in second position and name has 5 characters | Varun |
| `SELECT * FROM Employee WHERE NAME LIKE '______';` | Names with exactly 6 characters | Mukesh |
| `SELECT * FROM Employee WHERE NAME LIKE 'S%j';` | Starts with 'S' and ends with 'j' | Suraj |
| `SELECT * FROM Employee WHERE NAME LIKE '_u%';` | Second letter is 'u' | Mukesh, Suraj |

---

### 🔠 **Using `UPPER()` and `LOWER()` for Case-Insensitive Search**

SQL `LIKE` is case-sensitive in many databases. To make it case-insensitive:

#### 🔹 Convert to Uppercase
```sql
SELECT * FROM Employee WHERE UPPER(NAME) LIKE 'A%';
```
🧾 Matches names starting with 'A' regardless of case (e.g., 'Amit', 'amit', 'AMIT').

#### 🔹 Convert to Lowercase
```sql
SELECT * FROM Employee WHERE LOWER(NAME) LIKE '%ee%';
```
🧾 Matches names containing 'ee' regardless of case (e.g., 'Ranjeet', 'RANJEET').

---

### 🧠 Tips:
- Combine `LIKE` with `NOT` to exclude patterns:
```sql
SELECT * FROM Employee WHERE NAME NOT LIKE '%a%';
```
- Use `TRIM()` with `LIKE` to clean spaces before matching.
- Use `ESCAPE` if your pattern includes `%` or `_` as actual characters.

---

### ✅ Example Table: `Employee`

| ID | NAME    |
|----|---------|
| 1  | Varun   |
| 2  | Mukesh  |
| 3  | Suraj   |
| 4  | Amit    |
| 5  | Ranjeet |
| 6  | Deepak  |
| 7  | Bhavesh |
| 8  | Chandan |

---

### 🔍 SQL Query: First character is A, B, C, or D

```sql
SELECT * FROM Employee 
WHERE NAME LIKE 'A%' 
   OR NAME LIKE 'B%' 
   OR NAME LIKE 'C%' 
   OR NAME LIKE 'D%';
```

🧾 **Explanation**:
- `'A%'` → Starts with A
- `'B%'` → Starts with B
- `'C%'` → Starts with C
- `'D%'` → Starts with D

✅ **Output**:
| ID | NAME    |
|----|---------|
| 4  | Amit    |
| 6  | Deepak  |
| 7  | Bhavesh |
| 8  | Chandan |

---

### 🔁 Using `REGEXP` (if supported by your SQL engine)

Some databases like MySQL support regular expressions:

```sql
SELECT * FROM Employee 
WHERE NAME REGEXP '^[ABCD]';
```

🧾 **Explanation**:  
- `^` → Start of string  
- `[ABCD]` → First character is A, B, C, or D
