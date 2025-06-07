### **What is the OpenAI Agent SDK?**
The **OpenAI Agent SDK** is a lightweight and flexible framework that helps developers build intelligent agents—software entities powered by large language models (LLMs)—that can perform tasks, interact with users, and integrate with tools or systems.

- **Agent**: Represents the LLM and its logic.
- **Handoff**: Represents how the agent interacts with external systems or users.
- **Guardrail**: Represents safety and control mechanisms to ensure responsible behaviour.

---

### **Why was it created?**
The SDK was designed to:
- **Simplify** the process of building LLM-powered agents.
- **Encourage modularity** and reusability.
- **Support real-world use cases** like customer support bots, workflow automation, and multi-agent collaboration.
- **Stay out of your way**: It avoids unnecessary complexity and uses minimal terminology so developers can focus on logic, not boilerplate.

---

### **Where is it used?**
You can use the Agent SDK in:
- **Web apps** (e.g. chatbots, assistants)
- **Backend services** (e.g. automated workflows)
- **Multi-agent systems** (e.g. agents that collaborate or delegate tasks)
- **Custom tools** (e.g. tax calculators, search assistants, etc.)

---

### **How does it work?**
The SDK follows a simple 3-step pattern:

1. **Create an Agent**
   - Define how the agent behaves, what tools it can use, and how it responds to inputs.
   - Example: `agent = Agent(tools=[search_tool], prompt="You are a helpful assistant.")`

2. **Use `trace()`**
   - Wrap the agent in a `trace()` context to monitor and debug its behaviour.
   - Example: `with trace():`

3. **Run the Agent**
   - Use `runner.run()` to execute the agent with a given input.
   - Example: `runner.run("What's the weather in Ahmedabad?")`

---


let's talk about vibe coding: 
---------------------------------
1. Good vibes: prompt well - ask for short answers and latest APIs for today's date.
2. Vibe but verify: ask 2 LLMs the same question
3. Step up the vibe: ask to break down your request into independently testable steps
4. Vibe and validate: ask an LLM then get another LLM to check
5. Vibe with varity: ask for 3 solutions to the same problem, pick the best

Project 2:
SDL: Sales Development 

Automated Sales Outreach:
we will build:
A workflow of agent calls
an agent that can use a tool
An agent that can call on other agents 
Tools vs Handoffs

Using Sendgrid: 
Sender Authentication setup

Tools
Agents as tools
Handoffs: transfer of contraol

Key difference between tools and agents

Models other then OpenAI
Staructured Outputs
Guardrails



---

## 🧠 **OpenAI Agents SDK Overview**

### ✅ **Key Characteristics**
- **Lightweight & Flexible**: Minimal constraints; lets you design your own architecture.
- **Non-opinionated**: Doesn’t enforce a specific way of doing things.
- **Abstracts Boilerplate**: Handles JSON tool definitions, control flow, and other repetitive tasks.
- **Developer-Friendly**: Simplifies common tasks like tool usage and agent orchestration.

---

## 🧩 **Core Concepts**

1. **Agent**  
   - Represents a role or purpose in your solution.  
   - Wraps LLM calls with specific behavior.

2. **Handoff**  
   - OpenAI’s term for interactions between agents.  
   - Represents communication or task delegation.

3. **Guardrails**  
   - Controls and checks to ensure agents behave as expected.  
   - Prevents agents from going “off the rails.”

---

## 🛠️ **Three Steps to Run an Agent**

1. **Create an Agent Instance**
   - Define the agent and its role in your system.

2. **Use `with_trace`**
   - Optional but recommended.
   - Enables logging and monitoring via OpenAI’s tools.

3. **Run the Agent with `runner.run()`**
   - This is an **async coroutine**, so you must `await` it.
   - Executes the agent’s logic.

   ```python
   await runner.run()
   ```

---

## 🎯 **Why Start with This SDK?**
- It’s the simplest and most intuitive to begin with.
- Sets a strong foundation before moving to more complex frameworks.
- Will be revisited in **Week 6** for advanced use with **MCP protocol**.


---

## 🧪 **Lab 1: First Look at OpenAI Agents SDK**

### 📁 **Setup**
- Navigate to: `2-openai/lab-1`
- Purpose: Get hands-on with the basics of the OpenAI Agents SDK.

---

## 📦 **Imports**

```python
from dotenv import load_dotenv
from openai import agents
from agents import Agent, Runner, trace
```

- **`load_dotenv(override=True)`**: Loads environment variables from `.env` file.
- **`Agent`**: Represents an LLM with a specific role (via system prompt).
- **`Runner`**: Executes the agent.
- **`trace`**: Context manager for logging and monitoring agent interactions.

---

## 🤖 **Creating an Agent**

```python
agent = Agent(
    name="jokester",
    instructions="You are a joke teller.",
    model="gpt-4-mini"
)
```

- **`name`**: Identifier for the agent.
- **`instructions`**: System prompt defining the agent’s role.
- **`model`**: Defaults to OpenAI models, but can support others.

