### 🔍 **Overview of Crew**
### 🧩 **What is Crew?**
Crew refers to **three distinct offerings**:

1. **Crew AI Enterprise**  
   - A **commercial platform** for deploying, running, and monitoring agents.
   - Focused on **enterprise use** with hosting and management tools.

2. **Crew UI Studio**  
   - A **low-code/no-code** interface for building agent workflows.
   - Similar to tools like Addendum.

3. **Crew AI Framework (Open Source)**  
   - The **main focus** of this course.
   - Designed for **orchestrating high-performing AI agents**.
   - Ideal for developers writing code and building custom agent solutions.

---

### 🧠 **Framework Flavors: Crews vs. Flows**

| Feature | **Crews** | **Flows** |
|--------|-----------|-----------|
| Description | Teams of autonomous agents | Prescribed, step-by-step workflows |
| Use Cases | Creative collaboration, exploratory tasks | Deterministic outcomes, auditability |
| Control | Less predictable, more autonomous | More controlled and structured |
| Ideal For | Agentic problem-solving | Production environments needing precision |

- **Crews** = Autonomous, agent-based teamwork.
- **Flows** = Structured, rule-based workflows.

---

## 🧠 **Core Concepts in Crew AI Framework**

### 1. **Agent**
- **Definition**: The smallest autonomous unit of work.
- **Backed by**: An LLM (Large Language Model).
- **Components**:
  - **Role**: What the agent does.
  - **Goal**: The agent’s objective.
  - **Backstory**: Context or background for the agent.
  - **Memory** *(optional)*: For retaining context across tasks.
  - **Tools** *(optional)*: External functions or APIs the agent can use.

> 🆚 Compared to OpenAI Agents SDK: More structured and opinionated (uses role, goal, backstory instead of just a system prompt).

---

### 2. **Task**
- **Definition**: A specific assignment given to an agent.
- **Components**:
  - **Description**: What the task is.
  - **Expected Output**: What the result should be.
  - **Assigned Agent**: The agent responsible for the task.

> 🔄 Multiple tasks can be assigned to a single agent.

---

### 3. **Crew**
- **Definition**: A team of agents and their tasks.
- **Execution Modes**:
  - **Sequential**: Tasks are executed one after another in order.
  - **Hierarchical**: A manager LLM dynamically assigns tasks to agents.

---

## ⚙️ **Configuration & Code Structure**

### 🧾 YAML Configuration
- Agents and tasks can be defined in **YAML files**.
- Benefits:
  - **Separation of concerns**: Keeps prompts/configs out of code.
  - **Cleaner code**: Easier to manage and update.
- Example YAML fields:
  - `role`, `goal`, `backstory`, `llm`

---

### 🐍 Python Integration

#### Key File: `crew.py`
- Central file where agents, tasks, and the crew are defined.
- Uses **decorators** to simplify and organize code.

#### Decorators:
| Decorator | Purpose |
|----------|---------|
| `@crew_base` | Wraps the main class managing the crew |
| `@agent` | Defines an agent function |
| `@task` | Defines a task function |
| `@crew` | Assembles the crew with agents, tasks, and execution mode |

> 🧩 Decorators help auto-register agents and tasks into the crew class.

---

## ⚖️ **Trade-offs & Design Philosophy**

- **Pros**:
  - Encourages good prompting practices.
  - Structured and scalable.
  - YAML config improves maintainability.
- **Cons**:
  - Less flexible than OpenAI SDK.
  - Harder to debug due to abstracted system prompt.
  - Slight learning curve with new terminology and structure.

---


## ⚙️ **Model Integration with Crew AI**

### 🔌 Powered by: **LiteLLM**
- **LiteLLM** is the underlying framework Crew uses to interact with LLMs.
- Known for being **lightweight, flexible, and minimalistic**.
- Unlike LangChain, LiteLLM avoids heavy abstractions—making it easy to switch between models.

### ✅ **Supported Model Providers**
You can easily connect to a wide range of LLMs using the format:

```
provider/model-name
```

#### Examples:
- `openai/gpt-4`
- `anthropic/claude-3-opus`
- `google/gemini-1.5-flash`
- `mistral/mistral-7b`
- `groq/llama3-70b`
- `ollama/llama2` *(for local models)*
- `openrouter/meta-llama/llama-3-70b-instruct`

> 🔄 **Switching models** is as easy as changing a string in your config.

---

## 🏗️ **Crew AI Project Structure**

### 🛠️ Project Creation
To create a new Crew project:
```bash
crewai create crew my_crew
```

> 📝 You can also create a flow-based project with:
```bash
crewai create flow my_project
```

---

### 📁 Directory Layout

```
my_crew/
├── src/
│   └── my_crew/
│       ├── config/
│       │   ├── agents.yaml
│       │   └── tasks.yaml
│       ├── crew.py       # Defines agents, tasks, and crew using decorators
│       └── main.py       # Entry point to run the crew
├── pyproject.toml        # Youv project config
└── README.md
```

### 🔄 Running the Crew
To execute your project:
```bash
crewai run
```
> This runs `main.py` behind the scenes.

---

### 🧰 Benefits of This Setup
- **Modular**: Clear separation of config (YAML) and logic (Python).
- **Scalable**: Easy to manage large projects with multiple agents/tasks.
- **Integrated with Youv**: Fits well into modern Python dev environments.

