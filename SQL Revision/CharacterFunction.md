## 🔠 1. **Case Function Manipulation**

These functions change the **letter case** of strings.

| Function     | Description                            | Example                            | Output     |
|--------------|----------------------------------------|------------------------------------|------------|
| `LOWER()`    | Converts all characters to lowercase   | `LOWER('Varun')`                   | `varun`    |
| `UPPER()`    | Converts all characters to uppercase   | `UPPER('Varun')`                   | `VARUN`    |
| `INITCAP()`  | Capitalises the first letter of each word | `INITCAP('varun singla')`       | `Varun Singla` |

---

## ✂️ 2. **Character Manipulation Functions**

These functions help extract, combine, or modify string values.

| Function        | Description                                      | Example                                      | Output         |
|------------------|--------------------------------------------------|----------------------------------------------|----------------|
| `CONCAT()`       | Joins two strings                                | `CONCAT('Varun', ' Singla')`                 | `Varun Singla` |
| `SUBSTR()`       | Extracts part of a string                        | `SUBSTR('Varun', 2, 4)`                       | `arun`         |
| `LENGTH()`       | Returns the number of characters                 | `LENGTH('Varun')`                             | `5`            |
| `LPAD()`         | Pads string on the left                          | `LPAD('Varun', 10, 'x')`                      | `xxxxxVarun`   |
| `RPAD()`         | Pads string on the right                         | `RPAD('Varun', 10, '*')`                      | `Varun*****`   |
| `TRIM()`         | Removes leading/trailing spaces or characters    | `TRIM('  Varun  ')`                           | `Varun`        |
| `REPLACE()`      | Replaces part of a string                        | `REPLACE('Varun', 'a', 'o')`                  | `Vorun`        |

---

### 🧠 Bonus Tips:
- You can **combine** these functions:
```sql
SELECT UPPER(SUBSTR('Mukesh Dani', 1, 6));
-- Output: 'MUKESH'
```

- Use `TRIM()` with `REPLACE()` to clean up messy data:
```sql
SELECT TRIM(REPLACE('  Hello World  ', ' ', ''));
-- Output: 'HelloWorld'
```