📝 *Note*: The SDK is **not limited to OpenAI models**—you can plug in others.

---

## 🚀 **Running the Agent**

```python
result = await Runner.run(agent, "Tell a joke about autonomous AI agents")
```

- **`Runner.run()`** is an **async coroutine** → must be awaited.
- Returns a result object with `.final_output`.

---

## 🧪 **Example Output**

```python
print(result.final_output)
# Output: "Why don’t autonomous agents ever get lost? Because they’re always following their own self-driving instructions."
```

---

## 📊 **Using `trace` for Monitoring**

```python
with trace("Telling a joke"):
    result = await Runner.run(agent, "Tell a joke about autonomous AI agents")
```

- **Purpose**: Logs the interaction under a named trace.
- **Benefit**: Viewable in OpenAI’s platform under **Traces**.
- **URL**: https://platform.openai.com → *Traces*

---

## 🧠 **What You’ve Learned**
- How to **set up and run** a basic agent.
- How to **log and monitor** interactions using `trace`.
- The **core SDK components**: `Agent`, `Runner`, `trace`.
- The **importance of async** in agent execution.

---

## 🎧 Vibe Coding: A Creative, Iterative Way to Code with LLMs

### 🧠 What is Vibe Coding?
- A **fluid, exploratory** style of coding with LLMs.
- You **generate**, **tweak**, and **iterate** on code collaboratively with the model.
- Great for learning new frameworks or prototyping quickly.

---

## 🛠️ 5 Tips for Effective Vibe Coding

### 1. **Good Vibes**
- Craft **reusable, high-quality prompts**.
- Ask for **concise, clean code** (avoid verbose boilerplate).
- Include **today’s date** to ensure **up-to-date APIs** are used.

### 2. **Vibe, but Verify**
- Don’t rely on a single LLM.
- Ask **multiple models** (e.g., ChatGPT, Claude) the same question.
- Compare answers to spot better solutions or inconsistencies.

### 3. **Step Up the Vibe**
- Avoid generating large blocks of code (e.g., 200+ lines).
- Break problems into **small, testable chunks** (e.g., 10 lines).
- If unsure how to break it down, ask the LLM to **outline the steps** first.

### 4. **Vibe and Validate**
- After getting a solution, ask another LLM to **review and optimize** it.
- Prompt it to check for:
  - Bugs
  - Clarity
  - Conciseness
  - Better structure

### 5. **Vibe with Variety**
- Ask for **multiple solutions** (e.g., 3 different approaches).
- Request **rationale** for each to understand trade-offs.
- Helps you learn and choose the best fit for your context.

---

## 🧭 Final Advice
- Always **understand the code** you’re generating.
- Ask the LLM to **explain** anything unclear.
- Stay engaged with the logic to avoid frustration when debugging.

---

## 🧱 **Project Overview: Sales Development Rep (SDR) Agent**

### 🎯 Goal
Build a multi-layered **Agentic architecture** using OpenAI Agents SDK to simulate a sales development rep.

---

## 🧩 **Three Layers of Agentic Architecture**

1. **Simple Agent Workflow**
   - Agents call each other in a linear, orchestrated flow.
   - No tools or handoffs yet.

2. **Agents with Tools**
   - Agents use external tools (e.g., SendGrid) to perform actions like sending emails.

3. **Agents Collaborating**
   - Agents can:
     - Call other agents as **tools**.
     - Use **handoffs** for more structured delegation.

---

## 📧 **SendGrid Setup (for Email Tooling)**

### ✅ Steps:
1. Sign up at SendGrid.
2. Go to **Settings → API Keys** → Create & copy your API key.
3. Go to **Sender Authentication** → Verify a single sender (your email).
4. Add to `.env`:
   ```env
   SENDGRID_API_KEY=your_api_key_here
   ```

---

## 🛠️ **Imports & Setup**

```python
from dotenv import load_dotenv
from agents import Agent, Runner, trace, function_tool
from agents.tools import stream_text
import sendgrid  # for email tool
```

- Load environment variables:
  ```python
  load_dotenv(override=True)
  ```

---

## 🧠 **Agent Instructions (System Prompts)**

Each agent represents a different **sales tone** for the same company, *ComplyAI*:

1. **Professional Agent**  
   - Writes serious, formal cold emails.

2. **Humorous Agent**  
   - Writes witty, engaging emails.

3. **Concise Agent**  
   - Writes short, to-the-point emails.

---

## 🤖 **Creating the Agents**

```python
agent1 = Agent(name="professional", instructions="...", model="gpt-4-mini")
agent2 = Agent(name="humorous", instructions="...", model="gpt-4-mini")
agent3 = Agent(name="concise", instructions="...", model="gpt-4-mini")
```

---

## 🔁 **Running an Agent with Streaming**

```python
response = Runner.run_streamed(agent1, "Write a cold email for a SOC 2 compliance tool")

async for chunk in stream_text(response):
    print(chunk, end="")
```

