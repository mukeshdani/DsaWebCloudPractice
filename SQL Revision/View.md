## 📘 **Views in Databases**

### 🔹 What is a View?
- A **View** is a **virtual table**.
- It is the **result set of a stored query**.
- It does **not store data physically**; instead, it stores the query logic.
- When you query a view, the database runs the stored query and returns the result.

```sql
CREATE VIEW v1 AS
SELECT id FROM student;
```

---

### 🔹 Base Table vs View
- A **base table** contains actual data.
- A **view** shows a subset of that data (specific rows/columns).
- You can create views to show only the necessary data from one or more tables.

---

### 🔹 Types of Views

| Type               | Description |
|--------------------|-------------|
| **Read-Only View** | You cannot insert/update/delete data through this view. Changes in the base table reflect in the view. |
| **Updatable View** | You can perform insert/update/delete operations on the view, and changes reflect in the base table. |
| **Materialized View** | Stores a **physical copy** of the data. Used in **data warehouses** for performance. Like a snapshot, it takes up space and can be refreshed periodically. |

---

### 🔹 Commands on Views

| Command Type | Allowed? | Notes |
|--------------|----------|-------|
| **DDL (e.g., ALTER, DROP)** | ❌ Not allowed directly on views |
| **DML (e.g., SELECT, INSERT, UPDATE, DELETE)** | ✅ Allowed if the view is updatable |

---

### 🔹 Features of Views
- Can be created using **multiple tables**.
- Can include **specific columns** from different tables.
- Can filter **specific rows** using WHERE clause.
- Helps in **data abstraction** and **security**.

---

### ✅ Advantages of Using Views

1. **Restrict Data Access** – Show only necessary data to users.
2. **Simplify Complex Queries** – Reuse stored logic.
3. **Provide Data Independence** – Changes in base table structure don’t affect the view.
4. **Present Different Perspectives** – Create different views for different user needs.

---