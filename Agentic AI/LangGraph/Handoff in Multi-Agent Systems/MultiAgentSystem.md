## 🔁 Concept: Handoff in Multi-Agent Systems

**Handoff** means transferring control or responsibility from one agent to another based on the task type.

### Example:
- **Receptionist → Nurse → Doctor**: Each agent handles a specific part of the workflow.
- **Alice (Research Agent) → Bob (Math Agent)**: If Alice receives a math question, she hands it off to Bob.

---

## 🧠 Code Walkthrough

### ✅ Step 1: Install Required Libraries

```python
!pip install langgraph-supervisor langchain-openai
!pip install -U duckduckgo-search
!pip install langchain langchain_community langgraph
```

- `langgraph-supervisor`: Manages workflows between agents.
- `langchain-openai`: Connects LangChain with OpenAI models.
- `duckduckgo-search`: Enables web search using DuckDuckGo.
- `langchain`, `langchain_community`: Core LangChain libraries for building agents and tools.

---

### ✅ Step 2: Initialize the OpenAI Model

```python
from langchain_openai import ChatOpenAI

model = ChatOpenAI(temperature=0, api_key="sk-pro*********************QHrtvM7", model="gpt-4o-mini")
```

- `temperature=0`: Makes the model deterministic (important for reproducibility).
- `gpt-4o-mini`: A lightweight, fast version of GPT-4 optimized for tasks.

---

### ✅ Step 3: Define Tools (Functions Agents Can Use)

```python
def search_duckduckgo(query: str):
    search = DuckDuckGoSearchRun()
    return search.invoke(query)
```

- This wraps DuckDuckGo search as a callable tool for agents.

```python
def add(a: float, b: float) -> float:
    return a + b

def multiply(a: float, b: float) -> float:
    return a * b
```

- Simple math tools for the math agent.

---

### ✅ Step 4: Create Agents

```python
from langgraph.prebuilt import create_react_agent
```

#### 🧮 Math Agent

```python
math_agent = create_react_agent(
    model=model,
    tools=[add, multiply],
    name="math_expert",
    prompt="You are a math expert. Always use one tool at a time."
)
```

- Uses `add` and `multiply` tools.
- Prompt restricts it to **one tool at a time** (important for tool chaining logic).

#### 🔍 Research Agent

```python
research_agent = create_react_agent(
    model=model,
    tools=[search_duckduckgo],
    name="research_expert",
    prompt="You are a world class researcher with access to web search. Do not do any math."
)
```

- Uses DuckDuckGo search.
- Prompt **explicitly forbids math** to enforce specialization.

---

### ✅ Step 5: Create Supervisor (Task Router)

```python
from langgraph_supervisor import create_supervisor

workflow = create_supervisor(
    [research_agent, math_agent],
    model=model,
    prompt=(
        "You are a team supervisor managing a research expert and a math expert. "
        "For current events, use research_agent. "
        "For math problems, use math_agent."
    )
)
```

- The **supervisor** decides which agent to delegate the task to.
- Based on task type (math or research), it **routes** the query.

---

### ✅ Step 6: Compile and Run

```python
app = workflow.compile()
```

- Compiles the workflow into an executable app.

---

### ✅ Step 7: Run Example 1 – Research Task

```python
result = app.invoke({
    "messages": [
        {
            "role": "user",
            "content": "what is quantum computing?"
        }
    ]
})
```

- This is a **research query**, so the supervisor routes it to `research_agent`.

```python
for m in result["messages"]:
    m.pretty_print()
```

- Displays the conversation and agent responses.

---

### ✅ Step 8: Run Example 2 – Mixed Task

```python
result = app.invoke({
    "messages": [
        {
            "role": "user",
            "content": "what is the weather in delhi today. Multiply it by 2 and add 5"
        }
    ]
})
```

- This is a **hybrid task**:
  1. First, `research_agent` finds the weather.
  2. Then, `math_agent` performs the math.

This shows **multi-agent collaboration** and **handoff** in action.

---

## 🧠 Key Interview Concepts

| Concept | Explanation |
|--------|-------------|
| **Multi-Agent System (MAS)** | A system with multiple specialized agents working together. |
| **Agent** | An autonomous unit that performs a specific task. |
| **Handoff** | Passing control from one agent to another based on task type. |
| **Supervisor Agent** | A controller that routes tasks to the appropriate agent. |
| **LangChain** | A framework for building LLM-powered applications. |
| **Tool Use** | Agents use tools (functions) to perform actions. |
| **Prompt Engineering** | Carefully crafting prompts to guide agent behavior. |
| **Workflow Compilation** | Turning agent logic into an executable pipeline. |

---
