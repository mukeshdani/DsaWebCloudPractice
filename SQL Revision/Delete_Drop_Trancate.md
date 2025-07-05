

### 🔹 **DELETE Command**
1. **Type**: DML (Data Manipulation Language)  
2. **Purpose**: Used to delete specific rows from a table  
3. **Syntax**: `DELETE FROM table_name WHERE condition;`  
4. **Example**: `DELETE FROM student WHERE id = 1;`  
5. **Effect**: Only data is deleted, table structure remains  
6. **Condition Support**: Yes, you can use `WHERE` clause  
7. **Rollback**: Possible (before `COMMIT`)  
8. **Performance**: Slower compared to TRUNCATE  
9. **Log**: Generates logs for each deleted row  

---

### 🔹 **TRUNCATE Command**
1. **Type**: DDL (Data Definition Language)  
2. **Purpose**: Deletes all rows from a table at once  
3. **Syntax**: `TRUNCATE TABLE table_name;`  
4. **Example**: `TRUNCATE TABLE student;`  
5. **Effect**: Deletes all data, but keeps table structure  
6. **Condition Support**: No `WHERE` clause allowed  
7. **Rollback**: Not possible  
8. **Performance**: Faster than DELETE  
9. **Log**: Minimal logging, no row-by-row log  

---

### 🔹 **DROP Command**
1. **Type**: DDL (Data Definition Language)  
2. **Purpose**: Deletes the entire table including structure  
3. **Syntax**: `DROP TABLE table_name;`  
4. **Example**: `DROP TABLE student;`  
5. **Effect**: Removes table and its schema completely  
6. **Condition Support**: Not applicable  
7. **Rollback**: Not possible  
8. **Performance**: Removes everything instantly  
9. **Log**: Logs the table removal  

---

### 🔍 **Key Differences Between DELETE and TRUNCATE**
- **DELETE** allows conditions (`WHERE`) — **TRUNCATE** does not  
- **DELETE** is slower — **TRUNCATE** is faster  
- **DELETE** supports rollback — **TRUNCATE** does not  
- **DELETE** logs each row — **TRUNCATE** logs minimal info  
- **DELETE** is used for selective row removal — **TRUNCATE** is used for full table cleanup  

---