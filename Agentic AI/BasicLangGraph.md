## 🧠 What is Agentic AI?

### ✅ **Definition**:
**Agentic AI** refers to AI systems that can:
- **Perceive** (understand input)
- **Reason** (make decisions)
- **Act** (use tools or APIs)
- **Adapt** (learn from memory/state)

These systems are **autonomous** and can **perform tasks** without constant human guidance.

---

## 🧰 Frameworks for Agentic AI

| Framework | Purpose | Example Use |
|----------|---------|--------------|
| **LangChain** | Build LLM apps with memory, tools, chains | Chatbots, RAG |
| **LangGraph** | Build **stateful**, **multi-step workflows** | Multi-agent systems |
| **CrewAI** | Multi-agent collaboration | Role-based agents |
| **Phidata (Agno)** | Agentic workflows with UI | Dashboards, pipelines |

---

## 🔁 LangGraph: Core Concepts

LangGraph is a **state machine framework** for building **LLM-powered workflows**.

### 🔹 Key Concepts

| Term | Definition | Example |
|------|------------|---------|
| **Node** | A function or step in the workflow | `chatbot`, `web_search` |
| **Edge** | Connection between nodes | `START → chatbot → END` |
| **State** | Memory of the system | Stores messages, results |
| **State Machine** | Controls flow using logic | Decides next node |

---

### ✅ Why is State Important?

**State** helps the system remember past interactions.

#### 🔸 Example:
```python
state = {"messages": [{"role": "user", "content": "My name is Alex"}]}
```
Later, the assistant can say:
> "Hi Alex, how can I help you?"

---

## 🧪 Build a Basic Chatbot with LangGraph

### ✅ Step-by-Step Code Explanation

#### 1. **Install Required Packages**
```bash
pip install --upgrade langchain langchain-community langgraph
pip install langchain-ollama
```

#### 2. **Define State**
```python
class State(Dict):
    messages: List[Dict[str, str]]
```
- This defines the memory structure.
- `messages` stores the conversation history.

#### 3. **Initialize LangGraph**
```python
from langgraph.graph import StateGraph, START, END
graph_builder = StateGraph(State)
```

#### 4. **Initialize LLM**
```python
from langchain_ollama.llms import OllamaLLM
llm = OllamaLLM(model="llama3.1")
```

#### 5. **Define Chatbot Node**
```python
def chatbot(state: State):
    response = llm.invoke(state["messages"])
    state["messages"].append({"role": "assistant", "content": response})
    return {"messages": state["messages"]}
```

#### 6. **Add Nodes and Edges**
```python
graph_builder.add_node("chatbot", chatbot)
graph_builder.add_edge(START, "chatbot")
graph_builder.add_edge("chatbot", END)
```

#### 7. **Compile Graph**
```python
graph = graph_builder.compile()
```

#### 8. **Run Chatbot**
```python
def stream_graph_updates(user_input: str):    
    state = {"messages": [{"role": "user", "content": user_input}]}
    for event in graph.stream(state):
        for value in event.values():
            print("Assistant:", value["messages"][-1]["content"])
```

---

## 🛠️ Add Tools to the Agent

### ✅ Example: Wikipedia Tool

```python
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

api_wrapper = WikipediaAPIWrapper(top_k_results=1, doc_content_chars_max=300)
wiki_tool = WikipediaQueryRun(api_wrapper=api_wrapper)
```

### ✅ Bind Tool to LLM

```python
from langchain_openai import ChatOpenAI
llm = ChatOpenAI(temperature=0, api_key="sk-...", model="gpt-4o-mini")

tools = [wiki_tool]
llm_with_tools = llm.bind_tools(tools)
```

### ✅ Tool Execution

```python
result = llm_with_tools.invoke("What is AI agent?")
print(result.content)
```

---

## 🧠 Multi-Agent Systems

### ✅ Why Use Multiple Agents?

- Divide tasks (math, research, payment)
- Specialized agents = better performance

### ✅ Example: Supervisor Agent

```python
from langgraph_supervisor import create_supervisor

workflow = create_supervisor(
    [research_agent, math_agent],
    model=model,
    prompt="You are a supervisor managing a research and math expert."
)
```

### ✅ Handoff Logic

```python
if "math" in state["task"]:
   return Command(goto="math_agent", update={"info":"Send to Math"})
```

---

## 📚 RAG (Retrieval-Augmented Generation)

### ✅ Problem with LLMs:
- No access to latest info
- Can’t answer private data

### ✅ Solution: RAG

| Step | Description |
|------|-------------|
| **Retrieve** | Search relevant documents |
| **Augment** | Add context to query |
| **Generate** | LLM answers using context |

### ✅ Code Summary

```python
from langchain_community.document_loaders import UnstructuredURLLoader
loader = UnstructuredURLLoader(urls=["https://langchain-ai.github.io/langgraph/tutorials/introduction/"])
docs = loader.load()
```

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
all_splits = text_splitter.split_documents(docs)
```

```python
from langchain_chroma import Chroma
vectorstore = Chroma.from_documents(documents=all_splits, embedding=HuggingFaceEmbeddings())
```

```python
def retrieve(state: State):
    retrieved_docs = vectorstore.similarity_search(state["question"],  k=1)
    return {"context": retrieved_docs}
```

```python
def generate(state: State):
    docs_content = "\n\n".join(doc.page_content for doc in state["context"])
    messages = prompt.invoke({"question": state["question"], "context": docs_content})
    response = llm.invoke(messages)
    return {"answer": response}
```

---

## 🎯 Interview Questions (with Answers)

| Question | Answer |
|----------|--------|
| What is LangGraph? | A framework to build stateful, multi-step LLM workflows. |
| What is a Node in LangGraph? | A function or step in the workflow. |
| What is State? | Memory that stores messages, results, etc. |
| What is RAG? | Retrieval-Augmented Generation: combines search + LLM. |
| Why use multiple agents? | To divide tasks and improve performance. |
| What is a fallback mechanism? | A backup plan if a tool or step fails. |

---