---

## 🚀 **Starting a Crew AI Project from Scratch**

### 🖥️ Step-by-Step Setup in Terminal

1. **Open Terminal**  
   - Shortcut: `Ctrl + \`` (Mac) or via **View > Terminal** in Cursor/VSCode.

2. **Navigate to the desired directory**  
   ```bash
   cd crew
   ```

3. **Create a new Crew project**  
   ```bash
   crewai create crew debate
   ```

4. **Initial Setup Prompts**  
   - **Select provider**: e.g., `OpenAI`
   - **Select model**: e.g., `gpt-4-mini`
   - **API key**: Just press `Enter` if you already have a `.env` file

---

## 🗂️ Project Structure Overview

```
crew/
├── debate/
│   ├── knowledge/
│   │   └── user_preferences.yaml
│   ├── src/
│   │   └── debate/
│   │       ├── config/
│   │       │   ├── agents.yaml
│   │       │   └── tasks.yaml
│   │       ├── tools/
│   │       ├── crew.py         # Defines agents, tasks, and crew
│   │       └── main.py         # Entry point to run the crew
│   └── pyproject.toml          # Youv project config
```

> 🧠 Tip: If only one folder exists under a directory, Cursor/VSCode may collapse it visually.

---

## 👥 Agent Configuration in `agents.yaml`

### 🧑‍⚖️ **Judge Agent**
```yaml
- name: judge
  role: Decide the winner of the debate based on the arguments presented
  goal: Evaluate the arguments from both sides and declare a winner based on clarity, logic, and persuasiveness.
  backstory: You're a fair judge with a reputation for weighing up arguments without factoring in your own views and making a decision based purely on the merits of the argument. The motion is {{ motion }}.
  model: gpt-4-mini
```

### 🗣️ **Debater Agent**
```yaml
- name: debater
  role: A compelling debater
  goal: Present a clear argument either in favor of or against the motion: {{ motion }}.
  backstory: You're an experienced debater with a knack for giving concise but convincing arguments. The motion is {{ motion }}.
  model: gpt-4-mini
```

> 🧩 `{{ motion }}` is a **template variable** that will be defined in `main.py` at runtime.

---

## 🧠 Why This Works Well
- **Template-based prompting**: Makes agents reusable for different debate topics.
- **Separation of concerns**: Keeps logic (Python) and configuration (YAML) cleanly separated.
- **Scaffolding**: Crew AI sets up a full project structure, making it easier to scale and maintain.

---

## ✅ **Task Configuration in `tasks.yaml`**

You defined **three tasks**:

### 1. **Propose**
```yaml
- name: propose
  description: Come up with a clear argument in favor of the motion. Be very convincing.
  expected_output: Your clear argument in favor of the motion in a concise manner.
  agent: debater
  output_file: output/propose.md
```

### 2. **Oppose**
```yaml
- name: oppose
  description: Come up with a clear argument against the motion. Be very convincing.
  expected_output: Your clear argument against the motion in a concise manner.
  agent: debater
  output_file: output/oppose.md
```

### 3. **Decide**
```yaml
- name: decide
  description: Review the arguments presented by the debaters and decide which side is more convincing.
  expected_output: Your decision on which side is more convincing and why.
  agent: judge
  output_file: output/decide.md
```

> ⚠️ **Note**: Task names must not conflict with agent names (e.g., don’t name a task `judge` if you have an agent named `judge`).

---

## 🧠 **`crew.py` – Defining the Crew**

### Structure:
- Decorated with `@crew_base`
- Agents defined with `@agent` decorator
- Tasks defined with `@task` decorator
- Crew assembled with `@crew` decorator

### Example:
```python
@crew_base
class DebateCrew:
    agents_config = "config/agents.yaml"
    tasks_config = "config/tasks.yaml"

    @agent
    def debater(self): return Agent(config="debater", verbose=True)

    @agent
    def judge(self): return Agent(config="judge", verbose=True)

    @task
    def propose(self): return Task(config="propose")

    @task
    def oppose(self): return Task(config="oppose")

    @task
    def decide(self): return Task(config="decide")

    @crew
    def crew(self): 
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.SEQUENTIAL,
            verbose=True
        )
```

---

## 🏁 **`main.py` – Running the Crew**

### Key Elements:
- Sets the **template variable** `motion`
- Runs the crew and prints the final result

### Example:
```python
from debate.crew import DebateCrew

if __name__ == "__main__":
    crew = DebateCrew()
    result = crew.run(inputs={"motion": "There needs to be strict laws to regulate LLMs."})
    print(result.raw)
```

---

## 🧪 **Running the Project**

### Terminal Commands:
```bash
cd crew/debate
crewai run
```

- Executes the tasks in sequence:
  1. Debater proposes
  2. Debater opposes
  3. Judge decides

- Output files are saved in the `output/` directory:
  - `propose.md`
  - `oppose.md`
  - `decide.md`

---

## 🔁 **Quick Recap of Crew AI Concepts**

### 🧠 Core Components:
- **Agent**: Smallest autonomous unit with:
  - `role`, `goal`, `backstory`
  - Optional: `memory`, `tools`, `llm`
- **Task**: A specific assignment with:
  - `description`, `expected_output`, `agent`, `output_file`