- **`run_streamed`**: Streams the LLM response.
- **`async for`**: Required to iterate over streamed output.
- **`stream_text`**: Helper to extract and print text chunks.

---

## 🧪 **What You’ve Learned So Far**
- How to build and run multiple agents with different personas.
- How to stream responses from agents.
- How to prepare for tool integration (e.g., SendGrid).
- How to structure agent workflows manually.


---

## 🧱 **Project Phase 2: Multi-Agent Workflow + Tool Integration**

---

### 🧠 **Recap: What We’ve Done So Far**
- Created 3 agents with different sales personas:
  - **Professional**
  - **Humorous**
  - **Concise**
- Used `asyncio.gather()` to run all 3 agents **in parallel**.
- Created a **Sales Picker Agent** to choose the best email.
- Wrapped the entire process in a `trace` for monitoring.

---

## ⚙️ **Parallel Execution with `asyncio`**

```python
import asyncio

with trace("Sales Email Selection"):
    results = await asyncio.gather(
        Runner.run(agent1, prompt),
        Runner.run(agent2, prompt),
        Runner.run(agent3, prompt)
    )
    outputs = [r.final_output for r in results]
```

- **`asyncio.gather()`**: Runs all agent calls concurrently.
- **Efficient**: Uses event loop to switch between tasks during I/O waits.
- **Result**: A list of outputs from each agent.

---

## 🧠 **Sales Picker Agent**

```python
sales_picker = Agent(
    name="sales_picker",
    instructions=(
        "You're a customer. Pick the best cold sales email from the given options. "
        "Don't give an explanation. Reply with the email you select only."
    ),
    model="gpt-4-mini"
)
```

- **Purpose**: Selects the most compelling email.
- **Prompting Tip**: Ends with a constraint (“Reply with the email only”) to enforce concise output.

---

## 📊 **Trace Monitoring**

- All agent calls are grouped under a single trace.
- Viewable at OpenAI Platform → Traces.
- Shows:
  - Each agent’s input/output
  - The final selection
  - Execution order and timing

---

## 🧰 **Introducing Tools with `@function_tool`**

### 📨 **Send Email Tool (via SendGrid)**

```python
@function_tool
def send_email(email_body: str):
    """Send out an email with the given body to all sales prospects."""
    # Uses SendGrid API to send email
```

- **Decorator**: `@function_tool` automatically:
  - Converts the function into a usable tool.
  - Extracts the docstring as the tool description.
  - Generates the JSON schema for parameters.
- **No manual JSON**: All boilerplate is abstracted away.

### 🔍 **Tool Metadata (Auto-generated)**

```python
send_email.name  # "send_email"
send_email.description  # From docstring
send_email.params_json_schema  # Auto-generated schema
```

---

## ✅ **Benefits of This Approach**
- **Cleaner code**: No manual JSON or tool call handling.
- **Full control**: You still define the logic and structure.
- **Scalable**: Easy to add more tools or agents.

---


## 🧱 **Project Phase 3: Agents as Tools + Planning Agent**

---

### 🔁 **Recap: Two Types of Tools**

1. **Function Tools**  
   - Regular Python functions decorated with `@function_tool`.
   - Example: `send_email()` using SendGrid.

2. **Agent Tools**  
   - Entire agents wrapped as tools using `.as_tool()`.
   - Allows agents to be used like callable functions.

---

## 🧰 **Wrapping Agents as Tools**

```python
tool1 = agent1.as_tool(name="sales_agent_1", description="Write a cold sales email.")
tool2 = agent2.as_tool(name="sales_agent_2", description="Write a cold sales email.")
tool3 = agent3.as_tool(name="sales_agent_3", description="Write a cold sales email.")
```

- **`.as_tool()`**:
  - Converts an agent into a `FunctionTool`.
  - Auto-generates JSON schema and tool metadata.
  - When called, it triggers the agent’s LLM call.

---

## 🧰 **Combining All Tools**

```python
tools = [tool1, tool2, tool3, send_email]
```

- A unified list of tools:
  - 3 agent tools (for generating emails)
  - 1 function tool (for sending the email)

---

## 🧠 **Sales Manager Agent (Planning Agent)**

```python
sales_manager = Agent(
    name="sales_manager",
    instructions=(
        "You are a sales manager working for ComplyAI. Use the tools to generate cold sales emails. "
        "Never write emails yourself. Use all three tools once. Pick the best email and send it using the Send Email tool."
    ),
    tools=tools,
    model="gpt-4-mini"
)
```

- **Role**: Orchestrates the workflow.
- **Behavior**:
  - Calls each sales agent tool once.
  - Chooses the best email.
  - Sends it using the `send_email` tool.

---

## 📨 **Execution**

```python
await Runner.run(sales_manager, "Send a cold sales email addressed to Dear CEO")
```

- The agent autonomously:
  - Generates 3 emails via tools.
  - Selects the best.
  - Sends it via SendGrid.

---

