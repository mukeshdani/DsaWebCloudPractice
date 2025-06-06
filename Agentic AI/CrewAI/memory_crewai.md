### ✅ **CrewAI Project Setup: The 5 Key Steps**

1. **Initialize the Project**
   - Use `crew i create <project-name>` to scaffold the project structure.

2. **Define Agents and Tasks**
   - Fill in the YAML files to describe:
     - Agents (e.g., stock picker, researcher)
     - Tasks (e.g., find companies, analyze stocks)

3. **Configure `crew.py`**
   - Use decorators to register agents and tasks.
   - Create the crew instance.
   - Optionally define structured outputs and tools (e.g., Serpa, custom push notifications).

4. **Update `main.py`**
   - Set up input parameters and templated fields.

5. **Run the Project**
   - Use `crew i run` to execute the project.

---

## 🧠 Memory in CrewAI

Memory provides context to LLMs across interactions. CrewAI supports **five types** of memory:

### 1. **Short-Term Memory**
- Stores recent interactions using **vector databases** (e.g., Chroma).
- Enables **retrieval-augmented generation (RAG)** for contextual relevance.

### 2. **Long-Term Memory**
- Stores important knowledge in a **SQLite database**.
- Useful for persistent knowledge over time.

### 3. **Entity Memory**
- Similar to short-term memory but focused on **people, places, and concepts**.
- Also uses vector-based retrieval.

### 4. **Contextual Memory**
- Not a separate type—it's a **combination** of short-term, long-term, and entity memory used together to provide context.

### 5. **User Memory**
- Stores **user-specific** information.
- Requires **manual management** for querying and prompt injection.

---

## 🛠️ Implementing Memory in `crew.py`

### 🔧 Imports
```python
from crew.memory import ShortTermMemory, LongTermMemory, EntityMemory
from crew.memory.storage.rag_storage import RagStorage
from crew.memory.storage.long_term_memory_sqlite_storage import LongTermMemorySQLiteStorage
```

### 🧱 Create Memory Instances
```python
short_term_memory = ShortTermMemory(
    storage=RagStorage(provider="openai", model="text-embedding-ada-002"),
    path="memory/short_term"
)

long_term_memory = LongTermMemory(
    storage=LongTermMemorySQLiteStorage(path="memory/long_term.db")
)

entity_memory = EntityMemory(
    storage=RagStorage(provider="openai", model="text-embedding-ada-002"),
    path="memory/entity"
)
```

### 🧠 Add Memory to Crew
```python
crew = Crew(
    agents=[...],
    tasks=[...],
    short_term_memory=short_term_memory,
    long_term_memory=long_term_memory,
    entity_memory=entity_memory
)
```

---

## 🧑‍💻 Assign Memory to Agents

- Add `memory=True` to agents that should retain context:
```python
trading_company_finder = Agent(..., memory=True)
stock_picker = Agent(..., memory=True)
```

- Leave `memory=False` for agents like researchers who should always fetch fresh data.

---

## 🧪 Running the Project

- Run with:
```bash
crew i run
```

- Observe:
  - `memory/` directory created.
  - Chroma DB and SQLite DB populated.
  - Agents use memory to avoid repeating recommendations.

---

## 🎯 Key Takeaways

- Memory in CrewAI is **powerful and easy to set up**.
- It abstracts away complexity but reduces visibility.
- Prompts must be **explicitly designed** to leverage memory.
- Memory = **context injection** into LLM prompts.
