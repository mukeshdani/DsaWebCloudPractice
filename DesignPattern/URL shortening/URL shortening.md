## URL shortening

---

## 🔗 URL Shortener System Design

### ✅ **Key Questions to Ask**
1. **What is the average URL length?**
2. **What is the expected traffic volume?**
3. **Is the system single-instance or distributed?**
4. **What is the expected read/write ratio?**
5. **Do URLs expire?**
6. **Do we need analytics (click tracking, geo, device)?**

---

## 📊 Assumptions & Traffic Estimation

- **User Base**: 300M Twitter users/month
- **Usage Estimate**: 10% use URL shortener → 30M URLs/month
- **URL Format**: `us.com/xxxxxxx` (7-character short code)

---

## 🧮 Data Capacity Model

| Field         | Size         |
|---------------|--------------|
| Long URL      | 2 KB         |
| Short URL     | 17 Bytes     |
| Created_at    | 7 Bytes      |
| Expiry_at     | 7 Bytes      |
| **Total**     | ~2.031 KB    |

- **Monthly Storage**: 30M * 2.031 KB ≈ **60.7 GB/month**
- **Yearly**: ~0.7 TB/year
- **5 Years**: ~3.6 TB

---

## 🔢 Short URL Generation Techniques

### 1. **Base62 Encoding (Recommended)**
- Characters: [0-9][A-Z][a-z] → 62 characters
- 7 characters → 62⁷ ≈ 3.5 trillion combinations
- **Safe, scalable, and collision-free with counter**

```python
def base62_encode(num):
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    result = ""
    while num > 0:
        result = chars[num % 62] + result
        num //= 62
    return result
```

---

### 2. **MD5 Hashing**
- Hash the long URL → take first 7 characters
- **Problem**: Collisions possible
- **Solution**: Check DB for existing mapping before inserting

---

### 3. **Random ID Generation**
- Generate random 7-character string
- Check for collision in DB
- **Issue**: Not scalable in distributed systems

---

### 4. **Counter-Based ID (Best for Scaling)**
- Use a global counter (e.g., Redis, Zookeeper)
- Convert counter to Base62
- **Pros**: No collisions
- **Cons**: Single point of failure unless distributed

---

## 🗃️ Database Choices

### ✅ NoSQL (Recommended)
- **Examples**: Cassandra, DynamoDB, MongoDB
- **Pros**: High availability, easy to scale
- **Cons**: Eventual consistency

### ❌ RDBMS
- **Pros**: ACID compliance
- **Cons**: Hard to scale horizontally

---

## 🧠 Distributed Coordination

### 🛠️ Zookeeper
- Distributed coordination service
- Manages counters, locks, and service discovery
- Ensures **no collision** in multi-server environments

---

## 🧱 System Architecture

```
User
  ↓
Load Balancer
  ↓
+--------+     +--------+     +--------+
| App A1 | --> | App A2 | --> | App A3 |
+--------+     +--------+     +--------+
     ↓             ↓             ↓
   Cache        NoSQL DB     Analytics
```

- **Cache**: Redis/Memcached for fast lookups
- **DB**: NoSQL for persistence
- **Analytics**: ElasticSearch, Google Analytics

---

## 📡 APIs

### 1. **CreateTinyUrl**
```http
POST /create
Body: { "long_url": "https://example.com" }
Response: { "short_url": "us.com/abc1234" }
```

### 2. **GetLongUrl**
```http
GET /abc1234
Response: { "long_url": "https://example.com" }
```

---

## 📈 Analytics (Optional)
- Track:
  - Clicks
  - Geo-location
  - Device type
  - Referrer
- Tools: Google Analytics, ElasticSearch, Kafka for event streaming

---

## 🧪 Additional Considerations

- **Rate Limiting**: Prevent abuse
- **Expiry Mechanism**: TTL for short URLs
- **Custom Aliases**: Allow users to define their own short codes
- **Security**: Prevent malicious URLs (use URL scanning services)

---


Potential Questions to ask:
What is the length of the URL? 
WHat is the volumen of the traffic?
Is the system is single instance or should we scalled it?

Assumption:
Twitter ~ 300M users/months
10%
30M/months

us.com/______(unique 7 charcter)

Data Capacity Model:
Long URL -> 2kb (2048)
Short URL -> 17 Byte (17 chars)
Created_at -> 7 byte 
exp_at -> 7 Byte 
         2.031 kb

30M users -> 60.7 GB/month -> 0.7 TB/years -> 3.6 TB/5years

Two algo:
7 char random ID:
1. B62: decimal, integer (safest)
2. MDS Hash: it generate 22-23 length and we have to use first 7 charcter for url: the proble is in this case 2 or more url getting same 7 charcter : cause data cruption: solution we have to check with is this url already presnet then do not crete new url



Base 62 converstion code:

def base62_encode(deci):
  s = "01dfgshjcvhskjfgs kshdkbshkshikhdie d"
  hash_str = ''
  while deci > 0:
     hash_str = s[deci % 62] + hash_str
     deci /= 62
  return hash_str

print base62_encode(999)

what database we can used:
RDBMS -> ACID which is good
problem is scalling
you might need to use consistent hasning to balance traffic and db queries

Becu we have 30M users so pretty hard to scale

we go with NOSQL:
Eventually consistncy
High available and easy scalling

Technique 1:

Random -> 123133

check that url is present or not alrady
if not then mapping to db 

this technique work where we have only 1 app server
if multi servers are their then we can check with nosql bezuse we can not check is presnet or not with db becase nosql is alraedy consistent 


technique 2: 
MDS (long url):
same here also we can not check is presnet or not with db becase nosql is alraedy consistent 

Techniq 3:

Lets use counter: B62
always get new value

this work really well untill you sacle

it may have single point of failure in multi server case:

lets introduce 1 servies: Use Zookeper
distributed cordination servies manage multi host and manage servies
simple arc: 


Distributed URL Shortner using zookeeper:
No Collision Guarantee

User -> LB -> a1
           -> a2 -> Nosql/RDBMS also use Cache
           -> a3 


What is Zookeper?
workng?



API:
CreateTinyUrl
GetLongUrl

Track Analytics: Google Analytics, Elastic Search etc.