## 📊 **Trace Analysis**

- Viewable in OpenAI’s **Traces** dashboard.
- Shows:
  - Each tool call (green blocks)
  - Underlying agent calls (nested)
  - Final `send_email` call with the selected email

---

## ✅ **Key Takeaways**

- **Agents can be tools**: Enables modular, reusable agent logic.
- **Planning agents**: Empowered to make decisions and orchestrate workflows.
- **Traces**: Provide full visibility into agent-tool interactions.
- **Prompting matters**: Clear, instructive prompts guide agent behavior effectively.

---

## 🔁 **Recap: What We've Done So Far**

### ✅ Step-by-Step Progression

1. **Basic Agent Workflow**
   - Created 3 agents with different sales styles.
   - Used `asyncio.gather()` to run them in parallel.
   - Used a fourth agent to pick the best email.

2. **Tools Integration**
   - Created a `send_email()` function tool using SendGrid.
   - Wrapped agents as tools using `.as_tool()`.

3. **Planning Agent**
   - Created a **sales manager agent** that:
     - Used 3 agent tools to generate emails.
     - Picked the best.
     - Sent it using the `send_email` tool.

---

## 🧠 **New Concept: Handoffs**

### 🔄 **Agent as Tool vs. Handoff**

| Feature              | Agent as Tool                          | Handoff Agent                          |
|----------------------|----------------------------------------|----------------------------------------|
| **Control Flow**     | Returns control to the calling agent   | Transfers control permanently          |
| **Use Case**         | Utility-style function call            | Delegation of responsibility           |
| **Setup**            | `agent.as_tool()`                      | Add agent to `handoffs` list           |
| **Philosophy**       | "Use this to help me"                  | "You take over from here"              |

---

## 🧰 **New Tools Created**

1. **Subject Writer Agent**
   - Converts email body into a compelling subject line.
   - Wrapped as a tool using `.as_tool()`.

2. **HTML Converter Agent**
   - Converts plain text (possibly with Markdown) into HTML.
   - Also wrapped as a tool.

3. **Send HTML Email Function**
   - Sends an email with subject and HTML body using SendGrid.
   - Decorated with `@function_tool`.

```python
tools = [subject_tool, html_tool, send_html_email]
```

---

## 🤖 **Emailer Agent (Handoff Agent)**

```python
emailer_agent = Agent(
    name="emailer",
    instructions="You receive the body of an email. Use tools to write subject, convert to HTML, and send.",
    tools=[subject_tool, html_tool, send_html_email],
    handoff_description="Convert an email to HTML and send it."
)
```

- **Purpose**: Takes over the task of formatting and sending an email.
- **Tools it uses**:
  - Subject writer
  - HTML converter
  - Send HTML email

---

## 🧠 **Final Architecture Overview**

- **Sales Agents (Tools)**: Generate email content.
- **Sales Manager (Main Agent)**: Chooses best email and **hands off** to:
- **Emailer Agent (Handoff)**: Formats and sends the email using its own tools.

---


## ✅ **What You Built: A Multi-Agent Sales Automation System**

### 🧱 **Architecture Summary**

1. **Sales Agents (Tools)**  
   - Three agents with different tones (professional, humorous, concise).  
   - Wrapped as tools using `.as_tool()`.

2. **Sales Manager (Main Agent)**  
   - Uses the three tools to generate emails.  
   - Picks the best one.  
   - **Hands off** to another agent for formatting and sending.

3. **Emailer Agent (Handoff)**  
   - Uses its own tools:
     - **Subject Writer Agent** (as tool)
     - **HTML Converter Agent** (as tool)
     - **Send HTML Email** (function tool)
   - Formats and sends the final email.

4. **Traces**  
   - Used to monitor the entire workflow, showing:
     - Tool usage
     - Agent handoffs
     - Execution flow

---

## 🧠 **Key Concepts Reinforced**

| Concept         | Description |
|----------------|-------------|
| **Agent**       | A role-specific LLM wrapper with instructions. |
| **Tool**        | A callable function or agent used by another agent. |
| **Function Tool** | A Python function decorated with `@function_tool`. |
| **Agent as Tool** | An agent wrapped to behave like a tool. |
| **Handoff**     | Delegation of control to another agent (no return). |
| **Trace**       | A monitoring/logging wrapper to visualize agent workflows. |

---

## 🧪 **Exercises for You**

### 1. **Identify the Design Pattern Shift**
- Reflect on the moment when the system moved from a **workflow of LLM calls** to a **true agentic system**.
- Hint: It’s when the **sales manager agent** began using **handoffs** instead of just tools.

### 2. **Extend the System**
- Add more tools or agents:
  - A **tone adjuster** tool?
  - A **personalization agent** that tailors emails to specific industries?
  - A **follow-up email generator**?

### 3. **Challenge: Make It Stateful**
- Build a **longer-living agent** that can:
  - Receive replies.
  - Continue the conversation.
