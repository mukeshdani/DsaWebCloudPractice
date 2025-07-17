## 🧠 **Bitwise Operators & Number Systems – Study Notes**

### 🔹 **1. Bitwise AND (`&`)**
| a | b | a & b |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |

**Observation:**  
When you AND any number with `1`, the digit remains the same only if the bit is `1`.

Example:
```
  110010100
& 111111111
-----------
  110010100
```
---

### 🔹 **2. Bitwise OR (`|`)**

| a | b | a &#124; b |
|---|---|-----------|
| 0 | 0 |     0     |
| 0 | 1 |     1     |
| 1 | 0 |     1     |
| 1 | 1 |     1     |

**Explanation:**  
The result of `a | b` is `1` if **either** `a` or `b` is `1`.

---

### 🔹 **3. Bitwise XOR (`^`)**
| a | b | a ^ b |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |

**Observations:**
- `a ^ 1 = ~a` (complement of a)
- `a ^ 0 = a`
- `a ^ a = 0`

---

### 🔹 **4. Bitwise NOT / Complement (`~`)**
If `a = 10110`, then `~a = 01001`

---

## 🔢 **Number Systems**

### 🔸 **1. Decimal (Base 10)**  
Digits: 0–9  
Example: (356)₁₀

### 🔸 **2. Binary (Base 2)**  
Digits: 0, 1  
Example: (10001)₂

### 🔸 **3. Octal (Base 8)**  
Digits: 0–7  
Example: (17)₈

### 🔸 **4. Hexadecimal (Base 16)**  
Digits: 0–9, A–F  
Example: (10)₁₀ = (A)₁₆

---

## 🔄 **Conversions Between Number Systems**

### ✅ **Decimal to Base b**
- Keep dividing the number by the base.
- Record remainders in reverse order.

**Example: Convert (17)₁₀ to Binary**
```
17 ÷ 2 = 8 remainder 1  
8 ÷ 2 = 4 remainder 0  
4 ÷ 2 = 2 remainder 0  
2 ÷ 2 = 1 remainder 0  
1 ÷ 2 = 0 remainder 1  
→ (10001)₂
```

### ✅ **Base b to Decimal**
Multiply each digit by the base raised to its position (right to left).

**Example: Convert (10001)₂ to Decimal**
```
= 1×2⁴ + 0×2³ + 0×2² + 0×2¹ + 1×2⁰  
= 16 + 0 + 0 + 0 + 1 = 17
```

**Example: Convert (17)₈ to Decimal**
```
= 1×8¹ + 7×8⁰ = 8 + 7 = 15
```

---

## 🔁 **Shift Operators**

### 🔸 **Left Shift (`<<`)**
**Example:**
```
(10)₁₀ = (1010)₂  
1010 << 1 = 10100 = (20)₁₀
```

**General Rule:**  
`a << b = a × 2^b`

---

### 🔸 **Right Shift (`>>`)**
**Example:**
```
(11001)₂ >> 1 = (1100)₂
```

**General Rule:**  
`a >> b = a ÷ 2^b`

---

## ❓ **Common Question**

### 🔹 **Check if a number is Odd or Even**
Use bitwise AND:
```text
If (n & 1) == 1 → Odd  
If (n & 1) == 0 → Even
```

---