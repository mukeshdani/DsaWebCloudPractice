
---

## 🔹 **1. What is Docker?**

* **Docker** is an open-source tool to **package**, **ship**, and **run** applications **inside containers**.
* A **container** is a lightweight, standalone, and executable unit of software that includes:

  * **Code**
  * **Runtime**
  * **Libraries**
  * **Dependencies**
* **Main goal:** *“It works on my machine”* problem solver.

  > Example: Your app runs on your Windows laptop but fails on the client’s Mac — Docker solves this by packaging the same environment.

---

## 🔹 **2. Why use Docker?**

* Consistency: Same environment everywhere (dev, staging, prod).
* Lightweight: Uses OS resources directly, unlike virtual machines.
* Fast deployment & rollback.
* Easy to share setups via images.
* Popular in DevOps pipelines.

---

## 🔹 **3. History of Docker**

* **Born:** 2013 by a company named **dotCloud**.
* Made public at **PyCon 2013**.
* **2017:** Became part of CNCF (*Cloud Native Computing Foundation*).
* Now a key tool in almost every company for containerization.

---

## 🔹 **4. Virtualization vs. Containerization**

| Virtual Machines (VMs) | Containers |
| ----------------------------------------------- | ------------------------------------------ |
| Uses **hypervisor** (e.g., VMware, VirtualBox). | Uses **container engine** (e.g., Docker). |
| Each VM has its own OS. | Containers share the host OS kernel. |
| Heavy, high resource usage. | Lightweight, faster, less resource hungry. |
| Slower boot time. | Instant start-up. |

**Analogy:**

> VM: Full house with its own kitchen, bathroom, etc.
> Container: Flat in an apartment sharing main building facilities.

---

## 🔹 **5. Docker Architecture**

### 📌 **Key Components**

1️⃣ **Docker Engine**

* The core piece where everything runs.

2️⃣ **Docker Daemon (`dockerd`)**

* Runs in background.
* Manages containers, images, networks, volumes.

3️⃣ **Docker CLI (Command Line Interface)**

* You type: `docker run`, `docker build` etc.
* Sends commands to Docker Daemon.

4️⃣ **Containerd**

* Low-level container runtime used internally by Docker Daemon.
* CNCF project written in Go.

5️⃣ **Docker Client / Docker Desktop**

* GUI for easy visual management.
* Uses API to talk to Docker Engine.

---

### 📌 **Example Flow**

```plaintext
You run: docker run nginx

-> CLI sends command to Docker Daemon

-> Daemon pulls `nginx` image if not available

-> Creates a container from it

-> Starts the container

-> Container uses host OS kernel
```

---

## 🔹 **6. Installing Docker**

---

### ✅ **A) Local Installation**

**👉 Steps:**