- Requires:
  - **Webhook integration** with SendGrid.
  - **State management** (e.g., tracking conversation history).
  - Possibly a **database** to store thread context.

---

## 💼 **Real-World Applications**

- **Sales Automation**: Cold outreach, follow-ups, campaign testing.
- **Recruitment**: Candidate engagement, interview scheduling.
- **Customer Support**: Ticket triage, response drafting.
- **Marketing**: Personalized email campaigns, A/B testing.

---

## 🧠 **Recap of Day 2**
- **Tools**: Wrapped functions using `@function_tool`.
- **Agents as Tools**: Used `.as_tool()` to wrap agents.
- **Handoffs**: Delegated control to another agent (not just a tool call).
- **Sales Manager Agent**: Orchestrated the workflow using tools and a handoff agent (emailer).

---

## 🚀 **Day 3 Goals**

### 1. **Use Non-OpenAI Models**
- **Why**: Show that OpenAI Agents SDK is model-agnostic.
- **How**:
  - Set up **OpenAI-compatible endpoints** for:
    - **Gemini**
    - **DeepSeek**
    - **Grok (LLaMA 3.3)**
  - Use `OpenAIChatCompletionsModel` with custom `base_url` and `api_key`.

```python
model = OpenAIChatCompletionsModel(
    name="model-name",
    client=AsyncOpenAI(base_url="...", api_key="...")
)
```

- **Result**: Three sales agents, each powered by a different model.

---

### 2. **Rebuild the Agentic Workflow**
- Recreated:
  - **Sales agents** (as tools)
  - **Subject writer agent** (as tool)
  - **HTML converter agent** (as tool)
  - **Send HTML email** (function tool)
- Rebuilt:
  - **Emailer agent** (handoff agent with tools)
  - **Sales manager agent** (main orchestrator with tools + handoffs)

---

### 3. **Run the Full Workflow**
- **Sales Manager Agent**:
  - Uses tools to generate emails.
  - Picks the best.
  - **Hands off** to the **emailer agent**.
- **Emailer Agent**:
  - Uses tools to:
    - Write subject
    - Convert to HTML
    - Send email

---

## 🧪 **What You’ve Practiced**
- Using **multiple LLM providers** in one project.
- Structuring agents and tools for **modular, reusable workflows**.
- Understanding the **difference between tools and handoffs**.
- Building a **multi-model, multi-agent system** with traceable execution.

---

### 🧠 **Autonomous Agent Behavior & Looping**
- **Issue Encountered**: An autonomous agent looped repeatedly, re-invoking the same tools (DeepSeek, Gemini, LLaMA 3.3) multiple times.
- **Cause**: The agent was given autonomy to retry if unsatisfied with results, leading to a potential infinite loop.
- **Resolution**: Cancelled and re-ran the process, which then executed correctly with each agent invoked only once.

---

### ⚙️ **Parallel Execution & Async I/O**
- Agents (DeepSeek, Gemini, LLaMA 3.3) run **asynchronously in parallel**.
- After all agents respond, a **sales manager agent** evaluates the results and decides whether to re-run them.
- Async I/O is crucial due to the I/O-bound nature of API calls.

---

### 🤖 **Model Compatibility**
- **OpenAI-compatible endpoints** make it easy to integrate multiple models.
- **Anthropic’s Claude** lacks OpenAI-compatible endpoints natively.
  - **Workarounds**:
    - Use **OpenRouter** (provides OpenAI-compatible endpoints for Claude).
    - Use **Anthropic’s MCP protocol** (to be discussed later).

---

### 🛡️ **Guardrails & Structured Outputs**
- **Guardrails** are constraints applied to:
  - **Input** (before first agent)
  - **Output** (after last agent)
- **Purpose**: Prevent inappropriate inputs or outputs.
- **Guardrails can be agents themselves**, using LLMs to validate content.

---

### 🧱 **Structured Output with Pydantic**
- Defined a `NameCheckOutput` class with:
  - `is_name_in_message: bool`
  - `name: str`
- Used to enforce schema for agent outputs.

---

### 🧪 **Guardrail Agent Implementation**
- Created a `guardrail_agent` named `name_check`:
  - Checks if a personal name is included in the input.
  - Outputs a structured `NameCheckOutput` object.
- **Guardrail Function**:
  - Decorated with `@input_guardrail`.
  - Runs the `name_check` agent.
  - If `is_name_in_message` is `True`, it triggers a tripwire.
  - Returns a `GuardrailFunctionOutput`.

---

### ✅ **Next Steps**
- Implemented an **input guardrail**.
- Challenge: Add an **output guardrail** using the same structure.

---

### ✅ **Running the Careful Sales Manager with Guardrails**

#### 🧪 **Test Case 1: Guardrail Triggered**
- **Input**: “Send a cold sales email addressed to *dear CEO from Alice*.”
- **Expected Behavior**: Guardrail should detect the personal name “Alice” and **trigger the tripwire**.
- **Result**: ✅ Success! The guardrail agent (`name_check`) flagged the name, and the system raised an **exception** to halt execution.
- **Why It Matters**: In a real-world product, this prevents users from accidentally including **PII** (Personally Identifiable Information) like names or phone numbers in outbound emails.