- **Crew**: A team of agents and tasks
  - Runs in **sequential** or **hierarchical** mode

---

## 🧱 **5 Steps to Build a Crew Project**

1. **Create the project**  
   ```bash
   crewai create crew <project_name>
   ```

2. **Edit YAML configs**  
   - Located in: `src/<project_name>/config/`
   - Files: `agents.yaml`, `tasks.yaml`

3. **Define agents, tasks, and crew in `crew.py`**  
   - Use decorators: `@agent`, `@task`, `@crew`
   - Reference YAML configs

4. **Set runtime inputs in `main.py`**  
   - Define template variables (e.g., `motion`)

5. **Run the project**  
   ```bash
   crewai run
   ```

---

## 🧰 **New Concepts Introduced Today**

### 1. **Tools**
- Allow agents to interact with external APIs or functions.
- Similar to tools in OpenAI SDK, but integrated Crew-style.
- You’ll explore this using the **Serper.dev** API for Google search.

### 2. **Context Passing**
- Enables **data flow between tasks**.
- Example: Output from `task_1` becomes input for `task_2`.
- Crucial for building **multi-step reasoning workflows**.

---

## 🔑 **Serper.dev Setup (Google Search API)**

- Go to https://serper.dev
- Sign up and get your **free API key** (2,500 credits)
- Add to your `.env` file:
  ```env
  SERPER_API_KEY=your_key_here
  ```

> ⚠️ Be sure to use `SERPER_API_KEY` (not to be confused with other similar services like SerpAPI).

---

## 🏗️ **New Project: `financial_researcher`**

### Terminal Setup:
```bash
cd crew
crewai create crew financial_researcher
```

- Choose provider: `OpenAI`
- Choose model: `gpt-4-mini`
- Skip API key setup (if `.env` is already configured)

> This creates the full project scaffold under `crew/financial_researcher/`.

---

## 🧠 **Agents Configuration (`agents.yaml`)**

### 1. **Researcher**
```yaml
- name: researcher
  role: Senior financial researcher for {{ company }}
  goal: Research {{ company }}'s news, performance, and potential.
  backstory: You're a seasoned financial researcher with a talent for finding the most relevant information about a company. Known for presenting insights clearly and concisely.
  model: deepseek-chat
```

### 2. **Analyst**
```yaml
- name: analyst
  role: Market analyst and report writer focused on {{ company }}
  goal: Analyze the research and create a comprehensive, well-structured report.
  backstory: Meticulous and insightful financial analyst with a background in company research and reporting.
  model: groq/meta-llama/llama-3-70b-instruct
```

---

## 📋 **Tasks Configuration (`tasks.yaml`)**

### 1. **Research Task**
```yaml
- name: research
  description: Conduct thorough research on {{ company }}. Include current status, historical performance, challenges, opportunities, recent news, and future outlook. Organize findings in structured sections.
  expected_output: Structured research findings on {{ company }} with well-defined sections.
  agent: researcher
```

### 2. **Analysis Task**
```yaml
- name: analysis
  description: Analyze the research findings and create a comprehensive report. Include executive summary, key insights, market outlook, and format it professionally.
  expected_output: Polished professional report on {{ company }} based on research findings.
  agent: analyst
  context: [research]
  output_file: output/report.md
```

> ✅ **Context Passing**: The `context: [research]` line ensures the output of the research task is passed into the analysis task.

---

## 🧱 **Crew Definition (`crew.py`)**

```python
@crew_base
class FinancialResearcherCrew:
    agents_config = "config/agents.yaml"
    tasks_config = "config/tasks.yaml"

    @agent
    def researcher(self): return Agent(config="researcher", verbose=True)

    @agent
    def analyst(self): return Agent(config="analyst", verbose=True)

    @task
    def research(self): return Task(config="research")

    @task
    def analysis(self): return Task(config="analysis")

    @crew
    def crew(self):
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.SEQUENTIAL,
            verbose=True
        )
```

---

## 🏁 **Main Entry Point (`main.py`)**

```python
from financial_researcher.crew import FinancialResearcherCrew

if __name__ == "__main__":
    crew = FinancialResearcherCrew()
    result = crew.run(inputs={"company": "Tesla"})
    print(result.raw)
```

---

## 🚀 **Execution**

### Terminal Commands:
```bash
cd crew/financial_researcher
crewai run
```

- **DeepSeek** handles the research task (slower but detailed).
- **Grok (Meta LLaMA 3)** handles the analysis task (fast and efficient).
- Output saved to: `output/report.md`

---

## 🧠 Observations

- **Backstory writing** improves prompt quality and model alignment.
- **Mixing models** (DeepSeek + Groq) showcases Crew AI’s flexibility via LiteLLM.
- **Context passing** is seamless and powerful for multi-step workflows.

---

## 🔁 **Recap: Why the Update Was Needed**

- The **initial research** was outdated (e.g., Q3 2023 data).
- This was due to the **LLM’s training cutoff** (DeepSeek in this case).
- Solution: **Add a tool** to fetch **real-time data**.

---

## 🧰 **Tool Integration: Serper.dev**

### ✅ What You Did:
- Imported the tool:
  ```python
  from crewai_tools import SerperDevTool
  ```
- Created an instance:
  ```python
  search_tool = SerperDevTool()
  ```
