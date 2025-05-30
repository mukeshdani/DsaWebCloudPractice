# 🧠 CrewAI: Multi-Agent AI System

**CrewAI** is a framework for building intelligent systems using multiple specialized AI agents. Each agent is an expert in a specific domain and collaborates with others to complete complex workflows.

---

## 🔧 Core Concepts

### **Agent**
An **Agent** is a specialized AI entity with:
- **Name**: Identifier of the agent.
- **Role**: What the agent does.
- **Goal**: The agent’s mission.
- **Backstory**: Context or expertise.
- **Model**: The LLM powering the agent.
- **Tools**: APIs, databases, or custom functions the agent can use.

#### 🧑‍💼 Example:
```python
news_scraper = Agent(
    name="News Scraper",
    role="Web Crawler",
    goal="Fetch the latest AI-related news from the internet",
    backstory="An expert in web crawling and retrieving news articles",
    llm=ChatOpenAI(model_name="gpt-4"),
    tools=[news_scraper_tool]
)
```

---

### **Task**
A **Task** is a specific action assigned to an agent.

#### 📝 Example:
```python
fetch_news_task = Task(
    description="Fetch AI news from online sources.",
    agent=news_scraper
)
```

---

### **Process**
A **Process** is a workflow that defines:
- The **sequence** or **parallelism** of tasks.
- Which **agent** performs which **task**.
- The **type of execution** (sequential or parallel).

---

## 🔄 Types of Execution

### 1. **Sequential Execution**
Tasks are executed one after another.

**Example:**
```
Step 1: Fetch News → Step 2: Summarize → Step 3: Write Report
```

### 2. **Parallel Execution**
Multiple tasks are executed simultaneously.

**Example:**
```
Step 1: Fetch News & Summarize → Step 2: Write Report
```

---
## 🧠 CrewAI Execution Types

### ✅ Sequential Execution

In **Sequential Execution**, tasks are performed **one after another**. Each task waits for the previous one to complete.

#### ✅ Code Example:
```python
from crewai import Agent, Task, Crew, Process

# Define agents
agent1 = Agent(name="Researcher", role="Research", goal="Collect data")
agent2 = Agent(name="Analyst", role="Analysis", goal="Analyze data")
agent3 = Agent(name="Writer", role="Writing", goal="Write report")

# Define tasks
task1 = Task(description="Collect data", agent=agent1)
task2 = Task(description="Analyze data", agent=agent2)
task3 = Task(description="Write report", agent=agent3)

# Define crew with sequential process
crew = Crew(
    agents=[agent1, agent2, agent3],
    tasks=[task1, task2, task3],
    process=Process.sequential
)

crew.kickoff()
```

---

### ⚡ Parallel Execution

In **Parallel Execution**, multiple tasks are executed **simultaneously** to save time.

#### ⚡ Code Example:
```python
from crewai import Agent, Task, Crew, Process

# Define agents
agent1 = Agent(name="NewsFetcher", role="Fetch", goal="Fetch news")
agent2 = Agent(name="Summarizer", role="Summarize", goal="Summarize news")
agent3 = Agent(name="Writer", role="Write", goal="Write article")

# Define tasks
task1 = Task(description="Fetch news", agent=agent1)
task2 = Task(description="Summarize news", agent=agent2)
task3 = Task(description="Write article", agent=agent3)

# Define crew with parallel process
crew = Crew(
    agents=[agent1, agent2, agent3],
    tasks=[task1, task2, task3],
    process=Process.parallel
)

crew.kickoff()
```





## 🧳 Example Use Cases

### ✈️ AI-Powered Trip Advisor

**User Input**:  
"I want to travel from India to Rome next month. Interests: sightseeing and eating."

#### Agents:
1. **Flight Booking Agent** – Finds best flights.
2. **Hotel Recommendation Agent** – Suggests hotels.
3. **Sightseeing Planner Agent** – Plans tourist spots.
4. **Food Advisor Agent** – Recommends local cuisine.
5. **Trip Planner Agent** – Coordinates all tasks.

#### Tasks:
- Book flight & hotel
- Plan sightseeing
- Recommend food
- Create daily itinerary

---

### 💬 AI Chatbot

#### Agents:
- **Tech Support Agent**
- **Sales Agent**
- **FAQ Agent**

Each agent handles a different type of user query.

---

### 📰 News Summarization

#### Agents:
1. **News Fetching Agent** – Crawls the web.
2. **Summarization Agent** – Extracts key points.
3. **Writing Agent** – Composes the final article.

#### Process:
```text
Step 1: Fetch News (News Fetching Agent)
Step 2: Summarize (Summarization Agent)
Step 3: Write Report (Writing Agent)
```

---

## 🛠️ Tools

### Built-in Tool:
- `duckduckgo-search`: For web search.

### Custom Tool Example:
```python
def add(a: float, b: float) -> float:
    """Add two numbers."""
    return a + b
```

Custom tools allow agents to perform domain-specific operations.

---







