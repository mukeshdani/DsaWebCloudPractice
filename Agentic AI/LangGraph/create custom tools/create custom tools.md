## 🧠 Goal: Create Custom Tool
You want to create a **chatbot that can use tools** (like a calculator or web search) to solve complex queries like:

> “What is the weather in Delhi? Multiply it by 2 and add 5.”

This involves:
- Understanding the query
- Using tools (search, math functions)
- Combining results
- Responding intelligently

---

## 🧰 1. Installing Required Libraries

```python
!pip install --upgrade langchain langchain-community langgraph openai langchain_openai
!pip install -U duckduckgo-search
```

These install:
- `langchain`, `langgraph`: For building LLM workflows
- `openai`, `langchain_openai`: To use GPT models
- `duckduckgo-search`: For web search tool

---

## 🧱 2. Defining the State

```python
from langgraph.graph import StateGraph, START
from langgraph.graph.message import add_messages
from typing_extensions import TypedDict
from typing import Annotated

class State(TypedDict):
    messages: Annotated[list, add_messages]
```

This defines the **state** of your graph. It stores the **conversation history** (`messages`) and uses `add_messages` to track them.

---

## 🔍 3. Creating a Search Tool

```python
from langchain_community.tools import DuckDuckGoSearchRun

def search_duckduckgo(query: str):
    search = DuckDuckGoSearchRun()
    return search.invoke(query)
```

This wraps the **DuckDuckGo search** tool into a function that can be used by the agent.

---

## ➕ 4. Creating Custom Math Tools

```python
def multiply(a:int,b:int) -> int:
    return a * b

def add(a:int,b:int) -> int:
    return a + b
```

These are simple **custom tools** that perform math operations.

---

## 🤖 5. Setting Up the LLM

```python
from langchain_openai import ChatOpenAI
llm = ChatOpenAI(temperature=0, api_key='sk-proj-...', model="gpt-4o-mini")
```

This initializes the **GPT-4o-mini** model with your API key.

---

## 🛠️ 6. Binding Tools to the LLM

```python
tools = [search_duckduckgo, add, multiply]
llm_with_tools = llm.bind_tools(tools)
```

This tells the LLM: “Here are the tools you can use when needed.”

---

## 🧠 7. Defining the Assistant Node

```python
def chatbot(state: State):
    return {"messages": [llm_with_tools.invoke(state["messages"])]}
```

This is the **main assistant function**. It takes the conversation state and lets the LLM respond, using tools if needed.

---

## 🔁 8. Building the LangGraph

```python
from langgraph.prebuilt import ToolNode, tools_condition

graph_builder = StateGraph(State)

graph_builder.add_node("assistant", chatbot)
graph_builder.add_node("tools", ToolNode(tools))

graph_builder.add_edge(START, "assistant")
graph_builder.add_conditional_edges("assistant", tools_condition)
graph_builder.add_edge("tools", "assistant")

react_graph = graph_builder.compile()
```

This builds the **LangGraph**:
- Starts at `assistant`
- If tools are needed, goes to `tools`
- Then returns to `assistant`

---

## 👀 9. Visualizing the Graph

```python
display(Image(react_graph.get_graph().draw_mermaid_png()))
```

This shows a **visual diagram** of your graph.

---

## 💬 10. Running the Agent

```python
response = react_graph.invoke({
    "messages": [HumanMessage(content="what is the weather in delhi. Multiply it by 2 and add 5.")]
})
print(response["messages"])
```

This sends a message to the agent. It will:
1. Search for the weather in Delhi
2. Multiply the result by 2
3. Add 5
4. Return the final answer

---

## ✅ Summary of Key Concepts

| Concept | Meaning |
|--------|--------|
| `StateGraph` | Defines the flow of your agent |
| `State` | Stores conversation messages |
| `ToolNode` | Node that executes tools |
| `tools_condition` | Decides if tools are needed |
| `bind_tools` | Connects tools to the LLM |
| `invoke` | Runs the graph with input |

---