- Assigned it to the **researcher agent**:
  ```python
  return Agent(config="researcher", tools=[search_tool], verbose=True)
  ```

### 🔐 API Key Setup:
- Added to `.env`:
  ```env
  SERPER_API_KEY=your_key_here
  ```

---

## 🧪 **Execution Results**

- **Researcher agent** used Serper to search Google for **real-time Tesla news**.
- **Analyst agent** (Grok) used that updated context to generate a **2025-relevant financial report**.
- Output was:
  - **Accurate**
  - **Timely**
  - **Professional**
- All done with **zero cost** (thanks to Serper’s free credits).

---

## 💡 Key Takeaways

- **Context passing** enables multi-step workflows.
- **Tool integration** solves the LLM knowledge cutoff problem.
- **Crew AI** makes it easy to build powerful, real-world agent systems with minimal code.
- **Model flexibility** (OpenAI, Groq, DeepSeek, etc.) is a major strength.

---

## 🧭 Suggested Next Steps

- Try:
  - Swapping in different models (e.g., Claude, Gemini, LLaMA).
  - Modifying backstories and goals to see how outputs change.
  - Creating new agent workflows (e.g., travel planner, legal assistant, etc.).
- Next session: **Advanced Crew AI features**!

---


## 🧱 **Project Setup Recap**

### ✅ 5-Step Crew Project Workflow:
1. **Create project**  
   ```bash
   crewai create crew stock_picker
   ```
2. **Edit YAML configs** (`agents.yaml`, `tasks.yaml`)
3. **Define agents, tasks, and crew** in `crew.py`
4. **Set runtime inputs** in `main.py`
5. **Run the project**  
   ```bash
   crewai run
   ```

---

## 🧠 **Agents Defined in `agents.yaml`**

### 1. **Trending Company Finder**
- **Role**: Finds 2–3 trending companies in a given sector.
- **Model**: `gpt-4-mini`

### 2. **Financial Researcher**
- **Role**: Analyzes the trending companies in detail.
- **Model**: `gpt-4-mini`

### 3. **Stock Picker**
- **Role**: Selects the best company for investment and explains why.
- **Model**: `gpt-4-mini`

### 4. **Manager**
- **Role**: Delegates tasks to agents to achieve the goal of picking the best company.
- **Model**: `gpt-4-mini`

---

## 📋 **Tasks Defined in `tasks.yaml`**

### 1. **Find Trending Companies**
- **Description**: Search the latest news to find trending companies in a sector.
- **Agent**: `trending_company_finder`
- **Output**: `output/trending_companies.json`

### 2. **Research Trending Companies**
- **Description**: Analyze each trending company in detail.
- **Agent**: `financial_researcher`
- **Context**: `find_trending_companies`
- **Output**: `output/research_report.md`

### 3. **Pick Best Company**
- **Description**: Choose the best company for investment, notify the user, and explain the rationale.
- **Agent**: `stock_picker`
- **Context**: `research_trending_companies`
- **Output**: `output/investment_recommendation.md`

---

## 🔍 **Key Concepts Introduced**

### 1. **Structured Outputs**
- Output files like `.json` and `.md` help organize and persist results.
- Useful for chaining tasks and reviewing results.

### 2. **Custom Tools (Coming Up)**
- You’ll integrate a **push notification tool**.
- You’ll also **build your own tool**—a major step toward custom agent capabilities.

### 3. **Hierarchical Processing (Coming Up)**
- Instead of sequential task execution, a **manager agent** will dynamically assign tasks.
- Enables more flexible, autonomous workflows.

---

## 💡 Pro Tips

- Use **consistent terminology** across agents and tasks (e.g., “trending companies”).
- Keep prompts **clear, instructive, and concise**.
- Use **context passing** to maintain continuity between tasks.

---

## 🧠 **Structured Outputs with Pydantic**

### ✅ Why Use Them?
- Enforces **consistent, machine-readable output** from agents.
- Helps agents stay “on rails” and produce predictable results.
- Great for chaining tasks and post-processing.

### 🧾 Example: Trending Company Schema
```python
class TrendingCompany(BaseModel):
    """A company in the news attracting attention."""
    name: str
    ticker: str
    reason: str

class TrendingCompanyList(BaseModel):
    """A list of trending companies."""
    companies: List[TrendingCompany]
```

### 🧾 Example: Research Schema
```python
class TrendingCompanyResearch(BaseModel):
    """Detailed research on a company."""
    name: str
    market_position: str
    future_outlook: str
    investment_potential: str

class TrendingCompanyResearchList(BaseModel):
    """List of research results."""
    companies: List[TrendingCompanyResearch]
```

> These schemas are passed to tasks using the `output_pydantic` parameter.

---

## 🧰 **Crew Definition (`crew.py`)**

### 🔧 Agents
- **Trending Company Finder** and **Financial Researcher** use the `SerperDevTool` for real-time search.
- **Stock Picker** does not use tools.
- **Manager Agent** is defined separately with `allow_delegation=True`.

### 🧠 Example Agent with Tool
```python
@agent
def trending_company_finder(self):
    return Agent(config="trending_company_finder", tools=[SerperDevTool()], verbose=True)
```

### 🧠 Manager Agent
```python
manager = Agent(config="manager", allow_delegation=True)
```

---

## 📋 **Tasks with Structured Output**

