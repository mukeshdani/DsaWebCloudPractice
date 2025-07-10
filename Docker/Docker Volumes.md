 ---

## 📁 **1️⃣ Docker Volumes**

**🔹 What is a Volume?**

* A **Volume** is a special **storage location** managed by Docker to **persist data**.
* When a container is deleted, its **inside data** is lost — **volumes solve this** by storing data **outside the container’s writable layer**.

**🔹 Why do we need it?**

* Persistent storage for **databases**, **logs**, **configs**.
* Share data **between containers**.
* Easy **backup/restore**.

**🔹 Where is it used?**

* Common in **database containers** (MySQL, Postgres).
* Sharing code or files.
* For CI/CD pipelines (cache, build artifacts).

**🔹 How to create & use volumes?**

**Commands:**

```bash
# Create a volume
docker volume create my_volume

# List volumes
docker volume ls

# Inspect a volume
docker volume inspect my_volume

# Run container with volume
docker run -d -v my_volume:/var/lib/mysql mysql

# Remove a volume
docker volume rm my_volume
```

**Example:**
Run MySQL and keep its data:

```bash
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=rootpass \
  -v my_db_data:/var/lib/mysql \
  mysql:5.7
```

---