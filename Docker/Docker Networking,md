 ---

## 🌐 **3️⃣ Docker Networking**

**🔹 What is Docker Networking?**

* It lets containers **talk to each other**, the host, and the internet.
* Docker creates **virtual networks** and attaches containers to them.

**🔹 Types of Networks:**

| Type | Use |
| ----------- | -------------------------------------------- |
| **Host** | Uses host’s network stack. (apke docker network k network and aapke host machine network k network same) |
| **Default Bridge** | Default for single-host networks. |
| **User Defined Bridge (Custom Bridge)** | Custom bridge |
| **None** | No networking. |
| **MACVLAN** | For multi-host networks (Swarm, Kubernetes). |
| **IPVLAN** | For multi-host networks (Swarm, Kubernetes). |
| **Overlay** | For multi-host networks (Swarm, Kubernetes). |


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