### 🧠 Example Task with Schema
```python
@task
def find_trending_companies(self):
    return Task(config="find_trending_companies", output_pydantic=TrendingCompanyList)
```

- Each task is linked to a schema class to enforce structure.
- Context is passed between tasks using the `context` field.

---

## 🧠 **Hierarchical Process Mode**

### ✅ What It Does:
- Uses a **manager agent** to dynamically assign tasks to agents.
- More flexible than sequential mode.
- Enables **autonomous task delegation**.

### 🧠 Crew Definition
```python
@crew
def crew(self):
    return Crew(
        agents=self.agents,
        tasks=self.tasks,
        process=Process.HIERARCHICAL,
        manager=self.manager,
        verbose=True
    )
```

> You can also use `manager_llm=LLM(...)` instead of a full agent, but defining a manager agent with a role and goal tends to yield better results.

---

## 💡 Tips & Insights

- **Structured outputs** improve reliability and downstream processing.
- **Consistent terminology** across agents, tasks, and schemas improves coherence.
- **Hierarchical mode** is powerful but can be unpredictable—requires careful prompt design.
- **Manager agent** benefits from using a stronger model like `gpt-4` (not mini).

---


## ✅ **Final Enhancements to the Stock Picker Project**

### 🧠 1. **Structured Outputs**
- Used **Pydantic schemas** to enforce structured JSON output from tasks.
- Ensured consistency and reliability in:
  - Trending companies list
  - Company research reports

### 🧾 Example:
```python
class TrendingCompany(BaseModel):
    name: str
    ticker: str
    reason: str

class TrendingCompanyList(BaseModel):
    companies: List[TrendingCompany]
```

Used in task definition:
```python
@task
def find_trending_companies(self):
    return Task(config="find_trending_companies", output_pydantic=TrendingCompanyList)
```

---

### 🧠 2. **Hierarchical Process Mode**
- Introduced a **manager agent** with `allow_delegation=True`.
- Crew autonomously assigned tasks to agents.
- Used a **stronger model (GPT-4)** for the manager to improve coherence.

```python
manager = Agent(config="manager", allow_delegation=True)

@crew
def crew(self):
    return Crew(
        agents=self.agents,
        tasks=self.tasks,
        process=Process.HIERARCHICAL,
        manager=manager,
        verbose=True
    )
```

> 🧠 This mode adds flexibility but can be less predictable—great for experimentation.

---

### 🧰 3. **Custom Tool: Push Notification**
- Created a custom tool using `Pushover` to send real-time notifications.
- Defined a schema for the tool input:
```python
class PushNotificationInput(BaseModel):
    message: str
```

- Implemented the tool in `push_tool.py`:
```python
class PushNotificationTool(BaseTool):
    name = "send_push_notification"
    description = "This tool is used to send a push notification to the user."
    args_schema = PushNotificationInput

    def _run(self, message: str):
        # Sends push notification using Pushover API
```

- Assigned the tool to the **stock picker agent**.

---

## 🧪 **Execution Outcome**
- Crew ran autonomously and selected **Circle** as the best investment.
- Push notification was successfully sent.
- Output files:
  - `output/trending_companies.json`
  - `output/research_report.md`
  - `output/investment_recommendation.md`

---

## 🧠 Key Takeaways

| Feature | Benefit |
|--------|---------|
| **Structured Outputs** | Reliable, machine-readable task results |
| **Hierarchical Process** | Dynamic task delegation via manager agent |
| **Custom Tool** | Real-world integration (e.g., notifications) |

---


## 🧠 Crew AI Memory Integration – Notes

### 🔁 Recap: Building a Crew Project (5 Steps)
1. **Create the Crew Project**
   - Use `crew` CLI to scaffold the project.
2. **Define Agents and Tasks**
   - Fill in YAML files for agents and tasks.
3. **Implement in `crew.py`**
   - Use decorators to register agents and tasks.
   - Create the crew and configure tools, structured outputs, etc.
4. **Update `main.py`**
   - Set inputs and configure templated fields.
5. **Run the Project**
   - Use `crew run` to execute.

---

## 🧠 Memory in Crew AI

### Why Memory?
- Provides **contextual information** to LLMs across interactions.
- Helps agents **remember past actions**, avoid repetition, and build knowledge.

### Two Ways to Use Memory
- **Manual**: Store and pass variables yourself.
- **Crew’s Built-in Memory System**: Easier setup, but less transparent.

---

## 🧩 Types of Memory in Crew

| Type              | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Short-Term**     | Recent interactions stored in a **vector DB** (e.g., Chroma) using RAG.     |
| **Long-Term**      | Important info stored in a **SQLite DB** for persistent recall.             |
| **Entity Memory**  | Stores info about **people, places, concepts** in a vector DB.              |
| **Contextual**     | Umbrella term for short-term, long-term, and entity memory.                 |
| **User Memory**    | User-specific info; **manual management** required.                         |

---

## 🛠️ Implementation Steps

### 1. **Import Memory Classes**
```python
from crew.memory import ShortTermMemory, LongTermMemory, EntityMemory
from crew.memory.storage.rag_storage import RagStorage
from crew.memory.storage.long_term_memory import SQLiteStorage
```