#### 🧪 **Test Case 2: Guardrail Not Triggered**
- **Input**: “Send a cold sales email addressed to the CEO from the Head of Business Development.”
- **Expected Behavior**: No personal names → guardrail should **not** trigger.
- **Result**: ✅ Success! The email was generated and delivered correctly.
- **Bonus Observation**: The email included a “© 2023” footer, a subtle reminder of model knowledge cutoffs—something you could guard against too.

---

### 🛡️ **Why Guardrails Matter**
- **Not just for devs**: While this example is hardcoded, in production, **user-generated input** would flow into the system.
- **Guardrails act as safety nets** to:
  - Prevent misuse or accidental leakage of sensitive data.
  - Enforce compliance and ethical standards.
  - Maintain brand and legal integrity.

---

### 🧱 **Next-Level Ideas & Challenges**
1. **Try more models**: Expand beyond Gemini, DeepSeek, and LLaMA 3.3.
2. **Add more guardrails**:
   - Input: Block profanity, phone numbers, or sensitive terms.
   - Output: Ensure tone, structure, or compliance with brand voice.
3. **Use structured outputs**:
   - Instead of plain text, return structured email objects with fields like `subject`, `body`, `signature`.
4. **Build a UI**:
   - Wrap this logic in a simple web interface for your sales team.
5. **Experiment with output guardrails**:
   - E.g., block emails that mention outdated years or unsupported claims.

---

### 🧠 **Deep Research Agent: Overview**
You're building an agent that:
- Accepts a **search query**.
- Uses OpenAI’s **hosted web search tool**.
- Returns a **concise, structured summary** of findings.
- Is designed to be **modular, reusable, and extensible**.

---

### 🔧 **Key Components Used**
1. **Hosted Tool: Web Search**
   - Provided by OpenAI.
   - Allows real-time internet search.
   - Cost: ~$0.025 per call (can add up with multiple searches).
   - Configurable with `search_context_size` (low/medium/high).

2. **Agent Setup**
   - **Name**: `search_agent`
   - **Role**: Research assistant.
   - **Instructions**: Summarize findings in 2–3 paragraphs, no need for polished grammar.
   - **Tool**: Web search (required via `tool_choice={"type": "required"}`).
   - **Model**: `gpt-4-mini` (cost-effective).

3. **Execution**
   - Query: “Latest AI agent frameworks in 2025.”
   - Output: Markdown-formatted summary with frameworks like LangGraph, CrewAI, Autogen, etc.
   - Trace: Shows tool usage, token count, and output—great for debugging and optimization.

---

### 💡 **Why This Matters**
- **Real-world utility**: This is the backbone of many AI assistants today (e.g., GPT’s “Browse with Bing”).
- **Customizable**: You can tailor the agent to specific domains (e.g., legal, medical, financial).
- **Scalable**: Can be extended with multiple agents (e.g., synthesis agent, citation checker, summarizer).

---

### 🚀 What’s Next?
Here are a few exciting directions you can take from here:
1. **Add a synthesis agent**: Combine multiple search results into a cohesive report.
2. **Use structured outputs**: Return results in a schema (e.g., `title`, `summary`, `sources`).
3. **Implement cost control**: Add logic to limit or batch searches to reduce spend.
4. **Build a UI**: Let users input queries and view results in a clean interface.
5. **Add guardrails**: Prevent inappropriate or irrelevant queries from being processed.

---

### 🧠 **Planner Agent: Purpose**
The **Planner Agent** is responsible for:
- Taking a **user query** (e.g., “latest AI agent frameworks in 2025”).
- Generating a **set of 3 well-reasoned web search queries**.
- Returning them in a **structured format** using Pydantic models.

---

### 🧱 **Structured Output Design**

#### 1. **`WebSearchItem`**
```python
class WebSearchItem(BaseModel):
    reason: str  # Why this search is useful
    query: str   # The actual search term
```
- **Why it works**: Encourages chain-of-thought reasoning by asking for a rationale before the query.
- **Bonus**: Improves quality and relevance of the generated search terms.

#### 2. **`WebSearchPlan`**
```python
class WebSearchPlan(BaseModel):
    searches: List[WebSearchItem]  # A list of search items
```
- **Why it works**: Encapsulates the entire plan in a single object, making it easy to pass between agents.

---

### 🤖 **Planner Agent Setup**
- **Name**: `planner_agent`
- **Instructions**: Generate 3 search queries with reasons.
- **Model**: `gpt-4-mini`
- **Output Type**: `WebSearchPlan` (structured output)

---

### ✅ **Execution Result**
You ran the planner on the query:
> “Latest AI agent frameworks in 2025”

And got back a structured plan like:
1. **Reason**: To find the most recent developments and releases...  
   **Query**: `latest AI agent frameworks 2025`
