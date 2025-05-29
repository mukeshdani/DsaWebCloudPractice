## 🧠 Goal: Build an Agent with LangGraph

### ✅ What is an Agent?
An **agent** is an intelligent system that:
- Understands user input (via LLM)
- Decides what to do (e.g., use a tool or respond directly)
- Takes action (e.g., search Wikipedia, do math)

---

## 🧰 Step-by-Step Breakdown

---

### **Step 1: Install Required Packages**

```bash
!pip install --upgrade langchain langchain-community langgraph openai langchain_openai wikipedia
```

✅ This installs:
- `langchain`: Core framework
- `langchain-community`: Community tools (like Wikipedia)
- `langgraph`: For building workflows
- `openai` and `langchain_openai`: For using OpenAI models

---

### **Step 2: Create a Wikipedia Tool**

```python
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

api_wrapper = WikipediaAPIWrapper(top_k_results=1, doc_content_chars_max=300)
wiki_tool = WikipediaQueryRun(api_wrapper=api_wrapper)
```

✅ **What this does:**
- `WikipediaAPIWrapper`: Searches Wikipedia
- `WikipediaQueryRun`: Wraps it as a tool
- `top_k_results=1`: Only fetch 1 result
- `doc_content_chars_max=300`: Limit content length

---

### **Step 3: Initialize the LLM**

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    temperature=0,
    api_key="sk-***************",
    model="gpt-4o-mini"
)
```

✅ **What this does:**
- Loads OpenAI’s GPT-4o-mini model
- `temperature=0`: More deterministic output

---

### **Step 4: Test the Tool Alone**

```python
wiki_tool.run({"query": "AI agents"})
```

✅ This directly runs the Wikipedia tool to fetch a summary about "AI agents".

---

### **Step 5: Bind Tool to LLM**

```python
tools = [wiki_tool]
llm_with_tools = llm.bind_tools(tools)
```

✅ **What this does:**
- Binds the Wikipedia tool to the LLM
- Now the LLM can **decide** when to use the tool

---

### **Step 6: Test Tool-Enabled LLM**

```python
result = llm_with_tools.invoke("Hello world!")
print(result.content)
```

✅ This sends a message to the LLM. If the LLM thinks it needs a tool, it will use it. Otherwise, it just replies.

---

### **Step 7: Create a React Agent**

```python
from langgraph.prebuilt import create_react_agent

agent_executor = create_react_agent(llm, tools)
```

✅ **What is a React Agent?**
- **ReAct** = Reasoning + Acting
- The agent can:
  - Think about the question
  - Decide to use a tool or not
  - Respond with the final answer

---

### **Step 8: Send Messages to the Agent**

```python
from langchain_core.messages import HumanMessage

response = agent_executor.invoke({
    "messages": [HumanMessage(content="hi!")]
})
print(response["messages"][-1].content)
```

✅ This sends a simple greeting. Since no tool is needed, the LLM just replies.

---

### **Step 9: Ask a Real Question**

```python
response = agent_executor.invoke({
    "messages": [HumanMessage(content="what is agentic ai")]
})
print(response["messages"][-1].content)
```

✅ Now the agent might:
- Use the Wikipedia tool (if needed)
- Or answer directly using its own knowledge

---

## 🧠 Summary: What You Built

| Component | Purpose |
|----------|---------|
| **LLM** | Understands and generates responses |
| **Tool** | Wikipedia search |
| **Agent** | Decides when to use tool |
| **LangGraph** | Manages the agent logic (via `create_react_agent`) |

---

## 🔄 Alternatives

| Task | Alternative |
|------|-------------|
| Tool Use | DuckDuckGo, Google Search, Wolfram |
| LLM | Claude, LLaMA, Mistral |
| Framework | CrewAI, AutoGen, Haystack |
| Agent Logic | LangChain Agents, AutoGPT, BabyAGI |

---