### 2. **Create Memory Instances**
```python
short_term_memory = ShortTermMemory(
    storage=RagStorage(provider="openai", model="text-embedding-ada-002", path="memory/stm")
)

long_term_memory = LongTermMemory(
    storage=SQLiteStorage(path="memory/ltm.db")
)

entity_memory = EntityMemory(
    storage=RagStorage(provider="openai", model="text-embedding-ada-002", path="memory/entity")
)
```

### 3. **Pass Memory to Crew**
```python
crew = Crew(
    ...
    memory=True,
    short_term_memory=short_term_memory,
    long_term_memory=long_term_memory,
    entity_memory=entity_memory,
)
```

### 4. **Enable Memory for Specific Agents**
```python
@agent(memory=True)
def trading_company_finder(...): ...

@agent(memory=False)
def financial_researcher(...): ...

@agent(memory=True)
def stock_picker(...): ...
```

> ✅ Only enable memory for agents that benefit from remembering past interactions.

---

## 🧪 Running the Project

- Run with `crew run`.
- Memory directories and databases (e.g., Chroma, SQLite) are auto-created.
- Agents now use memory to avoid repetition and improve contextual relevance.

---

## 🧠 Key Takeaways

- Crew’s memory system is **powerful and easy to set up**.
- It abstracts away complexity but can obscure debugging.
- Memory = **context injection** into prompts.
- Always align your **YAML instructions** with memory usage (e.g., “don’t repeat stocks”).

---

## 🧠 Project: Coder Agent in Crew AI

### 🎯 Goal
Build an agent that:
- Writes Python code to solve a given assignment.
- Executes the code (optionally in a Docker container).
- Returns both the code and its output.

---

## 🧩 Key Concepts

### 🧠 What is a Coder Agent?
- An agent that **generates code** and **executes it** as part of solving a task.
- Also known as a **"Coda Agent"** in some contexts.
- Goes beyond just generating code — it uses code execution as a tool to solve broader problems.

---

## 🛠️ Setup Steps

### 1. **Create the Project**
```bash
crew i create crew coder
```
- Choose `OpenAI` as provider.
- Use `gpt-4` or `gpt-4-mini`.

---

### 2. **Define the Agent (in `agents.yaml`)**
```yaml
name: coder
role: You are a Python developer. You write Python code to achieve this assignment.
goal: First you plan how the code will work. Then you write the code. Then you run it and check the output.
backstory: A seasoned Python developer with a knack for writing clean, efficient code.
provider: openai
model: gpt-4
```

---

### 3. **Define the Task (in `tasks.yaml`)**
```yaml
name: coding_task
description: Write Python code to achieve this assignment.
expected_output: A text file that includes the code and the output of the code.
```

---

### 4. **Install Docker (Optional but Recommended)**
- Visit: https://www.docker.com/products/docker-desktop
- Enables **safe code execution** in a sandboxed environment.

---

### 5. **Implement the Agent in `crew.py`**
```python
@agent
def coder():
    return Agent(
        config=agent_config["coder"],
        verbose=True,
        allow_code_execution=True,
        code_execution_mode="safe",  # Uses Docker if available
        max_execution_time=30,       # Seconds
        max_retry_limit=5
    )
```

---

### 6. **Define the Task in `crew.py`**
```python
@task
def coding_task():
    return Task(
        config=task_config["coding_task"],
        agent=coder()
    )
```

---

### 7. **Create the Crew**
```python
def crew():
    return Crew(
        agents=[coder()],
        tasks=[coding_task()],
        verbose=True
    )
```

---

## ✅ Summary of Features Used
- **Code Execution**: Enabled with `allow_code_execution=True`.
- **Safe Mode**: Runs code in Docker with `code_execution_mode="safe"`.
- **Retries & Timeout**: Controlled with `max_retry_limit` and `max_execution_time`.

---

## 🧠 Finalizing the Coder Agent Project

### 🎯 Goal Recap
Build an agent that:
- Understands a natural language assignment.
- Writes Python code to solve it.
- Executes the code (in a **safe Docker container**).
- Returns both the **code** and its **output**.

---

## 🧩 Final Steps

### 1. ✅ No Need to Modify `crew()` Function
- The default `crew()` function already works.
- No changes required if agents and tasks are correctly defined.

---

### 2. 📝 Update `main.py`

#### Clean up and define a custom `run()` function:
```python
def run():
    assignment = "Write a Python program to calculate the first 10,000 terms of the series: 1 - 1/3 + 1/5 - 1/7 + ... and multiply the total by 4."
    
    inputs = {"assignment": assignment}
    result = coder.crew.kickoff(inputs=inputs)
    
    print(result.raw)
```

---

### 3. 🧪 Why This Assignment?
- The series is a **slow approximation of π (pi)**:
  \[
  \pi \approx 4 \left(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots \right)
  \]
- Using 10,000 terms ensures:
  - The agent must **write and run** the code.
  - It can't just "guess" the output.
  - The result should be close to π but **not exact** (e.g., 3.14149 instead of 3.14159).

---

### 4. 🚀 Run the Project
```bash
crew i run
```

- The agent:
  - Parses the assignment.
  - Plans the solution.
  - Writes Python code.
  - Executes it in a **Docker container** (if available).
  - Returns the code and output in a `.txt` file.

---

## ✅ Output Example

- **Code**: Uses a loop and `(-1)**i` trick to alternate signs.
- **Output**: Approximation of π (e.g., `3.14149`)
- **File**: `code_and_output.txt` with both code and result.

