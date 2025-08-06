## 🐧 **How to Install Linux Environments**

1. **Vagrant (by HashiCorp)**  
   - A tool for building and managing virtual machine environments using simple configuration files.
   - Ideal for developers who want reproducible environments.

2. **WSL (Windows Subsystem for Linux)**  
   - Allows you to run a Linux distribution directly on Windows without a virtual machine.
   - Great for developers who use Windows but need Linux tools.

3. **VirtualBox**  
   - A free and open-source virtualisation tool to run Linux as a guest OS on any host OS.
   - Useful for testing and learning Linux without affecting your main system.

4. **Cloud Platforms (AWS, GCP, Azure)**  
   - You can create Linux virtual machines (VMs) on cloud services.
   - Ideal for scalable, remote development and deployment.

---

## 🖥️ **Windows vs Linux**

| Feature | Windows | Linux |
|--------|---------|-------|
| License | Commercial | Open Source (GPL) |
| Focus | General-purpose (UI, gaming, office) | Development, networking, scripting |
| Antivirus | Required | Usually not needed |
| Remote Access | RDP (Remote Desktop Protocol) | SSH (Secure Shell) |

---

## 🧠 **Linux System Overview**

- **Operating System (OS)**: Linux
- **Core Component**: **Kernel**
  - Written in **C programming language**
  - Manages hardware and system resources
- **Shell**: Interface between user and kernel
  - Accepts commands like `mkdir`, `ls`, etc.
  - Acts as a gateway to communicate with the kernel

---

## 🔁 **Boot Process in Linux**

1. **Bootloader**: First program that runs when the computer starts.
2. **GRUB (Grand Unified Bootloader)**: Loads and manages the Linux kernel.
3. **Kernel**: Starts system processes and manages hardware.
4. **Shell & Desktop Environment**: Provides user interface (terminal, icons, etc.)

---

## 🧱 **Linux System Architecture**

```
Hardware → Kernel → Shell → Utilities/Applications
```

---

## 🧾 **Linux File System Structure**

- Starts from root `/`
- Common directories:
  - `/home` – User files
  - `/usr` – System utilities and applications
  - `/bin` – Essential command binaries
  - `/etc` – Configuration files
  - `/var` – Variable data (logs, cache)

---

## 🧮 **System Monitoring Commands**

- `top`: Shows running processes and CPU usage
- `df -h`: Displays disk space usage
- `free -h`: Shows memory (RAM) usage

---

## 🧓 **Linux vs Unix**

| Feature | Unix | Linux |
|--------|------|-------|
| Origin | Proprietary | Open Source |
| License | Commercial | GPL |
| Relationship | Parent OS | Derived from Unix |

---

## ⚙️ **Linux Process States**

- **Running**: Actively using CPU
- **Sleeping**: Waiting for resources
- **Stopped**: Halted by user or system
- **Zombie**: Process completed but not cleaned up
- **Terminated/Killed**: Process ended

---