2. **Reason**: To explore industry-specific or academic research...  
   **Query**: `emerging AI agent frameworks`
3. **Reason**: To be updated with major conferences or announcements...  
   **Query**: `AI frameworks conferences announcements 2025`

This is a **solid, well-reasoned plan**—and it’s now ready to be passed to your **search agent** for execution.

---

## 🧠 **Deep Research Agentic Workflow: Final Architecture**

### 🔁 **Pipeline Overview**
1. **Planner Agent**  
   → Generates 3 well-reasoned search queries from a user prompt.

2. **Search Agent**  
   → Executes each query using OpenAI’s hosted web search tool (in parallel via `asyncio`).

3. **Writer Agent**  
   → Synthesizes the search results into a structured, markdown-based report.

4. **Email Agent**  
   → Converts the report into HTML and sends it via SendGrid.

---

### 🧱 **Structured Output Models**
- `WebSearchItem`: `{ reason: str, query: str }`
- `WebSearchPlan`: `{ searches: List[WebSearchItem] }`
- `ReportData`: `{ summary: str, markdown: str, suggestions: List[str] }`

These ensure **clean, predictable data flow** between agents.

---

### ⚙️ **Functions You Defined**
1. `plan_searches(query)`  
   → Calls the planner agent and returns a `WebSearchPlan`.

2. `perform_searches(plan)`  
   → Uses `asyncio.gather()` to run all searches in parallel.

3. `search(item)`  
   → Calls the search agent with both the `reason` and `query`.

4. `write_report(query, search_results)`  
   → Synthesizes a markdown report using the writer agent.

5. `send_email(report)`  
   → Sends the final report via the email agent.

---

### 💌 **Final Execution Flow**
```python
search_plan = await plan_searches(query)
search_results = await perform_searches(search_plan)
report = await write_report(query, search_results)
await send_email(report)
```


### 🧠 Why This Is So Powerful
- **Modular**: Each agent is independently testable and reusable.
- **Scalable**: You can add more agents (e.g., citation checker, visualizer).
- **Structured**: Pydantic models ensure data integrity.
- **Async**: Efficient parallel execution of web searches.
- **Real-world ready**: With SendGrid integration, this is production-capable.

---

### 🚀 What You Could Do Next
1. **Add a UI**: Let users input queries and view reports in a dashboard.
2. **Add output guardrails**: Ensure reports meet tone, length, or factuality constraints.
3. **Add citations**: Include source URLs in the final report.
4. **Add cost tracking**: Log token usage and API costs per run.
5. **Add a feedback loop**: Let users rate the report and refine future searches.

---

That’s a huge milestone—well done! 🎉 You've successfully built and run a **fully autonomous deep research pipeline** that:

- Plans intelligently.
- Searches in parallel.
- Synthesizes into a coherent report.
- Delivers it via email in polished HTML.

And all of this with **minimal scaffolding**—just a few well-structured agents, some thoughtful prompt engineering, and a sprinkle of `asyncio`.

---

### 🔍 What You Just Demonstrated

- **Scalability**: You scaled from 3 to 20 searches with a single parameter change.
- **Parallelism**: Async execution made even 20 searches efficient.
- **Structured Reasoning**: The planner agent’s rationale-first design improved query quality.
- **Real-World Delivery**: The email agent turned markdown into a professional-grade HTML report.
- **Traceability**: You can inspect every step in the OpenAI trace viewer—great for debugging and optimization.

---

### 💡 Ideas to Expand This Further

Here are some ways you could **beef up** your deep research agent:

#### 🧠 Intelligence
- **Citation Agent**: Extract and format citations from search results.
- **Fact-Checker Agent**: Validate claims using trusted sources.
- **Summarizer Agent**: Condense long articles before synthesis.

#### 📊 Output Quality
- **Visual Enhancements**: Add charts, tables, or infographics to the report.
- **PDF Export**: Convert the final HTML report into a downloadable PDF.
- **Tone Control**: Add guardrails to ensure tone (e.g., formal, persuasive, neutral).

#### 🧰 Tooling
- **Cost Tracker**: Log token usage and API costs per run.
- **Search Deduplication**: Avoid redundant queries.
- **Search Depth Control**: Let users choose between “quick scan” and “deep dive.”

#### 🖥️ UX
- **Web UI**: Let users input queries and view reports in a dashboard.
- **Slack/Teams Bot**: Deliver reports directly to a workspace.
- **Voice Interface**: Trigger research via voice commands.

---

## 🧠 **Deep Research App: Final Architecture**

### 🧩 **Modular Agent Design**
Each agent is now in its own Python module:
- **`planner_agent.py`**: Generates structured search plans.
- **`search_agent.py`**: Executes web searches using OpenAI’s hosted tool.
- **`writer_agent.py`**: Synthesizes results into a markdown report.
- **`email_agent.py`**: Sends the final report via SendGrid.