---

## 💡 Key Takeaways

| Feature                  | Description |
|--------------------------|-------------|
| `allow_code_execution`   | Enables code execution. |
| `code_execution_mode="safe"` | Runs code in Docker for safety. |
| `max_execution_time`     | Prevents long-running code. |
| `max_retry_limit`        | Allows retries on failure. |
| **Natural Language Input** | Agent interprets and solves complex tasks. |

---

## 🧠 What’s Next?
- Build a **full engineering crew**:
  - Frontend, backend, QA, DevOps agents.
  - Collaborate to solve end-to-end software problems.

---

## 🧠 Project: Engineering Team (Final Crew Project)

### 🎯 Goal
Build a **multi-agent engineering team** that:
- Designs a backend module.
- Implements it in Python.
- Builds a Gradio UI for it.
- Writes unit tests for the backend.

---

## 🧩 Agents Overview

| Agent               | Role Description                                                                 |
|---------------------|----------------------------------------------------------------------------------|
| **Engineering Lead** | Converts high-level requirements into a detailed design.                        |
| **Backend Engineer** | Implements the design in a Python module.                                       |
| **Frontend Engineer**| Builds a Gradio UI to demonstrate the backend module.                           |
| **Test Engineer**    | Writes unit tests for the backend module.                                       |

Each agent is configured in `agents.yaml` with:
- **Role** (system prompt)
- **Backstory**
- **Model** (e.g., GPT-4, Claude, DeepSeek)

---

## 🛠️ Tasks Overview

Each agent has a corresponding task in `tasks.yaml`. Tasks define:
- **Description** (user prompt)
- **Agent** assigned
- **Context** (dependencies on other tasks)
- **Output file name** (with template variables like `{{module_name}}`)

### Task Breakdown

| Task Name       | Description                                                                 | Agent               | Context           | Output File                  |
|------------------|-----------------------------------------------------------------------------|----------------------|--------------------|-------------------------------|
| `design_task`    | Create a detailed design in markdown.                                       | Engineering Lead     | —                  | `{{module_name}}_design.md`  |
| `code_task`      | Implement the design in raw Python (no markdown).                           | Backend Engineer     | `design_task`      | `{{module_name}}.py`         |
| `frontend_task`  | Build a Gradio UI for the backend module.                                   | Frontend Engineer    | `code_task`        | `app.py`                     |
| `test_task`      | Write unit tests for the backend module.                                    | Test Engineer        | `code_task`        | `test_{{module_name}}.py`    |

---

## 🧠 Key Design Considerations

- **Templated Inputs**: `requirements`, `module_name`, and `class_name` are passed as inputs.
- **Contextual Awareness**: Tasks like `code_task`, `frontend_task`, and `test_task` depend on earlier outputs.
- **Output Formatting**:
  - Design: Markdown only.
  - Code: Raw Python (no backticks or markdown).
- **Model Diversity**:
  - GPT-4 for design.
  - Claude for backend/frontend.
  - DeepSeek for testing.

---

## ✅ Summary of What’s Set Up

- ✅ Project scaffolded with `crew i create crew engineering_team`
- ✅ Agents defined with clear roles and models.
- ✅ Tasks mapped 1:1 to agents with contextual dependencies.
- ✅ Output files named dynamically using template variables.

---

## 🧠 Project: Engineering Team (Final Day of Crew)

### 🎯 Goal
Build a **multi-agent engineering team** that:
- Designs a backend system.
- Implements it in Python.
- Builds a Gradio UI.
- Writes and runs unit tests.

This project also **lays the foundation** for Week 6’s agent-based trading simulation.

---

## 🧩 Agents Recap (Defined in `crew.py`)

| Agent               | Code Execution | Notes |
|---------------------|----------------|-------|
| **Engineering Lead** | ❌             | Only designs the system. |
| **Backend Engineer** | ✅ (Docker)    | Writes backend code. |
| **Frontend Engineer**| ❌             | Writes Gradio UI (no need to run it). |
| **Test Engineer**    | ✅ (Docker)    | Writes and runs unit tests. |

Each agent is decorated with `@agent` and configured with:
- `allow_code_execution`
- `code_execution_mode="safe"`
- `max_execution_time`
- `max_retry_limit`

---

## 🛠️ Tasks Recap (Defined in `crew.py`)

| Task Name       | Agent               | Context         | Output File                  |
|------------------|----------------------|------------------|-------------------------------|
| `design_task`    | Engineering Lead     | —                | `{{module_name}}_design.md`  |
| `code_task`      | Backend Engineer     | `design_task`    | `{{module_name}}.py`         |
| `frontend_task`  | Frontend Engineer    | `code_task`      | `app.py`                     |
| `test_task`      | Test Engineer        | `code_task`      | `test_{{module_name}}.py`    |

---

## 🧪 `crew()` Function

```python
def crew():
    return Crew(
        agents=self.agents,
        tasks=self.tasks,
        process=Process.sequential,
        verbose=True
    )
```

Simple and clean — no need to manually list agents or tasks thanks to decorators.

---

## 🏁 `main.py` Run Function

```python
def run():
    requirements = """A simple account management system for a trading simulation platform..."""
    module_name = "account_manager"
    class_name = "AccountManager"

    inputs = {
        "requirements": requirements,
        "module_name": module_name,
        "class_name": class_name
    }

    result = engineering_team.crew.kickoff(inputs=inputs)
    print(result.raw)
```

