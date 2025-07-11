## 🧵 **String and StringBuilder in Java**

### ✅ **Basic Concepts**

- In Java, **everything that starts with a capital letter is a class**.
- Example:
  ```java
  String str = "Mukesh Dani";
  ```
  - `"Mukesh Dani"` → **String object** (stored in heap memory)
  - `str` → **Reference variable** (stored in stack memory)
  - `String` → **Data type**, which is actually a **class**

---

## 🔁 **String Pool**

### What is the String Pool?

- The **String Pool** is a special memory region inside the **heap**.
- It stores **unique string literals** to optimize memory usage.

### Example:
```java
String a = "Mukesh";
String b = "Mukesh";
```

![alt text](image.png)

![alt text](image-1.png)

- Both `a` and `b` point to the **same object** in the **String Pool**.
- Java checks if the string already exists in the pool:
  - If **yes**, it reuses the reference.
  - If **no**, it creates a new object in the pool.

---

## 🔒 **Immutability of Strings**

### Why are Strings Immutable?

- Once a `String` object is created, **its value cannot be changed**.
- This ensures:
  - **Security**
  - **Thread safety**
  - **Performance optimization** (especially with String Pool)
  
![alt text](image-2.png)

### Example:
```java
String name = "Mukesh";
name = "Kunal"; // Creates a new object, doesn't modify the original
```

- The original `"Mukesh"` remains unchanged.
- A new object `"Kunal"` is created, and `name` now points to it.

---

## 🔍 **String Comparison**

### 1. `==` Operator

- Compares **reference** (memory address).
- Checks if two variables point to the **same object**.

### 2. `.equals()` Method

- Compares **actual content** of the strings.
- Use this when you want to check **value equality**.

### Example:
```java
String a = "Mukesh";
String b = new String("Mukesh");

System.out.println(a == b);       // false (different objects)
System.out.println(a.equals(b));  // true (same content)
```

---

## 🧠 **Creating New String Objects**

### Example:
```java
String a = new String("Mukesh");
String b = new String("Mukesh");
```
![alt text](image-3.png)
- These are **two different objects** in the **heap**, not in the String Pool.
- Even though the content is the same, `a == b` will return `false`.

---

## 🧱 **StringBuilder vs String**

### Why use `StringBuilder`?

- `StringBuilder` is **mutable**.
- Ideal for **frequent modifications** (e.g., appending, inserting).
- More **efficient** than `String` for such operations.

### Example:
```java
StringBuilder sb = new StringBuilder("Mukesh");
sb.append(" Dani");
System.out.println(sb); // Mukesh Dani
```

---

## 🧮 **Memory Allocation in Java**

- **Primitive types** (e.g., `int`, `char`) → Stored in **stack memory**
- **Non-primitive types** (e.g., `String`, arrays, objects) → Stored in **heap memory**
- **Wrapper classes** (e.g., `Integer`, `Double`) → Stored in **heap**, but behave like objects

---

## 🔄 **Behind the Scenes: `valueOf()` and `toString()`**

- When printing any object, Java internally calls:
  - `String.valueOf()` → Converts to string
  - `toString()` → Returns string representation
- You can **override `toString()`** in your class to customize output.

---
