## 🚀 1. **Set Up and Configure Your First OpenAI API Workflow in VS Code**

### ✅ Prerequisites:
- Python installed
- VS Code with Python extension
- OpenAI account + API key

### 🧱 Steps:
1. **Create a new folder** in VS Code for your project.
2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. **Install OpenAI SDK**:
   ```bash
   pip install openai
   ```

4. **Create a Python file** (e.g., `chatbot.py`) and add:
   ```python
   import openai
   import os

   openai.api_key = os.getenv("OPENAI_API_KEY")

   response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=[{"role": "user", "content": "Hello!"}]
   )

   print(response.choices[0].message["content"])
   ```

---

## 🔐 2. **Managing API Keys Securely**

### ✅ Best Practices:
- **Never hardcode** your API key.
- Use a `.env` file and `python-dotenv` package.

### 🧱 Steps:
1. Install dotenv:
   ```bash
   pip install python-dotenv
   ```

2. Create a `.env` file:
   ```
   OPENAI_API_KEY=your-api-key-here
   ```

3. Update your Python code:
   ```python
   from dotenv import load_dotenv
   load_dotenv()
   ```

---

## 📓 3. **Using Python Notebooks in VS Code for AI Experimentation**

### ✅ Setup:
- Install **Jupyter extension** in VS Code.
- Create a `.ipynb` file.

### 🧠 Benefits:
- Run code in cells.
- Visualize outputs inline.
- Great for testing prompts, tuning parameters, and logging results.

### 🧪 Example Cell:
```python
import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Summarize AI agent engineering"}]
)
response.choices[0].message["content"]
```

---

## 🛠️ 4. **Troubleshooting OpenAI API Issues**

| Problem | Solution |
|--------|----------|
| `401 Unauthorized` | Check if API key is correct and loaded |
| `429 Too Many Requests` | You’ve hit rate limits – slow down or upgrade |
| `Timeouts` | Add `timeout` parameter or check internet |
| `ModuleNotFoundError` | Ensure `openai` is installed in the right environment |
| `KeyError` | Check if `.env` is loaded and key name matches |

---

## 🧠 5. **Best Dev Environment Setup in VS Code for AI Agents**

### 🔧 Recommended Extensions:
- Python
- Jupyter
- GitLens
- dotenv
- Pylance (for IntelliSense)

### 🧰 Folder Structure:
```
ai-agent-project/
│
├── .env
├── chatbot.py
├── requirements.txt
├── notebooks/
│   └── experiments.ipynb
├── utils/
│   └── helpers.py
```

### 📦 Dependency Management:
```bash
pip freeze > requirements.txt
```

---

## 🎯 Interview Questions & Answers

### Q1: How do you securely manage OpenAI API keys in a Python project?
**A**: Use a `.env` file to store the key and load it using `python-dotenv`. This keeps the key out of your codebase and version control.

---

### Q2: What are the benefits of using Jupyter notebooks in AI development?
**A**: They allow for interactive coding, easy visualization, and step-by-step experimentation, which is ideal for testing prompts and models.

---

### Q3: How do you troubleshoot a 401 error from the OpenAI API?
**A**: Ensure the API key is correct, loaded from the environment, and that your OpenAI account is active with access to the model you're calling.

---

### Q4: What’s the advantage of using VS Code for AI agent development?
**A**: VS Code offers a lightweight, customizable environment with extensions for Python, Jupyter, Git, and AI tools like Cursor IDE, making it ideal for rapid development.