---

## 📌 Assignment Summary

**Build a trading account management system** that:
- Manages deposits, withdrawals, and transactions.
- Tracks holdings and calculates P&L.
- Prevents invalid actions (e.g., overspending, overselling).
- Uses a mock `get_share_price()` function.

This system will be reused in **Week 6** for building **agent-based trading bots**.

---

## ✅ Final Thoughts

- You’ve now built a **multi-agent software engineering team** using Crew AI.
- You’ve used:
  - **Code execution in Docker**
  - **Task chaining with context**
  - **Templated inputs and outputs**
- This project is both a **capstone** and a **launchpad** for future agentic systems.

---

## 🧠 Final Project: Engineering Team in Crew AI

### 🎯 Objective
Build a **multi-agent engineering team** that:
- Designs a backend system.
- Implements it in Python.
- Builds a Gradio UI.
- Writes and runs unit tests.

This project also serves as a **foundation for Week 6**, where agent traders will use this system to simulate trading.

---

## 🧩 Agents & Tasks Summary

| Agent               | Task             | Code Execution | Notes |
|---------------------|------------------|----------------|-------|
| **Engineering Lead** | `design_task`     | ❌             | Produces a markdown design doc. |
| **Backend Engineer** | `code_task`       | ✅ (Docker)    | Implements the design in Python. |
| **Frontend Engineer**| `frontend_task`   | ❌             | Builds a Gradio UI (`app.py`). |
| **Test Engineer**    | `test_task`       | ✅ (Docker)    | Writes and runs unit tests. |

---

## 🛠️ Inputs

```python
requirements = """A simple account management system for a trading simulation platform..."""
module_name = "accounts"
class_name = "Account"
```

These are passed into the crew via:

```python
inputs = {
    "requirements": requirements,
    "module_name": module_name,
    "class_name": class_name
}
```

---

## 🧪 Output Files

| File Name                  | Description |
|----------------------------|-------------|
| `accounts_design.md`       | Design doc with method signatures. |
| `accounts.py`              | Backend implementation. |
| `test_accounts.py`         | Unit tests for backend. |
| `app.py`                   | Gradio UI for interacting with the backend. |

---

## 🧠 Observations & Learnings

### ✅ What Worked Well
- **Design doc** was clear and structured.
- **Backend code** was clean, modular, and well-commented.
- **Unit tests** were comprehensive and correctly structured.
- **Gradio UI** was surprisingly polished:
  - Tabs for account management, trading, and reports.
  - Real-time updates to portfolio and P&L.
  - Error handling for invalid actions.

### ⚠️ Challenges
- **YAML formatting issues** (e.g., stray tabs) caused obscure errors.
- **Debugging** is harder due to Crew’s abstraction layers.
- **Model choice matters**:
  - GPT-4 produced robust designs.
  - Claude and DeepSeek handled code and UI well.
  - LLaMA may struggle with this complexity.

---

## 🚀 Running the UI

1. Navigate to the output folder:
   ```bash
   cd output
   ```

2. Install Gradio (if not already):
   ```bash
   uv add gradio
   ```

3. Run the app:
   ```bash
   uv run app.py
   ```

4. Open the local Gradio link in your browser.

---

## 🧠 Why This Matters

This project:
- Demonstrates **multi-agent collaboration**.
- Produces a **reusable trading framework**.
- Sets the stage for **Week 6’s agent traders**.

---

## 🧠 Final Reflections on Crew Week (Week 3)

### ✅ What You Accomplished
- Built a **multi-agent engineering team** that:
  - Designed a backend system.
  - Implemented it in Python.
  - Built a Gradio UI.
  - Wrote and ran unit tests.
- Used **code execution in Docker** for safe runtime evaluation.
- Leveraged **contextual task chaining** and **templated inputs/outputs**.
- Witnessed a **fully functional UI** emerge from natural language prompts — with tabs, validations, and real-time updates.

---

## 🚀 What’s Next: Your Challenge

### 🧩 Challenge: Dynamic System Builder
**Goal**: Build a system where the engineering lead can define multiple modules, and the crew dynamically creates tasks to implement them.

#### Key Concepts to Use:
- **Structured Outputs**: Use `output_pydantic` or `output_json` to extract structured plans from the engineering lead.
- **Dynamic Task Creation**: Use `callback=` in task definitions to spawn new tasks at runtime.
- **Task Guardrails**: Validate and transform outputs before passing them to the next task.
- **Asynchronous Execution**: Optional, but useful for parallelizing module builds.

#### Example Use Case:
> “Build a medical records system with modules for patient intake, appointment scheduling, and billing.”

---

## 🛠️ Resources to Explore
- Crew Docs – Tasks
- Guardrails in Crew
- Callbacks in Crew
- Structured Outputs

---

## 📣 Share Your Work
- Post your project on **LinkedIn** or GitHub.
- Tag the course creator and community.
- Include screenshots, code snippets, and your reflections.
- This is a **portfolio-worthy** project — show it off!

---

## 💬 Final Thoughts
You’ve now seen what’s possible when you combine:
- **Agentic design**
- **Code execution**
- **Memory and context**
- **Multi-agent collaboration**
---