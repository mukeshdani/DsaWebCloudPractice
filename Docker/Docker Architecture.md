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