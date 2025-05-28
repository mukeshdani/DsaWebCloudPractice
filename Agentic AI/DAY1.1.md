## 🖥️ 1. **Setting Up a Windows Environment for AI Development**

### ✅ Essentials to Install:
- **Python** (via python.org)
- **Visual Studio Build Tools** (for compiling Python packages)
- **Git** (for version control)
- **PowerShell 7** (optional but powerful)
- **WSL2** (Windows Subsystem for Linux, optional for Linux compatibility)
- **GPU Drivers** (NVIDIA CUDA Toolkit if using GPU)

### 🧰 Recommended Tools:
- **Cursor IDE** (AI-enhanced VS Code)
- **UV Package Manager** (fast dependency management)
- **Docker Desktop** (for containerized environments)
- **Anaconda (optional)** if you prefer GUI-based environment management

---

## ⚡ 2. **What is UV and Why It’s Faster than Anaconda**

### 🔍 UV Overview:
- Developed by **Astral**, UV is a **Rust-based** package manager.
- It replaces `pip`, `virtualenv`, and `venv` with a single fast tool.

### 🚀 Why It’s Faster:
- **Compiled in Rust**: Much faster execution than Python-based tools.
- **Parallel resolution**: Resolves dependencies concurrently.
- **No bloated GUI**: Lightweight and CLI-focused.

### 🛠️ Install UV:
```bash
pip install uv
```

---

## 🧠 3. **Installing and Configuring Cursor IDE**

### 🪄 Steps:
1. Go to https://www.cursor.sh
2. Download the Windows installer.
3. Sign in with GitHub or Google.
4. Enable AI features (you can connect your OpenAI API key).
5. Install extensions like:
   - Python
   - Jupyter
   - GitLens

### 🧩 Benefits:
- Inline AI code suggestions.
- Natural language to code.
- Built-in terminal and Git integration.

---

## 🧬 4. **Cloning GitHub Repos & Managing Dependencies**

### 🧾 Clone a Repo:
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

### 📦 Manage Dependencies:
- Use `uv`:
```bash
uv venv
uv pip install -r requirements.txt
```

- Or use `pip`:
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

---

## ⚠️ 5. **Common “Gotchas” in Windows AI Setup**

| Issue | Solution |
|-------|----------|
| Python not in PATH | Check during install or add manually |
| Missing build tools | Install Visual Studio Build Tools |
| CUDA not detected | Ensure correct driver + CUDA version |
| Long paths | Enable long path support in Windows registry |
| Permission errors | Run PowerShell as Admin when needed |

---

## 🧑‍💻 6. **Using PowerShell Effectively**

### 🔧 Useful PowerShell Commands:
- Navigate:
  ```powershell
  cd path\to\folder
  ```
- Create virtual environment:
  ```powershell
  python -m venv venv
  .\venv\Scripts\Activate.ps1
  ```
- Install packages:
  ```powershell
  pip install numpy pandas
  ```
- Run scripts:
  ```powershell
  python script.py
  ```

### 💡 Tips:
- Use **aliases** like `ls`, `cat`, `touch` (PowerShell supports Unix-style commands).
- Use **`winget`** to install software:
  ```powershell
  winget install Git.Git
  ```

---

## 🎯 Interview Questions & Answers

### Q1: Why is UV preferred over Anaconda for modern AI development?
**A**: UV is faster because it's written in Rust, supports parallel dependency resolution, and avoids the overhead of GUI tools like Anaconda. It’s ideal for CLI-based, reproducible environments.

---

### Q2: What are the key steps to set up a Python environment on Windows?
**A**: Install Python, Git, and Visual Studio Build Tools. Use `uv` or `venv` to create isolated environments, and install dependencies via `requirements.txt`.

---

### Q3: How do you install and configure Cursor IDE?
**A**: Download from cursor.sh, install, sign in, and connect your OpenAI API key. Install Python and Git extensions for enhanced AI coding support.

---

### Q4: What are common issues when setting up AI tools on Windows?
**A**: Missing PATH variables, build tools, or CUDA drivers. Also, long path issues and permission errors can occur. These can be fixed with proper configuration and admin access.

---

### Q5: How can PowerShell improve your development workflow?
**A**: PowerShell supports scripting, automation, and Unix-style commands. It’s powerful for managing environments, running scripts, and installing tools via `winget`.