1. Visit: [https://www.docker.com/](https://www.docker.com/)
2. Download **Docker Desktop** for Windows/Mac/Linux.
3. Create a Docker Hub account (required to download public images).
4. Install Docker Desktop — it provides Docker Engine, CLI, and GUI.
5. Launch Docker Desktop and sign in.

**Verify Installation**

```bash
docker --version
docker ps
```

---

### ✅ **B) Installing Docker on AWS EC2**

---

**Example: Ubuntu EC2**

**1️⃣ Launch EC2**

* Use **Ubuntu 22.04** or similar.
* For free: select **t2.micro** (1GB RAM).
* For multiple projects: use **t2.medium** (4GB RAM, paid).

**2️⃣ Add SSH Key Pair**

* Download `.pem` file.

**3️⃣ SSH to your instance**

```bash
# In terminal, navigate to .pem file
chmod 400 docker-in-one-shot-key.pem

ssh -i docker-in-one-shot-key.pem ubuntu@<EC2-PUBLIC-IP>
```

---

**4️⃣ Update system**

```bash
sudo apt-get update
```

---

**5️⃣ Install Docker**

```bash
sudo apt-get install docker.io -y
```

---

**6️⃣ Verify Docker Service**

```bash
sudo systemctl status docker
```

It should say: **active (running)**

---

**7️⃣ Add user to Docker group (optional)**

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Now you can run `docker` commands without `sudo`.

---

## 🔹 **7. Basic Docker Commands**

| Command | Description |
| -------------------------------- | -------------------------------------- |
| `docker --version` | Check Docker version |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker images` | List downloaded images |
| `docker pull nginx` | Download `nginx` image |
| `docker run -d -p 8080:80 nginx` | Run `nginx` container in detached mode |
| `docker stop <container_id>` | Stop a running container |
| `docker rm <container_id>` | Remove a stopped container |
| `docker rmi <image_id>` | Remove an image |
| `docker build -t myapp .` | Build custom image |
| `docker-compose up` | Run multi-container setup |

---

## 🔹 **8. Important Docker Concepts**

---

✅ **Images**

* Blueprint for containers.
* Read-only layers.
* Built from Dockerfile.

✅ **Containers**

* Running instance of an image.
* Lightweight & isolated.

✅ **Volumes**

* Persistent storage.
* Data survives container stop/restart.

✅ **Networking**

* Bridge, Host, Overlay.
* Connect containers together.

✅ **Docker Compose**

* Tool for defining & running multi-container Docker applications with a single YAML file.

✅ **Docker Registry**

* Public (Docker Hub) or Private.
* Store & share images.

✅ **Multi-stage Builds**

* Create lean images by compiling/building in one stage and copying output to final stage.
* Saves image size.

✅ **Monitoring & Logging**

* Docker logs: `docker logs <container_id>`
* Integration with monitoring tools: Prometheus, Grafana.

---

## 🔹 **9. Common Interview Q: How does Docker work?**

**Answer:**

> *Docker uses a client-server architecture. The Docker CLI (client) talks to the Docker Daemon (server) using REST APIs. The Daemon manages containers via container runtimes like containerd. Containers run apps inside isolated environments using the host OS kernel. Images are blueprints; containers are running instances of those images.*

---

## 🔹 **10. Example Project (Mini)**

👉 **Deploy a 3-tier app using Docker Compose**

**Services:**

1. `Nginx` (web server)
2. `MySQL` (database)
3. `Backend App` (Node.js or Python Flask)

**Sample `docker-compose.yml`:**

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
  app:
    build: ./app
    depends_on:
      - db
```

Run:

```bash
docker-compose up -d
```

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

## 💾 **2️⃣ Docker Storage**

**🔹 What is it?**

* Docker uses **storage drivers** (overlay2, aufs) to manage container layers.
* For **persistent data**, use **Volumes** (recommended) or **Bind Mounts** (maps host directory).

**🔹 Bind Mounts Example:**
Mount a host folder:

```bash
docker run -v /host/path:/container/path nginx
```

**Use cases:**

* Development: map local source code into container.
* Logs: keep logs on the host.

**Best Practice:**

* For **database & production**, use **volumes** — more portable.
* Bind mounts are more manual, useful for local dev.

---

## 🌐 **3️⃣ Docker Networking**

**🔹 What is Docker Networking?**

* It lets containers **talk to each other**, the host, and the internet.
* Docker creates **virtual networks** and attaches containers to them.

**🔹 Types of Networks:**

| Type | Use |
| ----------- | -------------------------------------------- |
| **Bridge** | Default for single-host networks. |
| **Host** | Uses host’s network stack. |
| **Overlay** | For multi-host networks (Swarm, Kubernetes). |
| **None** | No networking. |

**🔹 Basic Commands:**

```bash
# List networks
docker network ls

# Create a network
docker network create my_network

# Run container in a network
docker run -d --network=my_network nginx

# Connect existing container to a network
docker network connect my_network my_container
```

**Example:**
Two containers on same custom bridge:

```bash
# Create network
docker network create my_bridge

# Run db
docker run -d --name my_db --network my_bridge mysql

# Run app connected to db
docker run -d --name my_app --network my_bridge myappimage
```

---

## 📄 **4️⃣ Docker Compose**

**🔹 What is Docker Compose?**

* A tool to **define & run multi-container applications**.
* Uses `docker-compose.yml` file.

**🔹 Why use it?**

* Start all services with **one command**.
* Good for **microservices**, dev/test environments.

**🔹 Basic `docker-compose.yml` Example:**

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
  app:
    build: ./app
    depends_on:
      - db
```

**Commands:**

```bash
# Start services
docker-compose up

# Detached mode
docker-compose up -d

# Stop services
docker-compose down

# Rebuild images
docker-compose build
```

---

## 📦 **5️⃣ Docker Registry**

**🔹 What is it?**

* A **storage & distribution system** for Docker images.
* **Docker Hub** is the default public registry.
* You can run your **own private registry** too.

**🔹 Use case:**

* Share images with team.
* Store custom builds.
* Deploy to production.

**Commands:**

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag myapp:latest mydockerhubusername/myapp:latest

# Push to Docker Hub
docker push mydockerhubusername/myapp:latest

# Pull from Docker Hub
docker pull nginx
```

**Private Registry Example:**
Run a registry on localhost:

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

---

## ⚙️ **6️⃣ Multi-Stage Builds**

**🔹 What is it?**

* Technique to **build lean images** by using multiple `FROM` stages in Dockerfile.
* You build the app in one stage, then copy only the final build artifacts to the final image.

**🔹 Why use it?**

* Keeps images **small**.
* No build tools / temp files in production image.

**🔹 Example `Dockerfile`:**

```dockerfile
# Stage 1: Build
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
```

**Build & run:**

```bash
docker build -t my-multi-stage-app .
docker run -p 8080:80 my-multi-stage-app
```

---

## 📊 **7️⃣ Monitoring & Logging**

**🔹 Why?**

* Track container health, logs, resource usage.
* Debug issues, performance bottlenecks.

**🔹 Basic Logging:**
Logs are **stdout/stderr** by default.

```bash
docker logs <container_id>
```

Follow live logs:

```bash
docker logs -f <container_id>
```

**🔹 Monitoring:**
Docker stats:

```bash
docker stats
```

**🔹 Production Monitoring:**

* Use tools like **Prometheus**, **Grafana**, **cAdvisor**, **ELK stack (ElasticSearch, Logstash, Kibana)**.

---

## ✅ **Quick Recap**

| Concept | Key Purpose | Command Example |
| ------------------- | ------------------- | ----------------------------- |
| **Volumes** | Persistent data | `docker volume create myvol` |
| **Storage** | Data mgmt | `-v /host:/container` |
| **Networking** | Connect containers | `docker network create mynet` |
| **Compose** | Multi-container app | `docker-compose up` |
| **Registry** | Store images | `docker push myrepo/myimg` |
| **Multi-stage** | Small images | `FROM node as build` |
| **Monitoring/Logs** | Debug & track | `docker logs`, `docker stats` |

---