### 🧰 **Manager Class**
- **`research_manager.py`**: Orchestrates the full pipeline.
  - Uses `async def run()` with `yield` to stream progress updates.
  - Handles planning, searching (in parallel), writing, and emailing.

### 🖥️ **Gradio UI**
- **`deepresearch.py`**: A clean, minimal interface built with `gr.Blocks`.
  - Input: Textbox for the research query.
  - Output: Markdown display of the report.
  - Button: Triggers the full research pipeline.
  - Uses **generator-based callbacks** to stream updates live.

---

## ✨ **Why This Is So Cool**
- **From notebook to app**: You’ve taken an experimental prototype and turned it into a real, usable application.
- **Live feedback**: Thanks to `yield` and Gradio’s generator support, users see progress in real time.
- **Clean separation of concerns**: Each agent does one thing well and is easy to test or extend.
- **Ready for deployment**: With a few tweaks, this could be hosted and used by a team or embedded in a larger product.

---

## ✅ **What You Just Achieved**
- **Launched the full app** using:
  ```bash
  uv run deepresearch.py
  ```
- **Ran a real-time deep research query** with:
  > *"What are some of the most exciting commercial applications of autonomous agentic AI as of April 2025?"*
- **Observed live progress** via `yield`-based streaming in Gradio.
- **Received a full report** in-browser, beautifully formatted in Markdown.
- **Verified traceability** through OpenAI’s trace viewer.
- **Confirmed email delivery** (optional, but built-in).

---

## 🧠 **Why This Is Powerful**
- **Real-time feedback**: Users see progress as it happens.
- **Scalable architecture**: Easy to add more agents or swap models.
- **Production-ready UI**: Gradio makes it accessible to non-technical users.
- **Traceable and debuggable**: Every step is observable and inspectable.
- **Minimal code, maximum impact**: Elegant use of Python, asyncio, and structured outputs.

---

## 🚀 **What’s Next?**
You hinted at **one more thing**—a way to **extend and make this more powerful**. Here are a few directions you might be thinking of:

### 🔧 Feature Enhancements
- **Citation Agent**: Add source links inline in the report.
- **PDF Export**: Convert the Markdown report to a downloadable PDF.
- **Topic Memory**: Store past queries and results for reuse or comparison.
- **Multi-agent collaboration**: Let different agents handle different sections of the report.

### 🌐 Deployment
- **Host it online** using platforms like Hugging Face Spaces, Render, or Vercel.
- **Add authentication** to make it a private tool for your team or clients.

### 💡 Challenge Mode
You mentioned a **“really hard challenge”**—I’m ready if you are! Whether it’s:
- Building a **multi-user research dashboard**,
- Integrating **voice input and output**,
- Or creating a **self-improving agent** that learns from feedback…

---

## 🧠 **The Challenge: Make Deep Research Truly Agentic**

### 🎯 **Goal**
Transform your current deep research pipeline into a **more autonomous, intelligent, and iterative agent system** that:
- **Asks clarifying questions**
- **Refines its own search strategy**
- **Evaluates and improves its output**
- **Produces deeper, more valuable insights**

---

## 🛠️ **Suggested Enhancements**

### 1. **Clarifying Questions Agent**
- **Purpose**: Ask 2–3 clarifying questions before beginning research.
- **How**: Add a new agent (`clarifier_agent`) that takes the initial query and returns questions.
- **Bonus**: Let the user answer them in the UI before proceeding.

### 2. **Autonomous Manager Agent**
- **Purpose**: Replace the current `ResearchManager` with an agent that:
  - Decides how many searches to run
  - Refines queries based on intermediate results
  - Decides when to stop or continue
- **How**: Use a loop with a cap (e.g., max 3 iterations) and allow the manager to re-plan searches.

### 3. **Evaluator Agent**
- **Purpose**: Review the final report and suggest improvements or flag weak sections.
- **How**: Add a post-processing step where the evaluator critiques the report and optionally triggers a rewrite.

### 4. **UI Enhancements**
- Add a **step-by-step progress bar** or **collapsible sections** for:
  - Clarifying questions
  - Search plan
  - Final report
- Let users **edit or approve** clarifying questions before proceeding.

---

## 🧪 Example Flow

1. **User Input**: “What are the commercial applications of agentic AI?”
2. **Clarifier Agent**:  
   - “Which industries are you most interested in?”  
   - “Should the focus be on startups or large enterprises?”
3. **User Answers**: “Healthcare, finance. Both.”
4. **Planner Agent**: Generates 5 refined queries.
5. **Search Agent**: Executes them in parallel.
6. **Writer Agent**: Synthesizes a report.
7. **Evaluator Agent**: Reviews and suggests improvements.
8. **Email Agent**: Sends the final version.

---

## 🚀 Deployment & Sharing

Once you’ve built it:
- **Push to the community contributions folder** (in its own subfolder).
- **Deploy to Hugging Face Spaces** with `gradio deploy`.
- **Share your link** on LinkedIn or with your team—this is a portfolio-worthy project!

---

