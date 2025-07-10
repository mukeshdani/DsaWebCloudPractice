
### ✅ **1. ENTRYPOINT vs CMD**

| Feature        | ENTRYPOINT                          | CMD                                 |
|----------------|-------------------------------------|-------------------------------------|
| Purpose        | Defines the main command to run     | Provides default arguments to ENTRYPOINT or a default command |
| Overwrite      | ❌ Cannot be overridden by `docker run` | ✅ Can be overridden by `docker run` |
| Use Case       | When you want a fixed behavior      | When you want flexibility           |

**Example:**
```Dockerfile
ENTRYPOINT ["python3", "app.py"]
CMD ["--debug"]
```
Running:
```bash
docker run image_name --release
```
Here, `--release` will be passed as an argument to `ENTRYPOINT`.

---

### ✅ **2. Port Mapping in Docker**

```bash
docker run -d -p 80:80 --name container_name image_name
```

- `-p 80:80` → Maps **host port 80** to **container port 80**
- First `80` → Host machine port
- Second `80` → Container's internal port
- Useful for exposing container services to the outside world

---

### ✅ **3. View Container Logs**

```bash
docker logs <container_id or name>
```

- Shows stdout/stderr logs of the container
- Useful for debugging

---

### ✅ **4. Access Container Terminal**

```bash
docker exec -it <container_id> bash
```

- `exec` → Run a command inside a running container
- `-it` → Interactive + TTY (terminal)
- `bash` → Opens bash shell inside container

---

### ✅ **5. `-itd` Flag Explanation**

```bash
docker run -itd image_name
```

- `-i` → Interactive mode (keeps STDIN open)
- `-t` → Allocates a pseudo-TTY (terminal)
- `-d` → Detached mode (runs in background)

**Combined:**
- Runs container in background **with interactive terminal support**
- Useful when you want to keep the container running and still be able to attach later

**To attach later:**
```bash
docker attach <container_id>
```

---

### ✅ **6. Summary of Common Docker Run Flags**

| Flag     | Meaning                          |
|----------|----------------------------------|
| `-d`     | Detached mode                    |
| `-i`     | Interactive                      |
| `-t`     | Allocate terminal                |
| `--name` | Assign a name to the container   |
| `-p`     | Port mapping                     |

---